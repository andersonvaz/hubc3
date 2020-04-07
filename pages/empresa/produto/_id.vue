<template>
<div>
<header>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>HUB</strong>
      </a>
    </div>
  </div>
</header>
<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1>Empresa XXX</h1>
      <p class="lead text-muted">Lista de produtos</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
          <div class="card mb-4 shadow-sm">
	     <img :src="'data:image/jpeg;base64,'+produto.imagem" :alt="produto.logoNome+'.jpg'">
            <div class="card-body">
              <h3 class="card-text"> {{produto.nome}} </h3>
	      <p>  {{produto.descricao}} </p>
	      <p>  {{produto.preco}} </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</main>
<footer class="text-muted">
  <div class="container">
    <p class="float-right">
      <a href="#">Back to top</a>
    </p>
    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.4/getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
</div>
</template>
<script>
import axios from 'axios'
export default {
  asyncData ({ params }) {
    return axios.get(`http://localhost:3000/api/empresa/produto/${params.id}`)
      .then((res) => {
        return { produto: res.data }
      })
  }
}
</script>

<style>

</style>
