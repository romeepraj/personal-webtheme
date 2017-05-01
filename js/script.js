$(document).ready(function(){
    $('.navbar-inverse').css('background-color', 'transparent');
    
    $(window).scroll(function() {
       if($(window).scrollTop() > $(window).height()) {
          $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.5)');
       }else{
         $('.navbar-inverse').css('background-color', 'transparent');  
       }
    });
    
    $(window).scroll(function() {
        var winTop = $(this).scrollTop();
        var winBottom = $('#home').height();
        console.log(winBottom);
        var section = ['#home', '#about', '#services', '#portfolio', '#contact'];
        for(var i=0;i<section.length;i++){
            var id = section[i].slice(1);
            var height = $(section[i]).height();
            var total = height + $(section[i]).position().top;
            if(winTop >= $(section[i]).position().top && winTop <= total){
                $('div[data-item = '+id+']').removeClass('active');
                $('div[data-item = '+id+']').addClass('active');
            }
            else{
                 $('div[data-item = '+id+']').removeClass('active');
            }
        }
    });
        
    $('.fa-download').mouseover(function(){
            $(this).addClass('animated infinite bounce');
    });   
    $('.fa-download').mouseout(function(){
            $(this).removeClass('animated infinite bounce');
    });
     $('.fa-html5, .fa-file-code-o, .fa-line-chart, .squareover').mouseover(function(){
            $(this).addClass('rotateOut animated infinite');
    });   
    $('.fa-html5, .fa-file-code-o, .fa-line-chart, .squareover').mouseout(function(){
            $(this).removeClass('rotateOut animated infinite');
    });
    $('.middle').mouseover(function(){
            $( this ).siblings( ".squareblue1, .squareblue2, .squareblue3" ).addClass('rotateOut animated infinite');
           
    });   
    $('.middle').mouseout(function(){
           $( this ).siblings( ".squareblue1, .squareblue2, .squareblue3" ).removeClass('rotateOut animated infinite');
    });
});

