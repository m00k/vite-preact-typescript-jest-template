import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
})

// export default defineConfig({
//   esbuild: {
//     jsxInject: `import React from 'preact/compat'`
//   }
// })