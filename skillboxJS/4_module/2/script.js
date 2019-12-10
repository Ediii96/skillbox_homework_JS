'use strict';

let users = [
    {
        name: 'Вася',
        login: 'vasya_ya',
        password: 'vasya123'
    },
    {
        name: 'Петя',
        login: 'petya_ya',
        password: 'petya123'
    },
    {
        name: 'Друг маминой подруги',
        login: 'drug_ya',
        password: 'drug123'
    },
    {
        name: 'Катя',
        login: 'katya_ya',
        password: 'katya123'
    },
    {
        name: 'Петя Пупкин',
        login: 'pupok_ya',
        password: 'pupok123'
    }
];
let inputLogin = prompt('Введите свой логин');
let inputPassword = prompt('Введите свой пароль');
let flag = '';

for( let i = 0; i < users.length; i++ ){

    let outputName = users[i].name;
    let outputLogin = users[i].login;
    let outputPassword = users[i].password;
    
    if( inputLogin == outputLogin && inputPassword == outputPassword ){
        flag = true;
        alert('Здравствуйте, ' + outputName);
    }

}
if(!flag){
    alert('Ошибка авторизации');
}
