(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.name = 'api';
				ctrl.uid = 'azbn7__mdl__api';
				
				ctrl.config = {
					url : '/api/v1/',
					access_as : 'user',
					key : 'public',
					request_method : 'POST',
					response_dataType : 'json',
					method : 'version',
				};
				
				ctrl.setConfig = function(params){
					ctrl.config = $.extend({}, ctrl.config, params);
				};
				
				// {jsonp:false, jsonpCallback:"callbackName"}
				
				ctrl.on = {
					beforeSend : function(jqXHR, settings){},
					error : function(jqXHR, textStatus, errorThrown){console.warn(textStatus);},
					dataFilter : function(data, type){return data;},
					success : function(data, textStatus, jqXHR){console.log(data);},
					complete : function(jqXHR, textStatus){},
				};
				
				ctrl.r = function(params, cb, request_method, response_dataType){
					
					request_method = request_method || ctrl.config.request_method;
					response_dataType = response_dataType ||  ctrl.config.response_dataType;
					
					params.key =  ctrl.config.key;
					params.access_as =  ctrl.config.access_as;
					
					params.method = params.method ||  ctrl.config.method;
					
					if(!cb) {
						cb = ctrl.on.success;
					}
					
					$.ajax({
						url :  ctrl.config.url,
						type : request_method,
						dataType : response_dataType,
						data : params,
						success : cb,
						error : ctrl.on.error,
					});
					
				};
				
				return ctrl;
				
			};
			
			$.Azbn7.load('API', new _());
			
		})();
		
	}
	
})(jQuery);