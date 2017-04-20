(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.name = 'cart';
				ctrl.uid = 'azbn7__mdl__cart';
				
				ctrl.data = {
					cart : {},
					calculation : {
						sum : 0,
						discount : 0,
						to_pay : 0,
						ids : 0,
						variants : 0,
					},
					profile : {},
				};
				
				ctrl.add = function(id, variant, qty, price, discount) {
					
					qty = parseFloat(qty) || 1;
					price = parseFloat(price) || 0;
					discount = parseFloat(discount) || 0;
					
					var item = ctrl.getItem(id, variant);
					
					if(item) {
						item.qty = 0 + parseFloat(item.qty) + parseFloat(qty);
						item.price = parseFloat(price);
					} else {
						item = ctrl.createItem(id, variant, qty, price, discount);
					}
					
					ctrl.setItem(item);
					
				};
				
				ctrl.remove = function(id, variant, qty) {
					
					qty = parseFloat(qty) || 1;
					
					var item = ctrl.getItem(id, variant);
					
					if(item) {
						item.qty = 0 + parseFloat(item.qty) - parseFloat(qty);
						
						if(item.qty > 0) {
							ctrl.setItem(item);
						} else {
							delete ctrl.data.cart[item.id][item.variant];
							ctrl.calculation();
						}
						
					}
					
				};
				
				ctrl.createItem = function(id, variant, qty, price, discount) {
					
					var item = {
						id : id,
						variant : variant,
						data : {},
						qty : parseFloat(qty),
						price : parseFloat(price),
						discount : parseFloat(discount),
					};
					
					return item;
					
				};
				
				ctrl.getItem = function(id, variant) {
					
					if(ctrl.data.cart[id] && ctrl.data.cart[id][variant]) {
						return ctrl.data.cart[id][variant];
					} else {
						return null;
					}
					
				};
				
				ctrl.setItem = function(item) {
					
					if(!ctrl.data.cart[item.id]) {
						ctrl.data.cart[item.id] = {};
					}
					
					ctrl.data.cart[item.id][item.variant] = item;
					
					ctrl.calculation();
					
				};
				
				ctrl.calculation = function() {
					
					ctrl.data.calculation.sum = 0;
					ctrl.data.calculation.ids = 0;
					ctrl.data.calculation.variants = 0;
					
					for(var i in ctrl.data.cart) {
						
						var item = ctrl.data.cart[i];
						
						ctrl.data.calculation.ids++;
						
						for(var j in item) {
							
							var _item = item[j];
							
							ctrl.data.calculation.variants++;
							
							var _sum = (_item.qty * _item.price) * ((100 - _item.discount) / 100);
							
							ctrl.data.calculation.sum = ctrl.data.calculation.sum + _sum;
							
						}
						
					}
					
					ctrl.data.calculation.to_pay = ctrl.data.calculation.sum * ((100 - parseFloat(ctrl.data.calculation.discount)) / 100);
					
					ctrl.saveData();
					
				};
				
				ctrl.createOrder = function() {
					
				};
				
				ctrl.saveData = function() {
					
					$.Azbn7.ls.obj2s(ctrl.uid, ctrl.data);
					
				};
				
				ctrl.loadData = function() {
					
					var data = $.Azbn7.ls.s2obj(ctrl.uid);
					
					if(data) {
						ctrl.data = data;
					}
					
				};
				
				ctrl.clear = function() {
					
					ctrl.data.cart = {};
					
					ctrl.calculation();
					
					ctrl.saveData();
					
				};
				
				return ctrl;
				
			};
			
			$.Azbn7.load('Cart', new _());
			$.Azbn7.mdl('Cart').loadData();
			
		})();
		
	}
	
})(jQuery);