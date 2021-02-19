<template>
    <img
        alt="Vue logo"
        :src="ImgLogo"
    >
    <hello-world
        msg="Hello Vue 3.0 + Vite"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgLogo from '@src/assets/logo.png'
import HelloWorld from '@src/components/hello-world.vue'

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
    },
    setup() {
        return {
            ImgLogo,
        }
    },
})
</script>
