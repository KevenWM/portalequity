document.addEventListener('DOMContentLoaded', () => {
    Highcharts.setOptions({
        colors: ['#000000', '#331a00', '#663300', '#994d00', '#806000', '#b38600', '#e6ac00', '#5c5c3d', '#999966', '#b8b894', '#e0e0d1']
    });


    // Build the chart

    Highcharts.chart('pizza-position-vp', {
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
                { name: 'BONDS e HYG/LQD', y: 20.00 },
                { name: 'Fundsmith FIA ', y: 8.00 },
                { name: 'TESOURO SELIC FI RF', y: 5.50 },
                { name: 'Lyxor Bridgewater Core', y: 5.00 },
                { name: 'JPM Global Macro Opp', y: 5.00 },
                { name: 'IAU US', y: 5.00 },
                { name: 'GLD US', y: 5.00 },
                { name: 'MS Global Opp', y: 5.00 },
                { name: 'Vêneto Dynamic', y: 5.00 },
                { name: 'Nordea Alfa 10', y: 5.00 },
                { name: 'QUAL US', y: 5.00 },
                { name: 'CAIXA OFFSHORE', y: 4.00 },
                { name: 'DBC US', y: 3.50 },
                { name: 'EWZ US', y: 3.00 },
                { name: 'VBR US', y: 3.00 },
                { name: 'DBO US', y: 3.00 },
                { name: 'GNR US', y: 2.00 },
                { name: 'URNM US', y: 2.50 },
                { name: 'NTNB IPCA 26', y: 2.00 },
                { name: 'NTNB IPCA 45', y: 1.50 },
                { name: 'TLT US', y: 1.50 },
                { name: 'TBX US', y: 0.50 },

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

    Highcharts.chart('pizza-position-setor-vp', {
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
                { name: 'Renda Fixa', y: 34.50 },
                { name: 'Ações Globais', y: 29.00 },
                { name: 'Hedge Funds', y: 15.00 },
                { name: 'Commodities', y: 11.00 },
                { name: 'Proteções', y: 10.50 },

            ]
        }]
    });

});