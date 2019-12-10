'use strict';

function nowDate(){

let date = new Date();
let dateNumber = date.getDate();
let month = [
    'Января', 
    'Февраля', 
    'Марта', 
    'Апреля', 
    'Мая', 
    'Июня', 
    'Июля', 
    'Августа', 
    'Сентября', 
    'Октября', 
    'Ноября', 
    'Декабря'
];
let dateMonth = month[date.getMonth()];
let dateYear = date.getFullYear();
let day = [
    'Воскресенье', 
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница', 
    'Суббота'
];
let dateDay = day[date.getDay()];
let dateHours = date.getHours();
let dateMinutes = date.getMinutes();
let dateSeconds = date.getSeconds();
let h2 = document.getElementById('h2');
let hoursText;
let minutesText;
let secondsText;

if( dateHours == 1 || dateHours == 21 ){
    hoursText = 'час';
}
else if( dateHours >= 2 && dateHours <= 4 || dateHours >= 22 && dateHours <= 23 ){
    hoursText = 'часа';
}
else{
    hoursText = 'часов';
}


if( dateMinutes == 1 || dateMinutes == 21 || dateMinutes == 31 || dateMinutes == 41 || dateMinutes == 51){
    minutesText = 'минута';
}
else if( dateMinutes >= 2 && dateMinutes <= 4 || 
        dateMinutes >= 22 && dateMinutes <= 24 || 
        dateMinutes >= 32 && dateMinutes <= 34 ||
        dateMinutes >= 42 && dateMinutes <= 44 ||
        dateMinutes >= 52 && dateMinutes <= 54 ){
    minutesText = 'минуты';
}
else{
    minutesText = 'минут';
}


if( dateSeconds == 1 || dateSeconds == 21 || dateSeconds == 31 || dateSeconds == 41 || dateSeconds == 51){
    secondsText = 'секунда';
}
else if( dateSeconds >= 2 && dateSeconds <= 4 || 
        dateSeconds >= 22 && dateSeconds <= 24 || 
        dateSeconds >= 32 && dateSeconds <= 34 ||
        dateSeconds >= 42 && dateSeconds <= 44 ||
        dateSeconds >= 52 && dateSeconds <= 54 ){
    secondsText = 'секунды';
}
else{
    secondsText = 'секунд';
}

h2.innerHTML = 'Сегодня ' + dateNumber + ' ' + dateMonth + ' ' + dateYear + ' года, ' + '<br>' 
+  dateDay + ', <br>' 
+ dateHours + ' ' + hoursText + ' ' + dateMinutes + ' ' + minutesText + ' ' + dateSeconds + ' ' + secondsText;

};

setInterval(nowDate, 1000);
nowDate();