"use strict";!function(t){window.onerror=function(t,a,e,n,o){console.log("Error FECSS: "+a+":"+e+":"+n+": "+JSON.stringify(t)+"\n"+JSON.stringify(o))},t(window).on("load",function(){t.Azbn7.body.find(".azbn7-preloader").data("is_loaded",!0)}),t(function(){!function(){var a="noname-browser",e=navigator.userAgent.toLowerCase();e.indexOf("msie")!=-1&&(a="msie"),e.indexOf("trident")!=-1&&(a="msie"),e.indexOf("konqueror")!=-1&&(a="konqueror"),e.indexOf("firefox")!=-1&&(a="firefox"),e.indexOf("safari")!=-1&&(a="safari"),e.indexOf("chrome")!=-1&&(a="chrome"),e.indexOf("chromium")!=-1&&(a="chromium"),e.indexOf("opera")!=-1&&(a="opera"),e.indexOf("yabrowser")!=-1&&(a="yabrowser"),t("html").eq(0).addClass(a)}(),t(document.body).on("azbn7.init",null,{},function(a){t(document.body).attr("data-created_at",(new Date).getTime())}),t(document.body).on("changeClass",null,{},function(t,a){}),!function(){t.Azbn7.body.on("azbn7.mdl.cart.calculation",".azbn7-cart",{},function(a,e,n){a.preventDefault();var o=t(this);t.Azbn7.mdl("Cart").calculation();var r="";e&&(r=r+'[data-cart-id="'+e+'"]'),n&&(r=r+'[data-cart-variant="'+n+'"]'),o.find(".items .item"+r).each(function(a){var e=t(this),n=e.attr("data-cart-id"),o=e.attr("data-cart-variant");if(t.Azbn7.mdl("Cart").data.cart[n]&&t.Azbn7.mdl("Cart").data.cart[n][o]){var r=t.Azbn7.mdl("Cart").data.cart[n][o];e.find(".cart-qty.item-qty").html(parseFloat(r.qty))}else e.find(".cart-qty.item-qty").html(0)}),o.find(".cart-calculation-to_pay").html(t.Azbn7.mdl("Cart").data.calculation.to_pay)}),t.Azbn7.body.on("click.azbn7.mdl.cart.add",".cart-btn.item-add",{},function(a){a.preventDefault();var e=t(this),n=e.closest(".item"),o=n.attr("data-cart-id"),r=n.attr("data-cart-variant");t.Azbn7.mdl("Cart").add(o,r,e.attr("data-cart-qty"),n.attr("data-cart-price"),n.attr("data-cart-discount")),n.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[o,r])}),t.Azbn7.body.on("click.azbn7.mdl.cart.remove",".cart-btn.item-remove",{},function(a){a.preventDefault();var e=t(this),n=e.closest(".item"),o=n.attr("data-cart-id"),r=n.attr("data-cart-variant");t.Azbn7.mdl("Cart").remove(o,r,e.attr("data-cart-qty"),n.attr("data-cart-price"),n.attr("data-cart-discount")),n.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[o,r])})}(),!function(){var a=t.Azbn7.body.find(".azbn7-preloader");if(a.length){var e=parseInt(a.attr("data-time-limit"))||0,n=!1,o=0;if(t.Azbn7.body.on("azbn7.preloader.check",null,{},function(e){e.preventDefault(),a.data("is_loaded")&&n&&t.Azbn7.body.removeClass("_preloading")}),t.Azbn7.body.on("azbn7.preloader.loaded",null,{},function(e){e.preventDefault(),a.data("is_loaded",!0),t.Azbn7.body.trigger("azbn7.preloader.check")}),t.Azbn7.body.on("click.azbn7.preloader.cancel-btn",".azbn7-preloader .azbn7-preloader__cancel-btn",{},function(e){e.preventDefault(),a.data("is_loaded",!0),n=!0,t.Azbn7.body.trigger("azbn7.preloader.check")}),e)var r=setTimeout(function(){n=!0,a.data("is_loaded",!0),t.Azbn7.body.trigger("azbn7.preloader.check")},e);else var r=setInterval(function(){var e=Math.random();e>.5&&o<100?(o++,a.data("is_loaded")&&(o+=9)):o>99&&(clearInterval(r),n=!0,t.Azbn7.body.trigger("azbn7.preloader.check"))},40)}else t.Azbn7.body.removeClass("_preloading")}(),t(document.body).on("submit.site","form",{},function(a){var e=t(this),n=e.attr("data-input-status")||"";"ok"==n||"1"==n||a.preventDefault()}),t(document.body).on("site.form.required.check","form",{},function(a){a.preventDefault();var e=t(this),n=0;e.find(".input-block[data-required]").each(function(a){var e=t(this),o=e.attr("data-input-status")||"";"ok"!=o&&"1"!=o||(n+=1)}),n==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea, .input-block[data-required="password"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),o=e.closest(".input-block").attr("data-required")||"";""==n||"text"!=o&&"password"!=o?e.closest(".input-block").attr("data-input-status",""):e.closest(".input-block").attr("data-input-status","ok"),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),o=e.closest(".input-block").attr("data-required")||"",r=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;""!=n&&"email"==o&&r.test(n)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(a){a.preventDefault();var e=t(this),n=t(this).val(),o=t('.input-block input[name="pass"]').val();""!=n&&""!=o&&"check-pass"==e.closest(".input-block").attr("data-required")&&o==n?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(a){a.preventDefault();var e=t(this),n=t(this).val();n.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),t(document.body).on("change.site blur.site",".input-block select",{},function(a){a.preventDefault();var e=t(this),n=t(this).find("option:selected").eq(0).attr("value")||"";""!=n&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),t(function(){t("form").trigger("site.form.required.check"),t(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")}),t(document.body).on("click.azbn",".content-modal",{},function(a){var e=t(a.target);(e.hasClass("close-btn")||e.hasClass("content-modal"))&&(a.preventDefault(),t(document.body).removeClass("modalled"),t(".content-modal").removeClass("active"),t(window).trigger("resize"))}),t(document.body).on("azbn.content-modal.open",null,{},function(a,e){a.preventDefault(),t(e+".content-modal").addClass("active"),t(document.body).addClass("modalled"),t(window).trigger("resize")}),t(document.body).on("click.azbn",".modal-link",{},function(a){a.preventDefault();var e=t(this),n=e.attr("href")||"#";t(document.body).trigger("azbn.content-modal.open",[n])}),!function(){t.Azbn7.body.on("click.azbn7.layout-content.roll-container.item.js-click",".layout-content .roll-container .item .js-click",{},function(a){a.preventDefault();var e=t(this),n=e.closest(".item"),o=n.closest(".roll-container"),r=o.find(".item._active"),i=0;r.length?(o.find(".item._active").removeClass("_active"),i=400,setTimeout(function(){o.css({transform:"translateX("+(o.outerWidth(!0)/2-n.position().left-n.outerWidth(!0)/2)+"px)"})},i)):o.css({transform:"translateX("+(o.outerWidth(!0)/2-n.position().left-n.outerWidth(!0)/2)+"px)"}),setTimeout(function(){n.addClass("_active")},i+400)})}(),!function(){var a=t.Azbn7.body.find(".header-menu");a.length}(),t(window).on("resize",function(t){}).trigger("resize"),t(window).on("scroll",function(t){}).trigger("scroll"),window.onbeforeunload=function(a){t("body").trigger("azbn7.window.unload",[a])},t(document.body).trigger("azbn7.init")})}(jQuery);