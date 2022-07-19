document.addEventListener('DOMContentLoaded', () => {
    Highcharts.setOptions({
        colors: ['#000000', '#331a00', '#663300', '#994d00', '#806000', '#b38600', '#e6ac00', '#5c5c3d', '#999966', '#b8b894', '#e0e0d1']
    });


    // Build the chart

    Highcharts.chart('pizza-position-prev', {
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
                { name: 'Vêneto Dynamic FIA', y: 48.00 },
                { name: 'RF Pós Fixado', y: 44.80 },
                { name: 'RF Inflação', y: 6.70 },
                { name: 'Liquidez', y: 1.20 },
            ]
        }]
    });

});