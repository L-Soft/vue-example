import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js'

createApp(App).use(mdiVue , {icons: mdijs}).use(router).mount('#app')
