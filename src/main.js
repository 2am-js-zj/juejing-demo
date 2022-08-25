import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
// @ts-ignore
createApp().config.globalProperties.$dayjs = dayjs; //全局使用dayjs

createApp(App).use(store).use(router).mount('#app')
