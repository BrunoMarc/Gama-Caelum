;( function() {


    

    const form = $('.formNovoCartao')
    form.removeClass('no-js')

    form.on('submit', function(event) {
        event.preventDefault()
        const $campoConteudo = form.find('.formNovoCartao-conteudo')
        const conteudo = $campoConteudo.val().trim()


        if(!conteudo) {
            const $msgErro =  $(`<div class="formNovoCartao-msg">Formulário inválido.
             Não digite vários nada!!!!</div>`)
            
            $('.formNovoCartao-salvar').prepend($msgErro);
            $msgErro.on('animationend', function(event) {
                $msgErro.remove()
            })

        } else {
            criarCartao(conteudo)
        }

        $campoConteudo.val('')
    })

    
})()