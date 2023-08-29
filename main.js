(function ($$) {
    "use strict";

    /* slider active */
    $$('.slider-active').owlCarousel({
        loop: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* course-slider-active */
    $$('.course-slider-active').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $$('.testimonial-two-dots').owlCarousel({
		loop:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 6000,
        autoplay: 6000,
		margin:30,
		nav:true,
		dots: true,
		navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},

			480:{
				items:1
			},

			991:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})

    /* magnificPopup video popup */
    $$('.video-popup').magnificPopup({
        type: 'iframe'
    });



})(jQuery);
