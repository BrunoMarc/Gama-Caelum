(function () {
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    for(let btn of btns) {
            btn.addEventListener('click', function() {
            
            const cartao =  btn.parentNode.parentNode
            cartao.classList.add('cartao--somePeixinho')


            cartao.addEventListener('transitionend', function() {
                cartao.remove()
            })

        })
    }



})()