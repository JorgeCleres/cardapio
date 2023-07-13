<template>
    <div>
        <b-container>
            <div class="cardLogin">
                <div class="logo">
                    <img src="@/assets/image/logo.png" alt="logo">
                </div>
                <div class="form" v-on:submit.prevent="loginSubmitUserForm()">
                    <b-form-input v-model="user.email" placeholder="Email"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Senha"></b-form-input>
                    <router-link to="/register"> Cadastre Aqui </router-link>
                    <b-button @click="submitLogin" variant="outline-primary">Entrar</b-button>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import Vue from 'vue'
import swal from 'sweetalert';

export default {
    data() {
        return {
            user: {
                email: "jrg@hotmail.com",
                password: "123",
            }
        }
    },
    methods: {
        loginSubmitUserForm() {},
        async submitLogin() {
            await Vue.prototype.$http.post('/login', this.user)
                .then( (resp) => {
                    let dados = resp.data
                    localStorage.setItem("jwt", dados.token);
                    swal({
                        title: 'Sucesso',
                        text: 'Login  Feito com sucesso!',
                        icon: 'success',
                    });
                    this.$router.push('/');
                })
                .catch( () => {
                    swal({
                        title: 'Senha Incorreta!',
                        text: 'Digite a senha novamente!',
                        icon: 'error',
                    });
                })
        }
    }
}
</script>


<style scoped lang="scss">
    .cardLogin {
        width: 450px;
        box-shadow: 1px 5px 7px grey;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 22vw;

        a {
            text-decoration: auto;
            color: rgb(169, 169, 169);
            font-size: 12px;
            margin: 10px;
            transition: 0.8s;
        }
        a:hover {
            color: #3F4A1F;
            font-weight: 600;;
        }

        .logo {
            background: #3F4A1F;
            padding: 20px;

            img {
                width: 50%;
                margin: 0 auto;
                display: block;
            }
        }

        .form {
            padding: 20px;

            input {
                margin: 10px;
            }

            button {
                margin: 0 auto;
                display: block;
                color: #3f4a1f;
                border: 1px solid #3f4a1f;
                transition: 0.3s;
            }

            button:hover {
                background: #3f4a1f;
                color: white;
            }
        }
    }
</style>