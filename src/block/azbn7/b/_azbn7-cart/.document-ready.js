
(function(){
	
	$.Azbn7.body.on('azbn7.mdl.cart.calculation', '.azbn7-cart', {}, function(event, __id, __variant){
		event.preventDefault();
		
		var block = $(this);
		
		$.Azbn7.mdl('Cart').calculation();
		
		var flt_str = '';
		
		if(__id) {
			flt_str = flt_str + '[data-cart-id="' + __id + '"]';
		}
		if(__variant) {
			flt_str = flt_str + '[data-cart-variant="' + __variant + '"]';
		}
		
		block.find('.items .item' + flt_str).each(function(index){
			
			var item = $(this);
			
			var ___id = item .attr('data-cart-id');
			var ___variant = item .attr('data-cart-variant');
			
			if($.Azbn7.mdl('Cart').data.cart[___id] && $.Azbn7.mdl('Cart').data.cart[___id][___variant]) {
				var __item = $.Azbn7.mdl('Cart').data.cart[___id][___variant];
				
				item.find('.cart-qty.item-qty').html(parseFloat(__item.qty));
			} else {
				item.find('.cart-qty.item-qty').html(0);
			}
			
		})
		
		block.find('.cart-calculation-to_pay').html($.Azbn7.mdl('Cart').data.calculation.to_pay);
		
	});
	
	$.Azbn7.body.on('click.azbn7.mdl.cart.add', '.cart-btn.item-add', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.closest('.item');
		
		var __id = block.attr('data-cart-id');
		var __variant = block.attr('data-cart-variant');
		
		$.Azbn7.mdl('Cart').add(
			__id,
			__variant,
			btn.attr('data-cart-qty'),
			block.attr('data-cart-price'),
			block.attr('data-cart-discount')
		);
		
		block.closest('.azbn7-cart').trigger('azbn7.mdl.cart.calculation', [__id, __variant]);
		
	});
	
	$.Azbn7.body.on('click.azbn7.mdl.cart.remove', '.cart-btn.item-remove', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.closest('.item');
		
		var __id = block.attr('data-cart-id');
		var __variant = block.attr('data-cart-variant');
		
		$.Azbn7.mdl('Cart').remove(
			__id,
			__variant,
			btn.attr('data-cart-qty'),
			block.attr('data-cart-price'),
			block.attr('data-cart-discount')
		);
		
		block.closest('.azbn7-cart').trigger('azbn7.mdl.cart.calculation', [__id, __variant]);
		
	});
	
})();
