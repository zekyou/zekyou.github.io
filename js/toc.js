(function() {
	'use strict';

	function light(config){

	}
	light.prototype.init = function() {
		this.tocFixed();
		
	};
	//make toc stay in the visible area
	light.prototype.tocFixed = function(){
		var HEADER_OFFSET = 0;
		var $toc = $('#post-toc');
		if ($toc.length){
			var minScrollTop = $toc.offset().top;
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if (scrollTop <minScrollTop){
					$toc.css({'position':'absolute','top':'0px'});
				} else {
				//	$toc.css({'position':'fixed','top':'20px','right':'50px'});
					$toc.css({'top':scrollTop-150+'px'});
				}
			});
		}
	};

	var light = new light();
	light.init();
})(window);
