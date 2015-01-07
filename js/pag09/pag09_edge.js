/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag09/',
        aud='media/',
        vid='media/',
        js='js/pag09/',
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
                            id: 'titulo09',
                            type: 'text',
                            rect: ['54px', '35px', '877px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: " A PRESENÇA DOS AMERICANOS NO BRASIL: DO BRASIL IMPERIAL AO BRASIL CONTEMPORÂNEO. ",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'borda',
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '9px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '900px', '25px', 'auto', 'auto'],
                            text: "Os norte-americanos e os sul-americanos chegaram de diversos países e fixaram-se em várias regiões do Brasil. Entre 1865 e 1885, quase dez mil americanos brancos, provenientes principalmente do Sul dos Estados Unidos, aportaram em Recife, Vitória, Rio de Janeiro e Santos. Os imigrantes se estabeleceram em vários lugares no Brasil, que vão desde as áreas urbanas do Rio de Janeiro e São Paulo, no nordeste (especialmente Caruaru, em Pernambuco) e até a região amazônica, como também no sul brasileiro (principalmente no Paraná).",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '400px', '957px', '172px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['40px', '335px', '142px', '228px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['194px', '434px', '242px', '25px', 'auto', 'auto'],
                            text: "Casal de imigrantes norte-americanos confederados Joseph Whitaker e Isabel Norris.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['371px', '321px', '473px', '245px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['701px', '410px', '252px', '24px', 'auto', 'auto'],
                            text: "Casa Gomm, 1906, segue o estilo arquitetônico da Nova Inglaterra, em Curitiba-PR, estado que recebeu maior número de imigrantes estadunidenses.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto09_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '907px', '25px', 'auto', 'auto'],
                            text: " No entanto, a maioria dos imigrantes estadunidenses assentaram-se na área ao redor das cidades paulistas de Santa Bárbara d'Oeste e Americana (derivado do nome de Vila dos Americanos), na região de Campinas.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['294px', '184px', '648px', '300px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['503px', '495px', '407px', '25px', 'auto', 'auto'],
                            text: "Anualmente é comemorada a Festa Confederada em Santa Bárbara d'Oeste-SP, referenciando os costumes dos imigrantes estadunidenses que se instalaram na região.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['29px', '231px', '523px', '254px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['35px', '495px', '407px', '22px', 'auto', 'auto'],
                            text: "A Villa Americana em 1906, onde de desenvolveu a atual cidade de Americana, colônia de norte-americanos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'texto08_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem09_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['28px', '308px', '347px', '192px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['36px', '511px', '188px', '22px', 'auto', 'auto'],
                            text: "O uso de jeans no Brasil foi trazido pelos americanos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'imagem09_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['365px', '308px', '344px', '190px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['329px', '511px', '270px', '22px', 'auto', 'auto'],
                            text: "A marca estadunidense, Mc Donald's, é uma das mais conhecidas no Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'imagem09_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['652px', '242px', '270px', '258px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['672px', '513px', '229px', '18px', 'auto', 'auto'],
                            text: "A Coca-Cola, marca norte-americana, caiu no gosto popular brasileiro.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['583px', '160px', '101px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['610px', '189px', '87px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto09_04_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem09_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['545px', '253px', '392px', '329px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['655px', '262px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Imigrantes totais ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto09_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['555px', '297px', '107px', '27px', 'auto', 'auto'],
                            text: "Bolívia \rArgentina \rUruguai \rChile \rParaguai \rPeru \rColômbia \rVenezuela \rCuba \rEquador ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto09_04_04',
                            display: 'none',
                            type: 'text',
                            rect: ['809px', '299px', '110px', '25px', 'auto', 'auto'],
                            text: "50.240 \r42.202 \r26.271 \r25.561 \r15.626 \r15.459 \r5.915 \r2.907 \r2.275 \r1.523 ",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['81px', '238px', '343px', '360px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_04_02.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['759px', '161px', '68px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto09_05_01',
                            symbolName: 'texto01_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '138px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem09_05_01',
                            display: 'none',
                            type: 'image',
                            rect: ['12px', '219px', '415px', '385px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_05_01.png",'0px','0px']
                        },
                        {
                            id: 'texto_09_05_02',
                            display: 'none',
                            type: 'text',
                            rect: ['30px', '450px', '379px', '24px', 'auto', 'auto'],
                            text: "O Mercosul, como é conhecido o Mercado Comum do Sul, é a união aduaneira (livre-comércio intrazona e política comercial comum) de cinco países da América do Sul: Argentina, Brasil, Paraguai, Uruguai e Venezuela.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_05_02',
                            display: 'none',
                            type: 'image',
                            rect: ['256px', '243px', '407px', '339px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_05_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_05_03',
                            display: 'none',
                            type: 'text',
                            rect: ['991px', '440px', '268px', '22px', 'auto', 'auto'],
                            text: "As contribuições desses países sul-americanos para o Brasil são diversas tanto na culinária quanto da tecnologia e, sobretudo na mão-de-obra. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: '_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['271px', '138px', '71px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 20435,
                    autoPlay: true,
                    data: [
                        [
                            "eid152",
                            "opacity",
                            12820,
                            400,
                            "linear",
                            "${imagem09_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            13220,
                            400,
                            "linear",
                            "${imagem09_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid191",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            12030,
                            0,
                            "linear",
                            "${texto09_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            14410,
                            0,
                            "linear",
                            "${texto09_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid17",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid18",
                            "left",
                            3390,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid19",
                            "left",
                            3490,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            7645,
                            400,
                            "linear",
                            "${texto09_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            9635,
                            400,
                            "linear",
                            "${texto09_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid251",
                            "display",
                            17750,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "display",
                            17850,
                            0,
                            "linear",
                            "${_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "opacity",
                            4990,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            5390,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid167",
                            "opacity",
                            16400,
                            400,
                            "linear",
                            "${texto_09_05_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            18795,
                            400,
                            "linear",
                            "${texto_09_05_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid77",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_09_05_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            16400,
                            0,
                            "linear",
                            "${texto_09_05_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            19190,
                            0,
                            "linear",
                            "${texto_09_05_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            8445,
                            0,
                            "linear",
                            "${imagem09_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            9240,
                            0,
                            "linear",
                            "${imagem09_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            9635,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "opacity",
                            11230,
                            400,
                            "linear",
                            "${imagem09_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            14805,
                            400,
                            "linear",
                            "${imagem09_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid148",
                            "opacity",
                            12425,
                            400,
                            "linear",
                            "${texto09_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            13620,
                            400,
                            "linear",
                            "${texto09_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid175",
                            "left",
                            17200,
                            500,
                            "linear",
                            "${texto09_05_03}",
                            '991px',
                            '641px'
                        ],
                        [
                            "eid177",
                            "left",
                            17700,
                            100,
                            "linear",
                            "${texto09_05_03}",
                            '641px',
                            '651px'
                        ],
                        [
                            "eid181",
                            "left",
                            17800,
                            100,
                            "linear",
                            "${texto09_05_03}",
                            '651px',
                            '641px'
                        ],
                        [
                            "eid180",
                            "left",
                            17900,
                            500,
                            "linear",
                            "${texto09_05_03}",
                            '641px',
                            '991px'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_05_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${texto09_05_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            19795,
                            0,
                            "linear",
                            "${texto09_05_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${texto09_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            9635,
                            0,
                            "linear",
                            "${texto09_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "opacity",
                            11630,
                            400,
                            "linear",
                            "${texto09_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            14410,
                            400,
                            "linear",
                            "${texto09_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid262",
                            "display",
                            5390,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            20435,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "opacity",
                            12030,
                            400,
                            "linear",
                            "${texto09_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            14015,
                            400,
                            "linear",
                            "${texto09_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid163",
                            "opacity",
                            16400,
                            400,
                            "linear",
                            "${imagem09_05_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            18795,
                            400,
                            "linear",
                            "${imagem09_05_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid171",
                            "opacity",
                            16800,
                            400,
                            "linear",
                            "${imagem09_05_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            18400,
                            400,
                            "linear",
                            "${imagem09_05_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2795,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid199",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            8445,
                            0,
                            "linear",
                            "${texto09_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            9240,
                            0,
                            "linear",
                            "${texto09_03_04}",
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
                            20035,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "left",
                            3990,
                            500,
                            "linear",
                            "${texto09_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid49",
                            "left",
                            4490,
                            100,
                            "linear",
                            "${texto09_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid50",
                            "left",
                            6445,
                            100,
                            "linear",
                            "${texto09_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid51",
                            "left",
                            6545,
                            500,
                            "linear",
                            "${texto09_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            7045,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            10630,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            7045,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "left",
                            15800,
                            500,
                            "linear",
                            "${texto09_05_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid157",
                            "left",
                            16300,
                            100,
                            "linear",
                            "${texto09_05_01}",
                            '45px',
                            '37px'
                        ],
                        [
                            "eid158",
                            "left",
                            19195,
                            100,
                            "linear",
                            "${texto09_05_01}",
                            '37px',
                            '45px'
                        ],
                        [
                            "eid159",
                            "left",
                            19295,
                            500,
                            "linear",
                            "${texto09_05_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid194",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            10630,
                            0,
                            "linear",
                            "${texto09_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${texto09_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            11630,
                            0,
                            "linear",
                            "${texto09_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            14805,
                            0,
                            "linear",
                            "${texto09_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            7645,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            10030,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "opacity",
                            4990,
                            400,
                            "linear",
                            "${texto09_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            5390,
                            400,
                            "linear",
                            "${texto09_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid94",
                            "left",
                            7045,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid95",
                            "left",
                            7545,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid96",
                            "left",
                            10030,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid97",
                            "left",
                            10130,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            8445,
                            400,
                            "linear",
                            "${texto09_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            8845,
                            400,
                            "linear",
                            "${texto09_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid270",
                            "left",
                            2400,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            '701px',
                            '701px'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            4990,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "width",
                            2400,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            '900px',
                            '900px'
                        ],
                        [
                            "eid1",
                            "display",
                            20435,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "opacity",
                            8045,
                            400,
                            "linear",
                            "${texto09_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            9240,
                            400,
                            "linear",
                            "${texto09_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_05_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            16800,
                            0,
                            "linear",
                            "${imagem09_05_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            18795,
                            0,
                            "linear",
                            "${imagem09_05_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            7645,
                            0,
                            "linear",
                            "${texto09_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            10030,
                            0,
                            "linear",
                            "${texto09_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "left",
                            10630,
                            500,
                            "linear",
                            "${texto09_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid131",
                            "left",
                            11130,
                            100,
                            "linear",
                            "${texto09_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid132",
                            "left",
                            15200,
                            100,
                            "linear",
                            "${texto09_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid133",
                            "left",
                            15300,
                            500,
                            "linear",
                            "${texto09_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid233",
                            "display",
                            8795,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            8895,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "opacity",
                            8045,
                            400,
                            "linear",
                            "${imagem09_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            9240,
                            400,
                            "linear",
                            "${imagem09_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid187",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_05_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            16400,
                            0,
                            "linear",
                            "${imagem09_05_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            19190,
                            0,
                            "linear",
                            "${imagem09_05_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_05_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            17200,
                            0,
                            "linear",
                            "${texto09_05_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            18400,
                            0,
                            "linear",
                            "${texto09_05_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            4990,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            17800,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2995,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            11230,
                            0,
                            "linear",
                            "${imagem09_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            15200,
                            0,
                            "linear",
                            "${imagem09_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            12820,
                            0,
                            "linear",
                            "${imagem09_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            13615,
                            0,
                            "linear",
                            "${imagem09_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            12425,
                            0,
                            "linear",
                            "${texto09_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            14015,
                            0,
                            "linear",
                            "${texto09_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            4590,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid269",
                            "left",
                            2400,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo09}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            19795,
                            400,
                            "linear",
                            "${titulo09}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid122",
                            "opacity",
                            8445,
                            400,
                            "linear",
                            "${imagem09_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            8845,
                            400,
                            "linear",
                            "${imagem09_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            4590,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "opacity",
                            7645,
                            400,
                            "linear",
                            "${imagem09_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            9635,
                            400,
                            "linear",
                            "${imagem09_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            8795,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "display",
                            8895,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            13170,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            13270,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2795,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '1',
                            '0.000000'
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
                            align: 'justify',
                            id: 'Text4Copy',
                            text: 'Os imigrantes mais recentes veem ao país para oferecer mão-de-obra especializada para multinacionais, universidades e instituições de pesquisa.  Em 2012, o número total de imigrantes permanentes dos EUA no Brasil é de 27.953.  A influência cultural dos EUA no Brasil é imensa. Produtos de consumo como a Coca-Cola, Mc Donald’s, jeans, camisetas, tênis, fast-food, chiclete, rock, filmes de ação, rock and roll, blues, country, blues, jazz, pop, techno, e hip hop são alguns exemplos. ',
                            textStyle: ['', '', '27px', ''],
                            rect: ['0px', '0px', '867px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['638px', '22px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['650px', '50px', 'auto', 'auto', 'auto', 'auto']
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
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text',
                            text: 'Os sul-americanos representam uma das maiores imigrações no Brasil contemporâneo perdendo apenas para os portugueses. Em termos de totalidade, em 2012 , existiam 187.979 imigrantes sul-americanos permanentes no Brasil na seguinte ordem: ',
                            textStyle: ['', '', '27px', ''],
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_3',
                            text: '3',
                            align: 'justify',
                            rect: ['778px', '25px', 'auto', 'auto', 'auto', 'auto']
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
                            type: 'text',
                            rect: ['0px', '0px', '887px', '121px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text4',
                            textStyle: ['', '', '27px', ''],
                            text: 'Segundo Braga(2011,p-55)  o Brasil nas últimas décadas, por suas condições econômicas e sociais, tem  sido polo de atração de países sul-americanos. A criação do Mercosul, em 1991, aprofundou as relações econômicas entre Brasil, Argentina, Paraguai e Uruguai. ',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['293px', '-3px', '2px', '18px', 'auto', 'auto'],
                            id: '_4',
                            text: '4',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', '']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag09/pag09_edgeActions.js");
})("EDGE-6208098");
