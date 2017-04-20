(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.name = 'user';
				ctrl.uid = 'azbn7__mdl__user';
				
				ctrl.notify = function(state, text) {
					
					state = state || 'hide';
					
					var __uid = 'killme_timeout';
					
					var block = $('.azbn7-user-msg-cont');
					
					(function(){
						
						var msg = $('<div/>', {
							class : 'azbn7-notify-item alert alert-' + state,
							html : text
						});
						
						msg.data(__uid, setTimeout(function(){
							
							clearTimeout(block.data(__uid));
							
							msg
								.empty()
								.remove()
							;
							
						}, 10000));
						
						msg.prependTo(block);
						
					})();
					
				};
				
				ctrl.is = function(cb) {
					
					if(!$.Azbn7.ss.get('me.' + ctrl.name)) {
						
						$.Azbn7.mdl('API').r({
							method : 'me',
							type : ctrl.name,
						}, function(resp){
							
							if(resp && resp.response && resp.response.user) {
								
								if(typeof resp.response.user == 'object') {
									
									$.Azbn7.ss.obj2s('me.' + ctrl.name, resp.response.user);
									cb(resp.response.user);
									$.Azbn7.needReload(parseInt(resp.meta.need.reload));
									
								} else {
									
									cb(null);
									
								}
								
							} else {
								
								cb(null);
								
							}
							
						});
						
					} else {
						
						cb($.Azbn7.ss.s2obj('me.' + ctrl.name));
						
					}
					
				}
				
				return ctrl;
				
			};
			
			$.Azbn7.load('User', new _());
			
		})();
		
	}
	
})(jQuery);