// For images
declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.module.css' {
    const value: Record<string, string>
    export default value
}

declare module '*.tsx' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

// For import.meta
declare interface ImportMeta {
    env: Record<string, string>
}

