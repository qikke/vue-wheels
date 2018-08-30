import Vue from 'vue'
import Button from './components/button'
import Svg from './components/svg'
import ButtonGroup from './components/button-group'

Vue.component('g-button',Button)
Vue.component('g-svg',Svg)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el:'#app',
  data:{
    loading:false
  }
})