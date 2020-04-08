<template>
  <div>
    <VmHero></VmHero>
    <VmEmpresas :empresas="empresas"></VmEmpresas>
  </div>
</template>

<script>
import VmEmpresas from '@/components/lista_empresas/ListaEmpresasContainer';
import VmHero from '@/components/hero/Hero';
import EmpresaDataService from "../services/EmpresaDataService";


export default {
  name: 'index',
  data() {
    return {
      empresas: [],
    };
  },
  components: {
    VmEmpresas,
    VmHero
  },
  methods: {
    retrieveEmpresas() {
      EmpresaDataService.getAll()
        .then(response => {
          this.empresas = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveEmpresas();
  }


  /*asyncData({ params, error }) {
    return axios.get('http://localhost:3000/api/empresas').then((res) => {
      return { empresas: res.data }				      
    })
  }*/
};
</script>
