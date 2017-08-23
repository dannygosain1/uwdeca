(function($) {
	"use strict";

$(document).ready(function() {

    //Preload
    $(window).load(function() {
        $(".loading").fadeOut("slow");
    });

    // //Stellar
    // $(window).stellar({
    //     horizontalScrolling:false
    // });

    //Nav dropdown
    $(".nav-drop-content").hide();
    $(".nav-drop .slide").click(function(event) {
        event.preventDefault();
        $(".nav-drop-content").slideToggle();
    });

    //Nav Sliding
    $(".nav-toggle a").click(function(event) {
        event.preventDefault();
        $(".nav-menu").toggleClass("nav-slide");
    });

// //SmothScroll
// try {
//     $.browserSelector();

//         // Adds window smooth scroll on chrome, opera.
//         if($("html").hasClass("chrome" || "opera")) {
//            $.smoothScroll();
//         }

// } catch(err) {}


//     //Nav dropdown
//     $(".nav-drop-content").hide();
//     $(".nav-drop .slide").click(function(event) {
//         event.preventDefault();
//         $(".nav-drop-content").slideToggle();
//     });

//     //Nav Sliding
//     $(".nav-toggle a").click(function(event) {
//         event.preventDefault();
//         $(".nav-menu").toggleClass("nav-slide");
//     });

//     //Nav Scroll
    var Window = $(window),
        Nav = $(".nav-toggle");

    Window.scroll(function() {
        if (Window.scrollTop() >= 200) {
            Nav.addClass("active-nav")
            Nav.removeClass("passive-nav");
        } else {
            Nav.removeClass("active-nav")
            Nav.addClass("passive-nav");
        }
    });


//     //Quote OWL Carousel
//     $("#quote").owlCarousel({

//     items: 1,
//     slideSpeed : 300,
//     paginationSpeed : 400,
//     singleItem:true,
//     autoPlay: true,

//     });


//     //About OWL Carousel
//     $("#about").owlCarousel({

//     items: 1,
//     slideSpeed : 500,
//     paginationSpeed : 400,
//     singleItem:true,
//     autoPlay: true,

//     });


//     //Portfolio Carousel
//     $("#folio").owlCarousel({

//     items: 3,
//     slideSpeed : 300,
//     paginationSpeed : 400,
//     autoPlay: true,

//     });


//     //Testimoni Carousel
//     $("#testimoni").owlCarousel({

//     items: 2,
//     margin: 30,
//     slideSpeed : 500,
//     paginationSpeed : 400,
//     autoPlay: true,

//     });


// //SmothScroll target
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


    //FitVids
    $(".video-conten").fitVids();

    //Contact Form
    $("form#contact_form").submit(function() {
        var hasError = false;

        if(!hasError) {
            var formInput = $(this).serialize();
            $.post($(this).attr('action'),formInput, function(data) {
                $('.msg').removeClass('hide-msg');
            });
        }
        return false;
    });

    $(".msg a").click(function(event) {
        event.preventDefault();
        $(".msg").addClass("hide-msg");
    });

});

})(jQuery);