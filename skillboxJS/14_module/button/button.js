import '../src/style.css';

export default class Button {
    
    constructor(initialNumber) {
        
        const buttonElement = document.querySelector('.btn-click');
        buttonElement.innerHTML = initialNumber;
        buttonElement.addEventListener('click', this.onclick);

    }
    
    onclick(event) {

        let counter = this.innerHTML;
        counter++;
        this.innerHTML = counter;

    }

}


