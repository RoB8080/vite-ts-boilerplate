import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
import classes from './navigator.module.css'

export default defineComponent({
    name: 'Navigator',
    setup() {
        return () => <header class={classes.nav}>
            <RouterLink
                to="/"
            >Home</RouterLink>
            <span class={classes.seperator}>|</span>
            <RouterLink
                to="/docs"
            >Docs</RouterLink>
        </header>
    },
})
