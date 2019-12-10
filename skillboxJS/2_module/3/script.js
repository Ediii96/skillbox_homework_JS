'use strict';

let summa = 0;
let userAnswer; 
 
while (userAnswer !== null){
    userAnswer = prompt('Введите число:');
    let number = parseInt(userAnswer);
    if (!isNaN(number)) {
        summa += number;   
    }
    else if ( userAnswer == null ) {
        alert('Сумма введённых чисел = ' + summa);
    }
    else{
        alert('Введено не число');
    }
}

