<template>
    <transition-group 
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft"
    > 
        <h6 key="unique-key" v-show="executaNotification">Adicionado ao carrinho</h6>
    </transition-group>
</template>

<script>

export default {
    computed: {
        executaNotification() {
            return this.$store.getters.notification
        },
    },
    watch: {
        executaNotification() {
            if(this.executaNotification == true) {
                setTimeout(() => {
                    this.$store.dispatch('mostraNotificacao', false)
                },1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    h6 {
        background: #3f4a1f;
        position: fixed;
        top: 50%;
        width: 13%;
        color: white;
        text-align: start;
        padding: 5px 10px;
        border-radius: 0 10px 10px 0;
        left: 0;
        z-index: 1000;
        font-weight: unset;
    }

    @media(max-width: 980px) {
        h6 {
            width: 43%;
        }
    }
</style>