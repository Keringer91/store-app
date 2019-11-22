<template>
  <div>
    <h3>Customers page</h3>
    <ul v-for="(customer,index) in customers" :key="index">
        <li>ID: {{ customer.id}}<br>
            Name: {{ customer.fullName }}<br>
            Email adress: {{ customer.email }}<br>
            <button @click="removeCustomer(customer)">Remove customer</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list()
    }
  },

  methods: {
      removeCustomer(customer) {
          customerService.remove(customer);
      }
  }
}
</script>

