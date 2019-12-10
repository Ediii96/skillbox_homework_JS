'use strict';

(function(){

    let youWon = false;
    let attempt = 10;
    let randomNumber = randomInteger(1, 1000);
        
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    window.start = function(){
        alert('Добро пожаловать в игру "Угадай число!"');
        function cycleNumber(){
            while(attempt >= 1 && !youWon){
                let inputNumber = prompt('Угадайте число от 1 до 1000, у вас ' + attempt + ' попыток!');

                if(inputNumber == null){
                    alert('Игра окончина');
                    return;
                }
                else if(isNaN(parseInt(inputNumber))){
                    alert('Введите число!!!');
                    continue;
                }

                if(inputNumber < randomNumber){
                    alert('Загаданное число больше ' + inputNumber);
                }              
                else if(inputNumber > randomNumber){
                    alert('Загаданное число меньше ' + inputNumber);
                }
                else{
                    youWon = true;
                }
                attempt--;
            }

            if(youWon){
                alert('Вы выиграли!!!');
            }
            else{
                alert('Вы проиграли!!!');
            }

            if(confirm('Вы хотите сыграть ещё раз???') == true){
                window.location.reload();
            }
        }
        cycleNumber();
    }

})();