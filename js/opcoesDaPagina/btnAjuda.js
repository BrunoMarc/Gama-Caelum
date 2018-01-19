;(function() {

const $btnAjuda = document.querySelector('#btnAjuda')

$btnAjuda.addEventListener('click', () => {
    const ajudas = ['Voce pode add cartao',
                    'Remover cartao',
                    'Mudar a cor',
                    'Você pode arrumar a coluna',
                    '"Acessívelzaodaporra"']

    ajudas.forEach(ajuda => {
        alert(ajuda)
    })
})

   



$btnAjuda.classList.remove('no-js')
})()