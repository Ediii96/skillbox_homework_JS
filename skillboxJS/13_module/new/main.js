'use strict';

let textEl = document.querySelector('.text');
let btnEdit = document.querySelector('.btn-1');
let btnSave = document.querySelector('.btn-2');
let btnСancel = document.querySelector('.btn-3');
let localChange;

localChange = (localStorage.hasOwnProperty('text')) ? 
textEl.textContent = localStorage.text : 
localStorage.text = textEl.textContent;

class ChangeText {

    constructor( buttonHTMLElement, innerText ) {
        this.button = buttonHTMLElement;
        this.button.onclick = this.output;
        this.button.innerText = innerText;
    }

}

class Edit extends ChangeText {

    constructor(btnDis) {
        super(btnDis, 'Редактировать текст');
    }

    output() { 
        textEl.contentEditable = 'true';
        this.disabled = true;
        btnSave.disabled = false;
        btnСancel.disabled = false;
    }

}

class Save extends ChangeText {

    constructor(btnDis){
        super(btnDis, 'Сохранить текст');
    }

    output() {
        textEl.contentEditable = 'false';
        this.disabled = true;
        btnСancel.disabled = true;
        btnEdit.disabled = false;

        localStorage.text = textEl.textContent;
    }

}

class Cancel extends ChangeText {

    constructor(btnDis){
        super(btnDis, 'Отменить изменения');
    }

    output() {
        textEl.contentEditable = 'false';
        this.disabled = true;
        btnSave.disabled = true;
        btnEdit.disabled = false;

        textEl.textContent = localStorage.text;
    }

}

let edit = new Edit(btnEdit);
let save = new Save(btnSave);
let cancel = new Cancel(btnСancel);