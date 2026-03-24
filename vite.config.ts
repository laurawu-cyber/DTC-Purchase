import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Resolves figma:asset/... imports as placeholder transparent PNGs
function figmaAssetPlugin(): Plugin {
  const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  return {
    name: 'figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return '\0' + id
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) return `export default "${PLACEHOLDER}"`
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
