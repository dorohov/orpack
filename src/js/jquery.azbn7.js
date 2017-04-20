'use strict';

if(jQuery) {
	
	(function($){
		
		var body = $(document.body);
		var defaults = {};
		
		var Azbn7Constructor = function(cfg) {
			
			var ctrl = this;
			
			ctrl.name = 'Azbn7 jQuery Framework';
			
			ctrl.body = body;
			
			ctrl.__mdl = {};
			ctrl.__argv = {};
			ctrl.__param = {};
			
			
			
			
			if(typeof cfg != 'object') {
				cfg = new Object();
			}
			
			ctrl.config = $.extend({}, {
				is_dev : true,
				prefix : 'azbn7',
				path : {
					root : '',
					js : '',
					css : '',
					img : '',
					fonts : '',
				}
			}, cfg);
			
			
			
			
			/* ---------- служебные ---------- */
			
			ctrl.randstr = function() {
				return (Math.random().toString(36).split('.'))[1];
			};
			
			ctrl.now = function() {
				return new Date().getTime();
			};
			
			ctrl.now_sec = function() {
				return Math.floor(ctrl.now() / 1000);
			};
			
			ctrl.ls = {
				set : function(id,value) {localStorage.setItem(ctrl.config.prefix + '.' + id,value);},
				get : function(id) {var item = localStorage.getItem(ctrl.config.prefix + '.' + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
				remove : function(id) {localStorage.removeItem(ctrl.config.prefix + '.' + id);},
				clear : function() {localStorage.clear();},
				obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
				s2obj : function(id) {var item = this.get(id);if(typeof item !== 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
			};
			
			ctrl.ss = {
				set : function(id,value) {sessionStorage.setItem(ctrl.config.prefix + '.' + id,value);},
				get : function(id) {var item = sessionStorage.getItem(ctrl.config.prefix + '.' + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
				remove : function(id) {sessionStorage.removeItem(ctrl.config.prefix + '.' + id);},
				clear : function() {sessionStorage.clear();},
				obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
				s2obj : function(id) {var item = this.get(id);if(typeof item !== 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
			};
			
			ctrl.len = function(arr) {
				if(this.is_def(arr) && !this.is_null(arr)) {
					return arr.length;
				} else {
					return 0;
				}
			};
			
			ctrl.echo = function(text, prefix) {
				prefix = prefix || ctrl.name;
				console.log(prefix + ': ' + text);
			}
			
			ctrl.warn = function(text, prefix) {
				prefix = prefix || ctrl.name;
				console.warn(prefix + ': ' + text);
			}
			
			ctrl.is_def = function(v) {
				if(v == undefined || typeof v == "undefined") {
					return false;
				} else {
					return true;
				}
			};
			
			ctrl.is_null = function(v) {
				if(v == null) {
					return true;
				} else {
					return false;
				}
			};
			
			ctrl.is_func = function(functionToCheck) {
				var getType = {};
				return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
			};
			
			ctrl.sleep = function(milliSeconds) {
				milliSeconds = milliSeconds || 1;
				
				var startTime = this.now();
				while (this.now() < startTime + milliSeconds);
			};
			
			ctrl.needReload = function(need) {
				if(need) {
					window.location.reload();
				}
			};
			
			/* ---------- /служебные ---------- */
			
			
			/* --------- Параметры командной строки --------- */
			ctrl.parseArgv = function(prms, sym) {
				for (var i = 0; i < prms.length; i++) {
					var arr = prms[i].split(sym||"=");
					ctrl.__argv[arr[0]] = arr[1];
				}
			},
			
			ctrl.getArgv = function(name) {
				return ctrl.__argv[name];
			},
			/* --------- /Параметры командной строки --------- */
			
			
			
			/* --------- Модули --------- */
			ctrl.load = function(uid, mdl) {
				ctrl.__mdl[uid] = mdl;
				return ctrl;
			};
			
			ctrl.unload = function(name) {
				ctrl.__mdl[name] = null;
				delete ctrl.__mdl[name];
				return ctrl.is_def(ctrl.__mdl[name]);
			};
			
			ctrl.mdl = function(name) {
				return ctrl.__mdl[name];
			};
			/* --------- /Модули --------- */
			
			
			
			ctrl.load('fnc', {
				
				byTag : function(tag) {
					return document.getElementsByTagName(tag);
				},
				
				byId : function(id) {
					return document.getElementById(id);
				},
				
				include : function(url, cb){
					
					var script;
					
					script = document.createElement('script');
					
					if(cb) {
						script.onload = cb;
					}
					
					script.language = 'javascript';
					script.type = 'text/javascript';
					//script.setAttribute('data-url', url);
					script.setAttribute('class', 'azbn7__mdl__fnc__include');
					
					if(url.indexOf('http://') < 0 && url.indexOf('https://') < 0 && url.indexOf('//') != 0) {
						url = ctrl.config.path.root + url;
					}
					
					script.src = url;
					
					document.documentElement.appendChild(script);
					//document.createTextNode('azbn7 test');
				},
				
				script2head : function(url, cb){
					
					var head = document.getElementsByTagName('head')[0];
					
					if(!head) {
						//return;
					} else {
						
						var script = document.createElement('script');
						
						if(cb) {
							script.onload = cb;
						}
						
						script.language = 'javascript';
						script.type = 'text/javascript';
						//script.setAttribute('data-url', url);
						script.setAttribute('class', 'azbn7__mdl__fnc__script2head');
						script.src = url;
						
						head.appendChild(script);
						
					}
				},
				
				nl2br : function(str) {
					
					return str.replace(/([^>])\n/g, '$1<br/>');
					
				},
				
				tpl : function(str, tpls){
					
					var _str = str;
					
					for(var key in tpls) {
						_str = _str.replace(key, tpls[key]);
					}
					
					return _str;
					
				},
				
				stripTags : function(str){
					
					return str.replace(/<\/?[^>]+>/gi, '');
					
				},
				
				obj2param : function(obj){
					
					var param_str = '';
					
					for(var key in obj) {
						param_str = param_str+'&'+key+'='+obj[key];
					}
					
					return param_str;
					
				},
			});
			
			
			ctrl.load('Screen', new (function() {
				
				var _ctrl = this;
				
				_ctrl.screen = {
					w : 0,
					h : 0,
					type : 'xs',//sm,md,dl,lg
					orientation : 'portrait',//landscape
				};
				
				_ctrl.__resizefunctions = {
					'xs' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'sm' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'md' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'dl' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'lg' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
				};
				
				_ctrl.isXS = function() {
					return (_ctrl.screen.w < 768);
				};
				
				_ctrl.isSM = function() {
					return (_ctrl.screen.w < 992 && _ctrl.screen.w > 767);
				};
				
				_ctrl.isMD = function() {
					return (_ctrl.screen.w < 1200 && _ctrl.screen.w > 991);
				};
				
				_ctrl.isDL = function() {
					return (_ctrl.screen.w < 1441 && _ctrl.screen.w > 1199);
				};
				
				_ctrl.isLG = function() {
					return (_ctrl.screen.w > 1440);
				};
				
				_ctrl.isMax = function(w) {
					return _ctrl.screen.w > w ? false : true;
				}
				
				_ctrl.isMin = function(w) {
					//console.log(_ctrl.screen.w);
					return _ctrl.screen.w < w ? false : true;
				}
				
				_ctrl.screenIs = function() {
					var result = 'noname';
					if(_ctrl.isXS()) {
						result = 'xs';
					} else
					if(_ctrl.isSM()) {
						result = 'sm';
					} else
					if(_ctrl.isMD()) {
						result = 'md';
					} else
					if(_ctrl.isDL()) {
						result = 'dl';
					} else
					if(_ctrl.isLG()) {
						result = 'lg';
					}
					return result;
				};
				
				
				
				_ctrl.isPortrait = function() {
					return (_ctrl.screen.h > _ctrl.screen.w);
				};
				
				_ctrl.isLandscape = function() {
					return (_ctrl.screen.w > _ctrl.screen.h);
				};
				
				_ctrl.orientationIs = function() {
					var result = 'noname';
					if(_ctrl.isPortrait()) {
						result = 'portrait';
					} else
					if(_ctrl.isLandscape()) {
						result = 'landscape';
					}
					return result;
				};
				
				_ctrl.is = function(str) {
					return (str == _ctrl.screenIs() || str == _ctrl.orientationIs());
				};
				
				_ctrl.onResize = function(scr, fnc) {
					if(scr.type) {
						var type = _ctrl.__resizefunctions[scr.type];
						
						if(scr.orientation) {
							type[scr.orientation].push(fnc);
						} else {
							type.default.push(fnc);
						}
					}
				}
				
				_ctrl.resizeCall = function(scr) {
					if(scr.type) {
						if(_ctrl.__resizefunctions[scr.type].default) {
							for(var i = 0; i < _ctrl.__resizefunctions[scr.type].default.length; i++) {
								var fnc = _ctrl.__resizefunctions[scr.type].default[i];
								fnc(scr);
							}
						}
						if(_ctrl.__resizefunctions[scr.type][scr.orientation]) {
							for(var i = 0; i < _ctrl.__resizefunctions[scr.type][scr.orientation].length; i++) {
								var fnc = _ctrl.__resizefunctions[scr.type][scr.orientation][i];
								fnc(scr);
							}
						}
					}
				}
				
				_ctrl.setScreen = function() {
					var w = window,
						d = document,
						e = d.documentElement,
						g = d.getElementsByTagName('body')[0],
						x = w.innerWidth || e.clientWidth || g.clientWidth,
						y = w.innerHeight|| e.clientHeight|| g.clientHeight;
					
					_ctrl.screen.w = x;
					_ctrl.screen.h = y;
					
					_ctrl.screen.type = _ctrl.screenIs();
					_ctrl.screen.orientation = _ctrl.orientationIs();
					
					_ctrl.resizeCall(_ctrl.screen);
					console.log(_ctrl.screen);
					
					return _ctrl.screen;
				};
				
				return _ctrl;
				
			})());
			
			//ctrl.mdl('Screen').setScreen();
			
			$(window).on('resize', function(){
				ctrl.mdl('Screen').setScreen();
			});
			
			return ctrl;
			
		};
		
		
		var methods = {
			
			init : function(params){
				
				var options = $.extend({}, defaults, params);
				
				console.log(options);
				
				//return this;
			},
			
			widget : function(params){
				
				var el = $(this);
				
				var wgt_uid = $.Azbn7.randstr();
				var __class = $.Azbn7.config.prefix + '-widget-' + wgt_uid;
				
				el
					.addClass(__class)
				;
				
				body.on($.Azbn7.config.prefix + '.widget.getData', '.' + __class, {}, function(event, req_data, cb){
					event.preventDefault();
					
					$.Azbn7.api(req_data, cb);
					
				});
				
			},
			
		};
		
		
		$.fn.Azbn7 = function(method){
			
			/*
			if(typeof this === 'function') {
				// запущено для jQuery
			} else if(typeof this === 'object') {
				// запущено для объекта
			}
			*/
			
			if(methods[method]) {
				
				return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
				
			} else if(typeof method === 'object' || !method) {
				
				return methods.init.apply(this, arguments);
				
			} else if(typeof method === 'function') {
				
				return method(this);
				
			} else {
				
				$.error('Метод ' + method + ' в плагине не найден!');
				
			}
			
		};
		
		
		
		$.Azbn7 = new Azbn7Constructor(JSON.parse(body.attr('data-azbn7') || '{}'));
		
		
	})(jQuery);
	
}