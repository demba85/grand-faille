$(document).ready(function(){

    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change')
    })

    //ripples
    $("#header, .info").ripples({
        resolution:512,
        dropRadius:20, 
        
});
//magnific popup
$('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery:{
        enabled: true
    }
});

});