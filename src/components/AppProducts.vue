<template>
  <div>
    <h3>Products page</h3><br>
    <h4>All products: </h4>

    <label>Search: </label>
    <input type="text" v-model="search" placeholder="Search title.."/>

    <ul v-for="(product, index) in filteredList" :key="index">
        <li>
            ID: {{ product.id}}<br>
            Title: {{ product.name }}<br>
            Quantity: {{ product.quantity }}<br>   
            <button @click="incrementQuantity(product)"> + </button>         
            <button @click="decrementQuantity(product)"> - </button>         
        </li>
    </ul>
  </div>
</template>

<script>
import { productService } from '../services/ProductService'
export default {
    data () {
        return {
            search: '',
            products: [],
        }
    },
    methods: {
        incrementQuantity(product) {
            productService.increment(product)
        },
        decrementQuantity(product) {
            productService.decrement(product)
        }
    },

    created() {
        this.products = productService.list()
    },

    computed: {
        filteredList() {
            return this.products.filter(product => {
            return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

