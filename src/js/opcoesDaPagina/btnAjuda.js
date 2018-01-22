;(function(criarCartao) {

const $btnAjuda = document.querySelector('#btnAjuda')

$btnAjuda.addEventListener('click', () => {
    const ajudas = [{msg :'Voce pode add cartao', cor : 'pink'},
    {msg :'Remover cartao', cor : 'orange'},
    {msg :'Mudar a cor', cor : 'lime'},
    {msg :'Você pode arrumar a coluna', cor : 'silver'},
    {msg :'"Acessívelzaodaporra"', cor : 'purple'}]

    ajudas.reverse().forEach(ajuda => {
        criarCartao(ajuda.msg, ajuda.cor)
    })
})

   



$btnAjuda.classList.remove('no-js')
})(criarCartao)