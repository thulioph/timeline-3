/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'LithosPro-Black': '@font-face {    font-family: \'LithosPro-Black\';    src: url(\'font/LithosPro-Black.eot\'), url(\'font/LithosPro-Black.ttf\') format(\'truetype\'), url(\'font/LithosPro-Black.otf\'), url(\'font/LithosPro-Black.woff\');    font-weight: normal;    font-style: normal;}'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'borda',
                            type: 'image',
                            rect: ['4px', '7px', '967px', '633px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo01',
                            type: 'text',
                            rect: ['60px', '35px', '860px', '99px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "A HERANÇA INDÍGENA: OS PRIMEIROS DONOS DA \rTERRA E O CONFRONTO COM OUTRAS HUMANIDADES.",
                            align: "center",
                            font: ['LithosPro-Black', [26, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto01_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '133', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem01_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '214px', '924px', '392px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['27px', '576px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pinturas Rupestres na Serra da Capivara.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['467px', '338px', '230px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['488px', '491px', '283px', '22px', 'auto', 'auto'],
                            text: "Escavação no Parque Nacional \rda Serra da Capivara.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['693px', '401px', '220px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['731px', '566px', '223px', '24px', 'auto', 'auto'],
                            text: "Esqueletos de crianças \rde mais de 3 mil anos. ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['833px', '186px', '105px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            type: 'rect',
                            rect: ['747px', '214px', '89px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_3',
                            type: 'rect',
                            rect: ['43px', '242px', '118px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_4',
                            type: 'rect',
                            rect: ['43px', '270px', '118px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto01_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '131px', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem01_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '209px', '957px', '388px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem01_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['805px', '398px', '87px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['752px', '516px', '203px', '24px', 'auto', 'auto'],
                            text: "Índio Assurini Xingu \rde  oringem linguística \rTupi-Guarani.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['599px', '398px', '150px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['598px', '507px', '151px', '24px', 'auto', 'auto'],
                            text: "Criança da etnia \rXirianá.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_02_04',
                            display: 'none',
                            type: 'image',
                            rect: ['407px', '398px', '151px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_04.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['394px', '507px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Índios de origem Jê",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_02_05',
                            display: 'none',
                            type: 'image',
                            rect: ['217px', '398px', '150px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_05.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_05',
                            display: 'none',
                            type: 'text',
                            rect: ['190px', '507px', '190px', '24px', 'auto', 'auto'],
                            text: "Indios da etnia \rKuikuro de oringem \rlinguística Karib.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_02_06',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '398px', '147px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_06.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_06',
                            display: 'none',
                            type: 'text',
                            rect: ['42px', '507px', '132px', '24px', 'auto', 'auto'],
                            text: "Índios Aruák \rdo Alto Xingu.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_5',
                            type: 'rect',
                            rect: ['318px', '130px', '68px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_6',
                            type: 'rect',
                            rect: ['520px', '155px', '101px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto01_03_01',
                            symbolName: 'texto01_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '138px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem01_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['551px', '149px', '410px', '390px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto01_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['575px', '494px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Povos indígenas do Brasil atual.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_7',
                            display: 'none',
                            type: 'rect',
                            rect: ['241px', '326px', '93px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_8',
                            display: 'none',
                            type: 'rect',
                            rect: ['353px', '354px', '136px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_9',
                            display: 'none',
                            type: 'rect',
                            rect: ['101px', '379px', '111px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_10',
                            display: 'none',
                            type: 'rect',
                            rect: ['211px', '379px', '111px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_11',
                            display: 'none',
                            type: 'rect',
                            rect: ['330px', '379px', '93px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_12',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '379px', '111px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_13',
                            display: 'none',
                            type: 'rect',
                            rect: ['35px', '409px', '101px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_14',
                            display: 'none',
                            type: 'rect',
                            rect: ['148px', '409px', '93px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_15',
                            display: 'none',
                            type: 'rect',
                            rect: ['248px', '407px', '83px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_16',
                            display: 'none',
                            type: 'rect',
                            rect: ['381px', '407px', '111px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_17',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '435px', '126px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_18',
                            display: 'none',
                            type: 'rect',
                            rect: ['38px', '487px', '83px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_19',
                            display: 'none',
                            type: 'rect',
                            rect: ['334px', '487px', '113px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_20',
                            display: 'none',
                            type: 'rect',
                            rect: ['86px', '510px', '115px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_21',
                            display: 'none',
                            type: 'rect',
                            rect: ['398px', '512px', '63px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_22',
                            display: 'none',
                            type: 'rect',
                            rect: ['241px', '540px', '96px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'avancar',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            type: 'image',
                            rect: ['15px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '974px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 19286,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            5435,
                            0,
                            "linear",
                            "${imagem01_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            7420,
                            0,
                            "linear",
                            "${imagem01_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            3635,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1250,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            3240,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid186",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "opacity",
                            5635,
                            400,
                            "linear",
                            "${texto01_02_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            6830,
                            400,
                            "linear",
                            "${texto01_02_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            5435,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            7420,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "opacity",
                            9215,
                            400,
                            "linear",
                            "${imagem01_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            9615,
                            400,
                            "linear",
                            "${imagem01_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid361",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid362",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "opacity",
                            9215,
                            400,
                            "linear",
                            "${texto01_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            9615,
                            400,
                            "linear",
                            "${texto01_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid54",
                            "opacity",
                            2050,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            2450,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${titulo01}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${titulo01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            10315,
                            400,
                            "linear",
                            "${titulo01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            5035,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            7815,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            6030,
                            0,
                            "linear",
                            "${texto01_02_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            6825,
                            0,
                            "linear",
                            "${texto01_02_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            4235,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            8615,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "opacity",
                            5035,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            7420,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid334",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            1650,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            3240,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            9215,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            10010,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "opacity",
                            5035,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            7420,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid98",
                            "opacity",
                            5635,
                            400,
                            "linear",
                            "${imagem01_02_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            6830,
                            400,
                            "linear",
                            "${imagem01_02_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            8615,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            10610,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "opacity",
                            6030,
                            400,
                            "linear",
                            "${texto01_02_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            6430,
                            400,
                            "linear",
                            "${texto01_02_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid46",
                            "opacity",
                            1650,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            2845,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            10971,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            5635,
                            0,
                            "linear",
                            "${texto01_02_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            7225,
                            0,
                            "linear",
                            "${texto01_02_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "left",
                            650,
                            500,
                            "linear",
                            "${texto01_01_01}",
                            '-905px',
                            '52px'
                        ],
                        [
                            "eid22",
                            "left",
                            1150,
                            100,
                            "linear",
                            "${texto01_01_01}",
                            '52px',
                            '43px'
                        ],
                        [
                            "eid23",
                            "left",
                            3635,
                            100,
                            "linear",
                            "${texto01_01_01}",
                            '43px',
                            '45px'
                        ],
                        [
                            "eid24",
                            "left",
                            3735,
                            500,
                            "linear",
                            "${texto01_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid337",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            5235,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            7620,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            10571,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid213",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid214",
                            "display",
                            6490,
                            0,
                            "linear",
                            "${_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            5035,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            7815,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "opacity",
                            5235,
                            400,
                            "linear",
                            "${imagem01_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            7225,
                            400,
                            "linear",
                            "${imagem01_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            2845,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid259",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_10}",
                            'block',
                            'block'
                        ],
                        [
                            "eid265",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid264",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "display",
                            19176,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            19286,
                            0,
                            "linear",
                            "${_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "left",
                            8615,
                            500,
                            "linear",
                            "${texto01_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid115",
                            "left",
                            9115,
                            100,
                            "linear",
                            "${texto01_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid116",
                            "left",
                            10010,
                            100,
                            "linear",
                            "${texto01_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid117",
                            "left",
                            10110,
                            500,
                            "linear",
                            "${texto01_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid94",
                            "opacity",
                            5435,
                            400,
                            "linear",
                            "${texto01_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            7025,
                            400,
                            "linear",
                            "${texto01_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            6030,
                            0,
                            "linear",
                            "${imagem01_02_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            6825,
                            0,
                            "linear",
                            "${imagem01_02_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            9215,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            10010,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            2845,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "opacity",
                            4835,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            7620,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid331",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "opacity",
                            5235,
                            400,
                            "linear",
                            "${texto01_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            7225,
                            400,
                            "linear",
                            "${texto01_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            1650,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            3240,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1250,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            3240,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid60",
                            "left",
                            4235,
                            500,
                            "linear",
                            "${texto01_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid61",
                            "left",
                            4735,
                            100,
                            "linear",
                            "${texto01_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid62",
                            "left",
                            8015,
                            100,
                            "linear",
                            "${texto01_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid63",
                            "left",
                            8115,
                            500,
                            "linear",
                            "${texto01_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            650,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            4235,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "opacity",
                            6030,
                            400,
                            "linear",
                            "${imagem01_02_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            6430,
                            400,
                            "linear",
                            "${imagem01_02_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid297",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            1650,
                            400,
                            "linear",
                            "${texto01_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            2845,
                            400,
                            "linear",
                            "${texto01_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            5235,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            7620,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "opacity",
                            2050,
                            400,
                            "linear",
                            "${texto01_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            2450,
                            400,
                            "linear",
                            "${texto01_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            4835,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            8015,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid364",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            9565,
                            0,
                            "linear",
                            "${_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "display",
                            9675,
                            0,
                            "linear",
                            "${_22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            3635,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid222",
                            "display",
                            6490,
                            0,
                            "linear",
                            "${_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "opacity",
                            5435,
                            400,
                            "linear",
                            "${imagem01_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            7025,
                            400,
                            "linear",
                            "${imagem01_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            5635,
                            0,
                            "linear",
                            "${imagem01_02_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            7225,
                            0,
                            "linear",
                            "${imagem01_02_05}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "texto01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '27px', ''],
                            id: 'Text4',
                            text: 'Atualmente novas escavações arqueológicas têm sido realizadas em várias regiões do país, e segundo Martin (2002), têm mostrado a presença humana no Brasil a partir de 15.000 AP. Importante identificar que também existem vários registros rupestres  elaborados em épocas distintas, por povos diversos, em múltiplos lugares   (como os sambaquis  do litoral, os cacicados e as cerâmicas marajoaras e tapajônicas da Amazônia ) mostrando as mais variadas e sofisticadas organizações sociais, manifestações culturais e técnicas dos humanos.',
                            align: 'justify',
                            rect: ['0px', '0px', '886px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['886px', '49px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['780px', '80px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_3',
                            text: '3',
                            align: 'justify',
                            rect: ['106px', '105px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_4',
                            text: '4',
                            align: 'justify',
                            rect: ['101px', '134px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '887px', '121px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "imagens07_04_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto'],
                            text: 'Segundo Oliveira e Freire, 2006 , Curt Nimuendaju assinalou a existência de cerca de 1400 povos indígenas no seu mapa etno-histórico  no momento da conquista. Pertenciam a várias famílias linguísticas tais como: Tupi-guarani, Jê, Karib, Aruák, Xirianá e outras, além dos da língua isolada determinando suas diferenças sociais, culturais e geográficas. Inicialmente a dispersão indígena por vários territórios do Brasil foi natural devido a sua forma nômade de viver. Mas a partir da colonização que se iniciou em 1500, pelos portugueses fugiram resistindo à dominação. Outros europeus chegaram e também mantiveram contato com os povos que se espalharam em todas as regiões do Brasil.',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['334px', '-4px', '10px', '18px', 'auto', 'auto'],
                            id: '_5',
                            text: '5',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['569px', '23px', '10px', '18px', 'auto', 'auto'],
                            id: '_6',
                            text: '6',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '889px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "texto01_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '504px', '415px', 'auto', 'auto'],
                            textStyle: ['', '', '27px', ''],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            id: 'Text4Copy',
                            text: 'O resultado por um lado foi a grande mortandade, mas por outro lado adaptação e resistência. Segundo o Censo de 2010, divulgado em 2012, a população indígena era de 896,9 mil, sendo 305 etnias que falam 274 idiomas. As contribuições indígenas para a formação da sociedade brasileira atual vão desde o uso de técnicas como a coivara  , incorporação de palavras indígenas na língua portuguesa  , sua arte (artesanal  , plástica    , vestual    , plumária    , musical    , corporal   , teatral    ), sua culinária    , seus conhecimentos da medicina tradicional    , a preservação da megabiodiversidade de suas terras    , o uso de redes para descanso   , andar de pés descalços    , tomar banho de rios     e até o costume de ficar de cócoras     para descansar.',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['284px', '188px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_7',
                            text: '7',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['436px', '214px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_8',
                            text: '8',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['161px', '240px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_9',
                            text: '9',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['261px', '240px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_10',
                            text: '10<br>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['365px', '240px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_11',
                            text: '11',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['484px', '240px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_12',
                            text: '12',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['74px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_13',
                            text: '13',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['182px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_14',
                            text: '14',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['269px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_15',
                            text: '15',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['431px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_16',
                            text: '16',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['438px', '295px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_17',
                            text: '17',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['60px', '348px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_18',
                            text: '18',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['385px', '348px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_19',
                            text: '19',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['141px', '373px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_20',
                            text: '20',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['401px', '373px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_21',
                            text: '21',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['274px', '400px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_22',
                            text: '22',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '887px', '121px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao01_edgeActions.js");
})("EDGE-3016595");
