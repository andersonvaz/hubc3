<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
      <VmProducts2 :product="product"></VmProducts2>
    </div>
  </div>
</template>

<script>
import VmProducts2 from '../Products2';

export default {
  components: { VmProducts2 },
 
  computed: {
    products () {
        return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
