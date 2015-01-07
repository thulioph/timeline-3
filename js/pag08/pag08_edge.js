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
                            id: 'bordaCopy',
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '9px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo08',
                            type: 'text',
                            rect: ['111px', '35px', '769px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A HERANÇA NIPÔNICA NO BRASIL: \rDA REPÙBLICA VELHA A NOVA REPÚBLICA. ",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
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
                            id: 'imagem08_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['364px', '288px', '600px', '319px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem08_01_01',
                            type: 'image',
                            rect: ['26px', '244px', '567px', '308px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['19px', '551px', '450px', '24px', 'auto', 'auto'],
                            text: "Navio Kasato Maru partindo do porto de Tokio lotado de japoneses com destino ao Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto08_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '334px', '169px', '22px', 'auto', 'auto'],
                            text: "Navio Kasato Maru atracado no porto de Santos.",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto08_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['989px', '505px', '457px', '22px', 'auto', 'auto'],
                            text: "Kasato Maru (笠戸丸, Kasato Maru) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['197px', '186px', '79px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto08_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '907px', '25px', 'auto', 'auto'],
                            text: "A vida no Brasil não foi fácil. Dentro da própria colônia nipo-brasileira apareceram conflitos. De um lado, os mais antigos imigrantes, e do outro, os recém-chegados. Divergiam desde a maneira de falarem a própria língua até a crítica ao comportamento. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['42px', '234px', '384px', '288px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['42px', '535px', '398px', '25px', 'auto', 'auto'],
                            text: "Primeiros imigrantes japoneses a desembarcarem no Brasil a bordo do navio Kasato Maru, no Porto de Santos-SP.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem08_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['640px', '234px', '323px', '367px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto08_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['657px', '535px', '292px', '22px', 'auto', 'auto'],
                            text: "Cartaz de incentivo a imigração japonesa para o Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'texto03_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '517px', '25px', 'auto', 'auto'],
                            text: "Na década de 1950, no governo de JK, o Japão investiu em indústrias pesadas criando multinacionais nipônicas no país. A imigração se caracterizou pela vinda de famílias inteiras para o Brasil como consequência a entrada das tradições japonesas no Brasil foi marcante. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '159px', '568px', '433px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['15px', '401px', '356px', '24px', 'auto', 'auto'],
                            text: "Juscelino Kubitschek de Oliveira (Diamantina, 12 de setembro de 1902 — Resende, 22 de agosto de 1976) foi um médico, Oficial da Força Pública Mineira e político brasileiro. Conhecido como JK, foi presidente do Brasil entre 1956 e 1961.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem08_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['651px', '131px', '245px', '338px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto08_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['604px', '477px', '340px', '24px', 'auto', 'auto'],
                            text: "O Bairro Liberdade, na cidade de São Paulo, concentra a maior comunidade japonesa fora do Japão do mundo, sendo conhecido como a Tókio brasileira.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
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
                    duration: 10435,
                    autoPlay: true,
                    data: [
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid218",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto08_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "display",
                            3060,
                            0,
                            "linear",
                            "${texto08_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            795,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            4255,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid276",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            4255,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            7045,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "opacity",
                            5255,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid256",
                            "opacity",
                            5655,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid134",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo08}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            9835,
                            400,
                            "linear",
                            "${titulo08}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid266",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid267",
                            "display",
                            7045,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            9835,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            5255,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            6050,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            3655,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "left",
                            795,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid172",
                            "left",
                            1295,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid174",
                            "left",
                            3655,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid175",
                            "left",
                            3755,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid283",
                            "display",
                            7645,
                            0,
                            "linear",
                            "${imagem08_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            9235,
                            0,
                            "linear",
                            "${imagem08_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "opacity",
                            1795,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid202",
                            "opacity",
                            2855,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid275",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            4855,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            6445,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "opacity",
                            8045,
                            400,
                            "linear",
                            "${imagem08_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            8445,
                            400,
                            "linear",
                            "${imagem08_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            4855,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            6445,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "opacity",
                            4855,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            6050,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            2480,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "display",
                            2580,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            10435,
                            0,
                            "linear",
                            "${bordaCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            1795,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            3255,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "left",
                            2000,
                            430,
                            "linear",
                            "${texto08_01_04}",
                            '989px',
                            '489px'
                        ],
                        [
                            "eid212",
                            "left",
                            2430,
                            100,
                            "linear",
                            "${texto08_01_04}",
                            '489px',
                            '479px'
                        ],
                        [
                            "eid216",
                            "left",
                            2530,
                            100,
                            "linear",
                            "${texto08_01_04}",
                            '479px',
                            '489px'
                        ],
                        [
                            "eid215",
                            "left",
                            2630,
                            430,
                            "linear",
                            "${texto08_01_04}",
                            '489px',
                            '989px'
                        ],
                        [
                            "eid234",
                            "left",
                            4255,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid235",
                            "left",
                            4755,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid236",
                            "left",
                            6445,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid237",
                            "left",
                            6545,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid251",
                            "opacity",
                            4855,
                            400,
                            "linear",
                            "${texto08_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            6050,
                            400,
                            "linear",
                            "${texto08_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid197",
                            "opacity",
                            1795,
                            400,
                            "linear",
                            "${texto08_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            2855,
                            400,
                            "linear",
                            "${texto08_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${texto08_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "display",
                            8840,
                            0,
                            "linear",
                            "${texto08_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            2530,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "display",
                            8445,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${bordaCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            10035,
                            400,
                            "linear",
                            "${bordaCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid298",
                            "opacity",
                            8045,
                            400,
                            "linear",
                            "${texto08_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid299",
                            "opacity",
                            8445,
                            400,
                            "linear",
                            "${texto08_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid181",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            3260,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            1395,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            3655,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "opacity",
                            5255,
                            400,
                            "linear",
                            "${texto08_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid261",
                            "opacity",
                            5655,
                            400,
                            "linear",
                            "${texto08_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid303",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            5655,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            10435,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid262",
                            "left",
                            7045,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid263",
                            "left",
                            7545,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid264",
                            "left",
                            9235,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid265",
                            "left",
                            9335,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            7645,
                            0,
                            "linear",
                            "${texto08_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid289",
                            "display",
                            9235,
                            0,
                            "linear",
                            "${texto08_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bordaCopy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            1795,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            3255,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid290",
                            "opacity",
                            7645,
                            400,
                            "linear",
                            "${texto08_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid291",
                            "opacity",
                            8840,
                            400,
                            "linear",
                            "${texto08_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            5255,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            6050,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "opacity",
                            1395,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            3255,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid285",
                            "opacity",
                            7645,
                            400,
                            "linear",
                            "${imagem08_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            8840,
                            400,
                            "linear",
                            "${imagem08_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid301",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${imagem08_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            8840,
                            0,
                            "linear",
                            "${imagem08_03_02}",
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
                            text: 'Houve grande resistência à migração dos asiáticos no Brasil desde o século XIX, pois eram vistos como não assimiláveis à cultura nacional bem como a raça “amarela“ (Dezem, 2005, p-108)  deveria ser evitada para propiciar o branqueamento almejado pelas elites. Após a 2ª a Guerra Mundial, a imigração foi retomada em 1953, um ano após o restabelecimento diplomático entre Brasil e Japão. ',
                            id: 'Text4',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['230px', '50px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao08_edgeActions.js");
})("EDGE-26421795");
