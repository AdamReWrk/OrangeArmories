/*-------------- On Scroll Functions ----------------*/
$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header, #logo, #toggle, .toplevel, #megamenu, #shopingcartli").addClass("scrolled");
    } else {
        $("#header, #logo, #toggle, .toplevel, #megamenu, #shopingcartli").removeClass("scrolled");
    }
});

/*-------------- Navigation Slideout ----------------*/
$(document).ready(function(){
    $('#toggle').on('click touchstart', function() {
        $( "#navigation" ).toggleClass( "nav-open" );
    });
    $('#shopingcartli').on('click touchstart', function() {
        $( "#cartpopout" ).toggleClass( "cart-open" );
    });
});


/*-------------- Calling Owl Carosel ----------------*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});