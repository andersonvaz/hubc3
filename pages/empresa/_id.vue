<template>
  <div>
    <VmHero></VmHero>
    <VmProdutos :produtos="produtos"></VmProdutos>
  </div>
</template>

<script>
import VmProdutos from '@/components/lista_produtos/ListaProdutosContainer';
import VmHero from '@/components/hero/Hero';
import EmpresaDataService from "~/services/EmpresaDataService";


export default {
  name: 'index',
  data() {
    return {
      produtos: [],
    };
  },
  components: {
    VmProdutos,
    VmHero
  },
  methods: {
    retrieveProdutosFromEmpresa(id) {
      EmpresaDataService.getAllProdutos(id)
        .then(response => {
          this.produtos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProdutosFromEmpresa(this.$route.params.id);
  }


  /*asyncData({ params, error }) {
    return axios.get('http://localhost:3000/api/empresas').then((res) => {
      return { empresas: res.data }				      
    })
  }*/
};
</script>
