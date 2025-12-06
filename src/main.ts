import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 确保先注册 ElementPlus
app.use(ElementPlus, {
    locale: zhCn,
})
// 再注册路由
app.use(router)

app.mount('#app')
