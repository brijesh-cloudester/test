$(document).ready(function () {
    AOS.init();
    AOS.init({disable: 'mobile'});

    $(".close-btn").click(function() {
        $("#healthcare_contact_form").modal('hide');
    });

    $(".case_studies_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                autoplay:true
                }
            },
        ]
    });

    $(".prev-btn").click(function () {
        $(".case_studies_slider").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".case_studies_slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".case_studies_slider").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });



    $("#contact_form").validate({
        rules: {
            name: {
                required: true,
                maxlength: 50
            },
            email: {
                required: true,
                email: true,
                maxlength: 60
            },
            company_name: {
                required: true,
                maxlength: 100
            },
            contact_number: {
                required: true,
                maxlength: 100
            }
        },
        submitHandler: function(form) {
            //$('#spinner').show();
            $('#submit_btn').prop('disabled', true);
			$.ajax({
                type: "POST",
                url: submit_contact,
                data: $( "#contact_form" ).serialize()+"&action=contact",
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    //$('#spinner').hide();
                    $('#submit_btn').prop('disabled', false);
                    if(response.error == 0){
                        Swal.fire(
                            'Success!',
                            response.message,
                            'success'
                        ).then(function(){
                            location.reload();
                        });
                    }
                    else{
                        Swal.fire(
                            'Error!',
                            response.message,
                            'error'
                        );
                    }
                }
            });
        }
    });
});