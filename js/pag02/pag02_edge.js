/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag02/',
        aud='media/',
        vid='media/',
        js='js/pag02/',
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
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '4px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo02',
                            type: 'text',
                            rect: ['149px', '35px', '705px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A HERANÇA PORTUGUESA: DO BRASIL PRÉ-COLONIAL AOS DIAS ATUAIS ",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto02_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '133', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem02_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['406px', '340px', '458px', '204px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem02_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['86px', '322px', '729px', '222px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['56px', '554px', '411px', '25px', 'auto', 'auto'],
                            text: "A povoação do Brasil a partir de 1530 começou a modificar a paisagem do país.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto02_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['531px', '554px', '341px', '25px', 'auto', 'auto'],
                            text: "Os jesuítas que vieram ao Brasil para catequizar os nativos.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['32px', '241px', '131px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto02_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '901px', '25px', 'auto', 'auto'],
                            text: "Em 1808, quando a família real transferiu-se para o Brasil, foram com elas mais 15 mil pessoas. Com a entrada do século XX até o final da 1ª guerra mundial, os portugueses se tornaram o grupo imigrante que mais desembarcou no Brasil. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem02_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['25px', '159px', '367px', '355px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['118px', '515px', '232px', '41px', 'auto', 'auto'],
                            text: "A chegada da família real \rportuguesa à Bahia.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem02_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['416px', '186px', '535px', '358px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto02_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['679px', '426px', '257px', '22px', 'auto', 'auto'],
                            text: "Emigrantes portugueses à espera de navio para o Brasil durante a Primeira Guerra Mundial",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto02_03_01',
                            symbolName: 'texto01_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '133', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem02_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['26px', '320px', '599px', '197px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['61px', '518px', '318px', '22px', 'auto', 'auto'],
                            text: "Desde o início da colonização portuguesa a religião católica esteve presente no Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem02_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['355px', '336px', '608px', '195px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto02_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['736px', '411px', '205px', '27px', 'auto', 'auto'],
                            text: "Distribuição da população brasileira por religião segundo CENSO 2010.",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['35px', '243px', '128px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'texto02_04_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '135px', '883px', '25px', 'auto', 'auto'],
                            text: "As principais festas típicas do Brasil como carnaval, festas juninas, bem como as cavalhadas, o bumba-meu-boi, e a farra do boi foram trazidas pelos portugueses. Muitos pratos culinários têm origem lusa como os cozidos feitos de carne bovina, caprina, suína e das aves, como galináceos trazidos pelos lusitanos, além da arte da doçaria e o fabrico da aguardente (aqui chamada de cachaça).",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem02_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['206px', '310px', '758px', '251px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_04_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem02_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['16px', '187px', '250px', '367px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['102px', '561px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Cavalhada<br>",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto02_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['702px', '388px', '244px', '22px', 'auto', 'auto'],
                            text: "O entrudo, uma festa de origem portuguesa que, na colônia, era praticada pelos escravos deu origem ao carnaval (Jean Baptist Debret, óleo sobre tela).",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
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
                    duration: 12600,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${imagem02_01_01}",
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
                            12200,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            3600,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${imagem02_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${imagem02_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid263",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${imagem02_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${imagem02_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            3600,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            6400,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid58",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid59",
                            "left",
                            3000,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid60",
                            "left",
                            3100,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid190",
                            "left",
                            6400,
                            500,
                            "linear",
                            "${texto02_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid191",
                            "left",
                            6900,
                            100,
                            "linear",
                            "${texto02_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid196",
                            "left",
                            7000,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid197",
                            "left",
                            8600,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid192",
                            "left",
                            8600,
                            100,
                            "linear",
                            "${texto02_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid193",
                            "left",
                            8700,
                            500,
                            "linear",
                            "${texto02_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid251",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${texto02_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${texto02_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${texto02_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${texto02_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            2600,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            2600,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            4600,
                            0,
                            "linear",
                            "${imagem02_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            5400,
                            0,
                            "linear",
                            "${imagem02_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "opacity",
                            7000,
                            400,
                            "linear",
                            "${imagem02_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            8200,
                            400,
                            "linear",
                            "${imagem02_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "display",
                            7850,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "left",
                            3600,
                            500,
                            "linear",
                            "${texto02_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid123",
                            "left",
                            4100,
                            100,
                            "linear",
                            "${texto02_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid124",
                            "left",
                            5800,
                            100,
                            "linear",
                            "${texto02_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid125",
                            "left",
                            5900,
                            500,
                            "linear",
                            "${texto02_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            8600,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid237",
                            "opacity",
                            9800,
                            400,
                            "linear",
                            "${imagem02_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid238",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${imagem02_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "opacity",
                            4200,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            5400,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid262",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            9800,
                            0,
                            "linear",
                            "${imagem02_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            11400,
                            0,
                            "linear",
                            "${imagem02_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            4600,
                            0,
                            "linear",
                            "${texto02_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            5400,
                            0,
                            "linear",
                            "${texto02_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "opacity",
                            7400,
                            400,
                            "linear",
                            "${texto02_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            7800,
                            400,
                            "linear",
                            "${texto02_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid227",
                            "left",
                            9200,
                            500,
                            "linear",
                            "${texto02_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid228",
                            "left",
                            9700,
                            100,
                            "linear",
                            "${texto02_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid231",
                            "left",
                            9800,
                            0,
                            "linear",
                            "${texto02_04_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid232",
                            "left",
                            11400,
                            0,
                            "linear",
                            "${texto02_04_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid229",
                            "left",
                            11400,
                            100,
                            "linear",
                            "${texto02_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid230",
                            "left",
                            11500,
                            500,
                            "linear",
                            "${texto02_04_01}",
                            '25px',
                            '985px'
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
                            "eid204",
                            "opacity",
                            7000,
                            400,
                            "linear",
                            "${texto02_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            8200,
                            400,
                            "linear",
                            "${texto02_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid145",
                            "opacity",
                            4200,
                            400,
                            "linear",
                            "${texto02_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            5400,
                            400,
                            "linear",
                            "${texto02_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid218",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            6400,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            9200,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "opacity",
                            7400,
                            400,
                            "linear",
                            "${imagem02_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid209",
                            "opacity",
                            7800,
                            400,
                            "linear",
                            "${imagem02_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            10600,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            8600,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            7400,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            8200,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "opacity",
                            4600,
                            400,
                            "linear",
                            "${texto02_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            5000,
                            400,
                            "linear",
                            "${texto02_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid241",
                            "opacity",
                            9800,
                            400,
                            "linear",
                            "${texto02_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${texto02_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid19",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            12000,
                            400,
                            "linear",
                            "${titulo02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid264",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            9200,
                            0,
                            "linear",
                            "${texto02_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${texto02_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "opacity",
                            4600,
                            400,
                            "linear",
                            "${imagem02_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            5000,
                            400,
                            "linear",
                            "${imagem02_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid68",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid261",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            9800,
                            0,
                            "linear",
                            "${texto02_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            11400,
                            0,
                            "linear",
                            "${texto02_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            2150,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            7400,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid207",
                            "display",
                            8200,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'block',
                            'none'
                        ]
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
                            text: 'Houve grande resistência à migração dos asiáticos no Brasil desde o século XIX, pois eram vistos como não assimiláveis à cultura nacional bem como a raça “amarela“ (Dezem, 2005, p-108)  deveria ser evitada para propiciar o branqueamento almejado pelas elites. <br>',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text2',
                            text: '2<br>',
                            align: 'justify',
                            rect: ['352px', '54px', 'auto', 'auto', 'auto', 'auto']
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
                            text: 'Durante os mais de 300 anos de colonização, os portugueses buscaram implantar e impor sua cultura sobre a colônia. Muito embora tenha havido forte resistência a essa dominação pelos indígenas e africanos, foram os portugueses que exerceram a maior influência na formação da cultura brasileira, principalmente pela imposição da língua portuguesa.<br>\rA emigração portuguesa no Brasil ocorreu em vários momentos distintos. No século XVI foi o período de sua fixação aumentando o fluxo imigratório a partir de 1530.',
                            align: 'justify',
                            rect: ['0px', '0px', '898px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '1',
                            align: 'justify',
                            rect: ['116px', '103px', 'auto', 'auto', 'auto', 'auto']
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
            "texto02_03_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', ''],
                            rect: ['-1257px', '80px', '891px', '25px', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            text: 'Os imigrantes árabes chegaram ao Brasil a partir do final século XIX. A imigração cresceu no século seguinte sendo a maioria de libaneses e os demais de origem síria. Embora viessem principalmente da Síria, do Líbano e de outros pontos do Oriente Médio. A presença de palestinos, egípcios, jordanianos e marroquinos também é evidente. Quanto a esses últimos, foi a partir de sua imigração que criaram a segunda ',
                            id: 'texto',
                            type: 'text'
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text2',
                            text: '2<br>',
                            align: 'justify',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '18px']
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
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '27px', ''],
                            id: 'Text4',
                            text: 'Durante os mais de 300 anos de colonização, os portugueses buscaram implantar e impor sua cultura sobre a colônia. Muito embora tenha havido forte resistência a essa dominação pelos indígenas e africanos, foram os portugueses que exerceram a maior influência na formação da cultura brasileira, principalmente pela imposição da língua portuguesa.<br>\rA emigração portuguesa no Brasil ocorreu em vários momentos distintos. No século XVI foi o período de sua fixação aumentando o fluxo imigratório a partir de 1530.',
                            align: 'justify',
                            rect: ['0px', '0px', '898px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '1',
                            align: 'justify',
                            rect: ['116px', '103px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag02/pag02_edgeActions.js");
})("EDGE-21495440");
