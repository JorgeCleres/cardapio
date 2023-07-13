<template>
    <div class="card_children">
        <b-row>
            <b-col col lg="6" md="4">
                <div class="topo">
                    <div class="star">
                        <img src="@/assets/image/star.png" alt="estrela">
                        <span>5.0</span>
                    </div>
                </div>

                <img :src="image" id="produto">
            </b-col>

            <b-col col lg="6" md="8">
                <div class="text">
                    <h4>{{ nome }}</h4>
                    <h6>{{ descricaoResumida }}</h6>
                    
                    <div class="buttons">
                        <button @click="adicionarProduto">
                            <b-icon icon="cart2"></b-icon>
                        </button>

                        <ModalCard
                            :preco = "preco"
                            :nome = "nome"
                            :descricao = "descricao"
                            :image = "image"
                        ></ModalCard>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ModalCard from './ModalCard.vue'

export default {
    props: ['nome', 'preco', 'descricao', 'id', 'image', 'tag1', 'tag2', 'tag3'],
    components: {ModalCard},
    data() {
        return {
            quantidade: 1
        }
    },
    computed: {
        descricaoResumida() {
            return this.descricao.length >= 100 ? this.descricao.slice(0, 70) + '...' : this.descricao
        }
    },
    methods: {
        adicionarProduto() {
            const produto = {
                id: this.id,
                nome: this.nome,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.$store.dispatch('adicionarProduto', produto)
            this.$store.dispatch('alterarQuantidade', produto)
            this.$store.dispatch('mostraNotificacao', true)
            this.quantidade = 1;
        }
    }

}
</script>


<style scoped lang="scss">
.card_children {
    border-radius: 15px;
    .topo {
        display: flex;
        justify-content: space-between;
    }

    .star {
        margin: 9px 10px;
        z-index: 1;
        background: white;
        border-radius: 20px;
        padding: 1px 10px;

        img {
            width: 16px;
            height: auto;
            margin: -2px 0 0;
        }
        span {
            background: white;
            margin: 0px;
            font-size: 14px;
            padding: 0px 5px;
            color: grey;
            font-weight: 500;
        }
    }

    .tags {
        position: relative;
        bottom: -10px;
        margin: 0 10px;

        span {
            background: white;
            margin: 4px;
            font-size: 13px;
            padding: 4px 9px;
            border-radius: 12px;
            color: grey;
        }
    }

    #produto {
        width: 100%;
        border-radius: 10px 0px 0px 10px;
        height: 248px;
        margin: -44px 0 0;
    }


    .buttons {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 60px;

        button {
            border-radius: 5px;
            border: 1px solid #3f4a1f;
            transition: 0.4s;
            background: transparent;
            svg.bi-cart2.b-icon.bi {
                font-size: 21px;
                color: #3f4a1f;
                transition: 0.4s;
            }
        }
        button:hover {
            background: #3F4A1F;
            svg.bi-cart2.b-icon.bi {
                font-size: 21px;
                color: white;
            }
        }
    }

    .text {
        padding: 20px 0 0;
        
        h4 {
            font-family: "Montserrat", sans-serif;
            font-size: 23px;
            color: #797979;
            font-weight: 400;
        }

        h6 {
            font-family: "Montserrat", sans-serif;
            font-size: 15px;
            color: grey;
            font-weight: 400;
        }
    }
}

@media(max-width:768px) {
    .card_children .buttons {
        top: 12px;
    }
    .card_children .text h6 {
        font-size: 16px;
    }

    .card_children #produto {
        height: 200px;
    }
}

</style>
