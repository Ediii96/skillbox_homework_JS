'use strict';
function test(){
    let enter = prompt('Введите ваш JS код: ');
    eval(enter);
}

try {
    test();
}
catch(e){
    console.log('Синтаксическая ошибка: ' + e);
}

