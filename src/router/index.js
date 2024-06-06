import { createRouter, createWebHistory } from 'vue-router'

import MulticHomeTree from '../views/MulticHomeTree.vue'
import DOSTreeView from '../views/DOSTreeView.vue'

const routes = [

  {
    path: '/',
    name: 'MulticHomeTree',
    component: MulticHomeTree,
    meta: {
        title: 'Home - OS Genealogy'
    }
  },
  {
    path: '/dos',
    name: 'DOSTreeView',
    component: DOSTreeView,
    meta: {
        title: 'DOS - OS Genealogy'
    }
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
router.beforeEach((to, from, next) => {
if (to.meta.title) {
    document.title = to.meta.title;
}
next();
});
  
  export default router;
