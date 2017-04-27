
(function(){
	
	$.Azbn7.body.on('click.azbn7.product-list.js-click', '.product-list .js-click', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var post_id = parseInt(btn.attr('data-post-id') || 0);
		
		$('.product-list .product-link.js-click').removeClass('_active');
		
		btn.addClass('_active');
		$('.layout-content .roll-container .item[data-post-id="' + post_id + '"] .js-click').trigger('click.azbn7.layout-content.roll-container.item.js-click');
		
	});
	
})();