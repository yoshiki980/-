import {createApp} from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import router from './router'
import store from './store'
import axios from '@/api/api.js'
// import axios2 from '@/api/api2.js'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './index.less'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@/assets/icons/iconfont.css'
import '@/components/sider-icon/iconfont.css'
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/icons/iconfont.css'
// import '@/styles/iview.css'
// import '../node_modules/iview/dist/styles/iview.css'
const app =createApp(App)
app.use(ArcoVue)
app.use(store)
app.config.globalProperties.$axios=axios;
app.use(router)
app.use(ArcoVueIcon);
app.use(ViewUIPlus)
app.mount('#app')

