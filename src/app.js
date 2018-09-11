import Vue from 'vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsBody from './tabs/tabs-body'
import TabsHead from './tabs/tabs-heads'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './components/popover'


Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('k-tabs', Tabs)
Vue.component('k-body', TabsBody)
Vue.component('k-head', TabsHead)
Vue.component('k-item', TabsItem)
Vue.component('k-pane', TabsPane)
Vue.component('k-popover', Popover)


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