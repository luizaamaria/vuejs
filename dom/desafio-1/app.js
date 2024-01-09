new Vue({
    el: '#desafio',
    data: {
        nome: 'Luiza Maria',
        idade: 25,
        imagem: '/desafio/imagem.jpg'
    },
    methods: {
        idadeVezes3(event) {
            return this.idade * 3
        },
        random(event) {
            return Math.random()
        }
    }
})

