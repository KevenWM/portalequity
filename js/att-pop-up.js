/*const { color } = require("highcharts")*/

function popupatt() {

    let popup = document.querySelector('#pop-up-att')


    if ($('#pop-up-att').css('display') === 'none') {
        document.getElementById("pop-up-att").style.display = "block"

        popup.innerHTML = `<strong>ITUB4 - 03/10/2022</strong> <p> Acreditamos que bancos se beneficiarão no cenário que vem a frente, 
        além disso o valuation está muito atrativo para ignorar. Compramos 2,5% de Itaú. </p>
        
        <br>

        <strong>BBDC4 - 03/10/2022</strong> <p> Acreditamos que bancos se beneficiarão no cenário que vem a frente, 
        além disso o valuation está muito atrativo para ignorar. Compramos 2,5% de Bradesco.</p>

        <br>

        <strong>PETR4 - 03/10/2022</strong> <p> Com o cenário de eleição e alta forte em Petrobras, decidimos reduzir a exposição, colocar lucro no bolso e aguardar
        mais informações para revisar a tese.</p>

        <strong>BBAS3 - 03/10/2022</strong> <p> Com o cenário de eleição e alta forte em Banco do Brasil, decidimos reduzir a exposição, colocar lucro no bolso e aguardar
        mais informações para revisar a tese.</p>
        
        `

    }
    else {
        document.getElementById("pop-up-att").style.display = "none"
    }

}