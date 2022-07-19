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
                { name: 'BONDS e HYG/LQD', y: 10.80 },
                { name: 'Lyxor Bridgewater Core', y: 9.52 },
                { name: 'JPM Global Macro Opp', y: 9.20 },
                { name: 'IAU US', y: 7.15 },
                { name: 'GLD US', y: 7.14 },
                { name: 'Fundsmith FIA ', y: 6.32 },
                { name: 'CAIXA OFFSHORE', y: 5.66 },
                { name: 'MS Global Opp', y: 5.05 },
                { name: 'EWZ US', y: 4.77 },
                { name: 'DBC US', y: 4.18 },
                { name: 'INDA US', y: 3.26 },
                { name: 'Nordea Alfa 10', y: 3.24 },
                { name: 'VBR US', y: 2.87 },
                { name: 'TBX US', y: 2.84 },
                { name: 'QUAL US', y: 2.58 },
                { name: 'GDX US', y: 2.32 },
                { name: 'MCHI US', y: 2.24 },
                { name: 'GNR US', y: 2.21 },
                { name: 'TESOURO SELIC FI RF', y: 1.95 },
                { name: 'COPX US', y: 1.94 },
                { name: 'NTNB IPCA 45', y: 1.60 },
                { name: 'NTNB IPCA 26', y: 1.60 },
                { name: 'URNM US', y: 1.56 },

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
                { name: 'Ações Globais', y: 27.09 },
                { name: 'Hedge Funds', y: 21.96 },
                { name: 'Renda Fixa', y: 21.61 },
                { name: 'Proteções', y: 17.13 },
                { name: 'Commodities', y: 12.21 },
            ]
        }]
    });

});