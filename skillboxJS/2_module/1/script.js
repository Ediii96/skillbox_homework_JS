let firstUserAnswer = prompt('Введи первое число');
let secondUserAnswer = prompt('Введи второе число');
let firstNumber = parseInt(firstUserAnswer);
let secondNumber = parseInt(secondUserAnswer);

if ( firstNumber > secondNumber ) {

    alert('Первое число больше второго');

}
else if ( firstNumber < secondNumber ) {

    alert('Второе число больше первого');

}
else if ( firstNumber == secondNumber ) {

    alert('Числа равны');

} 
else {

    alert('Нельзя вводить буквы или оставлять строку пустой!!!');

}

