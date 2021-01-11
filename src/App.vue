<template>
    <navigator />
    <main :class="$style['main']">
        <router-view />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigator from './components/navigator'

export default defineComponent({
    name: 'App',
    components: {
        Navigator,
    },
})
</script>

<style module>
.main {
    padding-top: 55px;
}
</style>


