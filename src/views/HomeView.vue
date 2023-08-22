<template>
  <div>
      <HeaderComponent />
      <b-container>
          <b-row>
              <b-col col lg="9" md="12">
                  <BodyComponent />
              </b-col>
              <b-col v-if="tela" col lg="3" >
                  <CarrinhoDesktop />
              </b-col>
              <ModalCarrinho v-else />
          </b-row>
      </b-container>

      <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BodyComponent from '@/components/BodyComponent.vue';
import CarrinhoDesktop from '@/components/CarrinhoDesktop.vue';
import ModalCarrinho from '@/components/ModalCarrinho.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from "axios";

export default {
  components: {
      HeaderComponent,
      BodyComponent,
      CarrinhoDesktop,
      ModalCarrinho,
      FooterComponent
  },
  data() {
      return {
          tela: false
      }
  },
  async created() {
    axios.get('https://cardapio-ya1c.onrender.com/produtos').then((resp) => {
        console.log(resp.data);
        let produtos = resp.data
        console.log(produtos.produtos);
        this.$store.dispatch('initProdutos', produtos.produtos)
    })
    .catch((err) => {
        console.log(err);
    })

    this.tela = window.innerWidth > 768 ? true : false

  }
}
</script>


<style scoped lang="scss">
</style>
