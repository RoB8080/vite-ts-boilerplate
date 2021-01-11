import vue from '@vitejs/plugin-vue'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [
        vue(),
        pwa(),
    ],
    optimizeDeps: {
        include: [],
        exclude: [],
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
}

export default config
