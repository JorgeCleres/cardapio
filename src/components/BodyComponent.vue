<template>
    <div class="bodyCompoennt">
        <div class="buttons">
            <a @click="buscaProdutos('')">
                <img src="@/assets/image/todos.png" alt="">
                Todos
            </a>
            <a @click="buscaProdutos('biscoitos')">
                <img src="@/assets/image/cookies.png" alt="">
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
            width: 28rem;
        }

        .card {
            border-radius: 1rem;
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
                width: 40px;
                height: 40px;
                margin: 0 5px 0px -14px;
            }

            a {
                font-family: "Montserrat", sans-serif;
                font-size: 1rem;
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
            width: 56.5rem;
            border-radius: 10px;
            margin: 20px 0 10px;
            height: 13rem;

            img {
                width: 24%;
                margin: 0 auto;
                padding: 10px 0 20px;
                height: fit-content;
            }

            .text {
                left: -6%;
                position: relative;
                top: 87%;
                transform: translateY(-50%);

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

    @media(max-width: 1400px) {
        .bodyCompoennt span > div {
            width: 23rem;
        }

        .bodyCompoennt .send {
            width: 48.5rem;
        }
        .bodyCompoennt .send img {
            width: 30%;
        }
    }

    @media(max-width: 1200px) {
        .bodyCompoennt span > div {
            width: 50rem;
        }
        .bodyCompoennt .send {
            width: 40rem;
        }
        .bodyCompoennt .send .text h3 {
            font-size: 1.4rem;
        }
    }

    @media(max-width: 768px) {
        .bodyCompoennt .send {
            width: auto;
        }
        .bodyCompoennt .send .text {
            left: 0%;
            top: 80%;
        }
        .bodyCompoennt .send .text h3 {
            font-size: 1.4rem;
        }
        .bodyCompoennt .send img {
            width: 35%;
        }
        .bodyCompoennt {
            padding: 0 0px;
            .buttons a {
                font-size: 1rem;
                color: #3f4a1f;
                background: white;
                padding: 5px 0px;
                border-radius: 0px;
                text-align: center;
                display: grid;
            }
            .buttons a:hover {
                color: #3f4a1f;
                scale: 1.1;
            }

            .buttons img {
                margin: 0 auto;
                background: #3f4a1f;
                border-radius: 80px;
                padding: 3px;
                width: 80px;
                height: 80px;
            }
        }
    }

    @media(max-width: 480px) {

        .bodyCompoennt .send .text h3 {
            font-size: 1.1rem;
            width: 90%;
        }
        .bodyCompoennt .send {
            height: 9rem;
        }
        .bodyCompoennt {
            padding: 0 0px;
            .buttons a {
                font-size: 0.8rem;
                border-radius: 0px;
            }

            .buttons img {
                width: 40px;
                height: 40px;
            }
        }
        .bodyCompoennt .send .text p {
            font-size: 15px;
        }
    }

</style>
