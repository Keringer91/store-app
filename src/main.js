import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AppProducts from './components/AppProducts.vue'
import AppCustomers from './components/AppCustomers.vue'
import Customer from './components/Customer.vue'
import Product from './components/Product.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/products" },
  { name: "customers", path: "/customers", component: AppCustomers },
  { name: "products", path: "/products", component: AppProducts },
  { name: "customer", path: "/customer/:id", component: Customer},
  { name: "product", path: "/product/:id/:quantity", component: Product}  
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

