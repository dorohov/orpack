!function(){$.Azbn7.body.on("azbn7.mdl.cart.calculation",".azbn7-cart",{},function(t,a,r){t.preventDefault();var c=$(this);$.Azbn7.mdl("Cart").calculation();var n="";a&&(n=n+'[data-cart-id="'+a+'"]'),r&&(n=n+'[data-cart-variant="'+r+'"]'),c.find(".items .item"+n).each(function(t){var a=$(this),r=a.attr("data-cart-id"),c=a.attr("data-cart-variant");if($.Azbn7.mdl("Cart").data.cart[r]&&$.Azbn7.mdl("Cart").data.cart[r][c]){var n=$.Azbn7.mdl("Cart").data.cart[r][c];a.find(".cart-qty.item-qty").html(parseFloat(n.qty))}else a.find(".cart-qty.item-qty").html(0)}),c.find(".cart-calculation-to_pay").html($.Azbn7.mdl("Cart").data.calculation.to_pay)}),$.Azbn7.body.on("click.azbn7.mdl.cart.add",".cart-btn.item-add",{},function(t){t.preventDefault();var a=$(this),r=a.closest(".item"),c=r.attr("data-cart-id"),n=r.attr("data-cart-variant");$.Azbn7.mdl("Cart").add(c,n,a.attr("data-cart-qty"),r.attr("data-cart-price"),r.attr("data-cart-discount")),r.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[c,n])}),$.Azbn7.body.on("click.azbn7.mdl.cart.remove",".cart-btn.item-remove",{},function(t){t.preventDefault();var a=$(this),r=a.closest(".item"),c=r.attr("data-cart-id"),n=r.attr("data-cart-variant");$.Azbn7.mdl("Cart").remove(c,n,a.attr("data-cart-qty"),r.attr("data-cart-price"),r.attr("data-cart-discount")),r.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[c,n])})}();
!function(){var e=$.Azbn7.body.find(".azbn7-preloader");if(e.length){var a=parseInt(e.attr("data-time-limit"))||0,n=!1,r=0;if($.Azbn7.body.on("azbn7.preloader.check",null,{},function(a){a.preventDefault(),e.data("is_loaded")&&n&&$.Azbn7.body.removeClass("_preloading")}),$.Azbn7.body.on("azbn7.preloader.loaded",null,{},function(a){a.preventDefault(),e.data("is_loaded",!0),$.Azbn7.body.trigger("azbn7.preloader.check")}),$.Azbn7.body.on("click.azbn7.preloader.cancel-btn",".azbn7-preloader .azbn7-preloader__cancel-btn",{},function(a){a.preventDefault(),e.data("is_loaded",!0),n=!0,$.Azbn7.body.trigger("azbn7.preloader.check")}),a)var d=setTimeout(function(){n=!0,e.data("is_loaded",!0),$.Azbn7.body.trigger("azbn7.preloader.check")},a);else var d=setInterval(function(){var a=Math.random();a>.5&&r<100?(r++,e.data("is_loaded")&&(r+=9)):r>99&&(clearInterval(d),n=!0,$.Azbn7.body.trigger("azbn7.preloader.check"))},40)}else $.Azbn7.body.removeClass("_preloading")}();

