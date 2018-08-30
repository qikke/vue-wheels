import Vue from 'vue'
import Button from './components/button'
import Svg from './components/svg'

Vue.component('g-button',Button)
Vue.component('g-svg',Svg)

new Vue({
  el:'#app',
})