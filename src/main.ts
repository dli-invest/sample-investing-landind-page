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

// font awesome icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartLine, faHandHoldingUsd, faPiggyBank, faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faHandHoldingUsd, faChartLine, faPiggyBank, faBullseye, faGithub)

app.component('font-awesome-icon', FontAwesomeIcon)


app.config.globalProperties.$primevue = { ripple: true };
app.use(store).use(router).mount('#app')
