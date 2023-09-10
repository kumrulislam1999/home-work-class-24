$(function () {

    $(window).on('scroll', function () {
        let scrolltoTop = $(window).scrollTop();
        if (scrolltoTop > 200) {
            $('.up_arrow').addClass('show')
        } else {
            $('.up_arrow').removeClass('show')
        }
    })


    $('.our_first_slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,


    })
})