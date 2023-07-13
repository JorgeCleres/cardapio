<template>
    <div>
        <b-container>
            <div class="cardLogin">
                <div class="logo">
                    <img src="@/assets/image/logo.png" alt="logo">
                </div>
                <div v-if="verification" class="form" v-on:submit.prevent="registerSubmitUserForm()">
                    <b-form-input v-model="user.name" placeholder="Nome"></b-form-input>
                    <b-form-input v-model="user.email" placeholder="Email"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Senha"></b-form-input>
                    <b-form-input type="password" v-model="user.confirmPassword" placeholder="Confirma Senha"></b-form-input>
                    <b-button @click="submitRegister" variant="outline-primary">Entrar</b-button>
                </div>
                <div v-else class="form verify">
                    <b-form-input type="password" v-model="passVerification" placeholder="Digite a Senha"></b-form-input>
                    <b-button @click="verificar" variant="outline-primary">Enviar</b-button>
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
                name: "juca",
                email: "juca@hotmail.com",
                password: "",
                confirmPassword: ""
            },
            passVerification: '123',
            verification: '',

            counterCaracters: 0,
            passOne: false
        }
    },
    methods: {
        registerSubmitUserForm() {},
        async submitRegister() {
            alert('ola')
            if(this.user.password === this.user.confirmPassword && this.user.password.length > 6) {
                await Vue.prototype.$http.post('/register', this.user)
                    .then(() => {
                        swal({
                            title: 'Sucesso',
                            text: 'Registro feito com sucesso!',
                            icon: 'success',
                        });
                        this.$router.push('/login');
                    }).catch(() => {
                        swal({
                            title: 'Erro',
                            text: 'Erro ao criar novo registro!',
                            icon: 'error',
                        });
                    })
            } else {
                swal({
                    title: 'Erro',
                    text: 'Senhas não coincidem ou possuem menos de 6 caracteres',
                    icon: 'error',
                });
            }
            
        },
        verificar() {
            if(this.passVerification == '123') {
                this.verification = true
            } else {
                alert('bye bye')
            }
        }
    }
}
</script>


<style scoped lang="scss">

    .danger {
        border: 2px solid red;
    }

    .form-control:focus {
        box-shadow: 0 0 0 0rem rgba(13, 110, 253, 0.25);
    }
    .cardLogin {
        width: 450px;
        box-shadow: 1px 5px 7px grey;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 26vw;

        .verify {
            position: absolute;
            top: 6vw;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: 0vw;
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