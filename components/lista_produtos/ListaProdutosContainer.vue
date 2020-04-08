<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="produto in produtosL" :key="produto.id">
      <VmProdutos :produto="produto"></VmProdutos>
    </div>
    <div class="section" v-if="produtos.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
</template>

<script>
import VmProdutos from '../Produtos';
import { getByTitle } from '@/assets/filters';

export default {
   components: { VmProdutos },
  
  props: {'produtos':Array},

  data () {
    return {
      id: '',
      noProductLabel: 'Nenhum produto encontrado.',
      productsFiltered: []
    };
  },
   computed: {
    produtosL () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$props.produtos;
      }
    }
  },
  methods: {
    getProductByTitle () {
      let listOfProducts = this.$props.produtos,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
