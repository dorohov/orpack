(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.Yandex = null;
				ctrl.Google = null;
				
				if(Ya.Metrika) {
					
					//ctrl.Yandex = Ya.Metrika.counters()[0].id
					
					for(var i in window) {
						if(i.toLowerCase().indexOf('yacounter') > -1) {
							ctrl.Yandex = window[i];
						}
					}
					
				}
				
				ctrl.target = function(uid, prm) {
					
					if(ctrl.Yandex && typeof ctrl.Yandex.reachGoal == 'function') {
						
						ctrl.Yandex.reachGoal(uid, (prm || {}));
						
					}
					
				}
				
				return ctrl;
				
			};
			
			$.Azbn7.load('Metric', new _());
			
		})();
		
	}
	
})(jQuery);