document.addEventListener('DOMContentLoaded', () => {

    Highcharts.setOptions({
        colors: ['#663300', '#806000', '#b38600', '#adad85']
    });

    Highcharts.chart('container-py', {
        chart: {
            type: 'pyramid'
        },
        title: {
            text: '',

        },

        credits: {
            enabled: false,
        },

        tooltip: {
            enabled: true,
            pointFormat: '<b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            animation: true,
            shared: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ',
                    softConnector: true
                },
                center: ['50%', '50%'],
                width: '50%',
                height: '50%',
            }

        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Percentual',
            data: [
                ['Mid Caps', 45.34],
                ['Large Caps', 26.48],
                ['Small Caps', 22.86],
                ['Saldo', 5.33],
            ]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1000
                },
                chartOptions: {
                    plotOptions: {
                        series: {
                            dataLabels: {
                                inside: false,
                                format: '<b>{point.name}</b> <br/> <b>{point.y}</b>  ({point.change}%)<br/>',

                            },
                            center: ['50%', '50%'],
                            width: '50%',
                            height: '80%',
                        }
                    }
                }
            }]
        }
    });
});

/*Exposição*/

document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container-exp', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ''
        },

        credits: {
            enabled: false,
        },

        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name} <b>{point.percentage:.1f}%</b>'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Percentual',
            data: [
                ['Qualidade', 14, 78],
                ['Nacional', 31.24],
                {
                    name: 'Independente',
                    y: 31.54,
                    sliced: true,
                    selected: true
                },
                ['Dolarizada', 22.44],
            ]
        }]
    });
});