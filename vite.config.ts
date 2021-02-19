import vue from '@vitejs/plugin-vue'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import path from 'path'

const config = defineConfig({
    plugins: [
        vue(),
        pwa(),
    ],
    resolve: {
        alias: { '@src': path.resolve(__dirname, 'src') },
    },
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
