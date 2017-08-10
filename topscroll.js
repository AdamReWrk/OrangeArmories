/*-------------- On Scroll Functions ----------------*/
$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header").addClass("scrolled");
    } else {
        $("#header").removeClass("scrolled");
    }
});

$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#logo").addClass("scrolled");
    } else {
        $("#logo").removeClass("scrolled");
    }
});

$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".toplevel").addClass("scrolled");
    } else {
        $(".toplevel").removeClass("scrolled");
    }
});

$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#megamenu").addClass("scrolled");
    } else {
        $("#megamenu").removeClass("scrolled");
    }
});

$(window).scroll(function(){    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#toggle").addClass("scrolled");
    } else {
        $("#toggle").removeClass("scrolled");
    }
});


window.onload = function(){
$( "#toggle" ).click(function() {
  $( "#navigation" ).toggleClass( "nav-open" );
});
};