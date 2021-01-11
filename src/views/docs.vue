<template>
    <!-- eslint-disable vue/no-v-html -->
    <div
        class="markdown-body"
        :class="$style['markdown-body']"
        v-html="mdContent"
    />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

declare function marked(input: string): string

export default defineComponent({
    name: 'App',
    components: {
    },
    setup() {
        const mdContent = ref('')
        onMounted(() => {
            fetch('../../README.md')
                .then(res => res.text())
                .then(text => {
                    mdContent.value = marked(text)
                })
        })
        return {
            mdContent,
        }
    },
})
</script>

<style module>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;

    text-align: left;
}
@media screen and (max-width: 600px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>

