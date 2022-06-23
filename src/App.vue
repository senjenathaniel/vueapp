<template>
  <div v-if="products.length">
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.title }} - {{ [product.price] }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No data to display</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      products: [
        { id: 1, title: "Apple Watch", price: 50000 },
        { id: 2, title: "Apple MacBook Pro", price: 12000 },
        { id: 3, title: "Apple iMac", price: 25000 }
      ],
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
