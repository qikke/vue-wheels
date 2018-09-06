import Toast from './components/toast'

export default {
  install(Vue, toastOptions) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({propsData: {closeButton: toastOptions.closeButton}})
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}