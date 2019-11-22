<template>
  <div id="app">
  <nav>
    <router-link :to="'products'">Products </router-link>
    <router-link :to="'customers'">Customers </router-link>
  </nav>
   <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
