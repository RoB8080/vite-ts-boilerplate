import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $style: {
            [index: string]: string
        }
    }
}

const app = createApp(App)

app.use(router)

app.mount('#app')
