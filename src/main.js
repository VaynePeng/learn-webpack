import subtraction from './js/subtraction'
import add from '@js/add'
import './css/index.less'
import './css/index.css'
import './iconfont/iconfont.css'

console.log('subtraction', subtraction(5, 3, 1))
console.log('add', add(5, 3, 1))

import bg from './images/icon.png'
const box1 = document.querySelector('.box1')
box1.setAttribute('style', `background-image: url('${bg}')`)

// js热模块更新 (如果使用 vue 开发使用 vue-loader 即可)
if(module.hot) {
  module.hot.accept('./js/add')
  module.hot.accept('./js/subtraction')
}
