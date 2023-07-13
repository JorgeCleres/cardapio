import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        search: '',
        carrinho: [],
        quantidade: 0,
        notification: false
    },
    getters: {
        produtos(state) {
            return state.produtos
        },
        filteredProducts(state) {
            let items = []
            items = state.produtos.filter(produto => {
                return (
                    produto.tipo.toLowerCase().indexOf(state.search.toLowerCase()) > -1
                )
            })
            return items
        },
        carrinho(state) {
            return state.carrinho
        },
        valorTotal(state) {
            return state.carrinho.map(c => c.quantidade * parseFloat(c.preco))
                .reduce((total, atual) => total + atual, 0)
        },
        quantidade(state) {
            return state.quantidade
        },
        notification(state) {
            return state.notification
        }
    },
    mutations: {
        setProdutos(state, produtos) {
            state.produtos = produtos
        },
        setSearch(state, payload) {
            state.search = payload
        },
        adicionarProduto(state, produto) {
            state.carrinho.push(produto)
        },
        adicionarQuantidade(state, produto) {
            state.quantidade += parseInt(produto.quantidade)
        },
        removerQuantidade(state) {
            state.quantidade --
        },
        alteraCarrinho(state, param) {
            state.carrinho = param
        },
        mostraNotificacao(state, resp) {
            state.notification = resp
        },
        removeProduto(state, payload) {
            const i = state.carrinho.map( item => item.id).indexOf(payload)
            state.carrinho.splice(i, 1)
        }
    },
    actions: {
        initProdutos(context) {
            Vue.prototype.$http('/produtos').then(resp => {
                const data = resp.data.produtos
                if (data) {
                    context.commit('setProdutos', data)
                }
            })
        },
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            })
        },
        alterarQuantidade(context, payload) {
            context.commit('adicionarQuantidade', payload)
        },
        mostraNotificacao(context, payload) {
            context.commit('mostraNotificacao', payload)
        },
        removerQuantidade(context, payload) {
            context.commit('removerQuantidade', payload)
        },
        alteraCarrinho(context, paylod) {
            context.commit('alteraCarrinho', paylod)
        }
    },
    modules: {
    }
})
