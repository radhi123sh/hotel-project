$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
     autoplayTimeout:1500,
     autoplayHoverPause:true,
     animateOut:'fadeOut',
     animateIn:'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



