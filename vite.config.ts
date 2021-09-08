import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [preact()],
// })

export default {
  esbuild: {
    jsxInject: `import { h } from 'preact'; import React from 'preact/compat'`
  }
}
