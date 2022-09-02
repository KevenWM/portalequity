document.addEventListener('DOMContentLoaded', () => {

    Highcharts.chart('chart-prev', {


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

        colors: ['#DAA520', '#000000'],

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

        xAxis: {
            categories: ['25/02/2021',
                '26/02/2021',
                '01/03/2021',
                '02/03/2021',
                '03/03/2021',
                '04/03/2021',
                '05/03/2021',
                '08/03/2021',
                '09/03/2021',
                '10/03/2021',
                '11/03/2021',
                '12/03/2021',
                '15/03/2021',
                '16/03/2021',
                '17/03/2021',
                '18/03/2021',
                '19/03/2021',
                '22/03/2021',
                '23/03/2021',
                '24/03/2021',
                '25/03/2021',
                '26/03/2021',
                '29/03/2021',
                '30/03/2021',
                '31/03/2021',
                '01/04/2021',
                '05/04/2021',
                '06/04/2021',
                '07/04/2021',
                '08/04/2021',
                '09/04/2021',
                '12/04/2021',
                '13/04/2021',
                '14/04/2021',
                '15/04/2021',
                '16/04/2021',
                '19/04/2021',
                '20/04/2021',
                '22/04/2021',
                '23/04/2021',
                '26/04/2021',
                '27/04/2021',
                '28/04/2021',
                '29/04/2021',
                '30/04/2021',
                '03/05/2021',
                '04/05/2021',
                '05/05/2021',
                '06/05/2021',
                '07/05/2021',
                '10/05/2021',
                '11/05/2021',
                '12/05/2021',
                '13/05/2021',
                '14/05/2021',
                '17/05/2021',
                '18/05/2021',
                '19/05/2021',
                '20/05/2021',
                '21/05/2021',
                '24/05/2021',
                '25/05/2021',
                '26/05/2021',
                '27/05/2021',
                '28/05/2021',
                '31/05/2021',
                '01/06/2021',
                '02/06/2021',
                '04/06/2021',
                '07/06/2021',
                '08/06/2021',
                '09/06/2021',
                '10/06/2021',
                '11/06/2021',
                '14/06/2021',
                '15/06/2021',
                '16/06/2021',
                '17/06/2021',
                '18/06/2021',
                '21/06/2021',
                '22/06/2021',
                '23/06/2021',
                '24/06/2021',
                '25/06/2021',
                '28/06/2021',
                '29/06/2021',
                '30/06/2021',
                '01/07/2021',
                '02/07/2021',
                '05/07/2021',
                '06/07/2021',
                '07/07/2021',
                '08/07/2021',
                '09/07/2021',
                '12/07/2021',
                '13/07/2021',
                '14/07/2021',
                '15/07/2021',
                '16/07/2021',
                '19/07/2021',
                '20/07/2021',
                '21/07/2021',
                '22/07/2021',
                '23/07/2021',
                '26/07/2021',
                '27/07/2021',
                '28/07/2021',
                '29/07/2021',
                '30/07/2021',
                '02/08/2021',
                '03/08/2021',
                '04/08/2021',
                '05/08/2021',
                '06/08/2021',
                '09/08/2021',
                '10/08/2021',
                '11/08/2021',
                '12/08/2021',
                '13/08/2021',
                '16/08/2021',
                '17/08/2021',
                '18/08/2021',
                '19/08/2021',
                '20/08/2021',
                '23/08/2021',
                '24/08/2021',
                '25/08/2021',
                '26/08/2021',
                '27/08/2021',
                '30/08/2021',
                '31/08/2021',
                '01/09/2021',
                '02/09/2021',
                '03/09/2021',
                '06/09/2021',
                '08/09/2021',
                '09/09/2021',
                '10/09/2021',
                '13/09/2021',
                '14/09/2021',
                '15/09/2021',
                '16/09/2021',
                '17/09/2021',
                '20/09/2021',
                '21/09/2021',
                '22/09/2021',
                '23/09/2021',
                '24/09/2021',
                '27/09/2021',
                '28/09/2021',
                '29/09/2021',
                '30/09/2021',
                '01/10/2021',
                '04/10/2021',
                '05/10/2021',
                '06/10/2021',
                '07/10/2021',
                '08/10/2021',
                '11/10/2021',
                '13/10/2021',
                '14/10/2021',
                '15/10/2021',
                '18/10/2021',
                '19/10/2021',
                '20/10/2021',
                '21/10/2021',
                '22/10/2021',
                '25/10/2021',
                '26/10/2021',
                '27/10/2021',
                '28/10/2021',
                '29/10/2021',
                '01/11/2021',
                '03/11/2021',
                '04/11/2021',
                '05/11/2021',
                '08/11/2021',
                '09/11/2021',
                '10/11/2021',
                '11/11/2021',
                '12/11/2021',
                '16/11/2021',
                '17/11/2021',
                '18/11/2021',
                '19/11/2021',
                '22/11/2021',
                '23/11/2021',
                '24/11/2021',
                '25/11/2021',
                '26/11/2021',
                '29/11/2021',
                '30/11/2021',
                '01/12/2021',
                '02/12/2021',
                '03/12/2021',
                '06/12/2021',
                '07/12/2021',
                '08/12/2021',
                '09/12/2021',
                '10/12/2021',
                '13/12/2021',
                '14/12/2021',
                '15/12/2021',
                '16/12/2021',
                '17/12/2021',
                '20/12/2021',
                '21/12/2021',
                '22/12/2021',
                '23/12/2021',
                '24/12/2021',
                '27/12/2021',
                '28/12/2021',
                '29/12/2021',
                '30/12/2021',
                '31/12/2021',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '10/01/2022',
                '11/01/2022',
                '12/01/2022',
                '13/01/2022',
                '14/01/2022',
                '17/01/2022',
                '18/01/2022',
                '19/01/2022',
                '20/01/2022',
                '21/01/2022',
                '24/01/2022',
                '25/01/2022',
                '26/01/2022',
                '27/01/2022',
                '28/01/2022',
                '31/01/2022',
                '01/02/2022',
                '02/02/2022',
                '03/02/2022',
                '04/02/2022',
                '07/02/2022',
                '08/02/2022',
                '09/02/2022',
                '10/02/2022',
                '11/02/2022',
                '14/02/2022',
                '15/02/2022',
                '16/02/2022',
                '17/02/2022',
                '18/02/2022',
                '21/02/2022',
                '22/02/2022',
                '23/02/2022',
                '24/02/2022',
                '25/02/2022',
                '02/03/2022',
                '03/03/2022',
                '04/03/2022',
                '07/03/2022',
                '08/03/2022',
                '09/03/2022',
                '10/03/2022',
                '11/03/2022',
                '14/03/2022',
                '15/03/2022',
                '16/03/2022',
                '17/03/2022',
                '18/03/2022',
                '21/03/2022',
                '22/03/2022',
                '23/03/2022',
                '24/03/2022',
                '25/03/2022',
                '28/03/2022',
                '29/03/2022',
                '30/03/2022',
                '31/03/2022',
                '01/04/2022',
                '04/04/2022',
                '05/04/2022',
                '06/04/2022',
                '07/04/2022',
                '08/04/2022',
                '11/04/2022',
                '12/04/2022',
                '13/04/2022',
                '14/04/2022',
                '18/04/2022',
                '19/04/2022',
                '20/04/2022',
                '22/04/2022',
                '25/04/2022',
                '26/04/2022',
                '27/04/2022',
                '28/04/2022',
                '29/04/2022',
                '02/05/2022',
                '03/05/2022',
                '04/05/2022',
                '05/05/2022',
                '06/05/2022',
                '09/05/2022',
                '10/05/2022',
                '11/05/2022',
                '12/05/2022',
                '13/05/2022',
                '16/05/2022',
                '17/05/2022',
                '18/05/2022',
                '19/05/2022',
                '20/05/2022',
                '23/05/2022',
                '24/05/2022',
                '25/05/2022',
                '26/05/2022',
                '27/05/2022',
                '30/05/2022',
                '31/05/2022',
                '01/06/2022',
                '02/06/2022',
                '03/06/2022',
                '06/06/2022',
                '07/06/2022',
                '08/06/2022',
                '09/06/2022',
                '10/06/2022',
                '13/06/2022',
                '14/06/2022',
                '15/06/2022',
                '17/06/2022',
                '20/06/2022',
                '21/06/2022',
                '22/06/2022',
                '23/06/2022',
                '24/06/2022',
                '27/06/2022',
                '28/06/2022',
                '29/06/2022',
                '30/06/2022',
                '01/07/2022',
                '04/07/2022',
                '05/07/2022',
                '06/07/2022',
                '07/07/2022',
                '08/07/2022',
                '11/07/2022',
                '12/07/2022',
                '13/07/2022',
                '14/07/2022',
                '15/07/2022',
                '18/07/2022',
                '19/07/2022',
                '20/07/2022',
                '21/07/2022',
                '22/07/2022',
                '25/07/2022',
                '26/07/2022',
                '27/07/2022',
                '28/07/2022',
                '29/07/2022',
                '01/08/2022',
                '02/08/2022',
                '03/08/2022',
                '04/08/2022',
                '05/08/2022',
                '08/08/2022',
                '09/08/2022',
                '10/08/2022',
                '11/08/2022',
                '12/08/2022',
                '15/08/2022',
                '16/08/2022',
                '17/08/2022',
                '18/08/2022',
                '19/08/2022',
                '22/08/2022',
                '23/08/2022',
                '24/08/2022',
                '25/08/2022',
                '26/08/2022',
                '29/08/2022',
                '30/08/2022',





            ]
        },
        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true,
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                name: 'Vêneto 70 Prev',
                data: [1,
                    0.9999479,
                    0.9962639,
                    1.0186703,
                    0.9999734,
                    1.0070609,
                    1.0101479,
                    0.9933743,
                    0.9900973,
                    0.996588,
                    1.0097224,
                    1.0107253,
                    1.0143449,
                    1.0104946,
                    1.0169299,
                    1.0098488,
                    1.0169479,
                    1.0160683,
                    1.0135557,
                    1.0081436,
                    1.01439,
                    1.0145684,
                    1.0145281,
                    1.0180563,
                    1.0181726,
                    1.0160379,
                    1.02124,
                    1.0232623,
                    1.0218169,
                    1.0225157,
                    1.0231848,
                    1.0263286,
                    1.0258514,
                    1.0283926,
                    1.0292405,
                    1.0319021,
                    1.0319659,
                    1.030113,
                    1.027133,
                    1.0297775,
                    1.0304089,
                    1.0273896,
                    1.0310551,
                    1.0311241,
                    1.0292786,
                    1.0310034,
                    1.02962,
                    1.0328173,
                    1.0330901,
                    1.0386793,
                    1.0400292,
                    1.0415417,
                    1.033764,
                    1.0365209,
                    1.0375098,
                    1.0418501,
                    1.0419305,
                    1.042186,
                    1.0455391,
                    1.0443474,
                    1.0474542,
                    1.0475072,
                    1.0488276,
                    1.050435,
                    1.0522081,
                    1.0545116,
                    1.0587772,
                    1.0619235,
                    1.0657892,
                    1.0652176,
                    1.0642548,
                    1.0638686,
                    1.0641343,
                    1.0594729,
                    1.0690435,
                    1.0648488,
                    1.0630457,
                    1.0603168,
                    1.0625801,
                    1.0642515,
                    1.0639537,
                    1.0650074,
                    1.0666766,
                    1.0618661,
                    1.0629927,
                    1.0615674,
                    1.0619478,
                    1.0572866,
                    1.0633845,
                    1.0624357,
                    1.0558741,
                    1.0604035,
                    1.0560672,
                    1.0562197,
                    1.0632185,
                    1.0645008,
                    1.0665292,
                    1.0655227,
                    1.0631482,
                    1.0598945,
                    1.0648316,
                    1.0659772,
                    1.0674642,
                    1.0646212,
                    1.0660439,
                    1.0616867,
                    1.064524,
                    1.0656203,
                    1.0539775,
                    1.0565396,
                    1.0559321,
                    1.0511198,
                    1.0486917,
                    1.0520271,
                    1.058198,
                    1.0542912,
                    1.0506565,
                    1.0457949,
                    1.0444347,
                    1.0303538,
                    1.0245338,
                    1.0226252,
                    1.0297501,
                    1.0331631,
                    1.0326443,
                    1.0419451,
                    1.0438368,
                    1.0327065,
                    1.0449573,
                    1.0396963,
                    1.0339243,
                    1.031139,
                    1.01878,
                    1.0176058,
                    1.0241926,
                    1.0037142,
                    1.0138804,
                    1.0100694,
                    1.0209455,
                    1.0195566,
                    1.0197148,
                    1.0139134,
                    1.0059801,
                    0.9953638,
                    1.0026608,
                    1.0121007,
                    1.014544,
                    1.0137809,
                    0.9936156,
                    0.9997215,
                    1.0022583,
                    0.9991763,
                    1.009227,
                    0.9965584,
                    0.9942125,
                    0.9936493,
                    0.9949193,
                    1.0070343,
                    1.0047257,
                    1.0142706,
                    1.0166737,
                    1.0255639,
                    1.0279958,
                    1.0125162,
                    1.0119321,
                    0.9950554,
                    0.9833126,
                    0.9950772,
                    0.9808657,
                    0.9844358,
                    0.9752029,
                    0.97548821,
                    0.9807223,
                    0.9863283,
                    0.9771776,
                    0.9852533,
                    0.9832122,
                    0.9867784,
                    0.9948274,
                    1.0039194,
                    0.9950992,
                    0.9831351,
                    0.974561,
                    0.9744264,
                    0.9785862,
                    0.9700111,
                    0.9746802,
                    0.9793326,
                    0.9920376,
                    0.9766364,
                    0.9764629,
                    0.970881,
                    0.9649487,
                    0.9767317,
                    0.9844151,
                    0.9932927,
                    0.9924149,
                    1.0026701,
                    0.9948613,
                    1.0089503,
                    1.0054919,
                    0.9935489,
                    0.9992243,
                    0.9985405,
                    0.9989018,
                    0.9870722,
                    0.9848022,
                    0.9860275,
                    0.9841456,
                    0.9843171,
                    0.986885,
                    0.9877244,
                    0.9879494,
                    0.9905174,
                    0.9907022,
                    0.9830299,
                    0.9749405,
                    0.956291,
                    0.9548989,
                    0.9563201,
                    0.9502661,
                    0.9575384,
                    0.9685012,
                    0.9638207,
                    0.9714837,
                    0.9670227,
                    0.9624077,
                    0.9678526,
                    0.980173,
                    0.9785109,
                    0.976119,
                    0.9875868,
                    0.9928854,
                    0.9982965,
                    0.9962065,
                    1.005583,
                    1.003302,
                    0.9950054,
                    0.989144,
                    0.986287,
                    0.9847113,
                    0.9863063,
                    0.9905558,
                    0.9923609,
                    0.9865907,
                    0.9585767,
                    1.0020727,
                    1.0051778,
                    0.9966294,
                    0.9939034,
                    0.9841261,
                    0.9884491,
                    0.9870016,
                    0.9881395,
                    0.9920508,
                    0.995147,
                    0.9934941,
                    0.9854067,
                    0.9626657,
                    0.9691756,
                    0.9862582,
                    0.9850093,
                    0.9734817,
                    0.9690613,
                    0.9703523,
                    0.9763175,
                    0.98404,
                    0.9998377,
                    1.0010588,
                    1.0117831,
                    1.015291,
                    1.0288237,
                    1.0333506,
                    1.0310765,
                    1.0445925,
                    1.041282,
                    1.04173745,
                    1.0464323,
                    1.0472464,
                    1.0381182,
                    1.0303857,
                    1.0363357,
                    1.0319872,
                    1.0264416,
                    1.0252896,
                    1.0284687,
                    1.0272419,
                    1.0325916,
                    1.0364931,
                    1.033407,
                    1.0162611,
                    1.0169129,
                    1.013399,
                    1.0165998,
                    1.0314679,
                    1.0262066,
                    1.0200266,
                    1.017935,
                    1.0332582,
                    1.0149766,
                    1.0093796,
                    0.9990988,
                    1.0027357,
                    1.0012765,
                    1.007199,
                    1.017696,
                    1.0238257,
                    1.0283939,
                    1.0205773,
                    1.0216412,
                    1.0231953,
                    1.0305699,
                    1.0249998,
                    1.0280064,
                    1.0347219,
                    1.0413143,
                    1.036535,
                    1.037467,
                    1.0358057,
                    1.0404166,
                    1.0326057,
                    1.0248373,
                    1.0205779,
                    1.0180894,
                    1.0154786,
                    1.0026775,
                    0.9859486,
                    0.9810835,
                    0.9892489,
                    0.9751217,
                    0.969424,
                    0.9697546,
                    0.9696208,
                    0.9703023,
                    0.9712325,
                    0.9789658,
                    0.9710084,
                    0.9669908,
                    0.96746499,
                    0.9698,
                    0.9639,
                    0.9648,
                    0.9686,
                    0.9731,
                    0.9673,
                    0.9547,
                    0.9689,
                    0.9647,
                    0.9617,
                    0.9679,
                    0.9699,
                    0.976,
                    0.9777,
                    0.9694,
                    0.9656,
                    0.9689,
                    0.9604,
                    0.9723,
                    0.9778,
                    0.9838,
                    0.9824,
                    0.9827,
                    0.9909,
                    1.0097,
                    1.0128,
                    1.0206,
                    1.0131,
                    1.0253,
                    1.0239,
                    1.0343,
                    1.0353,
                    1.0331,
                    1.0325,
                    1.0316,
                    1.019,
                    1.0135,
                    1.0191,
                    1.0219,
                    1.0249,
                    1.019,
                    1.0233,
                    1.0167,



                ]
            },
            {
                name: 'CDI',
                data: [1,
                    1.000074,
                    1.000149,
                    1.000224,
                    1.000298,
                    1.000373,
                    1.000448,
                    1.000522,
                    1.000597,
                    1.000672,
                    1.000747,
                    1.000821,
                    1.000896,
                    1.000971,
                    1.001046,
                    1.00112,
                    1.001224,
                    1.001328,
                    1.001432,
                    1.001536,
                    1.00164,
                    1.001744,
                    1.001848,
                    1.001952,
                    1.002056,
                    1.00216,
                    1.002264,
                    1.002368,
                    1.002472,
                    1.002576,
                    1.00268,
                    1.002784,
                    1.002888,
                    1.002992,
                    1.003096,
                    1.003201,
                    1.003305,
                    1.003409,
                    1.003513,
                    1.003617,
                    1.003721,
                    1.003826,
                    1.00393,
                    1.004034,
                    1.004138,
                    1.004242,
                    1.004347,
                    1.004451,
                    1.004555,
                    1.004688,
                    1.004822,
                    1.004955,
                    1.005088,
                    1.005222,
                    1.005355,
                    1.005489,
                    1.005622,
                    1.005755,
                    1.005889,
                    1.006022,
                    1.006156,
                    1.006289,
                    1.006423,
                    1.006556,
                    1.00669,
                    1.006823,
                    1.006957,
                    1.007091,
                    1.007224,
                    1.007358,
                    1.007492,
                    1.007625,
                    1.007759,
                    1.007893,
                    1.008026,
                    1.00816,
                    1.008294,
                    1.008428,
                    1.008591,
                    1.008753,
                    1.008916,
                    1.009079,
                    1.009242,
                    1.009405,
                    1.009567,
                    1.00973,
                    1.009893,
                    1.010056,
                    1.010219,
                    1.010382,
                    1.010545,
                    1.010708,
                    1.010872,
                    1.011035,
                    1.011198,
                    1.011361,
                    1.011524,
                    1.011687,
                    1.011851,
                    1.012014,
                    1.012177,
                    1.012341,
                    1.012504,
                    1.012667,
                    1.012831,
                    1.012994,
                    1.013158,
                    1.013321,
                    1.013485,
                    1.013648,
                    1.013812,
                    1.013975,
                    1.014139,
                    1.014341,
                    1.014543,
                    1.014745,
                    1.014948,
                    1.01515,
                    1.015352,
                    1.015555,
                    1.015757,
                    1.01596,
                    1.016162,
                    1.016365,
                    1.016567,
                    1.01677,
                    1.016972,
                    1.017175,
                    1.017378,
                    1.01758,
                    1.017783,
                    1.017986,
                    1.018189,
                    1.018392,
                    1.018595,
                    1.018798,
                    1.019001,
                    1.019204,
                    1.019407,
                    1.01961,
                    1.019814,
                    1.020017,
                    1.02022,
                    1.020423,
                    1.020627,
                    1.02083,
                    1.021034,
                    1.021276,
                    1.021517,
                    1.021759,
                    1.022001,
                    1.022244,
                    1.022486,
                    1.022728,
                    1.02297,
                    1.023212,
                    1.023455,
                    1.023697,
                    1.02394,
                    1.024182,
                    1.024425,
                    1.024667,
                    1.02491,
                    1.025153,
                    1.025396,
                    1.025639,
                    1.025882,
                    1.026125,
                    1.026368,
                    1.026611,
                    1.026854,
                    1.027154,
                    1.027455,
                    1.027755,
                    1.028056,
                    1.028357,
                    1.028658,
                    1.028959,
                    1.02926,
                    1.029561,
                    1.029862,
                    1.030163,
                    1.030465,
                    1.030766,
                    1.031068,
                    1.031369,
                    1.031671,
                    1.031973,
                    1.032275,
                    1.032577,
                    1.032879,
                    1.033181,
                    1.033483,
                    1.033786,
                    1.034088,
                    1.034391,
                    1.034693,
                    1.034996,
                    1.035299,
                    1.035659,
                    1.036019,
                    1.036379,
                    1.036739,
                    1.037099,
                    1.037459,
                    1.03782,
                    1.03818,
                    1.038541,
                    1.038902,
                    1.039263,
                    1.039624,
                    1.039986,
                    1.040347,
                    1.040708,
                    1.04107,
                    1.041432,
                    1.041794,
                    1.042156,
                    1.042518,
                    1.04288,
                    1.043243,
                    1.043605,
                    1.043968,
                    1.04433,
                    1.044693,
                    1.045056,
                    1.04542,
                    1.045783,
                    1.046146,
                    1.04651,
                    1.046873,
                    1.047237,
                    1.047601,
                    1.047965,
                    1.048329,
                    1.048694,
                    1.049058,
                    1.049422,
                    1.049787,
                    1.050209,
                    1.050631,
                    1.051053,
                    1.051475,
                    1.051897,
                    1.05232,
                    1.052742,
                    1.053165,
                    1.053588,
                    1.054012,
                    1.054435,
                    1.054858,
                    1.055282,
                    1.055706,
                    1.05613,
                    1.056554,
                    1.056979,
                    1.057403,
                    1.057828,
                    1.058253,
                    1.058678,
                    1.059103,
                    1.059529,
                    1.059954,
                    1.06038,
                    1.060806,
                    1.061232,
                    1.061658,
                    1.062123,
                    1.062587,
                    1.063052,
                    1.063517,
                    1.063982,
                    1.064448,
                    1.064913,
                    1.065379,
                    1.065845,
                    1.066311,
                    1.066778,
                    1.067244,
                    1.067711,
                    1.068178,
                    1.068645,
                    1.069113,
                    1.06958,
                    1.070048,
                    1.070516,
                    1.070984,
                    1.071453,
                    1.071921,
                    1.07239,
                    1.072859,
                    1.073328,
                    1.073798,
                    1.074268,
                    1.074737,
                    1.075208,
                    1.075678,
                    1.076148,
                    1.076619,
                    1.07709,
                    1.077599,
                    1.078109,
                    1.078618,
                    1.079128,
                    1.079639,
                    1.080149,
                    1.08066,
                    1.081171,
                    1.081682,
                    1.082193,
                    1.082705,
                    1.083217,
                    1.083729,
                    1.084241,
                    1.084754,
                    1.085267,
                    1.08578,
                    1.086293,
                    1.086807,
                    1.087321,
                    1.087835,
                    1.088349,
                    1.088864,
                    1.089378,
                    1.089893,
                    1.090409,
                    1.090924,
                    1.09144,
                    1.091956,
                    1.092472,
                    1.093008,
                    1.093544,
                    1.09408,
                    1.094617,
                    1.095153,
                    1.095691,
                    1.096228,
                    1.096765,
                    1.097303,
                    1.09784108414604,
                    1.09837943269684,
                    1.0989180456524,
                    1.09945692130687,
                    1.09999606307193,
                    1.10053546753592,
                    1.10107513811049,
                    1.10161507138398,
                    1.10215527076806,
                    1.1026957345569,
                    1.10323646275049,
                    1.10377745705468,
                    1.10431871746945,
                    1.10486024228899,
                    1.10540203151327,
                    1.10594408855399,
                    1.10648640999946,
                    1.10702899755552,
                    1.1075,
                    1.1081,
                    1.1086,
                    1.1092,
                    1.1097,
                    1.1102,
                    1.1107,
                    1.1113,
                    1.1119,
                    1.1124,
                    1.113,
                    1.1136,
                    1.1141,
                    1.1146,
                    1.1152,
                    1.1157,
                    1.1163,
                    1.1169,
                    1.1174,
                    1.1179,
                    1.1185,
                    1.1191,
                    1.1196,
                    1.1202,
                    1.1208,


                ]
            }
        ]

    });
});