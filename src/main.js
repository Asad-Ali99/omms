import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the icons to the library
library.add(faUser, faEnvelope, faLock);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).use(router).mount('#app')
