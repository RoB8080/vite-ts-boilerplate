<p>
  <h1 align="center">Vite-TS-Boilerplate</h1>
</p>

Vite project boilerplate for personal usage.

# Extra Dependencies
- Vue Router
- Typescript
- ESLint
- Vite Plugin PWA

# VSCode Extensions
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - 👍 Highly Recommend
- [VueDX](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features) - 👍 Highly Recommend
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 👍 Highly Recommend
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - 👌 Recommend
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - 👌 Recommend

# ESLint
Change rules & extends in ```.eslintrc.js``` as you want.

You can find rules from:
- [Vanilla](https://eslint.bootcss.com/docs/rules/)
- [Typescript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [Vue](https://eslint.vuejs.org/rules/)

# TSX
Project is already configured for TSX ([See Example](./src/components/navigator.tsx))

- **TSX won't be linted by ESLint**

# Cleanup
Delete this part in ```<head>``` of ```index.html```
```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
```