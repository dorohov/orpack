
(function(){
	
	var block = $.Azbn7.body.find('.header-menu');
	
	if(block.length) {
		
		var btn = block.find('.header-menu-btn');
		var _list = block.find('.items._list');
		var _visible = block.find('.items._visible');
		var _hidden = block.find('.items._hidden');
		
		$(document.body).on('click.azbn7.header-menu.header-menu-btn', '.header-menu .header-menu-btn', {}, function(event){
			event.preventDefault();
			
			_hidden.toggleClass('_active');
			
		});
		
	}
	
})();
