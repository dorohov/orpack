(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				var caniuse = typeof MutationObserver != 'undefined';
				
				ctrl.name = 'domtree';
				ctrl.uid = 'azbn7__mdl__domtree';
				
				ctrl.observer_config = {
					attributes : true,
					childList : true,
					characterData: true,
				};
				
				ctrl.__observers = {};
				
				ctrl.startSpy = function(element, what, cb){
					
					var uid = null;
					
					var _element = element.eq(0).get(0);
					
					var _cfg = $.extend({}, ctrl.observer_config, what);
					
					if(caniuse) {
						
						uid = $.Azbn7.randstr();
						
						element.attr('data-' + ctrl.uid + '-uid', uid);
						
						var observer = new MutationObserver(cb);
						//mutations.forEach(cb /*function(mutation) {//console.log(mutation.type);}*/ );
						
						observer.observe(_element, _cfg);
						
						ctrl.__observers[uid] = observer;
						
					}
					
					return uid;
					
				};
				
				ctrl.stopSpy = function(uid) {
					
					if(caniuse && ctrl.__observers[uid]) {
						
						(ctrl.__observers[uid]).disconnect();
						
					}
					
					ctrl.__observers[uid] = null;
					
					delete ctrl.__observers[uid];
					
				};
				
				return ctrl;
				
			};
			
			$.Azbn7.load('DOMTree', new _());
			
		})();
		
	}
	
})(jQuery);