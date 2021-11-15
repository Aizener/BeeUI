import { createApp } from 'vue'
import App from './App.vue'

import installBee from '@/utils/install'

const app = createApp(App)

installBee(app)

app.mount('#app')
