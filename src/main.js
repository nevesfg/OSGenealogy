

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './assets/style/global.scss';

const app = createApp(App); 

app.use(router).mount('#app')




