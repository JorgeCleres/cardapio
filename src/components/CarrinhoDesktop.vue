<template>
    <div class="carrinho">
        <div class="d-block text-center">
            <div :class="scrool">
                <table v-if="carrinho.length" style="width:100%">
                    <tr class="title">
                        <td>Produto</td>
                        <td>Qtd</td>
                        <td>Preço</td>
                        <td>Ações</td>
                    </tr>
                    <tr class="description" v-for="car in carrinho" :key="car.nome">
                        <td>{{ car.nome.length > 15 ? car.nome.slice(0, 12) + '...' : car.nome }}</td>
                        <td>{{ car.quantidade }}</td>
                        <td>{{ car.preco | dinheiro }}</td>
                        <td class="remove" @click="remover(car.id)">
                            <b-icon icon="trash"></b-icon>
                        </td>
                    </tr>
                </table>

                <div v-else class="null"> 
                    <b-icon icon="cart2"></b-icon>
                    <p>Carrinho vazio</p>
                </div>
            </div>

            <ModalPedido v-if="carrinho.length" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import swal from 'sweetalert';
import ModalPedido from './ModalPedido.vue';

export default {
    components: { ModalPedido },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        remover(id) {
            this.$store.commit('removeProduto', id)
            this.$store.commit('removerQuantidade', id)
        },
        async finalizarPedido() {
            await Vue.prototype.$http.post('/pedido', JSON.stringify(this.carrinho))
                .then(() => {
                    swal({
                        title: 'Pedido feito com sucesso!',
                        text: 'Logo mais entraremos em contato para pegar o endeço para envio',
                        icon: 'success',
                    });
                    this.$store.dispatch('alteraCarrinho', [])
                })
                .catch(() => {

                })
        }
    },
    computed: {
        scrool() {
            return this.valorTotal > 0 ? 'barra-scrool' : ''
        },
        quantidade() {
            return this.$store.getters.quantidade
        },
        carrinho() {
            return this.$store.getters.carrinho
        },
        valorTotal() {
            return this.$store.getters.valorTotal
        }
    },

}
</script>

<style scoped lang="scss">
    table {
        caption-side: bottom;
        border-collapse: inherit !important;
    }

    .barra-scrool {
        overflow: auto;
        max-height: 12vw;
    }

    .carrinho {
        box-shadow: 3px 1px 14px 1px #d9d9d9;
        border-radius: 10px;
        min-height: 13vw;
        padding: 0;
        margin-top: 80px;
        width: 100%;

        .null {
            margin: 0px 0 60px;
            padding: 60px 0 0;
        }

        svg.bi-cart2.b-icon.bi {
            font-size: 85px;
            color: darkgrey;
            margin-bottom: 5px;
        }

        p {
            font-family: "Montserrat", sans-serif;
            font-size: 18px;
            color: #d0d0d0;
            font-weight: 500;
        }

        button {
            width: 250px;
            border-radius: 10px;
            border: 1px solid #3f4a1f;
            color: white;
            background: #3f4a1f;
            height: 35px;
            transition: 0.7s;
            margin: 75px 0 15px;
        }

        #scrool {
            margin: 20px 0 15px;
        }

        button:hover {
            color: #3f4a1f;
            background: white;
            height: 35px;
        }
    }

    .title td {
        font-weight: 500;
        color: #a5a5a5;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
    }

    .description td {
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
    }
    .remove {
        cursor: pointer;
        color: red;
        font-weight: 500;
        font-size: 18px;
        text-align: center !important;
    }
    td {
        text-align: start !important;
        padding: 8px;
    }

    tr {
        border: 0.5px solid grey;
        padding: 5px;
    }

    @media(max-width: 1366px) {
        .carrinho {
            width: 19%;
        }
    }

    @media(max-width: 768px) {
        .carrinho {
            display: none
        }
    }
</style>