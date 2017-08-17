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
    $('#toggle').on('click', function() {
        $( "#navigation" ).toggleClass( "nav-open" );
    });
    $('#shopingcartli').on('click', function() {
        $( "#cartpopout" ).toggleClass( "cart-open" );
    });
});


/*-------------- Calling Owl Carosel ----------------*/
$(document).ready(function(){
  $('.custom1').owlCarousel({
    animateOut: 'fadeIn',
    animateIn: 'fadeInLeft',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
    loop:true
});
});


/*-------------- Paralax Banner ------------------------*/
$(window).scroll(function() {
    var y = $(this).scrollTop(); // Pos
    var r = -3; // Rate
    $('#banner').css('background-position', 'center ' + parseInt(y/r) + 'px'); // Switch x polarity to reverse direction
});