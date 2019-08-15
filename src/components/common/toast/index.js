import Toast from './Toast.vue'
const obj={}
obj.install=function(Vue){

  const toastContrustor=Vue.extend(Toast)
  const toast=new toastContrustor()
  toast.$mount(document.createElement("div"))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
}

export default obj

