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


    var divs = $('div[id^="keylines-"]').hide(),
        i = 0;

    (function cycle() {

        divs.eq(i).slideUp(400)
            .delay(1000)
            .slideUp(400, complete)

        i = ++i % divs.length;

    })();
})(jQuery);

