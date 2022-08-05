Highcharts.getJSON('https://kevenwm.github.io/portalequity/data.csv', function (data) {
    // Create the chart
    Highcharts.chart('container', {
        rangeSelector: {
            selected: 1
        },

        chart: {

            type: 'line',
            zoomType: 'x',


        },

        credits: {
            enabled: false,
        },



        title: {
            text: ""
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            animation: true,
            shared: true
        },

        yAxis: {
            title: {
                text: "Rentabilidade"
            },
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }


            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        colors: ['#DAA520', '#000000'],

        plotOptions: {

            series: {
                compare: 'percent',
                showInNavigator: true,
                marker: {
                    enabled: false
                }

            }

        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

