
import '../css/estilos.css'
import {firstMessage, delayedMessage} from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json';
import renderToDom from './render-to-dom.js';

import React from 'react';
import { render } from 'react-dom';
import Teacher from './components/teachers.js';


const $button = document.getElementById('dynamic-import')
$button.addEventListener('click', async () => {
  //Cambiarle el nombre para poder usar la funcion
  const { default: alerta } = await import('./alerta.js')
  alerta();
})

render(<Teacher data={data}/>, document.getElementById('container'))

console.log(data);

data.teachers.forEach(teacher => {
  const element = document.createElement('li')
  element.textContent = teacher.name;
  renderToDom(element);
});


// console.log('hola mundo desde webpack');
document.write(firstMessage);
delayedMessage();
const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)
console.log('Hola Mundo!, usando modulo');