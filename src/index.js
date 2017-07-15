import  './style.css';
import Icon from '../public/icon.png';
function component(){
    var element = document.createElement('div');
    element.innerHTML = 'hello world';
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());
