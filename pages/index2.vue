<template>
  <div>
    <VmHero></VmHero>
    <VmEmpresas :empresas="empresas"></VmEmpresas>
  </div>
</template>

<script>
import VmEmpresas from '@/components/lista_empresas/ListaEmpresasContainer';
import VmHero from '@/components/hero/Hero';
import axios from 'axios';

export default {
  name: 'index',
  components: {
    VmEmpresas,
    VmHero
  },
  
  asyncData({ params, error }) {
    return axios.get('http://localhost:3000/api/empresas').then((res) => {
      return { empresas: res.data }				      
    })
  }
};
</script>
