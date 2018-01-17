(function () {
    const btnRemove = document.querySelector('.opcoesDoCartao-remove')

btnRemove.addEventListener('click', function() {
    const cartao = this.parentNode.parentNode
    cartao.classList.add('cartao--somePeixinho')


    cartao.addEventListener('transitionend', function() {
        cartao.remove()
    })

})



})()