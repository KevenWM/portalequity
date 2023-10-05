/*const { color } = require("highcharts")*/

function popupatt() {

    let popup = document.querySelector('#pop-up-att')


    if ($('#pop-up-att').css('display') === 'none') {
        document.getElementById("pop-up-att").style.display = "block"

        popup.innerHTML = `<strong>Portfólio - </strong> <p> Com a virada do ciclo de juros no Brasil, consideramos betar o portfólio um pouco mais em juros. 
        Adicionamos LREN3 no portfólio, papel que sofreu bastante no último ciclo, acreditos que o mercado precificou um cenário que não irá acontecer e vemos como oportunidade. </p>
        `

    }
    else {
        document.getElementById("pop-up-att").style.display = "none"
    }

}