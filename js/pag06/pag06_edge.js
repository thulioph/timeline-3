/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '9px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo05',
                            type: 'text',
                            rect: ['52px', '35px', '872px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "IMPORTÂNCIA E CONTRIBUIÇÕES DA IMIGRAÇÃO ITALIANA \rNO BRASIL: DO FINAL DO SÉCULO XIX À 2ª GUERRA MUNDIAL. ",
                            align: "center",
                            font: ['LithosPro-Black', [25, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto06_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem06_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '232px', '522px', '312px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['45px', '257px', '186px', '253px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['283px', '243px', '196px', '280px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['63px', '555px', '394px', '24px', 'auto', 'auto'],
                            text: "Panfletos, estimulando a imigração de italianos \rpara o Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['621px', '239px', '250px', '310px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_04.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_03',
                            type: 'text',
                            rect: ['591px', '555px', '297px', '24px', 'auto', 'auto'],
                            text: "Imigrantes italianos \rdesembarcando no Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['236px', '135px', '73px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto10_04_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem06_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '176px', '942px', '396px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_02_02',
                            type: 'text',
                            rect: ['985px', '192px', '872px', '25px', 'auto', 'auto'],
                            text: "O italiano, mesmo não sendo o \"mais branco e instruído\", ficou marcado como um imigrante adequado e confiável para a execução das tarefas que o Brasil dele esperava. A importância deste grupo no movimento migratório é enorme por várias razões: Os italianos corresponderam a 42% do total dos imigrantes entrados no Brasil. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto06_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '324px', '390px', '25px', 'auto', 'auto'],
                            text: "A proximidade de língua, religião e costumes, fez o imigrante italiano mais facilmente assimilável por nossa sociedade além disso, correspondeu aos ideais de branqueamento de nossa população, acreditado como desejável para que nos tornássemos mais \"civilizados\"",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['474px', '318px', '460px', '230px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto06_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['544px', '548px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Histórico de imigrações para o Brasil. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['217px', '134px', '87px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto06_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '905px', '25px', 'auto', 'auto'],
                            text: "Os italianos formaram colônias agrícolas de povoamento no Rio Grande do Sul, mas a maioria (70%) foi trabalhar em São Paulo (onde se encontra a maior colônia italiana do país). Participaram como mão de obra na lavoura cafeeira e também no processo de industrialização da cidade. Segundo o IBGE, entre 1884 e 1933 entraram 1.401.333 italianos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['7px', '337px', '957px', '196px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['412px', '208px', '540px', '360px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['28px', '298px', '370px', '270px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto06_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['268px', '571px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Italianos nas lavouras de café.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto06_04_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '582px', '25px', 'auto', 'auto'],
                            text: "A culinária talvez seja a mais evidente contribuição: o panetone, a pizza, o espaguete, a polenta, o pão italiano. Em alguns bairros paulistas, como Brás, Bixiga e Barra Funda, pode-se escutar o sotaque carregado de italiano. Ajudaram, ainda, a propagar o catolicismo e, a adoração ao Santo Antônio, que chamavam “de Pádua”, diferentemente dos portugueses que o chamavam “de Lisboa”.  ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '138px', '927px', '464px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['668px', '148px', '138px', '91px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_02.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['820px', '181px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Panetone",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_04_03',
                            display: 'none',
                            type: 'image',
                            rect: ['667px', '247px', '140px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_03.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['820px', '276px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pizza",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_04_04',
                            display: 'none',
                            type: 'image',
                            rect: ['668px', '338px', '139px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_04.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_04',
                            display: 'none',
                            type: 'text',
                            rect: ['820px', '367px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Espaguete",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_04_05',
                            display: 'none',
                            type: 'image',
                            rect: ['667px', '430px', '140px', '63px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_05.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_05',
                            display: 'none',
                            type: 'text',
                            rect: ['820px', '449px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Polenta",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_04_06',
                            display: 'none',
                            type: 'image',
                            rect: ['668px', '500px', '140px', '93px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_06.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_06',
                            display: 'none',
                            type: 'text',
                            rect: ['820px', '535px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pão italiano",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_04_07',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '293px', '534px', '295px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06_04_07.png",'0px','0px']
                        },
                        {
                            id: 'texto06_04_07',
                            display: 'none',
                            type: 'text',
                            rect: ['389px', '519px', '140px', '24px', 'auto', 'auto'],
                            text: "Santo Antônio de Pádua.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'avancar',
                            display: 'none',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            display: 'none',
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
                    duration: 16240,
                    autoPlay: true,
                    data: [
                        [
                            "eid80",
                            "left",
                            5385,
                            500,
                            "linear",
                            "${texto06_02_03}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid81",
                            "left",
                            5885,
                            100,
                            "linear",
                            "${texto06_02_03}",
                            '25px',
                            '31px'
                        ],
                        [
                            "eid82",
                            "left",
                            6780,
                            100,
                            "linear",
                            "${texto06_02_03}",
                            '31px',
                            '25px'
                        ],
                        [
                            "eid83",
                            "left",
                            6880,
                            500,
                            "linear",
                            "${texto06_02_03}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            12645,
                            0,
                            "linear",
                            "${texto06_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            14535,
                            0,
                            "linear",
                            "${texto06_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "opacity",
                            12195,
                            400,
                            "linear",
                            "${imagem06_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            14590,
                            400,
                            "linear",
                            "${imagem06_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            12646,
                            0,
                            "linear",
                            "${imagem06_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            14535,
                            0,
                            "linear",
                            "${imagem06_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "opacity",
                            8575,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "opacity",
                            8795,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            10395,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            600,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "opacity",
                            12745,
                            400,
                            "linear",
                            "${texto06_04_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid180",
                            "opacity",
                            14040,
                            400,
                            "linear",
                            "${texto06_04_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            2995,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            12595,
                            0,
                            "linear",
                            "${imagem06_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            14590,
                            0,
                            "linear",
                            "${imagem06_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${texto06_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            6385,
                            400,
                            "linear",
                            "${texto06_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "opacity",
                            13195,
                            400,
                            "linear",
                            "${imagem06_04_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            13595,
                            400,
                            "linear",
                            "${imagem06_04_07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            9395,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            10190,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "left",
                            5390,
                            500,
                            "linear",
                            "${texto06_02_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid63",
                            "left",
                            5890,
                            100,
                            "linear",
                            "${texto06_02_02}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid64",
                            "left",
                            6780,
                            100,
                            "linear",
                            "${texto06_02_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid65",
                            "left",
                            6880,
                            500,
                            "linear",
                            "${texto06_02_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid42",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            2995,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem06_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${imagem06_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            5390,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            7380,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            12595,
                            0,
                            "linear",
                            "${texto06_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            14590,
                            0,
                            "linear",
                            "${texto06_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid151",
                            "opacity",
                            12595,
                            400,
                            "linear",
                            "${imagem06_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            14195,
                            400,
                            "linear",
                            "${imagem06_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            16240,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid218",
                            "display",
                            6385,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            16240,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            4185,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${imagem06_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            6385,
                            400,
                            "linear",
                            "${imagem06_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid55",
                            "left",
                            4785,
                            500,
                            "linear",
                            "${texto10_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid56",
                            "left",
                            5285,
                            100,
                            "linear",
                            "${texto10_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid57",
                            "left",
                            7375,
                            100,
                            "linear",
                            "${texto10_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid58",
                            "left",
                            7475,
                            500,
                            "linear",
                            "${texto10_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            12745,
                            0,
                            "linear",
                            "${imagem06_04_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            14435,
                            0,
                            "linear",
                            "${imagem06_04_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            6780,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            15840,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3790,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid175",
                            "opacity",
                            12745,
                            400,
                            "linear",
                            "${imagem06_04_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            14040,
                            400,
                            "linear",
                            "${imagem06_04_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            8575,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            10995,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "opacity",
                            12646,
                            400,
                            "linear",
                            "${imagem06_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            14140,
                            400,
                            "linear",
                            "${imagem06_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid133",
                            "opacity",
                            9395,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            9795,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid44",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2995,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid167",
                            "opacity",
                            12695,
                            400,
                            "linear",
                            "${imagem06_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            14090,
                            400,
                            "linear",
                            "${imagem06_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            7975,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            11595,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "left",
                            600,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid13",
                            "left",
                            1100,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid14",
                            "left",
                            4185,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid15",
                            "left",
                            4285,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem06_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${imagem06_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid183",
                            "opacity",
                            12795,
                            400,
                            "linear",
                            "${imagem06_04_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            13990,
                            400,
                            "linear",
                            "${imagem06_04_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            11595,
                            0,
                            "linear",
                            "${texto06_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            15585,
                            0,
                            "linear",
                            "${texto06_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            12695,
                            0,
                            "linear",
                            "${imagem06_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            14485,
                            0,
                            "linear",
                            "${imagem06_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            8795,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            10790,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            12795,
                            0,
                            "linear",
                            "${imagem06_04_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            14385,
                            0,
                            "linear",
                            "${imagem06_04_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            12795,
                            0,
                            "linear",
                            "${texto06_04_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "display",
                            14390,
                            0,
                            "linear",
                            "${texto06_04_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            12195,
                            0,
                            "linear",
                            "${imagem06_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            14985,
                            0,
                            "linear",
                            "${imagem06_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            6980,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            9195,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            10395,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            12695,
                            0,
                            "linear",
                            "${texto06_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            14485,
                            0,
                            "linear",
                            "${texto06_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            13195,
                            0,
                            "linear",
                            "${texto06_04_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            13990,
                            0,
                            "linear",
                            "${texto06_04_07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            15585,
                            400,
                            "linear",
                            "${titulo05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid59",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            7975,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid217",
                            "display",
                            2600,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "display",
                            13595,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "opacity",
                            12695,
                            400,
                            "linear",
                            "${texto06_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            14090,
                            400,
                            "linear",
                            "${texto06_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid136",
                            "left",
                            11595,
                            500,
                            "linear",
                            "${texto06_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid137",
                            "left",
                            12095,
                            100,
                            "linear",
                            "${texto06_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid138",
                            "left",
                            14985,
                            100,
                            "linear",
                            "${texto06_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid139",
                            "left",
                            15085,
                            500,
                            "linear",
                            "${texto06_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid195",
                            "opacity",
                            13195,
                            400,
                            "linear",
                            "${texto06_04_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid196",
                            "opacity",
                            13595,
                            400,
                            "linear",
                            "${texto06_04_07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid163",
                            "opacity",
                            12645,
                            400,
                            "linear",
                            "${texto06_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            14140,
                            400,
                            "linear",
                            "${texto06_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            7375,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "opacity",
                            12795,
                            400,
                            "linear",
                            "${texto06_04_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            13995,
                            400,
                            "linear",
                            "${texto06_04_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${texto06_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            7380,
                            0,
                            "linear",
                            "${texto06_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid129",
                            "opacity",
                            9195,
                            400,
                            "linear",
                            "${imagem06_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            10000,
                            400,
                            "linear",
                            "${imagem06_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid107",
                            "left",
                            7975,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid108",
                            "left",
                            8475,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid109",
                            "left",
                            10995,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid110",
                            "left",
                            11095,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_04_07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            13195,
                            0,
                            "linear",
                            "${imagem06_04_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            13990,
                            0,
                            "linear",
                            "${imagem06_04_07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "opacity",
                            12595,
                            400,
                            "linear",
                            "${texto06_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            14195,
                            400,
                            "linear",
                            "${texto06_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "display",
                            13,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            6335,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            6435,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_04_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            12745,
                            0,
                            "linear",
                            "${texto06_04_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            14435,
                            0,
                            "linear",
                            "${texto06_04_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${texto06_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            6780,
                            0,
                            "linear",
                            "${texto06_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            3790,
                            0,
                            "linear",
                            "${imagem06_01_02}",
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
                            rect: ['0px', '0px', '887px', '121px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            text: 'Segundo Seyferth (2002) , a política de imigração passou a privilegiar a Europa latina, que teria maior disposição de se amalgamar, miscigenar com os brasileiros. Assim, no desejo de “abranquear” a população o governo privilegiou os italianos.',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['260px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            type: 'text'
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
                            align: 'justify',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            text: 'Segundo GOMES (2000) :',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['248px', '-4px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao06_edgeActions.js");
})("EDGE-17725635");
