import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Junta JS e CSS dentro do index.html: cada visita vira 1 request de CDN em vez de 4.
// Motivo: o team diaval-seduc-sp é Hobby (teto de 1 milhão de requests por ciclo) e o portal
// era ~68% das requests. A maioria das visitas é carga fria, então o cache dos assets não bastava.
function inlineAssets(): Plugin {
  return {
    name: 'inline-assets',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.fileName === 'index.html')
      if (!html || html.type !== 'asset') return
      let out = String(html.source)
      for (const [name, file] of Object.entries(bundle)) {
        if (file.type === 'chunk' && file.isEntry) {
          const code = file.code.replace(/<\/script/gi, '<\\/script')
          const tag = new RegExp(`<script[^>]*src="/${name}"[^>]*></script>`)
          if (!tag.test(out)) throw new Error(`inline-assets: tag de ${name} não achada`)
          out = out.replace(tag, () => `<script type="module">${code}</script>`)
          delete bundle[name]
        } else if (file.type === 'asset' && name.endsWith('.css')) {
          const tag = new RegExp(`<link[^>]*href="/${name}"[^>]*>`)
          if (!tag.test(out)) throw new Error(`inline-assets: tag de ${name} não achada`)
          out = out.replace(tag, () => `<style>${String(file.source)}</style>`)
          delete bundle[name]
        }
      }
      html.source = out
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineAssets()],
  build: { assetsInlineLimit: Infinity },
})
