
(function(){
	
	$.Azbn7.body.on('click.azbn7.layout-content.roll-container.item.js-click', '.layout-content .roll-container .item .js-click', {}, function(event){
		event.preventDefault();
		
		if(!$.Azbn7.mdl('Screen').isXS() && !$.Azbn7.mdl('Screen').isSM()) {
			
			var btn = $(this);
			var item = btn.closest('.item');
			var post_id = parseInt(item.attr('data-post-id') || 0);
			var cont = item.closest('.roll-container');
			
			var _active = cont.find('.item._active');
			var _next_delay = 0;
			
			var _is_active = item.hasClass('_active');
			
			var _p = 2;
			
			if($('html').hasClass('msie')) {
				_p = 3.4;
			}
			
			if(!_is_active) {
				
				if(_active.length) {
					
					$('.product-list .product-link.js-click').removeClass('_active');
					
					$('.product-list .product-link.js-click[data-post-id="' + post_id + '"]').addClass('_active');
					
					cont.find('.item._active').removeClass('_active');
					
					_next_delay = 400;
					
					setTimeout(function(){
						
						cont.css({
							'transform' : 'translateX(' + ((cont.outerWidth(true) / _p) - item.position().left - (item.outerWidth(true) / 2)) + 'px)',
						});
						
					}, _next_delay);
					
				} else {
					
					cont.css({
						'transform' : 'translateX(' + ((cont.outerWidth(true) / _p) - item.position().left - (item.outerWidth(true) / 2)) + 'px)',
					});
					
				}
				
				setTimeout(function(){
					
					item.addClass('_active');
					
				}, _next_delay + 400);
				
			} else {
				
				cont.find('.item._active').removeClass('_active');
				
				$('.product-list .product-link.js-click').removeClass('_active');
				
			}
			
		}
		
	});
	
	
	/*
	$('.layout-content .roll-container').swipe({
		
		swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
			
			//console.log(arguments);
			
			if(currentDirection == 'left') {
				
				$(this)
					.data('distance', $(this).data('distance') + distance)
					.css({
						'transform' : 'translateX(-' + distance + 'px)',
					});
				
			} else if(currentDirection == 'right') {
				
				$(this).css({
					'transform' : 'translateX(' + distance + 'px)',
				});
				
			}
			
			
			
		}
		
	});
	*/
	
	
	
})();



(function(){
	
	var viewer = $('#product-roller .viewer').eq(0);
	var desc = $('#product-roller .viewer-desc').eq(0)
	
	var sprite_size = {
		x : 440,
		y : 334,
	};
	
	var getSprite = function(index) {
		
		index = parseInt(index) % 100;
		
		var _pos = (index / 10).toFixed(1);
		
		return _pos;
		
	};

	var loadSpritePos = function(index) {
		
		var _pos = getSprite(index);
		
		var _i = Math.floor(_pos);
		var _j = parseInt((_pos - _i) * 10);
		
		return {
			x : -(_j * sprite_size.x),
			y : -(_i * sprite_size.y),
		};//'background-position'
		
	};

	var loadSprite = function(dir) {
		
		dir = parseInt(dir || 1);
		
		var index = parseInt(viewer.attr('data-sprite') || -1);
		
		var _next = index + dir;
		
		if(_next > 100) {
			_next = 0;
		} else if(_next < 0) {
			_next = 100;
		}
		
		var _pos = loadSpritePos(_next);
		
		viewer
			.css({
				'background-position' : _pos.x + 'px ' + _pos.y + 'px',
			})
			.attr('data-sprite', _next)
		;
		
	};
	
	
	var speed = 0;
	
	var intr = null;
	
	viewer.swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
			
			//console.log(arguments);
			
			clearInterval(intr);
			
			speed++;
			
			if((speed % 2) == 1) {
				
				if(currentDirection == 'left') {
					
					loadSprite(1);
					
				} else if(currentDirection == 'right') {
					
					loadSprite(-1);
					
				}
				
			}
			
		}
	});
	
	/*
	intr = setInterval(function(){
		
		loadSprite(1);
		
	}, 90);
	*/
	
	
	$.Azbn7.body.on('click.azbn7.layout-content.roll-container.item.product-model-btn', '.layout-content .roll-container .item .product-model-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		
		var product_id = parseInt(btn.attr('data-product-id'));
		var product_model = btn.attr('data-product-model');
		
		var _p_title = btn.attr('data-product-title');
		var _p_desc = btn.attr('data-product-desc');
		
		if(product_model != '') {
			//console.log(product_model);
			
			$.Azbn7.body.addClass('_preloading');
			
			var _image = document.createElement('img');
			_image.width = 0; _image.height = 0;
			_image.setAttribute('src', product_model);
			_image.onload = function(){
				//document.body.appendChild(i);
				
				viewer
					.css({
						'background-image' : 'url(' + product_model + ')',
					})
				;
				
				desc.find('.title').html(_p_title);
				desc.find('.desc').html(_p_desc);
				
				intr = setInterval(function(){
					loadSprite(1);
				}, 90);
				
				$.Azbn7.body.removeClass('_preloading');
				
			};
			
			//loadSprite(1);
			
		}
		
	});
	
})();
