<template>
    <div class="carrinhoModal">
        <div class="icon" id="show-btn" @click="showModal">
            <p class="car">{{ quantidade }}</p>
            <b-icon icon="cart2"></b-icon>
        </div>

        <b-modal ref="modal-carrinho" hide-footer>
            <div class="d-block text-center">
                <table v-if="carrinho.length" style="width:100%">
                    <tr class="title">
                        <td>Produto</td>
                        <td>Quantidade</td>
                        <td>Preço</td>
                        <td>Ações</td>
                    </tr>
                    <tr class="description" v-for="car in carrinho" :key="car.nome">
                        <td>{{ car.nome }}</td>
                        <td>{{ car.quantidade }}</td>
                        <td>{{ car.preco * car.quantidade | dinheiro }}</td>
                        <td class="remove" @click="remover(car.id)">
                            <b-icon icon="trash"></b-icon>
                        </td>
                    </tr>
                </table>

                <ModalPedido 
                    v-if="carrinho.length" 
                    :hideModalCarrinho="hideModal"
                />

                <div v-else class="null"> 
                    <b-icon icon="cart2"></b-icon>
                    <p>Carrinho vazio</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import ModalPedido from './ModalPedido.vue';

export default {
    components: { ModalPedido },
    methods: {
        showModal() {
            this.$refs['modal-carrinho'].show()
        },
        hideModal() {
            this.$refs['modal-carrinho'].hide()
        },
        remover(id) {
            this.$store.dispatch('removeProduto', id)
            this.$store.dispatch('removerQuantidade', id)
        }
    },
    computed: {
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

    .null {
        margin: 0px 0 60px;
        padding: 60px 0 0;
        svg {
            font-size: 130px;
            opacity: 0.3;
        }

        p {
            opacity: 0.3;
            font-size: 25px;
        }
    }
    .carrinhoModal {
        position: fixed;
        z-index: 1000;
        width: 75px;
        height: 50px;
        padding: 5px 15px;
        background: white;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(0.5px);
        -webkit-backdrop-filter: blur(0.5px);
        border-radius: 10px 0 0 10px;
        border: 1px solid rgb(63, 74, 31);
        right: 0;
        top: 88%;

        #show-btn { 
            display: flex;

            svg {
                font-size: 36px;
                color: rgb(63, 74, 31);
                padding: 4px;
            }

            p {
                color: rgb(63, 74, 31);
                font-size: 18px;
                margin: -4px 0;
                font-weight: 500;
            }
        }
    }
    img {
        width: 100%;
    }
    .price {
        float: right;
        font-size: 20px;
        margin: 10px 10px 0;
    }

    .buy {
        margin: 40px auto 0;
        display: block;
        background: #5d6d33;
        padding: 5px;
        border-radius: 10px;
        width: 93%;
        color: white;
        cursor: pointer;
        transition: 0.2s;
    }
    .buy:hover {
        border: 1px solid #5d6d33;
        background: white;
        color: #5d6d33;;
    }
    .title td {
        font-weight: 500;
        color: #a5a5a5;
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
    }

    .description td {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
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
        padding: 15px;
    }
</style>