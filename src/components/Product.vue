<template>
  <div>
        ID: {{ product.id}}<br>
        Name: {{ product.name }}<br>
        Quantity: {{ quantity }}<br>

        <template v-if="product.quantity">
          <div class="form-group">
            <label for="customer">Select customer:</label>
            <select id="customer" v-model="selectedCustomer">
              <option v-for="customer in customers" :key="customer.id" :value="customer">
                {{ customer.fullName }}
              </option>
            </select>
          </div>
          <button @click="confirmPurchase">Confirm</button>
          <button @click="cancelPurchase">Cancel</button>
        </template>
        <template v-else>
          There are no items in your cart. <br>
          <router-link to="/products">Go back to Products</router-link>
        </template>      
  </div>
</template>

<script>
import { productService } from '../services/ProductService'
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list(),
      product: {},
      checked: false,
      selectedCustomer: null
    }
   },

  methods: {
      confirmPurchase() {
        if (!this.selectedCustomer) alert('You must select a customer to proceed.')
        customerService.addProductToCustomer(this.selectedCustomer, this.product)
        productService.decrement(this.product)
        this.$router.push('/customer/' + this.selectedCustomer.id) 
      },
      cancelPurchase() {
        this.$router.push('/products') 
      }
    },

   created() {
     this.product = productService.find(parseInt(this.productId))
   },

    computed: {
      productId() {
        return this.$route.params.id;
      },
       quantity() {
        return this.$route.params.quantity;
      }
    }
}

</script>

