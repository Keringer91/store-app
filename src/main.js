import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AppProducts from './components/AppProducts.vue'
import AppCustomers from './components/AppCustomers.vue'
import Customer from './components/Customer.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/products" },
  { name: "customers", path: "/customers", component: AppCustomers },
  { name: "products", path: "/products", component: AppProducts },
  { name: "customer", path: "/customer/:id", component: Customer} 
  
]

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

