/*const { color } = require("highcharts")*/

function popupatt() {

    let popup = document.querySelector('#pop-up-att')


    if ($('#pop-up-att').css('display') === 'none') {
        document.getElementById("pop-up-att").style.display = "block"

        popup.innerHTML = `<strong>Portfólio - 14/06/2023</strong> <p> Recentemente zeramos a posição em M1TA34 devido a forte alta do ativo no ano de 2023. Além disso,
        abrimos um pequeno short em UNIP6 pelo fato de não concordamos com o atual preço do cloro e PVC, podendo aumentar no futuro a depender das condições de mercado. 
        O mais novo ativo da carteira é BEEF3, acreditamos que o ciclo está positivo e o ativo muito descontado. </p>
        
        `

    }
    else {
        document.getElementById("pop-up-att").style.display = "none"
    }

}