<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList2></VmProductsList2>
  </div>
</template>

<script>
import VmProductsList2 from '@/components/products_list/ProductsListContainer2';
import VmHero from '@/components/hero/Hero';

export default {
  name: 'index',
  components: {
    VmProductsList2,
    VmHero
  }
};
</script>
