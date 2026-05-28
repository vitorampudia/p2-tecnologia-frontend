import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import BootstrapVue from 'bootstrap-vue';

// // Importe os arquivos CSS do Bootstrap e BootstrapVue
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'
const app = createApp(App)

app.use(BootstrapVue3)

app.use(router)

app.mount('#app')
