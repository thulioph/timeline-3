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
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo03',
                            type: 'text',
                            rect: ['111px', '35px', '769px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A HERANÇA AFRICANA: O BRASIL COLONIAL  ",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto03_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem03_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['518px', '178px', '448px', '334px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['582px', '480px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Mercado de escravos em Recife.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['105px', '269px', '91px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto03_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '478px', '25px', 'auto', 'auto'],
                            text: "O Brasil ser mais negro exemplifica uma mudança no comportamento dos afro-brasileiros mostrando aumento de sua autoestima e conscientização de seus direitos sociais e políticos. \r<br>Quanto à herança linguística  se tem exemplos variados de palavras que fazem parte de nosso vocabulário tais como:<br>",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '373px', '503px', '118px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['35px', '394px', '461px', '25px', 'auto', 'auto'],
                            text: "caçula, cachaça, cochilar, xingar, marimbomdo, mulambo, mandinga, miçanga, cabaço, banguê, mucama, samba entre outros. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '507px', '806px', '22px', 'auto', 'auto'],
                            text: "No que se referem à culinária, pratos e temperos como o acarajé, pamonha, vatapá, caruru, mangunzá, chuchu, quiabo, leite de coco, azeite de dendê fazem parte de nossa alimentação. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['593px', '133px', '350px', '401px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['612px', '355px', '300px', '22px', 'auto', 'auto'],
                            text: "O acarajé é uma especialidade gastronômica da culinária afro-brasileira feita de massa de feijão-fradinho, cebola e sal, frita em azeite de dendê.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '882px', '25px', 'auto', 'auto'],
                            text: "No que tange à religiosidade os africanos misturaram suas religiões tradicionais com o cristianismo imposto pelos europeus num processo conhecido como sincretismo religioso. Mais do que isso a prática da umbanda, quimbanda, catimbó e candomblé permaneceram e ganharam adeptos de todos os grupos sociais incluindo os brancos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '268px', '891px', '287px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['35px', '436px', '289px', '22px', 'auto', 'auto'],
                            text: "As religiões africanas passaram por um processo de sincretismo religioso para estarem mais próximas do cristianismo. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_04_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '139px', '893px', '25px', 'auto', 'auto'],
                            text: "A música e dança talvez represente uma das mais importantes heranças e que retratam a imagem do povo brasileiro no exterior como, por exemplo, o samba. Acrescente-se ainda a capoeira, o afoxé, o maracatu, a congada e o lundu.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['675px', '190px', '273px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['620px', '401px', '333px', '24px', 'auto', 'auto'],
                            text: "O maracatu também é uma herança deixada pelos africanos no Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem03_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['391px', '228px', '324px', '170px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_02.png",'0px','0px']
                        },
                        {
                            id: 'texto03_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['361px', '401px', '238px', '22px', 'auto', 'auto'],
                            text: "A capoeira, considerado um estilo de luta e dança.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem03_04_03',
                            display: 'none',
                            type: 'image',
                            rect: ['92px', '220px', '319px', '187px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_03.png",'0px','0px']
                        },
                        {
                            id: 'texto03_04_04',
                            display: 'none',
                            type: 'text',
                            rect: ['55px', '403px', '263px', '22px', 'auto', 'auto'],
                            text: "Escravos africanos reunidos em uma roda de samba.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_04_05',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '467px', '893px', '25px', 'auto', 'auto'],
                            text: "Segundo Reis (1983, p107-108)  a resistência dos afrodescendentes tornou-se mais notória pois...",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""]
                        },
                        {
                            id: 'imagem03_04_04',
                            display: 'none',
                            type: 'image',
                            rect: ['147px', '529px', '681px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_04.png",'0px','0px']
                        },
                        {
                            id: 'texto03_04_06',
                            type: 'text',
                            rect: ['170px', '544px', '628px', '22px', 'auto', 'auto'],
                            text: "[...] “se viver é lutar, sobreviver e ainda criar uma cultura com a expressão de liberdade que a cultura negra possui, é lutar dobrado” .",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
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
                            rect: ['17px', '45px', '20px', '41px', 'auto', 'auto'],
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
                    duration: 15800,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "opacity",
                            4803,
                            400,
                            "linear",
                            "${texto03_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            5203,
                            400,
                            "linear",
                            "${texto03_02_04}",
                            '1',
                            '0.000000'
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
                            15400,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid104",
                            "opacity",
                            8195,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            8595,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${imagem03_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            12800,
                            0,
                            "linear",
                            "${imagem03_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${imagem03_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            14200,
                            400,
                            "linear",
                            "${imagem03_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid208",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            14600,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid14",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid31",
                            "left",
                            1400,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid15",
                            "left",
                            2200,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid16",
                            "left",
                            2300,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid95",
                            "left",
                            7595,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid97",
                            "left",
                            8095,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid101",
                            "left",
                            8995,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid100",
                            "left",
                            9095,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid42",
                            "left",
                            2800,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid43",
                            "left",
                            3300,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid44",
                            "left",
                            6995,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid45",
                            "left",
                            7095,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            7595,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            9595,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "opacity",
                            3603,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            6403,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            11400,
                            0,
                            "linear",
                            "${texto03_04_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            13400,
                            0,
                            "linear",
                            "${texto03_04_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "opacity",
                            12000,
                            400,
                            "linear",
                            "${texto03_04_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            12400,
                            400,
                            "linear",
                            "${texto03_04_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            7595,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid150",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${imagem03_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            13400,
                            400,
                            "linear",
                            "${imagem03_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid183",
                            "left",
                            11400,
                            500,
                            "linear",
                            "${texto03_04_05}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid184",
                            "left",
                            11900,
                            100,
                            "linear",
                            "${texto03_04_05}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid200",
                            "left",
                            12800,
                            100,
                            "linear",
                            "${texto03_04_05}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid196",
                            "left",
                            12900,
                            500,
                            "linear",
                            "${texto03_04_05}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            3400,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            6995,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            10600,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            14200,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            15200,
                            400,
                            "linear",
                            "${titulo03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid117",
                            "left",
                            9600,
                            500,
                            "linear",
                            "${texto03_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid118",
                            "left",
                            10100,
                            100,
                            "linear",
                            "${texto03_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid121",
                            "left",
                            14600,
                            100,
                            "linear",
                            "${texto03_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid122",
                            "left",
                            14700,
                            500,
                            "linear",
                            "${texto03_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            4003,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            6403,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${texto03_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            13400,
                            400,
                            "linear",
                            "${texto03_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid170",
                            "opacity",
                            12000,
                            400,
                            "linear",
                            "${imagem03_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            12400,
                            400,
                            "linear",
                            "${imagem03_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            3603,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            6803,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            8195,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            8995,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid218",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "display",
                            1850,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            9600,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            15200,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "opacity",
                            4603,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            5403,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            0,
                            "linear",
                            "${borda}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            8195,
                            400,
                            "linear",
                            "${imagem03_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            8595,
                            400,
                            "linear",
                            "${imagem03_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${imagem03_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            13800,
                            400,
                            "linear",
                            "${imagem03_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid71",
                            "left",
                            4003,
                            500,
                            "linear",
                            "${texto03_02_03}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid72",
                            "left",
                            4503,
                            100,
                            "linear",
                            "${texto03_02_03}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid73",
                            "left",
                            5803,
                            100,
                            "linear",
                            "${texto03_02_03}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid74",
                            "left",
                            5903,
                            500,
                            "linear",
                            "${texto03_02_03}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            12400,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${texto03_04_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "display",
                            12800,
                            0,
                            "linear",
                            "${texto03_04_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            10600,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            14200,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "opacity",
                            3400,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            6595,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            5203,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${texto03_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            14200,
                            400,
                            "linear",
                            "${texto03_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            4803,
                            0,
                            "linear",
                            "${texto03_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            5603,
                            0,
                            "linear",
                            "${texto03_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${texto03_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${texto03_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            8195,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            8995,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            4603,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            5803,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            14600,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${texto03_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            13800,
                            400,
                            "linear",
                            "${texto03_04_03}",
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
                            textStyle: ['', '', '27px', ''],
                            id: 'Text4',
                            text: 'O mais antigo registro de envio de escravos data de 1533 quando Pero de Góis, Capitão-Mor da Costa do Brasil, solicitou, ao Rei, a remessa de 17 negros para a sua capitania de São Tomé (Paraíba do Sul/Macaé) . \r<br>Os diversos povos africanos que chegaram, espalharam-se em quase todas as regiões do território brasileiro. Os quase 400 anos de escravidão legal africana no Brasil formaram não apenas a base econômica, mas também a cultura da sociedade brasileira. ',
                            align: 'justify',
                            rect: ['0px', '0px', '435px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '1',
                            align: 'justify',
                            rect: ['145px', '131px', 'auto', 'auto', 'auto', 'auto']
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
            "texto03_02_04": {
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
                            rect: ['0px', '0px', '299px', '22px', 'auto', 'auto'],
                            text: 'O acarajé é uma especialidade gastronômica da culinária afro-brasileira feita de massa de feijão-fradinho, cebola e sal, frita em azeite de dendê.',
                            id: 'Text3',
                            textStyle: ['', '', '24px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [18, 'px'], 'rgba(53,53,53,1)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '299px', '22px']
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
            "texto01_2": {
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
                            text: 'Apesar do grande quantitativo populacional, da grande influência cultural, os portugueses foram alvo de preconceitos. A lusofobia e antilusitanismo estiveram presentes no Brasil mesmo após a independência. Segundo Sousa (2013, p-38) “ocorreram diversas chacinas de portugueses em vários pontos do país e dos incidentes violentos” . Apesar disso, são inegáveis as marcas que deixaram. A religião católica foi trazida pelos lusos desde a época colonial e é considerada, até hoje, a mais praticada no Brasil (o maior país do mundo em número de católicos nominais).',
                            align: 'justify',
                            rect: ['0px', '0px', '887px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '2',
                            align: 'justify',
                            rect: ['101px', '103px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao03_edgeActions.js");
})("EDGE-18819172");
