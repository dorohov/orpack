"use strict";!function(t){window.onerror=function(t,a,e,n,r){console.log("Error FECSS: "+a+":"+e+":"+n+": "+JSON.stringify(t)+"\n"+JSON.stringify(r))},t(window).on("load",function(){t.Azbn7.body.find(".azbn7-preloader").data("is_loaded",!0)}),t(function(){!function(){var a="noname-browser",e=navigator.userAgent.toLowerCase();e.indexOf("msie")!=-1&&(a="msie"),e.indexOf("trident")!=-1&&(a="msie"),e.indexOf("konqueror")!=-1&&(a="konqueror"),e.indexOf("firefox")!=-1&&(a="firefox"),e.indexOf("safari")!=-1&&(a="safari"),e.indexOf("chrome")!=-1&&(a="chrome"),e.indexOf("chromium")!=-1&&(a="chromium"),e.indexOf("opera")!=-1&&(a="opera"),e.indexOf("yabrowser")!=-1&&(a="yabrowser"),t("html").eq(0).addClass(a)}(),t(document.body).on("azbn7.init",null,{},function(a){t(document.body).attr("data-created_at",(new Date).getTime())}),t(document.body).on("changeClass",null,{},function(t,a){}),!function(){t.Azbn7.body.on("azbn7.mdl.cart.calculation",".azbn7-cart",{},function(a,e,n){a.preventDefault();var r=t(this);t.Azbn7.mdl("Cart").calculation();var o="";e&&(o=o+'[data-cart-id="'+e+'"]'),n&&(o=o+'[data-cart-variant="'+n+'"]'),r.find(".items .item"+o).each(function(a){var e=t(this),n=e.attr("data-cart-id"),r=e.attr("data-cart-variant");if(t.Azbn7.mdl("Cart").data.cart[n]&&t.Azbn7.mdl("Cart").data.cart[n][r]){var o=t.Azbn7.mdl("Cart").data.cart[n][r];e.find(".cart-qty.item-qty").html(parseFloat(o.qty))}else e.find(".cart-qty.item-qty").html(0)}),r.find(".cart-calculation-to_pay").html(t.Azbn7.mdl("Cart").data.calculation.to_pay)}),t.Azbn7.body.on("click.azbn7.mdl.cart.add",".cart-btn.item-add",{},function(a){a.preventDefault();var e=t(this),n=e.closest(".item"),r=n.attr("data-cart-id"),o=n.attr("data-cart-variant");t.Azbn7.mdl("Cart").add(r,o,e.attr("data-cart-qty"),n.attr("data-cart-price"),n.attr("data-cart-discount")),n.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[r,o])}),t.Azbn7.body.on("click.azbn7.mdl.cart.remove",".cart-btn.item-remove",{},function(a){a.preventDefault();var e=t(this),n=e.closest(".item"),r=n.attr("data-cart-id"),o=n.attr("data-cart-variant");t.Azbn7.mdl("Cart").remove(r,o,e.attr("data-cart-qty"),n.attr("data-cart-price"),n.attr("data-cart-discount")),n.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[r,o])})}(),!function(){var a=t.Azbn7.body.find(".azbn7-preloader");if(a.length){var e=parseInt(a.attr("data-time-limit"))||0,n=!1,r=0;if(t.Azbn7.body.on("azbn7.preloader.check",null,{},function(e){e.preventDefault(),a.data("is_loaded")&&n&&t.Azbn7.body.removeClass("_preloading")}),t.Azbn7.body.on("azbn7.preloader.loaded",null,{},function(e){e.preventDefault(),a.data("is_loaded",!0),t.Azbn7.body.trigger("azbn7.preloader.check")}),t.Azbn7.body.on("click.azbn7.preloader.cancel-btn",".azbn7-preloader .azbn7-preloader__cancel-btn",{},function(e){e.preventDefault(),a.data("is_loaded",!0),n=!0,t.Azbn7.body.trigger("azbn7.preloader.check")}),e)var o=setTimeout(function(){n=!0,a.data("is_loaded",!0),t.Azbn7.body.trigger("azbn7.preloader.check")},e);else var o=setInterval(function(){var e=Math.random();e>.5&&r<100?(r++,a.data("is_loaded")&&(r+=9)):r>99&&(clearInterval(o),n=!0,t.Azbn7.body.trigger("azbn7.preloader.check"))},40)}else t.Azbn7.body.removeClass("_preloading")}(),t(document.body).on("submit.site","form",{},function(a){var e=t(this),n=e.attr("data-input-status")||"";"ok"==n||"1"==n||a.preventDefault()}),t(document.body).on("site.form.required.check","form",{},function(a){a.preventDefault();var e=t(this),n=0;e.find(".input-block[data-required]").each(function(a){var e=t(this),r=e.attr("data-input-status")||"";"ok"!=r&&"1"!=r||(n+=1)}),n==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea, .input-block[data-required="password"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),r=e.closest(".input-block").attr("data-required")||"";""==n||"text"!=r&&"password"!=r?e.closest(".input-block").attr("data-input-status",""):e.closest(".input-block").attr("data-input-status","ok"),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),r=e.closest(".input-block").attr("data-required")||"",o=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;""!=n&&"email"==r&&o.test(n)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),r=t('.input-block input[name="pass"]').val();""!=n&&""!=r&&"check-pass"==e.closest(".input-block").attr("data-required")&&r==n?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(a){a.preventDefault();var e=t(this),n=t(this).val();n.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("change.site blur.site",".input-block select",{},function(a){a.preventDefault();var e=t(this),n=t(this).find("option:selected").eq(0).attr("value")||"";""!=n&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(function(){t("form").trigger("site.form.required.check"),t(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")}),!function(){t.Azbn7.body.on("click.azbn7.product-list.js-click",".product-list .js-click",{},function(a){a.preventDefault();var e=t(this),n=parseInt(e.attr("data-post-id")||0);t(".product-list .product-link.js-click").removeClass("_active"),e.addClass("_active"),t('.layout-content .roll-container .item[data-post-id="'+n+'"] .js-click').trigger("click.azbn7.layout-content.roll-container.item.js-click")})}(),t(document.body).on("click.azbn",".content-modal",{},function(a){var e=t(a.target);e.hasClass("close-btn")&&(a.preventDefault(),t(document.body).removeClass("modalled"),t(".content-modal").removeClass("active"),t(window).trigger("resize"))}),t(document.body).on("azbn.content-modal.open",null,{},function(a,e){a.preventDefault(),t(e+".content-modal").addClass("active"),t(document.body).addClass("modalled"),t(window).trigger("resize")}),t(document.body).on("click.azbn",".modal-link",{},function(a){a.preventDefault();var e=t(this),n=e.attr("href")||"#";t(document.body).trigger("azbn.content-modal.open",[n])}),!function(){t.Azbn7.body.on("click.azbn7.layout-content.roll-container.item.js-click",".layout-content .roll-container .item .js-click",{},function(a){if(a.preventDefault(),!t.Azbn7.mdl("Screen").isXS()&&!t.Azbn7.mdl("Screen").isSM()){var e=t(this),n=e.closest(".item"),r=parseInt(n.attr("data-post-id")||0),o=n.closest(".roll-container"),i=o.find(".item._active"),c=0,s=n.hasClass("_active"),d=o.hasClass("_activate-item"),l=2;t("html").hasClass("msie")&&(l=3.4),d||(s?(o.removeClass("_activate-item").find(".item._active").removeClass("_active"),t(".product-list .product-link.js-click").removeClass("_active")):(o.addClass("_activate-item"),i.length?(t(".product-list .product-link.js-click").removeClass("_active"),t('.product-list .product-link.js-click[data-post-id="'+r+'"]').addClass("_active"),o.find(".item._active").removeClass("_active"),c=400,setTimeout(function(){o.css({transform:"translateX("+(o.outerWidth(!0)/l-n.position().left-n.outerWidth(!0)/2)+"px)"})},c)):o.css({transform:"translateX("+(o.outerWidth(!0)/l-n.position().left-n.outerWidth(!0)/2)+"px)"}),setTimeout(function(){n.addClass("_active"),o.removeClass("_activate-item")},c+400)))}})}(),function(){var a=null,e=t("#product-roller .viewer").eq(0),n=t("#product-roller .viewer-desc").eq(0),r={x:440,y:334},o=function(t){t=parseInt(t)%100;var a=(t/10).toFixed(1);return a},i=function(t){var a=o(t),e=Math.floor(a),n=parseInt(10*(a-e));return{x:-(n*r.x),y:-(e*r.y)}},c=function(t){t=parseInt(t||1);var a=parseInt(e.attr("data-sprite")||-1),n=a+t;n>100?n=0:n<0&&(n=100);var r=i(n);e.css({"background-position":r.x+"px "+r.y+"px"}).attr("data-sprite",n)},s=0;e.swipe({triggerOnTouchLeave:!0,swipeStatus:function(t,e,n,r,o,i,d,l){window.clearInterval(a),s++,s%2==1&&("left"==l?c(1):"right"==l&&c(-1))}}),e.on("mouseleave",function(t){e.trigger("keyup")}),t.Azbn7.body.on("click.azbn7.layout-content.roll-container.item.product-model-btn",".layout-content .roll-container .item .product-model-btn",{},function(r){r.preventDefault();var o=t(this),i=(parseInt(o.attr("data-product-id")),o.attr("data-product-model")),s=o.attr("data-product-title"),d=o.attr("data-product-desc");if(window.clearInterval(a),""!=i){t.Azbn7.body.addClass("_preloading");var l=document.createElement("img");l.width=0,l.height=0,l.setAttribute("src",i),l.onload=function(){e.css({"background-image":"url("+i+")"}),n.find(".title").html(s),n.find(".desc").html(d),a=setInterval(function(){c(1)},40),t.Azbn7.body.removeClass("_preloading")}}})}(),!function(){var a=t.Azbn7.body.find(".header-menu");a.length}(),t(window).on("resize",function(a){!function(){(t.Azbn7.mdl("Screen").isXS()||t.Azbn7.mdl("Screen").isSM())&&t(".roll-container").css({transform:"translateX(0)"})}()}).trigger("resize"),t(window).on("scroll",function(t){}).trigger("scroll"),window.onbeforeunload=function(a){t("body").trigger("azbn7.window.unload",[a])},t(document.body).trigger("azbn7.init")})}(jQuery);