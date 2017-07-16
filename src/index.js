import  './style.css';
import printMe from './print.js';
import Icon from '../public/icon.png';
function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = 'hello world';
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
