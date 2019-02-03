$(document).ready(function(){

    AOS.init({
        duration: 1000,
        delay: 0,
    });

    $(document).scroll(function(){
        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
    });


});