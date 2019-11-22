import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AppProducts from './components/AppProducts.vue'
import AppCustomers from './components/AppCustomers.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/products" },
  { name: "customers", path: "/customers", component: AppCustomers },
  { name: "products", path: "/products", component: AppProducts }
  
]

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

