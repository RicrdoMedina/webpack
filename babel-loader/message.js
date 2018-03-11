import renderToDom from './render-to-dom.js'
import makeMessage from './make-messages.js'

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk('Han pasado 3 seg')
  }, 3000)
})

module.exports = {
  firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    renderToDom(makeMessage(message));
    console.log(message);
  },
}