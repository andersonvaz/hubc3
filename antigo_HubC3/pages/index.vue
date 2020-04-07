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
	       <nuxt-link :to="'/empresa/'+empresa.id"> <img :src="'data:image/jpeg;base64,'+empresa.imagem" :alt="empresa.logoNome+'.jpg'"> </nuxt-link>
	       <div class="card-body">
  	       	    <nuxt-link :to="'/empresa/'+empresa.id"> <h5 class="card-text"> {{empresa.nome}} </h5> </nuxt-link> 
          	    <nuxt-link :to="'https://api.whatsapp.com/send?phone='+empresa.telefone"> <h6 class="card-text"> {{empresa.telefone}} </h6> </nuxt-link> 
          	    <nuxt-link :to="'/empresa/'+empresa.id"> <h6 class="card-text"> Acesse a loja </a> </h6> </nuxt-link>
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
