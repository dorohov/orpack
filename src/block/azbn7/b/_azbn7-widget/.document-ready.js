(function(){
	
	$(document.body).on('azbn7.widget.setState', '.azbn7-widget', {}, function(event){
		
		var block = $(this);
		var states = (block.attr('data-states') || '').split(' ');
		
	});
	
});