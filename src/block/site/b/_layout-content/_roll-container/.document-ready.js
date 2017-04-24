
(function(){
	
	$.Azbn7.body.on('click.azbn7.layout-content.roll-container.item.js-click', '.layout-content .roll-container .item .js-click', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var item = btn.closest('.item');
		var cont = item.closest('.roll-container');
		
		var _active = cont.find('.item._active');
		var _next_delay = 0;
		
		if(_active.length) {
			
			cont.find('.item._active').removeClass('_active');
			
			_next_delay = 400;
			
			setTimeout(function(){
				
				cont.css({
					'transform' : 'translateX(' + ((cont.outerWidth(true) / 2) - item.position().left - (item.outerWidth(true) / 2)) + 'px)',
				});
				
			}, _next_delay);
			
		} else {
			
			cont.css({
				'transform' : 'translateX(' + ((cont.outerWidth(true) / 2) - item.position().left - (item.outerWidth(true) / 2)) + 'px)',
			});
			
		}
		
		setTimeout(function(){
			
			item.addClass('_active');
			
		}, _next_delay + 400);
		
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
	
	
	/*
	if($('.owl-carousel').length) {
		
		var owl = $('.owl-carousel');
		
		owl.owlCarousel({
			//center : true,
			items : 4,
			loop : true,
			nav : false,
			responsiveClass : true,
			margin:0,
			responsive : {
				0 : {
					items : 1,
				},
				768 : {
					items : 3,
				},
				992 : {
					items : 3,
				},
				1025 : {
					items : 5,
				},
			}
		});
		
		//__no-border
		
		owl.on('next.owl.carousel prev.owl.carousel resized.owl.carousel refreshed.owl.carousel initialized.owl.carousel changed.owl.carousel translated.owl.carousel azbn.owl.init', function(event) {
			
			//owl.find('.owl-item.__no-border').removeClass('__no-border');
			//owl.find('.owl-item.active').eq(-1).addClass('__no-border');
			
		});
		
		$(document.body).on('click.azbn', '.b-partners .logo-carousel .control a', {}, function(event){
			event.preventDefault();
			
			var btn = $(this);
			var btn_parent = btn.parent();
			
			if(btn_parent.hasClass('left')) {
				
				owl.trigger('prev.owl.carousel');
				
			} else if(btn_parent.hasClass('right')) {
				
				owl.trigger('next.owl.carousel');
				
			}
			
		});
		
		owl.trigger('azbn.owl.init');
		
	}
	*/
	
})();
