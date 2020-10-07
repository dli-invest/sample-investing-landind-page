import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// primeflex
import 'primeflex/primeflex.css'
const app = createApp(App);
createApp(App)
app.config.globalProperties.$primevue = { ripple: true };
app.use(store).use(router).mount('#app')
