// Images
declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}

// CSS Module
declare module '*.module.css' {
    const value: Record<string, string>
    export default value
}

// TSX
declare module '*.tsx' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

// import.meta
declare interface ImportMeta {
    env: Record<string, string>
}

