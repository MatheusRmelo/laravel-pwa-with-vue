import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from '../js/components/App.vue';

const app = createApp(App);
app.mount("#app");
