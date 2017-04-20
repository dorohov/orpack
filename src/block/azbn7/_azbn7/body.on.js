
(function(){
	var res = 'noname-browser';
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('msie') != -1) res = 'msie';
	if (userAgent.indexOf('trident') != -1) res = 'msie';
	if (userAgent.indexOf('konqueror') != -1) res = 'konqueror';
	if (userAgent.indexOf('firefox') != -1) res = 'firefox';
	if (userAgent.indexOf('safari') != -1) res = 'safari';
	if (userAgent.indexOf('chrome') != -1) res = 'chrome';
	if (userAgent.indexOf('chromium') != -1) res = 'chromium';
	if (userAgent.indexOf('opera') != -1) res = 'opera';
	if (userAgent.indexOf('yabrowser') != -1) res = 'yabrowser';
	
	$('html').eq(0).addClass(res);
})();


$(document.body).on('azbn7.init', null, {}, function(event) {
	
	$(document.body).attr('data-created_at', new Date().getTime());
	
});

/*
$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
	
	var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
	
});
*/