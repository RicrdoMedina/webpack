
import './estilos.css'
import {firstMessage, delayedMessage} from './message.js'
import platziImg from './platzi.png'

// console.log('hola mundo desde webpack');
document.write(firstMessage);
delayedMessage();
const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)
console.log('Hola Mundo!, usando modulo');