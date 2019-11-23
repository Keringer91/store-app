<template>
  <div>
      <h3>Products page</h3><br>
      <h4>All products: </h4>      
      <ul v-for="(product,index) in products" :key="index">
        <li>
            ID: {{ product.id}}<br>
            Title: {{ product.name }}<br>
            Quantity: {{ product.quantity }}<br>            
        </li>
    </ul>
  </div>
</template>

<script>
import { productService } from '../services/ProductService'
export default {
  data () {
    return {
      products: []
    }
   },

   created() {
     this.products = productService.list()
   },
}
</script>

