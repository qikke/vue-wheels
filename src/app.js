import Vue from 'vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import plugin from './plugin'


Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)


let toastOption = {
  closeButton: {
    text: 'xxx',
    callback: () => {
      console.log('this is callback!')
    }
  },
  autoClose: false,
  position: 'top'
}
Vue.use(plugin)


new Vue({
  el: '#app',
  data: {
    loading: false
  },
  methods: {
    onClickToast() {
      this.$toast('多汗文字多汗字多汗文字多汗文字多汗文字汗文字多汗文字', toastOption)
    }
  }
})