<template>
  <div>
    <nuxt-link :to="'/empresa/produto'+produto.id">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="'data:image/jpeg;base64,'+produto.imagem" :alt="produto.logoNome+'.jpg'">
        </figure>
      </div>
    </nuxt-link>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ produto.nome }}</p>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ produto.descricao }}</p>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>R&#x24; {{ Number(produto.preco).toFixed(2) }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="!produto.isAddedToCart" @click="addToCart(produto.id,produto.nome,produto.preco)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="produto.isAddedToCart" @click="removeFromCart(produto.id, false)">{{ removeFromCartLabel }}</button>
          </div>
           <div class="select is-rounded is-small">
            <select @change="onSelectQuantity(produto.id)" v-model="selected">
              <option v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'produtos',
  props: ['produto'],

  data () {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      selected: 1,
      quantityArray: [],
      quantidade:1
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.produto.quantity > 1) {
      this.selected = this.$props.produto.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart (id,nome,preco,quantidade) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCarrinho', {id,nome,preco,quantidade});
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    onSelectQuantity (id) {
      this.quantidade=this.selected;
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
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


