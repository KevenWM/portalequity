const context = document.getElementById("data-set").getContext("2d");
let line = new Chart(context, {});
//Values from the form
const intialAmount = document.getElementById("initialamount");
const mensalaport = document.getElementById("mensalaport");
const years = document.getElementById("years");
const years2 = document.getElementById("years2");
const rates = document.getElementById("rates");
const custov = document.getElementById("custov");

//Messge
const message = document.getElementById("message");
const tableprev = document.getElementById("table-prev");

//The calculate button
const button = document.querySelector(".input-group button");
//Attach an event listener
button.addEventListener("click", calculateGrowth);

const data = [];
const labels = [];


function calculateGrowth(e) {
    e.preventDefault();
    data.length = 0;
    labels.length = 0;
    let growth = 0;
    try {
        var initial = (parseInt(intialAmount.value));
        var datafim = (parseInt(years2.value));
        var fim = (parseInt(intialAmount.value));
        var patual = (parseInt(intialAmount.value));
        const mensal = parseInt(mensalaport.value);
        const period = ((parseInt(years2.value) - parseInt(years.value)) * 12);
        var interest = (1 + ((parseInt(rates.value) / 100)));
        var interest = Math.pow(interest, (1 / 12))


        for (let i = 1; i <= period; i++) {
            const final = (initial * Math.pow(interest, 1));
            var initial = (final + mensal);
            data.push(toDecimal(initial, 2));
            labels.push("Mês " + i);
            growth = toDecimal(initial, 2).toLocaleString("pt-BR");


            if (i == Math.round((period / period))) {
                var period1 = toDecimal(initial, 2).toLocaleString("pt-BR");
            }

            if (i == Math.round(((period) / 5))) {
                var period2 = toDecimal(initial, 2).toLocaleString("pt-BR");
            }

            if (i == Math.round(((period) / 2))) {
                var period3 = toDecimal(initial, 2).toLocaleString("pt-BR");
            }

            if (i == Math.round(((period) / 1.5))) {
                var period4 = toDecimal(initial, 2).toLocaleString("pt-BR");
            }
        }


        //ZERANDO A GRANA ATÉ O FIM

        var fim = initial

        const part1 = Math.pow(1.0017, ((100 - datafim) * 12)) * 0.0017
        const part2 = Math.pow(1.0017, ((100 - datafim) * 12)) - 1

        const retira = ((fim) * (part1 / part2));




        for (let i = period; i <= period + ((100 - datafim) * 12); i++) {
            var patual = (fim - retira);
            fim = patual * 1.00172
            data.push(toDecimal(patual, 2));
            labels.push("Mês " + i);
            plfim = toDecimal(retira, 2).toLocaleString("pt-BR");
        }


        //
        message.innerText = `Você terá um patrimônio de R$ ${growth} depois ${period / 12} anos e poderá gastar R$ ${plfim} por mês até completar 100 anos.`;
        tableprev.innerHTML = `  
        <table class='table-port-sec'>
        <thead>
            <tr>
                <th>Ano</th>
                <th>Patrimônio</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${toDecimal((period - (period - 1)) / 12, 1)}</td>
                <td>R$ ${period1}</td>
            </tr>
            <tr>
                <td>${toDecimal(((period / 5) / 12), 1)}</td>
                <td>R$ ${period2}</td>
            </tr>
            <tr>
                <td>${toDecimal(((period / 2) / 12), 1)}</td>
                <td>R$ ${period3}</td>
            </tr>
            <tr>
                <td>${toDecimal(((period / 1.5) / 12), 1)}</td>
                <td>R$ ${period4}</td>
            </tr>
            <tr>
                <td>${toDecimal((period / 12), 1)}</td>
                <td>R$ ${growth}</td>
            </tr>
        </tbody>

    </table> `
        drawGraph();
    } catch (error) {
        console.error(error);
    }
}

function drawGraph() {
    line.destroy();
    line = new Chart(context, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: "Patrimônio",
                data,
                fill: true,
                backgroundColor: "rgba(111, 62, 9, 0.8)",
                borderWidth: 3
            }]
        }
    });
}

function toDecimal(value, decimals) {
    return +value.toFixed(decimals);
}