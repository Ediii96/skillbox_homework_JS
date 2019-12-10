'use strict';

let blockMain = document.querySelector('.main');
let textEl = document.querySelector('.text');
let textInnerHTML = document.querySelector('.text').innerHTML;
let block = document.querySelector('.block');
let btnEdit = document.querySelector('.btn-1');
let btnSave = document.querySelector('.btn-2');
let btnСancel = document.querySelector('.btn-3');
let textFromStorage = localStorage.text;

if(localStorage.hasOwnProperty('text')){
    textEl.textContent = localStorage.text;
}
else{
    localStorage.text = textEl.textContent;
}

btnEdit.addEventListener('click', function(){
    textEl.contentEditable = 'true';
    this.disabled = true;
    btnSave.disabled = false;
    btnСancel.disabled = false;
});

btnSave.addEventListener('click', function(){
    textEl.contentEditable = 'false';
    this.disabled = true;
    btnСancel.disabled = true;
    btnEdit.disabled = false;

    localStorage.text = textEl.textContent;

});

btnСancel.addEventListener('click', function(){
    textEl.contentEditable = 'false';
    this.disabled = true;
    btnSave.disabled = true;
    btnEdit.disabled = false;

    textEl.textContent = localStorage.text;

});
