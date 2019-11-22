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

    <form @submit.prevent>
        <table>
        <tr>
          <td><label>First name:</label></td>
          <td><input v-model="customer.firstName"  type="text" id="firstName"></td>
        </tr>
        <tr>
          <td><label>Last name:</label></td>
          <td><input v-model="customer.lastName" type="text" id="lastName"></td>
        </tr>
        <tr>
          <td><label>Email adress:</label></td>
          <td><input v-model="customer.email" type="text" id="email"></td>
        </tr>
      </table>  
      <button @click="addNewCustomer" type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list(),
      customer: {},
    }
  },

  methods: {
      removeCustomer(customer) {
          customerService.remove(customer);
      },
      addNewCustomer(){
        customerService.add({ 
            fullName: this.customer.firstName+' '+this.customer.lastName,
            email: this.customer.email
         });
      }
  }
}
</script>

