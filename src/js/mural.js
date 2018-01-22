;(function($) {
    

    let contador = $('.cartao').length

    function criarCartao(conteudo, cor = '') {
        contador++

            const $novoCartao = $(`<article id="cartao_${contador}" style='background: ${cor}' class="cartao ">
            <div class="opcoesDoCartao">
              <!-- this em eventos de elementos = elemento -->
              <!-- Exercicio 8 da apostila  do **PDF** -->
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
              </button>
    
              <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${cor ? '' : 'checked'}>
              <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corInspiração-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
          </article>`)

          $('.mural').prepend($novoCartao)

          $novoCartao.on('focusin', function() {
            $novoCartao.addClass('cartao--focado')
        })
        
        $novoCartao.on('focusout', function() {
            $novoCartao.removeClass('cartao--focado')
        })

        $novoCartao.on('change', '.opcoesDoCartao-radioTipo', function(event) {
            const $elementoAtual = $(event.target)

            
                const novaCor = $elementoAtual.val()
                $novoCartao.css('background', novaCor)
            
        })

        $novoCartao.on('keydown', '.opcoesDoCartao-tipo', function(event) {
            const $elementoAtual = $(event.target)

            if(event.key === 'Enter' || event.key === ' ') {
                $elementoAtual.click()
            }
        })

      

        $novoCartao.on('click', '.opcoesDoCartao-remove', function(event) {
                
            const $elementoAtual = $(event.target)

            
                $novoCartao.addClass('cartao--somePeixinho')
                $novoCartao.on('transitionend', function(event) {
                    $novoCartao.remove()
                })
            
            
            })

    }

    window.criarCartao = criarCartao
})(jQuery)