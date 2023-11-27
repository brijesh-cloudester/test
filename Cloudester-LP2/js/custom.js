    $("#clickhere").click(function () {
        $("#modal-contact").show();
    });
    $("#close_modal").click(function () {
        $("#modal-contact").hide();
    });


    $(".Work_slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });
    $('#Awards_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".Brands_slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: '',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 10000,
                    cssEase: '',
                }
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 10000,
                    cssEase: '',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 10000,
                    cssEase: '',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                    cssEase: '',
                }
            }
        ]
    });
    $('#testimonial_slider').slick({        
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        cssEase: '',
    });

