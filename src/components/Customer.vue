<template>
  <div>
    <div>
      ID: {{ customer.id}}<br>
      Name: {{ customer.fullName }}<br>
      Email adress: {{ customer.email }}<br><br>

      <ul v-for="(product, index) in products" :key="index">
        <li>
          Article {{ index + 1 }}: {{ product.name }}<br>
          Quantity: {{ product.quantity }}<br> 
        </li>
    </ul>

    </div>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customer: {},
      products: []
    }
   },

   created() {
     this.customer = customerService.find(parseInt(this.userId))
     this.products = customerService.find(parseInt(this.userId)).products
   },
    computed: {
      userId() {
        return this.$route.params.id;
      }
    }
}

</script>

