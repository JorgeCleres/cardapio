<template>
    <div class="pedidoModal">
        <div class="button" id="show-btn" @click="showModal">
            Finalizar pedido {{ valorTotal | dinheiro }}
        </div>

        <b-modal ref="modal-pedido" hide-footer>
            <div class="d-block">
                <h5>Insira os seus dados para finalizar o pedido</h5>
                <div class="form" v-on:submit.prevent="pedidoSubmitUserForm()">
                    <div class="contato">
                        <b-form-input v-model="pedido.nome" placeholder="nome" ></b-form-input>
                        <b-form-input v-model="pedido.email" placeholder="email"></b-form-input>
                        <b-form-input v-model="pedido.telefone" placeholder="telefone"></b-form-input>
                    </div>
                    <button id="scrool" @click="enviarPedido">Enviar pedido {{ valorTotal | dinheiro }}</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Vue from 'vue'
import swal from 'sweetalert';

export default {
    props: {
        hideModalCarrinho: Function
    },
    data() {
        return {
            pedido: {
                nome: '',
                email: '',
                telefone: '',
                sacola: []
            }
        }
    },
    methods: {
        showModal() {
            this.$refs['modal-pedido'].show()
        },
        hideModal(name) {
            this.$refs[name].hide()
        },
        pedidoSubmitUserForm() {},
        async enviarPedido() {
            if(this.pedido.nome != '' && this.pedido.email != '' && this.pedido.telefone != '') {
                this.pedido.sacola = this.carrinho
                await Vue.prototype.$http.post('/pedido', this.pedido)
                    .then(() => {
                        swal({
                            title: 'Sucesso',
                            text: 'Pedido feito com sucesso!',
                            icon: 'success',
                        });
                        this.$store.dispatch('alteraCarrinho', [])
                        this.$store.dispatch('removerQuantidade', 0)
                        this.hideModalCarrinho()
                    })
                    .catch(() => {
                        swal({
                            title: 'Erro',
                            text: 'Erro ao realizar pedido. Tente novamente!',
                            icon: 'erro',
                        });
                    })
            } else {
                swal({
                    title: 'Error',
                    text: 'Preencha todos os campos',
                    icon: 'error',
                });
            }
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

    .pedidoModal {
        height: 6.5vw;

    }
    .button {
        width: 250px;
        border-radius: 10px;
        border: 1px solid #3f4a1f;
        color: white;
        background: #3f4a1f;
        height: 35px;
        transition: 0.2s;
        margin: 20px auto 10px;
        cursor: pointer;
        padding: 5px;
    }

    button#scrool {
        width: 250px;
        border-radius: 10px;
        border: 1px solid #3f4a1f;
        color: white;
        background: #3f4a1f;
        height: 35px;
        transition: 0.2s;
        margin: 20px auto 10px;
        cursor: pointer;
        padding: 5px;
        display: block;
    }
    button#scrool:hover {
        border: 1px solid #3f4a1f;
        color: #3f4a1f;
        background: white;
    }

    .button:hover {
        color: #3f4a1f;
        background: white;
    }

    h5 {
        margin: 10px 27px 0px;
        font-size: 20px;
        color: grey;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
    }

    .contato {
        input {
            width: 90% !important;
            margin: 10px auto !important;
            display: block !important;
        }
    }
</style>