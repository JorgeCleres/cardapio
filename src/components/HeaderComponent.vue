<template>
    <div class="header">
        <b-container>
            <!-- <router-link v-if="!auth" to="/login">
                <b-icon icon="door-closed">login</b-icon>
            </router-link>

            <b-icon v-else @click="logout" icon="x-lg"></b-icon> -->

            <img src="@/assets/image/banner.jpg" alt="banner">
            <div class="header-body">
                <img src="@/assets/image/logo.png" alt="logo">
                <div class="text">
                    <h2>Belle Biscoitos</h2>
                    <h3>Especialista em culinária vegana</h3>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return  {
            auth: false
        }
    },
    created() {
        this.auth = localStorage.getItem('jwt') != null ? true : false
    },
    computed: {
        authenticator() {
            return this.$store.getters.authentication
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('jwt');
            window.location.reload(true);
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    background: #3F4A1F;
    height: 12rem;
    margin-bottom: 22rem;

    svg.bi-door-closed.b-icon.bi {
        float: right;
        font-size: 22px;
        margin: 10px 0 -20px;
        color: white;
        transition:  0.4s;
        padding: 3px;
        cursor: pointer;
    }

    svg.bi-x-lg.b-icon.bi {
        float: right;
        font-size: 22px;
        margin: 10px 0 -20px;
        color: white;
        transition:  0.4s;
        padding: 3px;
        cursor: pointer;
    }

    .b-icon.bi:hover {
        scale: 1.1;
        border-radius: 50px;
        border: 1px solid white;

    }

    img {
        width: 100%;
        height: 350px;
        margin-top: 30px;
        border-radius: 10px;
        border: 1px solid white;
    }

    .header-body {
        display: flex;

        img {
            width: 250px;
            height: auto;
            margin: 0;
            padding: 10px;
            border: 0px solid white;
            background: #3f4a1f;
            margin: -100px 5px 0px 30px;
        }

        .text {
            h2 {
                text-align: start;
                color: #3f4a1f;
                font-family: "Montserrat", sans-serif;
                margin: 10px 10px 0;
                font-size: 3rem;
            }

            h3 {
                text-align: start;
                color: #3f4a1f;
                font-family: "Montserrat", sans-serif;
                margin: 0px 10px 0;
                font-weight: 400;
                font-size: 22px;
            }
        }
    }
}

@media(max-width: 768px) {
    .header img {
        height: auto;
    }
    .header {
        margin-bottom: 8rem;
    }

    .header .header-body img {
        width: 30%;
        height: 100%;
        margin: -35px 5px 0px 10px;
    }

    .header .header-body .text h2 {
        font-size: 2rem;
    }

    .header .header-body .text h3 {
        font-size: 19px;
    }
}

@media(max-width: 560px) {
    .header {
        height: 8rem;
    }
    .header img {
        margin-top: 1px;
    }
    .header .container {
        padding: 2px !important;
    }
    .header .header-body img {
        width: 30%;
        margin: -45px 0px 0px 10px;
    }

    .header .header-body .text h2 {
        font-size: 1.5rem;
    }

    .header .header-body .text h3 {
        font-size: 13px;
    }
}

@media(max-width: 480px) {
    .header {
        height: 6rem;
    }
    .header .header-body .text h3 {
        font-size: 11px;
    }
    .header .header-body .text h2 {
        font-size: 1.3rem;
    }
}

@media(max-width: 400px) {
    .header {
        height: 4rem;
    }
}

</style>
