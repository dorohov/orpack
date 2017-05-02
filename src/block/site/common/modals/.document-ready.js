


$(document.body).on('click.azbn', '.content-modal', {}, function(event){
	
	var _target = $(event.target);
	
	if(_target.hasClass('close-btn')) { //|| _target.hasClass('content-modal')
		event.preventDefault();
		
		$(document.body).removeClass('modalled');
		$('.content-modal').removeClass('active');
		
		/*
		if(_target.attr('id') == 'project-viewer' || _target.closest('.content-modal').attr('id') == 'project-viewer') {
			
			window.history.pushState(null, null, '/');
		}
		*/
		
		$(window).trigger('resize');
		
	}
	
});


$(document.body).on('azbn.content-modal.open', null, {}, function(event, uid){
	event.preventDefault();
	
	$(uid + '.content-modal').addClass('active');
	$(document.body).addClass('modalled');
	
	$(window).trigger('resize');
	
});


$(document.body).on('click.azbn', '.modal-link', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var href = btn.attr('href') || '#';
	
	$(document.body).trigger('azbn.content-modal.open', [href]);
	
});


//$('.masked-input[data-input-type="phone"]').mask('+7 (999) 999-99-99');