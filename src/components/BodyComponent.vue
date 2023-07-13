<template>
    <div class="bodyCompoennt">
        <div class="buttons">
            <a @click="buscaProdutos('')">
                <img src="@/assets/image/todos.png" alt="">
                Todos
            </a>
            <a @click="buscaProdutos('biscoitos')">
                <img src="@/assets/image/cookie.png" alt="">
                Biscoitos
            </a>
            <a @click="buscaProdutos('bombons')">
                <img src="@/assets/image/bombom.png" alt="">
                Bombons
            </a>
            <a @click="buscaProdutos('variedades')">
                <img src="@/assets/image/variedades.png" alt="">
                Variedades
            </a>
        </div>
    
        <transition-group 
            enter-active-class="animated fadeIn"
            leave-active-class="animated bounce">  
            <div v-for="(prod, count) in filterProdutos" :key="prod.id">
                <div class="card">
                    <CardComponent
                        :nome = "prod.nome"
                        :preco = "prod.preco"
                        :descricao = "prod.descricao"
                        :id = "prod.id"
                        :image = "prod.image"
                    />
                </div>

                <div v-if="count == 2" class="send">
                    <img src="../assets/image/logo.png" alt="logo">
                    <div class="text">
                        <h3>Entregamos para toda Curitiba</h3>
                        <p>*consulte condições</p>
                    </div>
                </div>
            </div>
        </transition-group>       
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
    components: {
        CardComponent
    },
    computed: {
        filterProdutos() {
            return this.$store.getters.filteredProducts
        }
    },
    methods: {
        buscaProdutos(param) {
            //altearando o estado atráves de uma mutations
            this.$store.commit('setSearch', param)
        }
    }
}
</script>


<style scoped lang="scss">

    .bodyCompoennt {
        padding: 0 30px;

        span {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        span > div {
            width: 49%;
        }

        .card {
            border-radius: 10px;
            margin: 10px 0;
            border: 0px solid white;
            box-shadow: 3px 1px 14px 1px #d9d9d9;
            width: 100%;
        }

        .buttons {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;

            img {
                border: 1px solid #d9d9d9;
                border-radius: 100px;
                width: 40px;
                height: 40px;
                margin: 0 5px 0px -14px;
            }

            a {
                font-family: "Montserrat", sans-serif;
                font-size: 18px;
                cursor: pointer;
                transition: 0.2s;
                color: white;
                background: #3f4a1f;
                padding: 5px 20px;
                border-radius: 30px;
            }

            a:hover {
                color: white;
                scale: 1.1;
            }
        }

        .send {
            display: flex;
            background: #3f4a1f;
            width: 204%;
            border-radius: 10px;
            margin: 20px 0 10px;
            height: 230px;

            img {
                width: 270px;
                margin: 0 auto;
                padding: 20px;
            }

            .text {
                padding: 80px 0;
                position: relative;
                left: -12%;

                h3 {
                    font-family: "Montserrat", sans-serif;
                    font-weight: 300;
                    color: #fdfdfd;
                }
                p {
                    font-family: "Montserrat", sans-serif;
                    margin: -15px 0 0;
                    color: #acacac;
                    font-weight: 300;
                    font-size: 18px;
                }
            }
        }
    }

    @media(max-width:768px) {
        .bodyCompoennt {
            padding: 0 0px;
        }

        .bodyCompoennt span > div {
            width: 100%;
        }
        
        .bodyCompoennt .send {
            width: 100%;
        }
        .bodyCompoennt .send .text {
            left: -3%;
        }
    }

    @media(max-width: 411px) {
        .bodyCompoennt .buttons a {
            font-size: 16px;
        }
        .bodyCompoennt .send {
            height: 160px;
        }
        .bodyCompoennt .send img {
            width: 70%;
            height: 100%;
        }
        .bodyCompoennt .send .text h3 {
            font-size: 19px;
        }
        .bodyCompoennt .send .text {
            padding: 50px 0 0;
        }
        .bodyCompoennt .send .text p {
            font-size: 12px;
        }
        .bodyCompoennt .buttons img {
            width: 30px;
            height: 30px;
            margin: 0 auto;
        }
        .bodyCompoennt .buttons a {
            font-size: 13px;
            padding: 5px 5px;
            display: grid;
            color: #3f4a1f;
            background: transparent;
        }
    }

</style>
