import Toast from './components/toast'

let currentToast
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message,toastOptions) {
      if(currentToast) {
        currentToast.close()
      }
      currentToast = createToast(Vue,message,toastOptions)
    }
  }
}

function createToast(Vue,message,toastOptions){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData: toastOptions})
  // toast.$slots.default = message
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}