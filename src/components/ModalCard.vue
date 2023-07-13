<template>
    <div class="modalCard">
        <b-button id="show-btn" @click="showModal">Ver mais</b-button>

        <b-modal ref="my-modal" hide-footer>
            <div class="d-block">
                <img :src="image" alt="">
                <div class="text">
                    <h5>{{ nome }}</h5>
                    <p>{{ descricao }}</p>
                    <div class="tags">
                        <span>100% vegano</span>
                        <span>Baixa caloria</span>
                    </div>
                    <div class="send">
                        <span>Frete grátis</span>
                        <p>Compre à cima de R$50,00 reais e ganhe entrega grátis</p>
                    </div>
                    <h3>R${{ preco }}</h3>
                </div>

                <div class="block_button">
                    <div class="inputs">
                        <b-icon @click="quantidade > 0 ? quantidade-- : 0" icon="dash"></b-icon>
                        <p>{{ quantidade }}</p>
                        <b-icon @click="quantidade++" icon="plus"></b-icon>
                    </div>

                    <button @click="adicionarCarrinho">Adicionar {{ (quantidade * preco) | dinheiro }}</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>

export default {
    props: ['nome', 'preco', 'descricao', 'image'],
    data() {
        return {
            quantidade: 1
        }
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        adicionarCarrinho() {
            const produto = {
                id: this.id,
                nome: this.nome,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.$store.dispatch('adicionarProduto', produto)
            this.$store.dispatch('alterarQuantidade', produto)
            this.quantidade = 1;
            
            setTimeout(() => {
                this.hideModal();
            }, 500) 

            setTimeout(() => {
                this.$store.dispatch('mostraNotificacao', true)
            }, 1000) 

        }
    }

}
</script>

<style scoped lang="scss">
    .modal-body {
        position: relative;
        flex: 1 1 auto;
        padding: 0 !important;
        margin: -65px 0 0 !important;
        border-radius: 30px !important;
    }

    button.close {
        z-index: 1
    }

    img {
        width: 100%;
        border-radius: 10px;
        height: 500px;
        margin: -79px 0 0;
    }        
    .text {
        padding: 20px 20px 10px !important;
        .tags {
            display: flex;
            margin: 0 0 0 -5px;

            span {
                background: #d4d4d4;
                margin: 4px;
                font-size: 13px;
                padding: 4px 9px;
                border-radius: 12px;
                color: grey;
            }
        }
    
        h5 {
            text-align: start;
            margin: 10px auto 5px;
            font-family: "Montserrat", sans-serif;
            font-size: 23px;
            color: #797979;
            font-weight: 400;
        }
    
        h3 {
            text-align: start;
            margin: 10px auto 5px;
            font-family: "Montserrat", sans-serif;
            font-size: 21px;
            color: #3a3a3a;
            font-weight: 400;
        }
    
        p {
            text-align: start;
            margin: 10px auto 5px;
            font-family: "Montserrat", sans-serif;
            font-size: 15px;
            color: grey;
            font-weight: 400;
        }

        .send {
            margin: 20px 0;

            span {
                background: #1f250f;
                padding: 5px 10px;
                font-size: 10px;
                border-radius: 5px;
                color: white;
            }
            
            p {
                font-size: 14px;
                margin: 5px 0;
            }
        }
            
        #show-btn {
            width: 80px;
            margin: 0 10px 0 0;
            height: 35px;
            border-radius: 5px !important;
            font-weight: 500 !important;
            font-size: 14px !important;
            color: white;
            background: #3f4a1f;
            transition: 0.3s;
        }

        #show-btn:hover {
            border: 1px solid #3f4a1f;
            color: #3f4a1f;
            background: transparent;
        }
    }

    .block_button {
        display: flex;
        justify-content: space-between;
        margin: 0 20px 0;
        border-top: 1px solid #cbcbcb;
        padding: 15px 0 0 0;

        .inputs {
            display: flex;
            width: 110px;
            justify-content: space-between;
            position: relative;
            top: 50%;
            transform: translateY(5px);

            svg.bi-dash.b-icon.bi,
            svg.bi-plus.b-icon.bi {
                border: 2px solid #3f4a1f;
                text-align: center;
                font-size: 25px;
                padding: 7px;
                border-radius: 50px;
                width: 35px;
                height: 35px;
                cursor: pointer;
                transition: 0.3s;
            }
            svg.bi-dash.b-icon.bi:hover,
            svg.bi-plus.b-icon.bi:hover {
                background: #3f4a1f;
                color: white;
            }

            p {
                font-size: 20px;
            }
        }

        button {
            border: 2px solid #3f4a1f;
            border-radius: 10px;
            color: #3f4a1f;
            font-family: "Montserrat", sans-serif;
            width: 200px;
            font-weight: 500;
            transition: 0.3s;
        }
        button:hover {
            border: 2px solid #3f4a1f;
            color: white;
            background: #3f4a1f;
        }
    }

</style>