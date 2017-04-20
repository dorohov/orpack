(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.name = 'profile';
				ctrl.uid = 'azbn7__mdl__profile';
				
				ctrl.is = function(cb) {
					
					if(!$.Azbn7.ss.get('me.' + ctrl.name)) {
						
						$.Azbn7.mdl('API').r({
							method : 'me',
							type : ctrl.name,
						}, function(resp){
							
							if(resp && resp.response && resp.response.profile) {
								
								if(typeof resp.response.profile == 'object') {
									
									$.Azbn7.ss.obj2s('me.' + ctrl.name, resp.response.profile);
									cb(resp.response.profile);
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
			
			$.Azbn7.load('Profile', new _());
			
		})();
		
	}
	
})(jQuery);