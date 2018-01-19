;( function() {

    const cartoes = document.querySelectorAll('.cartao')

    for (let cartao of cartoes) {

        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focado')
        })
        
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(event) {
            const $elementoAtual = event.target
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

            if(isRadioTipo) {
                const novaCor = $elementoAtual.value
                cartao.style.background = novaCor
            }
        })

        cartao.addEventListener('keydown', function(event) {
            const $elementoAtual = event.target
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-tipo')
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

            if(isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click()
            }
        })

      

        cartao.addEventListener('click', function(event) {
                
            const $elementoAtual = event.target
            const isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')

            if (isRemove) {
                cartao.classList.add('cartao--somePeixinho')
                cartao.addEventListener('transitionend', function(event) {
                    cartao.remove()
                })
            }
            
            })
        
             
      
        

    }
})()