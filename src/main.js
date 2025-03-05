import { createApp } from 'vue'
import App from './components/App.vue'
import './assets/css/main.css'
import store from './store';

const app = createApp(App)
app.use(store);
app.mount('#app')
