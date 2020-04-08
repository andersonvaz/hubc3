<template>
  <div>
    <nuxt-link :to="'/empresa/'+empresa.id">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="'data:image/jpeg;base64,'+empresa.imagem" :alt="empresa.logoNome+'.jpg'">
        </figure>
      </div>
    </nuxt-link>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ empresa.nome }}</p>
        </div>
      </div>
        <nuxt-link :to="'/empresa/'+empresa.id">
          <p> <span class="title is-4"><strong>Acesse a loja</strong></span></p>
        </nuxt-link>
	      <p><span class="title is-4"><strong>{{ empresa.telefone }}</strong></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'empresas',
  props: ['empresa']
  }
</script>

<style lang="scss" scoped>
 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
 }
 .button,
 .select {
   z-index: 2;
 }
 .select {
   position: absolute;
   right: 15px;
   bottom: 35px;
 }
 .card-content {
   padding: 0;
 }
 .buttons {
   margin: 0;
 }
</style>


