import { App } from 'vue'

export default (app: App) => {
  const modules = {}
  
  const files = import.meta.globEager('../components/**/index.vue')

  Object.keys(files).forEach((fileName: string) => {
    const compName = fileName.split('/').slice(-2, -1)
    app.component(`b-${compName}`, files[fileName].default)
  })
}