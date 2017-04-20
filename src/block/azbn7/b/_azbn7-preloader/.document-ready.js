
(function(){
	
	var block = $.Azbn7.body.find('.azbn7-preloader');
	
	if(block.length) {
		
		var time_limit = parseInt(block.attr('data-time-limit')) || 0;
		
		var is_timed = false;
		var percent_position = 0;
		
		$.Azbn7.body.on('azbn7.preloader.check', null, {}, function(event){
			event.preventDefault();
			
			if(block.data('is_loaded') && is_timed) {
				$.Azbn7.body.removeClass('_preloading');
			}
			
		});
		
		$.Azbn7.body.on('azbn7.preloader.loaded', null, {}, function(event){
			event.preventDefault();
			
			block.data('is_loaded', true);
			
			$.Azbn7.body.trigger('azbn7.preloader.check');
			
		});
		
		$.Azbn7.body.on('click.azbn7.preloader.cancel-btn', '.azbn7-preloader .azbn7-preloader__cancel-btn', {}, function(event){
			event.preventDefault();
			
			block.data('is_loaded', true);
			is_timed = true;
			
			$.Azbn7.body.trigger('azbn7.preloader.check');
			
		});
		
		if(time_limit) {
			
			var intr = setTimeout(function(){
				
				is_timed = true;
				block.data('is_loaded', true);
				
				$.Azbn7.body.trigger('azbn7.preloader.check');
				
			}, time_limit);
			
		} else {
			
			var intr = setInterval(function() {
				
				var check = Math.random();
				
				if(check > 0.5 && percent_position < 100) {
					
					percent_position++;
					
					//block.find('.azbn7-preloader__cancel-btn').text(percent_position);
					
					if(block.data('is_loaded')) {
						percent_position = percent_position + 9;
					}
					
					//var h = 100 + (pos);
					//var o = (100 - (pos / 5.5)) / 100;
					
					/*
					b.css({
						'width' : pos + '%',
					})
						.attr('data-pos', pos);
					*/
					
				} else if(percent_position > 99) {
					
					clearInterval(intr);
					
					is_timed = true;
					
					$.Azbn7.body.trigger('azbn7.preloader.check');
					
				}
				
			}, 40);
			
		}
		
		
		
	} else {
		
		$.Azbn7.body.removeClass('_preloading');
		
	}
	
})();
