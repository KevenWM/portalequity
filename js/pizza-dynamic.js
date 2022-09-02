

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
                { name: 'ALSO3', y: 13.00 },
                { name: 'SIMH3', y: 10.00 },
                { name: 'BPAC11', y: 9.00 },
                { name: 'TASA4', y: 9.00 },
                { name: 'SALDO', y: 5.00 },
                { name: 'RRRP3', y: 8.00 },
                { name: 'VAMO3', y: 6.50 },
                { name: 'BRPR3', y: 6.00 },
                { name: 'M1TA34', y: 5.00 },
                { name: 'SBFG3', y: 5.00 },
                { name: 'XPBR31', y: 4.00 },
                { name: 'ENBR3', y: 4.00 },
                { name: 'PETR4', y: 4.00 },
                { name: 'BBAS3', y: 4.00 },
                { name: 'BPAN4', y: 4.00 },
                { name: 'PFRM3', y: 2.50 },
                { name: 'WIZS3', y: 1.00 },
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
                { name: 'Real Estate', y: 18.79 },
                { name: 'Road & Rail', y: 16.39 },
                { name: 'Oil & Gas', y: 12.07 },
                { name: 'Capital Markets', y: 13.21 },
                { name: 'Banks', y: 8.13 },
                { name: 'Aerospace & Defense', y: 8.76 },
                { name: 'Cash', y: 5.33 },
                { name: 'Media', y: 5.00 },
                { name: 'Specialty Retail', y: 4.99 },
                { name: 'Eletric Utilities', y: 4.02 },
                { name: 'Health Care', y: 2.56 },
                { name: 'Insurance', y: 0.76 },
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
            enabled: false,
        },
        xAxis: {

            categories: ['13/09/2021', '08/10/2021', '26/11/2021', '05/01/2022', '14/02/2022', '11/03/2022', '08/04/2022', '13/05/2022', '10/06/2022', '08/07/2022','19/08/2022']
        },

        yAxis: {
            title: {
                text: "Upside Médio"
            },
        },


        series: [{
            type: 'column',
            name: 'Upside Médio',
            data: [64.40, 61.45, 78.26, 95.26, 83.98, 90.35, 75.57, 81.71, 83.96, 100.18, 82.93]
        }, {
            type: 'spline',
            name: 'Média Histórica',
            data: [79.48, 79.48, 79.48, 79.48, 79.48, 79.48, 79.48, 79.48, 79.48, 79.48, 79.48],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }]
    });

});







