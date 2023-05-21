$(document).ready(function () {


  var oWindowWidth  = $(window).width(),
      oWindowHeight = $(window).height(),
      oNbCard       = 1,
      nbrCard       = 0,
      zIndex        = 24,
      NombreDeCases = 53,
      NombreMaximum = 53,
      TirageEffectue = new Array();

  if ( oWindowWidth <= 640 ) {

      $('.detail').remove().clone().appendTo('.to-insert');

  }

  $('.main-bg').css('min-height', oWindowHeight );



  function nombreAleatoire(){
      return Math.floor(Math.random() * NombreMaximum) + 1;
    }

    function dejaPresent(Nombre){
      var Element, Valeur;
      for(var i = 1; i <= NombreDeCases; i++){
          // On récupère l'element HTML
          Element = document.getElementById('card' + i);
          // Si il existe
          if(Element){
            // On récupère son contenu
            Valeur = $(this).attr('data-rank');
            // Si c'est un nombre, et que ce nombre est égal à notre nombre de reference...
            if( Valeur == Nombre)
            {
              return true;
            }
          }
      }
      return false;
    }

    function tirageAleatoire(Numero)
    {
            if(!TirageEffectue[Numero])
            {
              var Element = document.getElementById('card' + Numero);
              if(Element)
              {       
                      var Aleatoire, 
                          dejaPresent  =  0;
                      Aleatoire = nombreAleatoire();
                      for (var i = 1; i <= NombreDeCases; i++) {
                        var oData   =  $('#card' + i).attr('data-rank');
                        if ( oData == Aleatoire ) {
                          dejaPresent++;
                        }
                      }

                      while (dejaPresent > 0) {
                          var Aleatoire, 
                              dejaPresent  =  0;
                          Aleatoire = nombreAleatoire();
                          for (var i = 1; i <= NombreDeCases; i++) {
                            var oData   =  $('#card' + i).attr('data-rank');
                            if ( oData == Aleatoire ) {
                              dejaPresent++;
                            }
                          }
                      }
                      
                      $('#card' + Numero).attr('data-rank', Aleatoire).addClass('class-'+ Aleatoire);     
                      
              }
              TirageEffectue[Numero] = true;
            }
    }

    for (var i = 1; i <= 53; i++) {
      tirageAleatoire(i);
    }

    for (var j = 1; j <= 53; j++) {
      var oElement    =   $(".card .class-"+j+" .card-front"),
          oToinsert   =   $('.hide-card div:nth-child('+ j +')').html();   
      $(oToinsert).appendTo(oElement);
    }

    for (var k = 1; k <=53; k++) {
      $(".card li:nth-child(" + k + ")").attr('data-emp', k);
    }



  $('.card a').hover(function(){
      $(this).children('img').addClass('hover');
   },function(){      
      $(this).children('img').removeClass('hover');
  });



  $('.card-block').click(function() {
    
    



    var oHtml = $(this).children('.card-inner').children('.card-front').children('a').children('img').attr('src');
  $('input[name="card"]').val(oHtml);
    if (oNbCard == 1) {

        setTimeout(function(){ $('.send-form').submit(); },2000);

    }
    return false;

  });


  $('.card a .rotate-in').click(function(){
    return false;
  })

  if ( oWindowWidth<768 ) {
    $('.center.detail').remove().clone().appendTo('.center.to-insert');
  }

})



$( window ).resize(function() {
  
  var oWindowWidth  = $(window).width(),
      oWindowHeight = $(window).height();

  (function ($) {
    $.fn.vAlign = function() {
      var j   =   0;
      $(this).each(function(){
        var oHeight   =   $(this).height();
        if (oHeight >= j) {
          j = oHeight;
        } 
      })
      $(this).css('height', j);
    };
  })(jQuery);

  if (oWindowWidth >= 768) {
    setTimeout(function(){
      $(function () {
        $('.about-section .h3').vAlign();
        $('.about-section .h3 + p').vAlign();
      });
    }, 2000);
  }

});