document.querySelector('.list');
document.addEventListener('click', function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('none-node');
    }
});

function addNode(){

    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.classList += 'node ';
    let getText = document.querySelector('.text').value;
    let list = document.querySelector('.list');

    if(getText == ''){
        alert('Введите текст');
    }
    else{
        list.style.display = 'block';
        ol.appendChild(li);
        li.appendChild(document.createTextNode(getText));
    }

}





