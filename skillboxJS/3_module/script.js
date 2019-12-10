'use strict';

let minNumber = 1;
let maxNumber = 1000;
let number;
let randomNumber = randomInteger();

function randomInteger(min, max) {
    min = minNumber;
    max = maxNumber;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function cycleNumber(){
    while(number !== null){

        number = prompt('Угадайте число от ' + minNumber + ' до ' + maxNumber);
        let numberInt = parseInt(number);

        if(number === null){
            alert('Вы вышли из игры');
            break;
        }
        else if(numberInt < randomNumber){
            alert('Загаданное число больше ' + numberInt);
        }
        else if(numberInt > randomNumber) {
            alert('Загаданное число меньше ' + numberInt);
        }
        else if(numberInt == randomNumber){
            alert('Вы УГАДАЛИ. УРААААААА!!!');
            let result = confirm('Будем играть ещё?');

            if(result == true){
                window.location.reload();
                break;
            }
            else{
                break;
            }
        }
        else {
            alert('Введите число!!!');
        }   
    }
}

cycleNumber();



