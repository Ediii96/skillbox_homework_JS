'use strict';

window.onload = function() {

  let req = new XMLHttpRequest();
  let API_KEY = 'trnsl.1.1.20191115T141519Z.b6869d47e13a5663.1af9d4a8c9583a6990f57bbf8109e4bc8ca2df55';
  let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  let translate = document.querySelector('.translate');
  let button = document.querySelector('.button');
  let form = document.forms[0];
  let select = form.elements.language;
  let myInput;
  url += '?key=' + API_KEY;


  function creatLink(){
    url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    translate = document.querySelector('.translate');
    form = document.forms[0];
    select = form.elements.language;
    url += '?key=' + API_KEY;
    myInput = document.querySelector('#textarea').value;
    
    if(myInput == '' || myInput == /^\s+$/.test(myInput)){
      alert('Введите текст для перевода!!!');
      req.abort();
      return;
    }

  }
  
  function checkLanguage(){
    for (let i = 0; i < select.options.length; i++) {
      let option = select.options[i];
      if(option.selected) {
        let optValue = option.value;
        url += '&lang=' + optValue ;
      }
    }
  }
  
  req.addEventListener('load', function () {
    let response = JSON.parse(req.response);
    
    if( response.code !== 200 ){
      translate.innerHTML = 'Произошла ошибка: ' + response.message;
      return;
    }

    if( response.text.length === 0 ){
      translate.innerHTML = 'Перевод слова не найден =(';
      return;
    }

    translate.innerHTML = response.text.join('<br>');
    
  });

  button.addEventListener('click', function(){
    creatLink();
    checkLanguage();
    url += '&text=' + myInput;

    if( myInput == '' || myInput == /^\s+$/.test(myInput) ){
      req.abort();
    }
    else{
      req.open('GET', url);
      req.send();
    }
  });

}