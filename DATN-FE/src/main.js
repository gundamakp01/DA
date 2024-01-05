import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { Store } from './stores/index.js';
import piniaPersist from 'pinia-plugin-persist'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/sass/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import Toast from "vue-toastification";
import 'sweetalert2/dist/sweetalert2.min.css';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'

import App from './App.vue'
import router from './router'

// Vue Axios

import axios from 'axios'
import VueAxios from 'vue-axios'

// import './assets/main.css'
import ApiService from "@/services/ApiService";
library.add(fas, fab);
const app = createApp(App)
import { dom } from '@fortawesome/fontawesome-svg-core';
import VueSweetalert2 from "vue-sweetalert2";
dom.watch();
ApiService.init()
ApiService.setHeader()
const pinia = createPinia()
pinia.use(piniaPersist)

const store = Store;
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)

app.use(router)

const options = {
  // You can set your default options here
};
app.component('v-select', vSelect);
app.use(Toast, options);
app.use(VueSweetalert2);
/* add icons to the library */
app.component("font-awesome-icon", FontAwesomeIcon);
// Use vue-axios
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

// Provide Pinia Store globally
app.provide('store', store);

app.mount('#app')
