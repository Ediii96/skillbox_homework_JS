window.onload = function(){

  let ball = $('.ball');
  let body = $('body');
  let football = $('.football');
  let h3;
  let fieldHeight = $('.field').height();
  let fieldWidth = $('.field').width();
  fieldHeight -=50;
  fieldWidth -= 53;

  
  ball.on('click', function () {
    let random = Math.floor(Math.random() * fieldHeight);

    function goal(){

      if( random >= 310 && random <= 390 ){
        football.append('<h3>ГООООООООООЛ!!!!</h3>');
        body.addClass('animate-body');
        h3 = $('h3');
  
        setTimeout(function(){
          h3.remove();
          body.removeClass('animate-body');
        },2000);
      }
  
    }

    if( this.offsetLeft == fieldWidth) {

      $(this).addClass('animate-two');
      $(this).removeClass('animate-one');

      $(this).animate({
        left: 0,
        top: random
      },2000, function(){
        goal();
      });
    
    }
    else{
      fieldWidth = (this.offsetParent.offsetWidth) - 53 ;

      $(this).addClass('animate-one');
      $(this).removeClass('animate-two');

      $(this).animate({
          left: fieldWidth,
          top: random
      },2000, function(){
        goal();
      });

    }

  });
  
}