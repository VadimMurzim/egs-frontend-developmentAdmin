import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импорт маршрутизатора

createApp(App)
  .use(router) // Подключение маршрутизатора в приложение Vue
  .mount('#app');
