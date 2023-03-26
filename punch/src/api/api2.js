import { createApp } from 'vue'
import App from '../App.vue'
import axios2 from 'axios'
const app =createApp(App)
axios2.defaults.baseURL = '120.79.163.43:8080'
axios2.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  config.headers.Authorization = 'Bearer xxx'
  return config
})
app.config.globalProperties.$http2 = axios2 ;
axios2.defaults.xsrfHeaderName = 'x-xsrf-token'
axios2.defaults.xsrfCookieName = 'XSRF-TOKEN'
export default {
  login (data) {
    return ajax('/login', 'post', {
      data
    })
  }
}



