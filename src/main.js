import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css'
import { dragscrollNext } from 'vue-dragscroll'

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .directive('dragscroll', dragscrollNext)
  .mount('#app')
