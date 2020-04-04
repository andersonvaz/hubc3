<template>
  <div class="Empresas">
    <h1>Empresas</h1>
    <ul class="overview">
      <li class="overview__item" v-for="empresa in empresas">
          <h2>{{empresa.nome}}</h2>
	  <img :src="'/logo/'+empresa.logoNome" :alt="empresa.nome+'.jpg'">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ params, error }) {
    return axios.get('http://localhost:3000/api/empresas').then((res) => {
      return { empresas: res.data }
    })
  },
  methods: {
    getNextMovie() {
      return axios.get('http://localhost:3000/api/empresas').then((res) => {
        this.movie = res.data
      })
    }
  }
}
</script>


<style>
.empresas {
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1000px;
}

.overview {
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
}

.overview__item {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 1);
  list-style: none;
}

.overview__item-inner {
  padding: 24px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px 0 rgba(14,30,37,.36);
  text-decoration: none;
  color: #000;
  display: block;
}
</style>


