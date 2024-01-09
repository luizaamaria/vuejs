new Vue({
    el: '#desafio',
    data: {
        valor: 'teste'
    },
    methods: {
        exibirAlerta(event) {
            alert('Alerta!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})