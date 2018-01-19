;( function() {


    let contador = document.querySelectorAll('.cartao').length

    const form = document.querySelector('.formNovoCartao')
    form.classList.remove('no-js')

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const $campoConteudo =  document.querySelector('.formNovoCartao-conteudo')
        const conteudo = $campoConteudo.value.trim()


        if(!conteudo) {
            const $msgErro = document.createElement('erro')
            $msgErro.innerHTML = `<div class="formNovoCartao-msg">Formulário inválido. Não digite vários nada!!!!</div>`
            
            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);
            $msgErro.addEventListener('animationend', function(event) {
                $msgErro.remove()
            })

        } else {
            contador++

            const $tpl = document.createElement('tpl')
            $tpl.innerHTML = `<article id="cartao_${contador}" class="cartao ">
            <div class="opcoesDoCartao">
              <!-- this em eventos de elementos = elemento -->
              <!-- Exercicio 8 da apostila  do **PDF** -->
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
              </button>
    
              <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
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
          </article>`

          document.querySelector(`#cartao_1`).insertAdjacentElement('beforebegin', $tpl)


        }

        $campoConteudo.value = ''
    })

    
})()