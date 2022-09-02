/*const { color } = require("highcharts")*/

function popupatt() {

    let popup = document.querySelector('#pop-up-att')


    if ($('#pop-up-att').css('display') === 'none') {
        document.getElementById("pop-up-att").style.display = "block"

        popup.innerHTML = `<strong>WIZS3 - 31/08/2022</strong> <p> Em agosto decidimos reduzir totalmente a posição no ativo WIZS3 devido aos movimentos de mercado onde vimos oportunidade
        de realocação de recursos em outras oportunidades, seguiremos acompanhando o case e entraremos novamente caso o up-side esperado volte a ser atrativo. </p>
        
        <br>

        <strong>XPBR31 - 31/08/2022</strong> <p> Recentemente finalizamos o estudo do case de XP e alinhado com uma queda recente do papel abaixo dos R$ 98,00 decidimos pelo novo investimento. 
        Apesar de focada no mercado de capitais, o plano de negócios da XP está entrando em novas linhas de receitas bancárias, e alinhado ao valor descontado atualmente, acreditos
        que o papel tem boa margem de segurança com um retorno atrativo.</p>

        <br>

        <strong>Saldo - 31/08/2022</strong> <p> No consolidado, com o desinvestimento de Wiz e Investimento em XP nosso saldo acumulado ficou próximo de 5,3%. Acreditamos que
        esse percentual é saudável para o momento atual e estamos atentos a novas oportunidades de alocação ou realização de lucros.</p>
        
        `




    }
    else {
        document.getElementById("pop-up-att").style.display = "none"
    }

}