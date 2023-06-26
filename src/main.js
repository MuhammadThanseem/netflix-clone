import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
 
//For fontawsome library import
library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount('#app')
