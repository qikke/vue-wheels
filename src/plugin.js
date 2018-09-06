import Toast from './components/toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: {
            text: 'xxxx',
            callback: () => {
              console.log('this is callback !')
            }
          }
        }
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}