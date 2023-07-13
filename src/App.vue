<template>
  <div id="app">
    <AlertNotification/>
    <router-view/>
  </div>
</template>

<script>
import AlertNotification from '@/components/AlertNotification.vue'

export default {
    name: 'App',
    components: { 
        AlertNotification
    },
    created() {
        this.$store.dispatch('initProdutos')
    },
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    //css MODAL CARD
    .modal-body {
        padding: 0 !important;
    }

    .modal-content {
        height: auto;
        padding: 0 0 20px;
    }

    button.close {
        margin: 10px 0 -20px;
        z-index: 1 !important;
        border-radius: 20px !important;
        position: relative !important;
        top: -15px !important;
        border: 0px solid white !important;
        color: #707070 !important;
        font-weight: 900 !important;
        box-shadow: 1px 1px 2px grey !important;
        padding: 0px 7px 3px 8px !important;
        font-size: 16px !important;
        transition: 0.4s !important;
    }

    button.close:hover {
        scale: 1.4 !important;
        box-shadow: 4px 4px 8px grey !important;
    }

    /* Works on Firefox */
    * {
    scrollbar-width: thin;
    scrollbar-color: rgb(255, 255, 255) rgb(214, 214, 214);
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: rgb(255, 255, 255);
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgb(214 214 214);
        border-radius: 20px;
        border: 4px solid white
    }

    
</style>
