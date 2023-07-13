import Vue from 'vue';
import axios from 'axios';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://cardapio-ya1c.onrender.com'
            //baseURL: 'http://localhost:3000/'
        })
    }
})