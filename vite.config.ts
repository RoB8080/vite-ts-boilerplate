import vue from '@vitejs/plugin-vue'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

const config = defineConfig({
    plugins: [
        vue(),
        pwa(),
    ],
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
    optimizeDeps: {
        include: [],
        exclude: [],
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
})

export default config
