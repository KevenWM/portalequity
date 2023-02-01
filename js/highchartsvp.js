//***************** GRÁFICO DYNAMIC ******************/
document.addEventListener('DOMContentLoaded', () => {

    Highcharts.chart('container2', {


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
            categories: ['30/09/2021',
                '01/1/2021',
                '04/4/2021',
                '05/5/2021',
                '06/6/2021',
                '07/7/2021',
                '08/8/2021',
                '11/11/2021',
                '13/13/2021',
                '14/14/2021',
                '15/15/2021',
                '18/18/2021',
                '19/19/2021',
                '20/20/2021',
                '21/21/2021',
                '22/22/2021',
                '25/25/2021',
                '26/26/2021',
                '27/27/2021',
                '28/28/2021',
                '29/29/2021',
                '01/1/2021',
                '03/3/2021',
                '04/4/2021',
                '05/5/2021',
                '08/8/2021',
                '09/9/2021',
                '10/10/2021',
                '11/11/2021',
                '12/12/2021',
                '16/16/2021',
                '17/17/2021',
                '18/18/2021',
                '19/19/2021',
                '22/22/2021',
                '23/23/2021',
                '24/24/2021',
                '25/25/2021',
                '26/26/2021',
                '29/29/2021',
                '30/30/2021',
                '01/1/2021',
                '02/2/2021',
                '03/3/2021',
                '06/6/2021',
                '07/7/2021',
                '08/8/2021',
                '09/9/2021',
                '10/10/2021',
                '13/13/2021',
                '14/14/2021',
                '15/15/2021',
                '16/16/2021',
                '17/17/2021',
                '20/20/2021',
                '21/21/2021',
                '22/22/2021',
                '23/23/2021',
                '24/24/2021',
                '27/27/2021',
                '28/28/2021',
                '29/29/2021',
                '30/30/2021',
                '31/31/2021',
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
                '31/08/2022',
                '01/09/2022',
                '02/09/2022',
                '05/09/2022',
                '06/09/2022',
                '08/09/2022',
                '09/09/2022',
                '12/09/2022',
                '13/09/2022',
                '14/09/2022',
                '15/09/2022',
                '16/09/2022',
                '19/09/2022',
                '20/09/2022',
                '21/09/2022',
                '22/09/2022',
                '23/09/2022',
                '26/09/2022',
                '27/09/2022',
                '28/09/2022',
                '29/09/2022',
                '30/09/2022',
                '03/10/2022',
                '04/10/2022',
                '05/10/2022',
                '06/10/2022',
                '07/10/2022',
                '10/10/2022',
                '11/10/2022',
                '13/10/2022',
                '14/10/2022',
                '17/10/2022',
                '18/10/2022',
                '19/10/2022',
                '20/10/2022',
                '21/10/2022',
                '24/10/2022',
                '25/10/2022',
                '26/10/2022',
                '27/10/2022',
                '28/10/2022',
                '31/10/2022',
                '01/11/2022',
                '03/11/2022',
                '04/11/2022',
                '07/11/2022',
                '08/11/2022',
                '09/11/2022',
                '10/11/2022',
                '11/11/2022',
                '14/11/2022',
                '16/11/2022',
                '17/11/2022',
                '18/11/2022',
                '21/11/2022',
                '22/11/2022',
                '23/11/2022',
                '24/11/2022',
                '25/11/2022',
                '28/11/2022',
                '29/11/2022',
                '30/11/2022',
                '01/12/2022',
                '02/12/2022',
                '05/12/2022',
                '06/12/2022',
                '07/12/2022',
                '08/12/2022',
                '09/12/2022',
                '12/12/2022',
                '13/12/2022',
                '14/12/2022',
                '15/12/2022',
                '16/12/2022',
                '19/12/2022',
                '20/12/2022',
                '21/12/2022',
                '22/12/2022',
                '23/12/2022',
                '26/12/2022',
                '27/12/2022',
                '28/12/2022',
                '29/12/2022',
                '30/12/2022',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
                '13/01/2023',
                '16/01/2023',
                '17/01/2023',
                '18/01/2023',
                '19/01/2023',
                '20/01/2023',
                '23/01/2023',
                '24/01/2023',
                '25/01/2023',
                '26/01/2023',
                '27/01/2023',



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
                name: 'VP Strategy FIM IE',
                data: [1,
                    0.9907919,
                    0.9949104,
                    0.9952821,
                    0.9964389,
                    1.0033213,
                    1.003501,
                    1.0047421,
                    1.009999,
                    1.0143753,
                    1.0093358,
                    1.012882,
                    1.0238593,
                    1.0212322,
                    1.0344211,
                    1.0353278,
                    1.0259462,
                    1.0279657,
                    1.022747,
                    1.028893,
                    1.0268104,
                    1.0354671,
                    1.0273086,
                    1.0337085,
                    1.0244525,
                    1.0359751,
                    1.0233399,
                    1.0247669,
                    1.0180352,
                    1.0207922,
                    1.0225117,
                    1.0265537,
                    1.0305835,
                    1.031135,
                    1.0248299,
                    1.0224851,
                    1.0176536,
                    1.0169275,
                    1.0091205,
                    1.0095435,
                    1.0124575,
                    1.0111566,
                    1.0104351,
                    1.0109774,
                    1.0192421,
                    1.0184419,
                    1.006063,
                    1.0092554,
                    1.0130451,
                    1.0181915,
                    1.0167949,
                    1.0216633,
                    1.0187976,
                    1.0142666,
                    1.0166419,
                    1.0255591,
                    1.0211964,
                    1.0234956,
                    1.0234564,
                    1.0248273,
                    1.0232712,
                    1.0303865,
                    1.0143489,
                    1.0154071,
                    1.0274138,
                    1.0332359,
                    1.0249529,
                    1.0172529,
                    1.0107828,
                    1.0118945,
                    1.0064496,
                    1.0049587,
                    0.9972989,
                    0.994055,
                    0.9918128,
                    0.99478,
                    0.9829193,
                    0.9676105,
                    0.969287,
                    0.9696392,
                    0.9626081,
                    0.95247,
                    0.9492946,
                    0.9420503,
                    0.9415324,
                    0.9418082,
                    0.9461368,
                    0.9402406,
                    0.9434208,
                    0.937606,
                    0.9365845,
                    0.9377004,
                    0.9384508,
                    0.937968,
                    0.9307773,
                    0.9267535,
                    0.9227859,
                    0.9287757,
                    0.9183112,
                    0.9092701,
                    0.9017251,
                    0.8892723,
                    0.9037379,
                    0.9194259,
                    0.9245919,
                    0.9110539,
                    0.9175872,
                    0.9130962,
                    0.911565,
                    0.9005934,
                    0.9055351,
                    0.9037001,
                    0.9019349,
                    0.9026418,
                    0.9026418,
                    0.9100566,
                    0.909768,
                    0.9050411,
                    0.9033208,
                    0.8932582,
                    0.8923246,
                    0.880442,
                    0.8784436,
                    0.8842832,
                    0.8893819,
                    0.8811758,
                    0.870805,
                    0.8663648,
                    0.8670117,
                    0.8680362,
                    0.877191,
                    0.877191,
                    0.8644022,
                    0.8659941,
                    0.8701998,
                    0.871938,
                    0.8651103,
                    0.8605529,
                    0.8545753,
                    0.8653399,
                    0.8602802,
                    0.8725391,
                    0.8722628,
                    0.878925,
                    0.8744392,
                    0.8877966,
                    0.8754611,
                    0.870621,
                    0.8786802,
                    0.8760359,
                    0.8720262,
                    0.8633872,
                    0.8659715,
                    0.8613559,
                    0.856746,
                    0.859846,
                    0.850998,
                    0.8478831,
                    0.8359017,
                    0.8348906,
                    0.8301334,
                    0.829582,
                    0.8306704,
                    0.8244555,
                    0.8244,
                    0.8311,
                    0.835,
                    0.8318,
                    0.8383,
                    0.8445,
                    0.8409,
                    0.8436,
                    0.8568,
                    0.8584,
                    0.8509,
                    0.8571,
                    0.8562,
                    0.8577,
                    0.851,
                    0.8495,
                    0.8576,
                    0.8571,
                    0.8555,
                    0.8625,
                    0.8786,
                    0.876,
                    0.8795,
                    0.8626,
                    0.8561,
                    0.875,
                    0.8789,
                    0.8807,
                    0.8833,
                    0.8801,
                    0.8689,
                    0.8757,
                    0.8801,
                    0.8722,
                    0.8743,
                    0.8727,
                    0.8817,
                    0.8914,
                    0.9031,
                    0.9028,
                    0.883,
                    0.883,
                    0.8726,
                    0.8665,
                    0.8743,
                    0.8745,
                    0.8745,
                    0.8778,
                    0.872,
                    0.8649,
                    0.8623,
                    0.864,
                    0.8622,
                    0.8748,
                    0.8756,
                    0.8765,
                    0.8839,
                    0.8831,
                    0.8865,
                    0.8780,
                    0.86796,
                    0.8639866,
                    0.8684783,
                    0.8734802,
                    0.8575146,
                    0.8478686,
                    0.8553703,
                    0.8653607,
                    0.8626812,
                    0.8546345,
                    0.8537509,
                    0.8605736,
                    0.8641721,
                    0.8647963,
                    0.8604806,
                    0.8625282,
                    0.8585167,
                    0.8599309,
                    0.857539,
                    0.8482338,
                    0.8404451,
                    0.8349659,
                    0.8303714,
                    0.8347183,
                    0.8437528,
                    0.8394274,
                    0.8465497,
                    0.8505489,
                    0.8457522,
                    0.8302214,
                    0.8461532,
                    0.8472963,
                    0.8505577,
                    0.8417266,
                    0.8318477,
                    0.8381767,
                    0.8380939,
                    0.8404281,
                    0.8400997,
                    0.8433892,
                    0.8395889,
                    0.8306143,
                    0.829449,
                    0.8430101,
                    0.8549518,
                    0.8643219,
                    0.8569255,
                    0.8577407,
                    0.8577407,
                    0.8293445,
                    0.8219967,
                    0.8188498,
                    0.8309804,
                    0.8375431,
                    0.833088,
                    0.8753908,
                    0.8791699,
                    0.8751,
                    0.884,
                    0.8868,
                    0.8738,
                    0.8637,
                    0.8722,
                    0.8794,
                    0.8693,
                    0.883,
                    0.8727,
                    0.8637,
                    0.8633,
                    0.8662,
                    0.8691,
                    0.8693,
                    0.8614,
                    0.8509,
                    0.8527,
                    0.8567,
                    0.8677,
                    0.87,
                    0.8706,
                    0.8625,
                    0.8574,
                    0.8556,
                    0.8437,
                    0.8471,
                    0.8421,
                    0.8418,
                    0.8468,
                    0.8587,
                    0.8528,
                    0.8612,
                    0.8635,
                    0.872,
                    0.8844,
                    0.8861,
                    0.8718,
                    0.8595,
                    0.8688,
                    0.8635,
                    0.8641,
                    0.8522,
                    0.8571,
                    0.8652,
                    0.8581,
                    0.8658,
                    0.8688,
                    0.8734,
                    0.8765,
                    0.8708,
                    0.8583,
                    0.8598,
                    0.8633,


                ]
            },
            {
                name: 'Dólar',
                data: [1,
                    0.985559169,
                    1.002204707,
                    1.00609969,
                    1.009076044,
                    1.013944772,
                    1.012052399,
                    1.017674402,
                    1.013320105,
                    1.012952654,
                    1.003435668,
                    1.012732183,
                    1.026033916,
                    1.028532584,
                    1.039703099,
                    1.038049569,
                    1.020779364,
                    1.022634992,
                    1.017692774,
                    1.037277922,
                    1.035550901,
                    1.044718808,
                    1.020283305,
                    1.029506329,
                    1.018262323,
                    1.018262323,
                    1.007863455,
                    1.010086535,
                    0.99296331,
                    1.002480295,
                    1.01004979,
                    1.01493689,
                    1.02261662,
                    1.030737291,
                    1.028201878,
                    1.027173014,
                    1.029138878,
                    1.022102188,
                    1.029451212,
                    1.030351467,
                    1.033217586,
                    1.043708317,
                    1.036083705,
                    1.038545628,
                    1.04466369,
                    1.030645428,
                    1.016020871,
                    1.025225523,
                    1.03051682,
                    1.042826434,
                    1.04530673,
                    1.044535082,
                    1.044902534,
                    1.044645318,
                    1.054180676,
                    1.055485127,
                    1.039941943,
                    1.043046905,
                    1.043046905,
                    1.034669018,
                    1.033915743,
                    1.045986515,
                    1.023296404,
                    1.024417131,
                    1.042661081,
                    1.04451671,
                    1.05019383,
                    1.0445902,
                    1.035146705,
                    1.041742453,
                    1.023902699,
                    1.01422036,
                    1.015800401,
                    1.015635047,
                    1.01471642,
                    1.023002444,
                    1.000587922,
                    0.998952764,
                    1.00158004,
                    1.008818828,
                    0.999687667,
                    0.999889765,
                    0.994047291,
                    0.988774367,
                    0.975619615,
                    0.968031748,
                    0.967425453,
                    0.971430671,
                    0.978504106,
                    0.965588197,
                    0.966139374,
                    0.961748333,
                    0.964504217,
                    0.964375609,
                    0.958845468,
                    0.949714307,
                    0.942383656,
                    0.94980617,
                    0.944129049,
                    0.93817634,
                    0.929614727,
                    0.919822154,
                    0.940381047,
                    0.946590972,
                    0.937367947,
                    0.923643646,
                    0.930533355,
                    0.936559555,
                    0.930441493,
                    0.920777527,
                    0.922081978,
                    0.932407356,
                    0.940583145,
                    0.948703816,
                    0.932976906,
                    0.925848353,
                    0.922908744,
                    0.9068695,
                    0.902147752,
                    0.886788293,
                    0.886806666,
                    0.871392089,
                    0.8755747710272,
                    0.874086293916454,
                    0.876621144168811,
                    0.871186093074965,
                    0.85602745505546,
                    0.843786262448167,
                    0.854586726607504,
                    0.866380023434687,
                    0.873311063622165,
                    0.86326798639051,
                    0.862922679195954,
                    0.858953234871652,
                    0.861873675870216,
                    0.86376979795713,
                    0.854872969038172,
                    0.857608562539094,
                    0.849118237769957,
                    0.881045083510108,
                    0.895934745421429,
                    0.91815392710788,
                    0.9123695573671,
                    0.907807709580265,
                    0.913345336608704,
                    0.934078275749722,
                    0.911286765821429,
                    0.903905343018275,
                    0.923700870030375,
                    0.932976819188257,
                    0.947946915534125,
                    0.943005865470002,
                    0.943722225533742,
                    0.943171178576475,
                    0.929615434778475,
                    0.92959706660006,
                    0.907151106000851,
                    0.912679938896767,
                    0.905479597855105,
                    0.896387330414356,
                    0.884264307588598,
                    0.8852929280444,
                    0.886523598531877,
                    0.876035347057215,
                    0.8689,
                    0.8732,
                    0.8693,
                    0.8844,
                    0.8809,
                    0.8765,
                    0.8803,
                    0.8943,
                    0.8994,
                    0.9009,
                    0.9156,
                    0.9391,
                    0.9393,
                    0.9278,
                    0.9458,
                    0.9526,
                    0.9407,
                    0.9533,
                    0.9615,
                    0.9619,
                    0.9611,
                    0.9666,
                    0.9506,
                    0.9643,
                    0.978,
                    0.9773,
                    0.9882,
                    0.9954,
                    0.9797,
                    0.9638,
                    0.9863,
                    0.9972,
                    0.9888,
                    0.9946,
                    0.9914,
                    0.9968,
                    0.9925,
                    1.0028,
                    1.0078,
                    1.0076,
                    0.9819,
                    0.9808,
                    0.9612,
                    0.9499,
                    0.9482,
                    0.9507,
                    0.9677,
                    0.9685,
                    0.9556,
                    0.9465,
                    0.9371,
                    0.9393,
                    0.9337,
                    0.9452,
                    0.9301,
                    0.9342,
                    0.9435,
                    0.9469,
                    0.9474,
                    0.9476,
                    0.9452,
                    0.9357,
                    0.9367,
                    0.9365,
                    0.928,
                    0.9217,
                    0.9387,
                    0.95,
                    0.9607,
                    0.9475,
                    0.9444,
                    0.9623,
                    0.9557,
                    0.9433,
                    0.9332,
                    0.9513,
                    0.9463,
                    0.9616,
                    0.9621,
                    0.9472,
                    0.9425,
                    0.9479,
                    0.9376,
                    0.9643,
                    0.9878,
                    0.9859,
                    0.9849,
                    0.9895,
                    0.9924,
                    0.9471,
                    0.9488,
                    0.9521,
                    0.957,
                    0.9535,
                    0.9512,
                    0.9716,
                    0.9644,
                    0.9758,
                    0.9679,
                    0.9603,
                    0.966,
                    0.9555,
                    0.946,
                    0.9716,
                    0.9743,
                    0.986,
                    0.9788,
                    0.9703,
                    0.9491,
                    0.943,
                    0.9375,
                    0.927,
                    0.9458,
                    0.9432,
                    0.9521,
                    0.9858,
                    0.9759,
                    0.9756,
                    0.988,
                    0.9904,
                    0.9851,
                    0.9727,
                    0.9827,
                    0.9801,
                    0.9732,
                    0.9891,
                    0.9831,
                    0.9682,
                    0.951,
                    0.9512,
                    0.9562,
                    0.9679,
                    0.9596,
                    0.9557,
                    0.9558,
                    0.9613,
                    0.9696,
                    0.9719,
                    0.9692,
                    0.9736,
                    0.9724,
                    0.9709,
                    0.9533,
                    0.9531,
                    0.9477,
                    0.9457,
                    0.9563,
                    0.9698,
                    0.9643,
                    0.9674,
                    0.982,
                    1.0008,
                    0.9951,
                    0.9807,
                    0.9573,
                    0.9634,
                    0.9534,
                    0.9462,
                    0.9346,
                    0.935,
                    0.944,
                    0.9353,
                    0.9493,
                    0.9484,
                    0.954,
                    0.9519,
                    0.9421,
                    0.9301,
                    0.9289,
                    0.9359,
                    0.9383,



                ]
            }
        ]

    });
});