$(document.body).on("submit.site","form",{},function(t){var e=$(this),a=e.attr("data-input-status")||"";"ok"==a||"1"==a||t.preventDefault()}),$(document.body).on("site.form.required.check","form",{},function(t){t.preventDefault();var e=$(this),a=0;e.find(".input-block[data-required]").each(function(t){var e=$(this),s=e.attr("data-input-status")||"";"ok"!=s&&"1"!=s||(a+=1)}),a==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea, .input-block[data-required="password"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=e.closest(".input-block").attr("data-required")||"";""==a||"text"!=s&&"password"!=s?e.closest(".input-block").attr("data-input-status",""):e.closest(".input-block").attr("data-input-status","ok"),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=e.closest(".input-block").attr("data-required")||"",i=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;""!=a&&"email"==s&&i.test(a)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=$('.input-block input[name="pass"]').val();""!=a&&""!=s&&"check-pass"==e.closest(".input-block").attr("data-required")&&s==a?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(t){t.preventDefault();var e=$(this),a=$(this).val();a.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("change.site blur.site",".input-block select",{},function(t){t.preventDefault();var e=$(this),a=$(this).find("option:selected").eq(0).attr("value")||"";""!=a&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(function(){$("form").trigger("site.form.required.check"),$(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")});
!function(){$.Azbn7.body.on("click.azbn7.product-list.js-click",".product-list .js-click",{},function(t){t.preventDefault();var c=$(this),i=parseInt(c.attr("data-post-id")||0);$(".product-list .product-link.js-click").removeClass("_active"),c.addClass("_active"),$('.layout-content .roll-container .item[data-post-id="'+i+'"] .js-click').trigger("click.azbn7.layout-content.roll-container.item.js-click")})}();
$(document.body).on("click.azbn",".content-modal",{},function(e){var n=$(e.target);n.hasClass("close-btn")&&(e.preventDefault(),$(document.body).removeClass("modalled"),$(".content-modal").removeClass("active"),$(window).trigger("resize"))}),$(document.body).on("azbn.content-modal.open",null,{},function(e,n){e.preventDefault(),$(n+".content-modal").addClass("active"),$(document.body).addClass("modalled"),$(window).trigger("resize")}),$(document.body).on("click.azbn",".modal-link",{},function(e){e.preventDefault();var n=$(this),o=n.attr("href")||"#";$(document.body).trigger("azbn.content-modal.open",[o])});
!function(){$.Azbn7.body.on("click.azbn7.layout-content.roll-container.item.js-click",".layout-content .roll-container .item .js-click",{},function(t){if(t.preventDefault(),!$.Azbn7.mdl("Screen").isXS()&&!$.Azbn7.mdl("Screen").isSM()){var e=$(this),a=e.closest(".item"),i=parseInt(a.attr("data-post-id")||0),n=a.closest(".roll-container"),r=n.find(".item._active"),o=0,s=a.hasClass("_active"),c=n.hasClass("_activate-item"),l=2;$("html").hasClass("msie")&&(l=3.4),c||(s?(n.removeClass("_activate-item").find(".item._active").removeClass("_active"),$(".product-list .product-link.js-click").removeClass("_active")):(n.addClass("_activate-item"),r.length?($(".product-list .product-link.js-click").removeClass("_active"),$('.product-list .product-link.js-click[data-post-id="'+i+'"]').addClass("_active"),n.find(".item._active").removeClass("_active"),o=400,setTimeout(function(){n.css({transform:"translateX("+(n.outerWidth(!0)/l-a.position().left-a.outerWidth(!0)/2)+"px)"})},o)):n.css({transform:"translateX("+(n.outerWidth(!0)/l-a.position().left-a.outerWidth(!0)/2)+"px)"}),setTimeout(function(){a.addClass("_active"),n.removeClass("_activate-item")},o+400)))}})}(),function(){var t=null,e=$("#product-roller .viewer").eq(0),a=$("#product-roller .viewer-desc").eq(0),i={x:440,y:334},n=function(t){t=parseInt(t)%100;var e=(t/10).toFixed(1);return e},r=function(t){var e=n(t),a=Math.floor(e),r=parseInt(10*(e-a));return{x:-(r*i.x),y:-(a*i.y)}},o=function(t){t=parseInt(t||1);var a=parseInt(e.attr("data-sprite")||-1),i=a+t;i>100?i=0:i<0&&(i=100);var n=r(i);e.css({"background-position":n.x+"px "+n.y+"px"}).attr("data-sprite",i)},s=0;e.swipe({triggerOnTouchLeave:!0,swipeStatus:function(e,a,i,n,r,c,l,d){window.clearInterval(t),s++,"left"==d?o(1):"right"==d&&o(-1)}}),e.on("mouseleave",function(t){e.trigger("keyup")}),$.Azbn7.body.on("click.azbn7.layout-content.roll-container.item.product-model-btn",".layout-content .roll-container .item .product-model-btn",{},function(i){i.preventDefault();var n=$(this),r=(parseInt(n.attr("data-product-id")),n.attr("data-product-model")),s=n.attr("data-product-title"),c=n.attr("data-product-desc");if(window.clearInterval(t),""!=r){$.Azbn7.body.addClass("_preloading");var l=document.createElement("img");l.width=0,l.height=0,l.setAttribute("src",r),l.onload=function(){e.css({"background-image":"url("+r+")"}),a.find(".title").html(s),a.find(".desc").html(c),t=setInterval(function(){o(1)},27),$.Azbn7.body.removeClass("_preloading")}}})}();
!function(){var n=$.Azbn7.body.find(".header-menu");n.length}();