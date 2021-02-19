import { createApp } from 'vue'
import App from '@src/App.vue'
import '@src/index.css'
import router from '@src/router'

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
