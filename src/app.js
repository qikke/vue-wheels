import Vue from 'vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import plugin from './plugin'


Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)


let toastOption = {
  closeButton: {
    text:'xxx',
    callback:()=>{
      console.log('this is callback!')
    }
  }
}
Vue.use(plugin,toastOption)


new Vue({
  el:'#app',
  data:{
    loading:false
  }
})