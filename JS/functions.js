/*-------------- On Scroll Functions ----------------*/
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header, #logo, #toggle, .toplevel, #megamenu, #shopingcartli, #headersearchbox").addClass("scrolled");
    } else {
        $("#header, #logo, #toggle, .toplevel, #megamenu, #shopingcartli, #headersearchbox").removeClass("scrolled");
    }
});

/*-------------- Navigation Slideout ----------------*/
$(document).ready(function(){
    $('#toggle').on('click', function() {
        $( "#navigation" ).toggleClass( "nav-open" );
    });
    
    
    /* Navigation Dropdown
    ------------------------------*/
    
    $('.navheader').on('click', function() {
        $( "#megamenu" ).toggleClass( "mega-open" );
    });
    
    $('.navheader').on('click', function() {
        $( "#headerdownarrow" ).toggleClass( "selected" );
    });
    
    $('.navheader').on('click', function() {
        $( "#headerminusarrow" ).toggleClass( "selected" );
    });
    
    /* Shopping Cart Toggle
    ----------------------------*/
    
    $('#shoppingcarttoggle').on('click', function() {
        $( "#cartpopout" ).toggleClass( "cart-open" );
    });
    
    /* Header Search
    -----------------------------*/
    
    $('.headersearcha').on('click', function() {
        $( "#headersearchbox" ).toggleClass( "search-open" );
    });
    
    /* Product And Search Pages filters toggle 
    ----------------------------------*/
    $('#productleftbartoggle').on('click', function() {
        $( ".fa.fa-plus-circle" ).toggleClass( "selected" );
    });
    $('#productleftbartoggle').on('click', function() {
        $( ".fa.fa-minus-circle" ).toggleClass( "selected" );
    });
    $('#productleftbartoggle').on('click', function() {
        $( "#productgridleft" ).toggleClass( "visable" );
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
    var y = $(this).scrollTop();
    var r = -3; // Speed
    $('#banner').css('background-position', 'center ' + parseInt(y/r) + 'px');
});


/* Scroll Anitmations
------------------------------------*/

$(document).on('scroll.something', function() {
    if ($(this).scrollBottom() >= $('#prodlongdescription').position().bottom) {
        $("#prodlongdescription").addClass("pastpoint")

        //Unbind the event
        $(document).off('scroll.something')
    }
})