import subtraction from './js/subtraction'
import add from './js/add'
import './css/index.less'
import './css/index.css'
import './iconfont/iconfont.css'

console.log('subtraction', subtraction(5, 3, 1))
console.log('add', add(5, 3, 1))

import bg from './images/icon.png'
const box1 = document.querySelector('.box1')
box1.setAttribute('style', `background-image: url('${bg}')`)
