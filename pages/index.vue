<template>
<div>
<header>
        <strong>HUB</strong>
</header>
<main role="main">
  <h1>HUB EMPRESAS</h1>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div v-for="empresa in empresas" class="col-md-4">
          <div class="card mb-4 shadow-sm">
	       <nuxt-link :to="'/empresa/'+empresa.cod"> <img :src="'data:image/jpeg;base64,'+empresa.logo" :alt="empresa.nome+'.jpg'"> </nuxt-link>
	       <div class="card-body">
  	       	    <nuxt-link :to="'/empresa/'+empresa.cod"> <h3 class="card-text"> {{empresa.nome}} </h3> </nuxt-link> 
          	    <nuxt-link :to="'https://api.whatsapp.com/send?phone='+empresa.telefone"> <h4 class="card-text"> {{empresa.telefone}} </h4> </nuxt-link> 
          	    <nuxt-link :to="'/empresa/'+empresa.cod"> <h4 class="card-text"> Acesse a loja </a> </h4> </nuxt-link>
               </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<footer class="text-muted">
Footer
</footer>
</div>
</template>

<script>
import axios from 'axios' 
export default {
  asyncData({ params, error }) {
    return axios.get('http://localhost:3000/api/empresas').then((res) => {
      return { empresas: res.data }				      
    })
  }
}

</script>

<style>

</style>
