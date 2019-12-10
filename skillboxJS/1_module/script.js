let myName = prompt('Как вас зовут?');
let mySurname = prompt('Ваша фамилия');
let myBirthYear = prompt('Введите ваш год рождения');

let currentYear = 2019;
let age = currentYear - myBirthYear;

if ( isNaN(myBirthYear) ) {
    alert('Год рождения может быть только числом');
} 
else if ( !myName || !mySurname ) {

    alert('Не введено Имя или Фамилия');

}
else {

    if ( age < 20 ) {
        alert('Привет, ' + mySurname + ' ' + myName + '!');
    } 
    else if ( age >= 20 && age < 40 ) {
        alert('Добрый день, ' + mySurname + ' ' + myName + '!');
    } 
    else {
        alert('Здравствуйте, ' + mySurname + ' ' + myName + '!');
    }

}
