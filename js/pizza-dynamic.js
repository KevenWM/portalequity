
let dt_upsidem = [64.40, 61.45, 78.26, 95.26, 83.98, 90.35, 75.57, 81.71, 83.96, 100.18, 82.93, 95.80, 82.92]

var el_count = dt_upsidem.length

const dt_mm_up = []

for (let i = 0; i <= el_count; i++) {

    if (i < 2) {

        var average_up = dt_upsidem[i]

    } else {

        var average_up = ((dt_upsidem[i] + dt_upsidem[i - 1] + dt_upsidem[i - 2]) / 3)

    }

    dt_mm_up.push(average_up)
}


/***************** GRÁFICO DE PIZAA ******************/

document.addEventListener('DOMContentLoaded', () => {
    Highcharts.setOptions({
        colors: ['#000000', '#331a00', '#663300', '#994d00', '#806000', '#b38600', '#e6ac00', '#5c5c3d', '#999966', '#b8b894', '#e0e0d1']
    });


    // Build the chart

    Highcharts.chart('pizza-position', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },

        credits: {
            enabled: false,
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Percentual',
            data: [
                { name: 'SALDO', y: 14.68 },
                { name: 'ALSO3', y: 11.09 },
                { name: 'BPAC11', y: 10.17 },
                { name: 'RRRP3', y: 9.66 },
                { name: 'SIMH3', y: 4.99 },
                { name: 'BBAS3', y: 4.89 },
                { name: 'NEOE3', y: 4.19 },
                { name: 'ITSA4', y: 4.14 },
                { name: 'BLAU3', y: 4.02 },
                { name: 'VAMO3', y: 3.93 },
                { name: 'JBSS3', y: 3.65 },
                { name: 'XPBR31', y: 3.60 },
                { name: 'ALUP11', y: 3.03 },
                { name: 'M1TA34', y: 3.02 },
                { name: 'SUZB3', y: 2.95 },
                { name: 'KLBN11', y: 2.94 },
                { name: 'HBSA3', y: 2.51 },
                { name: 'SMTO3', y: 2.24 },
                { name: 'PFRM3', y: 2.06 },
                { name: 'JALL3', y: 1.05 },
                { name: 'DMVF3', y: 1.01 },
            ]
        }]
    });

});

/***************** GRÁFICO DE PIZA POR SETOR ******************/

document.addEventListener('DOMContentLoaded', () => {
    Highcharts.setOptions({
        colors: ['#000000', '#331a00', '#663300', '#994d00', '#806000', '#b38600', '#e6ac00', '#5c5c3d', '#999966', '#b8b894', '#e0e0d1']
    });


    // Build the chart

    Highcharts.chart('pizza-position-setor', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },

        credits: {
            enabled: false,
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Percentual',
            data: [
                { name: 'Bancos e Seguradoras', y: 22.79 },
                { name: 'SALDO', y: 14.68 },
                { name: 'Transporte e Logística', y: 11.42 },
                { name: 'Real State e Shopping', y: 11.09 },
                { name: 'Industrial e Petroquímico', y: 9.66 },
                { name: 'Utilities', y: 7.22 },
                { name: 'Saúde e Educação', y: 7.08 },
                { name: 'Internacional', y: 5.90 },
                { name: 'Consumo e Alimentos', y: 3.65 },
                { name: 'Açucar e Álcool', y: 3.29 },
                { name: 'Tecnologia', y: 3.02 },
            ]
        }]
    });

});

/***************** UPSIDE MÉDIO DA CARTEIRA ******************/

document.addEventListener('DOMContentLoaded', () => {
    Highcharts.setOptions({
        colors: ['rgb(111, 62, 9)', '#e6ac00'],
    });

    Highcharts.chart('upside-medio', {
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            animation: true,
            shared: true
        },

        credits: {
            enabled: true,
            text: '*Nosso horizonte de projeções está entre 3 a 5 anos.',
            position: {
                align: 'left',
                x: 15
            },



        },
        xAxis: {

            categories: ['13/09/2021', '08/10/2021', '26/11/2021', '05/01/2022', '14/02/2022', '11/03/2022', '08/04/2022', '13/05/2022', '10/06/2022', '08/07/2022', '19/08/2022', '16/09/2022', '14/10/2022']
        },

        yAxis: {
            title: {
                text: "Upside Médio"
            },
        },


        series: [{
            type: 'column',
            name: 'Upside Médio',
            data: dt_upsidem
        }, {
            type: 'spline',
            name: 'Média Histórica (3M)',
            data: dt_mm_up,
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }]
    });

});







