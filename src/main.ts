import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './global.css'
import App from '@/App.vue'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//@ts-expect-error忽略当前文件ts类型的检测
import 'virtual:svg-icons-register'
import router from './router/index'
import pinia from './store/index'

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router)
app.mount('#app')