$(function(){
    'use strict';
    

    // $('.banner').slick({
        
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay:true,
    //     autoplaySpeed:3000,

    //   });



    $('#hero_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:false,
      arrows:false,
  
      
    });

    $('.service_row').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 2000,
      dots:true,
      arrows:false,
  
      
    });

     // About Video JS Start

   
     $('.work_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots:false,
      arrows:false,
  
      
    });
          
            
  // About Video JS Start



    $('.hey').venobox();


  });







