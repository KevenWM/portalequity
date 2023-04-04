/*const { color } = require("highcharts")*/

function popupatt() {

    let popup = document.querySelector('#pop-up-att')


    if ($('#pop-up-att').css('display') === 'none') {
        document.getElementById("pop-up-att").style.display = "block"

        popup.innerHTML = `<strong>Portfólio - 03/04/2023</strong> <p> No começo do ano de 2023 focamos em um caixa maior por volta de 17% para acompanhar os movimentos
        de mercado e primeiros passos do novo governo. No patarmar de preço atual, começamos a reduzir o nosso caixa e alocar em teses micro que acreditamos
        ser independente do cenário econômico interno. Patamar atualm de caixa está por volta de 15%, sendo o ativo mais novo da carteira BLAU3, no qual ainda 
        estamos montando uma posição. </p>
        
        `

    }
    else {
        document.getElementById("pop-up-att").style.display = "none"
    }

}