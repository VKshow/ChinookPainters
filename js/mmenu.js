$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
    $('body').toggleClass('lock');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   

    $(".mobile ul li").on('click', () => {
        $('.mobile div').removeClass('active');
        $('.mobile nav').removeClass('open');
        $('.mobile nav ul').removeClass('show');
        $('body').removeClass('lock');
    }); 
}