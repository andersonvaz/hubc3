<template>
 
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="empresa in empresas" :key="empresa.id">
      <VmEmpresas :empresa="empresa"></VmEmpresas>
    </div>
  </div>
</template>

<script>

import VmEmpresas from '../Empresas';

export default {
  components: { VmEmpresas },
	props: {'empresas':Array}
}    
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
