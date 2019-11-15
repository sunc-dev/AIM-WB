(function ($) {

    // scroll functions
    $(window).scroll(function (e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }

    });

    var divs = $('div[id^="content-"]').hide(),
        i = 0;
    var lastdiv = divs.last();

    (function cycle() {

        divs.eq(i).fadeIn(400)
            .css({ position: 'relative' })
            .css({
                transition: 'opacity 1s ease-in-out'
            }
            )
            .delay(1000)
            .fadeOut(400, cycle)
            .css({ "animation": "keylinesCycle 2s 1" });

        i = ++i % divs.length;

    })();
})(jQuery);

