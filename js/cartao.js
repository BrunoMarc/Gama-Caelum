;( function() {

    const cartoes = document.querySelectorAll('.cartao')

    for (let cartao of cartoes) {

        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focado')
        })
        
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('click', function(event) {
            const $elementoAtual = event.target
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

            if(isRadioTipo) {
                const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')
                const novaCor = $elementoAtual.value
                cartao.style.background = novaCor
            }
        })
        

    }
})()