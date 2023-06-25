import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueYoutube from 'vue-youtube'

const app = createApp(App)
 
app.use('youtube',VueYoutube)

app.use(router).mount('#app')
