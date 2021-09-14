$(document).ready(function(){
    // change navbar background
    $('.navbar-brand').css("color", "#fff")
    $('.nav-link').css("color", "#fff")

    //portfolio 
    $('#portfolio').magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery:{
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image:{
            tError: '<a href = "%url%">The image #%curr% </a> could not be loaded.'
        }
    })

    //newsletter section
    $('#showForm').click(function(){
        $("#showForm").hide();
        $(".newsletterForm").show();
    })

    // animations
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $(target).animatescroll({scrollSpeed: 2000, easing: 'easeInOutBack'});
            }
        }
    });


    $(window).scroll(function(){
        var h1 = $(window).scrollTop();
        if(h1 > 20){
        $('.navbar').css("background", '#fff')
        $('.navbar-brand').css("color", "#2e345c")
        $('.nav-link').css("color", "#2e345c")
        $("#backToTop").fadeIn();
    }else{
        $('.navbar').css("background", 'transparent')
        $('.navbar-brand').css("color", "#fff")
        $('.nav-link').css("color", "#fff")
        $("#backToTop").fadeOut();
    }
    })
})