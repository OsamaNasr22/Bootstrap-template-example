$(document).ready(function(){
    $('.carousel').carousel({
        interval:4000
    });
    $('#testimonial').carousel({
        interval:3000
    });
     $('.box-check').click(function(){
        $('.colors').fadeToggle(500);
        
    });
    $('.colors ul li').click(function(){
        $('link[href*="theme"]').attr('href',$(this).attr('data-value'));
    });
    $(window).scroll(function(){
        if($(this).scrollTop() >=1000){
            $('.button').fadeIn(1000);
        }else{
            $('.button').fadeOut(700);
        }
    });
    
    $('.button').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    });
});

$(window).load(function(){
               $('.spinner').fadeOut(3000,function(){
   $(this).parent().fadeOut(1000);
    $('body').css({overflow:"auto"});
    $('.loading').remove();
               });
               });