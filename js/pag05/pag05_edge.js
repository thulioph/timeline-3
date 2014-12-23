/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag05/',
        aud='media/',
        vid='media/',
        js='js/pag05/',
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
                            rect: ['84px', '35px', '827px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A IMIGRAÇÃO EUROPEIA: UMA QUESTÃO DE RAÇA. \rDO BRASIL IMPÉRIO AO SECULO XX.",
                            align: "center",
                            font: ['LithosPro-Black', [28, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto05_03_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem05_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['422px', '245px', '530px', '230px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['692px', '393px', '170px', '22px', 'auto', 'auto'],
                            text: "Centro de Nova Friburgo em 1870.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '271px', '401px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['35px', '558px', '378px', '24px', 'auto', 'auto'],
                            text: "Chegada da primeira leva de imigrantes alemães às margens do rio dos Sinos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['372px', '489px', '548px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['692px', '515px', '204px', '22px', 'auto', 'auto'],
                            text: "Região colonial alemã de São Leopoldo em direção à Serra Geral",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['236px', '135px', '73px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '897px', '25px', 'auto', 'auto'],
                            text: "Em 1829, foi fundada, também pelos alemães, a colônia de São Pedro de Alcântara, em Santa Catarina. Na agricultura trouxeram o cultivo do centeio e da alfafa e contribuíram na indústria, com diversas atividades.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['641px', '158px', '310px', '329px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['753px', '494px', '174px', '24px', 'auto', 'auto'],
                            text: "A cidade de São Pedro de Alcantara",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['238px', '240px', '510px', '310px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto05_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['270px', '554px', '398px', '28px', 'auto', 'auto'],
                            text: "As antigas colônias alemães no Brasil mantém vivas as suas tradições até hoje.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['31px', '301px', '210px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto05_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['12px', '476px', '226px', '22px', 'auto', 'auto'],
                            text: "Registro de crianças alemães imigrantes no Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto05_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '905px', '25px', 'auto', 'auto'],
                            text: "Além dos alemães, portugueses, franceses, espanhóis, ingleses, migraram para várias regiões. Os austríacos estabeleceram-se em Santa Catarina e os do leste europeu, como poloneses, ucranianos e russos, se fixaram principalmente no Paraná. A partir do século XX (depois de 1930) imigraram para o Brasil, ainda, os tchecos e a grande maioria fixou-se na região sul. Muitos ainda migraram para a região Centro-Oeste, principalmente entre 1940-1950, e Baytorã, cidade do Mato Grosso do Sul foi colonizada por eles.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_03_04',
                            display: 'none',
                            type: 'image',
                            rect: ['7px', '503px', '957px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_03_04.png",'0px','0px']
                        },
                        {
                            id: 'imagem05_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '335px', '280px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['55px', '533px', '240px', '25px', 'auto', 'auto'],
                            text: "Família Ucraniana após desembarcar no Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['357px', '335px', '240px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto05_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['353px', '533px', '250px', '25px', 'auto', 'auto'],
                            text: "Primeiras mulheres russas a imigrarem para o Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['639px', '330px', '290px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto05_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['631px', '533px', '319px', '24px', 'auto', 'auto'],
                            text: "Registro da chegada de imigrantes austríacos no Brasil em 1907.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
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
                    duration: 12445,
                    autoPlay: true,
                    data: [
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${imagem05_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${imagem05_01_03}",
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
                            12045,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto05_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${texto05_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid41",
                            "left",
                            4190,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid42",
                            "left",
                            4690,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid43",
                            "left",
                            7180,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid44",
                            "left",
                            7280,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${imagem05_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${imagem05_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            5190,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            6785,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            9380,
                            0,
                            "linear",
                            "${texto05_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            10175,
                            0,
                            "linear",
                            "${texto05_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "opacity",
                            8380,
                            400,
                            "linear",
                            "${imagem05_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            10795,
                            400,
                            "linear",
                            "${imagem05_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid61",
                            "opacity",
                            5190,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            6390,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "opacity",
                            5190,
                            400,
                            "linear",
                            "${texto05_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            6390,
                            400,
                            "linear",
                            "${texto05_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            7780,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            11790,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "left",
                            7780,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid78",
                            "left",
                            8280,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid79",
                            "left",
                            11190,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid80",
                            "left",
                            11290,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            6785,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid114",
                            "opacity",
                            8580,
                            400,
                            "linear",
                            "${texto05_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            10575,
                            400,
                            "linear",
                            "${texto05_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            7780,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            9380,
                            0,
                            "linear",
                            "${imagem05_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            10175,
                            0,
                            "linear",
                            "${imagem05_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem05_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem05_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            8980,
                            0,
                            "linear",
                            "${texto05_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            10575,
                            0,
                            "linear",
                            "${texto05_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            600,
                            0,
                            "linear",
                            "${texto05_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto05_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "opacity",
                            9380,
                            400,
                            "linear",
                            "${texto05_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            9780,
                            400,
                            "linear",
                            "${texto05_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            8580,
                            0,
                            "linear",
                            "${texto05_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            10970,
                            0,
                            "linear",
                            "${texto05_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            8380,
                            0,
                            "linear",
                            "${imagem05_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            11190,
                            0,
                            "linear",
                            "${imagem05_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "opacity",
                            8580,
                            400,
                            "linear",
                            "${imagem05_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            10575,
                            400,
                            "linear",
                            "${imagem05_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            2350,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            2460,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "left",
                            600,
                            500,
                            "linear",
                            "${texto05_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid10",
                            "left",
                            1100,
                            100,
                            "linear",
                            "${texto05_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid11",
                            "left",
                            3590,
                            100,
                            "linear",
                            "${texto05_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            3690,
                            500,
                            "linear",
                            "${texto05_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            8580,
                            0,
                            "linear",
                            "${imagem05_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            10970,
                            0,
                            "linear",
                            "${imagem05_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "opacity",
                            8980,
                            400,
                            "linear",
                            "${texto05_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            10180,
                            400,
                            "linear",
                            "${texto05_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            7180,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            8980,
                            0,
                            "linear",
                            "${imagem05_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            10575,
                            0,
                            "linear",
                            "${imagem05_03_02}",
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
                            11790,
                            400,
                            "linear",
                            "${titulo05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            5190,
                            0,
                            "linear",
                            "${texto05_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            6785,
                            0,
                            "linear",
                            "${texto05_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto05_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto05_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            12445,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${texto05_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${texto05_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "opacity",
                            8980,
                            400,
                            "linear",
                            "${imagem05_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            10180,
                            400,
                            "linear",
                            "${imagem05_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid90",
                            "opacity",
                            9380,
                            400,
                            "linear",
                            "${imagem05_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            9780,
                            400,
                            "linear",
                            "${imagem05_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            7180,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "opacity",
                            5585,
                            400,
                            "linear",
                            "${imagem05_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${imagem05_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto05_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto05_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            6785,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid73",
                            "opacity",
                            5585,
                            400,
                            "linear",
                            "${texto05_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${texto05_02_04}",
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
                            type: 'text',
                            rect: ['0px', '0px', '907px', '226px', 'auto', 'auto'],
                            text: 'Segundo Seyferth (2002) , o principal objetivo da imigração europeia ocorrida no Brasil, a partir do século XIX, era buscar o branqueamento da população e eliminar os sinais da cultura indígena e negra. Os primeiros imigrantes trazidos foram os suíços que fundaram, em 1819, a Colônia de Nova Friburgo, no Rio de Janeiro. Logo após a independência, em 1824, germânicos são agenciados pelo governo e vão implantar, no Rio Grande do Sul, a colônia de São Leopoldo. Radicaram-se, ainda, em Minas Gerais (Teófilo Otoni e Juiz de Fora), e no Espírito Santo (Santa Teresa).',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['260px', '-2px', '12px', '18px', 'auto', 'auto'],
                            id: '_1',
                            text: '1',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag05/pag05_edgeActions.js");
})("EDGE-10652648");
