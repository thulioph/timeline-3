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
                            id: 'titulo04',
                            type: 'text',
                            rect: ['50px', '35px', '877px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A PRESENÇA ESPANHOLA, HOLANDESA, FRANCESA E INGLESA NO BRASIL: ANTES DA CHEGADA DOS PORTUGUESES AOS DIAS ATUAIS. ",
                            align: "center",
                            font: ['LithosPro-Black', [24, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto04_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '405px', '25px', 'auto', 'auto'],
                            text: "Os espanhóis migraram para o Brasil em momentos diversos, mas foi na época colonial que marcaram sua presença. No extremo sul, na chamada região do pampa foi grande a influência espanhola. \rO fluxo migratório se elevou a partir do século XIX e início do século XX quando se dirigiram principalmente para São Paulo indo trabalhar nas fazendas de café e fábricas. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem04_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['72px', '159px', '894px', '427px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_01_02',
                            type: 'text',
                            rect: ['475px', '522px', '452px', '24px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Imigrantes Espanhóis embarcando para o Brasil no período colonial.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto04_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem04_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '270px', '942px', '325px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['236px', '464px', '679px', '24px', 'auto', 'auto'],
                            text: "João Maurício de Nassau-Siegen foi conde e (após 1674) príncipe de Nassau-Siegen, um Estado do Sacro Império Romano-Germânico e mais tarde da Confederação Germânica, localizado nas cercanias das cidades de Wiesbaden e Coblença.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['58px', '191px', '906px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_02.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['258px', '295px', '73px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto04_03_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem04_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['179px', '136px', '756px', '196px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['740px', '332px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Fazenda Ribeirão.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['698px', '331px', '230px', '229px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto04_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['721px', '566px', '200px', '22px', 'auto', 'auto'],
                            text: "Holandes cultivando na Fazenda Ribeirão.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '381px', '657px', '201px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto04_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['88px', '588px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Portal de Holambra.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto04_03_05',
                            display: 'none',
                            type: 'text',
                            rect: ['327px', '422px', '342px', '27px', 'auto', 'auto'],
                            text: "A cidade, denominada Holambra, só foi emancipada em 1992 tornando-se conhecida como cidade das flores com arquitetura, culinária e modo de vida influenciada pelos holandeses.  ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['172px', '321px', '108px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto04_04_01',
                            symbolName: 'imagens07_04_01_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem04_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '166px', '526px', '396px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '185px', '455px', '27px', 'auto', 'auto'],
                            text: "A cultura francesa sempre esteve presente na história do Brasil, principalmente após a chegada da Missão Francesa em 1816. <br>\r(...) a França contribuiu para a renovação das artes e para as mudanças dos nossos hábitos culturais e sociais, ajudando na construção da identidade brasileira.\r<br>(...) foi responsável pela primeira colonização cultural do país, influenciando o comportamento das elites, determinando modelos de vida social e referências intelectuais, desde a filosofia até a moda, da gastronomia à literatura.  ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem04_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['562px', '166px', '380px', '276px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_04_02.png",'0px','0px']
                        },
                        {
                            id: 'texto04_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['604px', '447px', '297px', '24px', 'auto', 'auto'],
                            text: "A sociedade brasileira passou a adotar o estilo de vida francês após as guerras napoleônicas. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['127px', '134px', '71px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto04_05_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '892px', '25px', 'auto', 'auto'],
                            text: "No Brasil, a influência foi, sobretudo no nível econômico e, no século XIX, financiou as primeiras fundições, estradas de ferro, telégrafos, moendas, cabo submarino, iluminação à gás, barcos a vapor e redes de esgotos. Fundaram ainda bancos e investiram em serviços das cidades.  ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem04_05_03',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '456px', '844px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_05_03.png",'0px','0px']
                        },
                        {
                            id: 'imagem04_05_01',
                            display: 'none',
                            type: 'image',
                            rect: ['21px', '186px', '453px', '293px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_05_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_05_02',
                            display: 'none',
                            type: 'text',
                            rect: ['85px', '478px', '286px', '24px', 'auto', 'auto'],
                            text: "Bondes e ferrovias em Manaus, construida pelos ingleses.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_05_02',
                            display: 'none',
                            type: 'image',
                            rect: ['384px', '272px', '400px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_05_02.png",'0px','0px']
                        },
                        {
                            id: 'texto04_05_03',
                            display: 'none',
                            type: 'text',
                            rect: ['435px', '479px', '383px', '22px', 'auto', 'auto'],
                            text: "No atual município de Cerro Azul, 46 ingleses fundaram a colônia de Assunguy.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
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
                    duration: 16605,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            6985,
                            0,
                            "linear",
                            "${texto04_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            8170,
                            0,
                            "linear",
                            "${texto04_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_05_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            13760,
                            0,
                            "linear",
                            "${imagem04_05_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            15350,
                            0,
                            "linear",
                            "${imagem04_05_01}",
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
                            16205,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            9560,
                            0,
                            "linear",
                            "${texto04_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            13166,
                            0,
                            "linear",
                            "${texto04_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            11315,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            11415,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            7204,
                            0,
                            "linear",
                            "${texto04_03_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            7999,
                            0,
                            "linear",
                            "${texto04_03_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_05_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            14160,
                            0,
                            "linear",
                            "${imagem04_05_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            14955,
                            0,
                            "linear",
                            "${imagem04_05_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "opacity",
                            14160,
                            400,
                            "linear",
                            "${texto04_05_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            14560,
                            400,
                            "linear",
                            "${texto04_05_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "left",
                            13160,
                            500,
                            "linear",
                            "${texto04_05_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid126",
                            "left",
                            13660,
                            100,
                            "linear",
                            "${texto04_05_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid127",
                            "left",
                            15350,
                            100,
                            "linear",
                            "${texto04_05_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid128",
                            "left",
                            15450,
                            500,
                            "linear",
                            "${texto04_05_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            10365,
                            0,
                            "linear",
                            "${texto04_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            12360,
                            0,
                            "linear",
                            "${texto04_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${imagem04_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            8565,
                            400,
                            "linear",
                            "${imagem04_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "opacity",
                            10965,
                            400,
                            "linear",
                            "${imagem04_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            11365,
                            400,
                            "linear",
                            "${imagem04_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            8960,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            10965,
                            0,
                            "linear",
                            "${imagem04_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            11760,
                            0,
                            "linear",
                            "${imagem04_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "opacity",
                            13951,
                            400,
                            "linear",
                            "${imagem04_05_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            14750,
                            400,
                            "linear",
                            "${imagem04_05_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_05_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            13760,
                            0,
                            "linear",
                            "${texto04_05_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            15350,
                            0,
                            "linear",
                            "${texto04_05_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_05_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            14160,
                            0,
                            "linear",
                            "${texto04_05_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            14955,
                            0,
                            "linear",
                            "${texto04_05_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            3795,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            4195,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            8960,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${imagem04_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            8170,
                            400,
                            "linear",
                            "${imagem04_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            6985,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            8170,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            3795,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            4590,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            6585,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            8565,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_05_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            13160,
                            0,
                            "linear",
                            "${texto04_05_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            15950,
                            0,
                            "linear",
                            "${texto04_05_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            4985,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            2195,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_05_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            13951,
                            0,
                            "linear",
                            "${imagem04_05_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            15145,
                            0,
                            "linear",
                            "${imagem04_05_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            2195,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            4140,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "left",
                            5585,
                            500,
                            "linear",
                            "${texto04_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid59",
                            "left",
                            6085,
                            100,
                            "linear",
                            "${texto04_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid60",
                            "left",
                            8960,
                            100,
                            "linear",
                            "${texto04_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid61",
                            "left",
                            9060,
                            500,
                            "linear",
                            "${texto04_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            6985,
                            400,
                            "linear",
                            "${texto04_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            7775,
                            400,
                            "linear",
                            "${texto04_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid171",
                            "opacity",
                            14160,
                            400,
                            "linear",
                            "${imagem04_05_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            14560,
                            400,
                            "linear",
                            "${imagem04_05_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            10965,
                            0,
                            "linear",
                            "${texto04_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            11760,
                            0,
                            "linear",
                            "${texto04_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            7552,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            7652,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${texto04_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            8170,
                            400,
                            "linear",
                            "${texto04_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            6585,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            8565,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "opacity",
                            7204,
                            400,
                            "linear",
                            "${texto04_03_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            7604,
                            400,
                            "linear",
                            "${texto04_03_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid108",
                            "left",
                            10365,
                            500,
                            "linear",
                            "${texto04_04_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid109",
                            "left",
                            10865,
                            100,
                            "linear",
                            "${texto04_04_02}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid110",
                            "left",
                            11760,
                            100,
                            "linear",
                            "${texto04_04_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid111",
                            "left",
                            11860,
                            500,
                            "linear",
                            "${texto04_04_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            9560,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "left",
                            9560,
                            500,
                            "linear",
                            "${texto04_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid93",
                            "left",
                            10060,
                            100,
                            "linear",
                            "${texto04_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid94",
                            "left",
                            12566,
                            100,
                            "linear",
                            "${texto04_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid95",
                            "left",
                            12666,
                            500,
                            "linear",
                            "${texto04_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid167",
                            "opacity",
                            13760,
                            400,
                            "linear",
                            "${texto04_05_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            14955,
                            400,
                            "linear",
                            "${texto04_05_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid163",
                            "opacity",
                            13760,
                            400,
                            "linear",
                            "${imagem04_05_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            14955,
                            400,
                            "linear",
                            "${imagem04_05_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            16605,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "opacity",
                            10965,
                            400,
                            "linear",
                            "${texto04_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            11365,
                            400,
                            "linear",
                            "${texto04_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            4985,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "opacity",
                            10160,
                            400,
                            "linear",
                            "${imagem04_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            12166,
                            400,
                            "linear",
                            "${imagem04_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid68",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${texto04_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            8565,
                            400,
                            "linear",
                            "${texto04_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid80",
                            "opacity",
                            6985,
                            400,
                            "linear",
                            "${imagem04_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            7775,
                            400,
                            "linear",
                            "${imagem04_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid40",
                            "left",
                            2795,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid41",
                            "left",
                            3295,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid42",
                            "left",
                            4985,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid43",
                            "left",
                            5085,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            15950,
                            400,
                            "linear",
                            "${titulo04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            10160,
                            0,
                            "linear",
                            "${imagem04_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            12561,
                            0,
                            "linear",
                            "${imagem04_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto04_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto04_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid7",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid8",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid9",
                            "left",
                            2195,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid10",
                            "left",
                            2295,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '45px',
                            '-905px'
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
                            type: 'text',
                            rect: ['0px', '0px', '660px', '250px', 'auto', 'auto'],
                            text: 'Os holandeses estiveram na Amazônia, na Bahia, no Espírito  Santo, em Pernambuco e São Paulo. No nordeste brasileiro, no período colonial, estabeleceram-se desde 1634 até a sua expulsão em 1654. <br>Destaca-se o governo de Maurício de Nassau, em Pernambuco, pelas melhorias urbanas, sociais e religiosas que implantou.<br>A sinagoga Kahal Zur Israel , a primeira sinagoga das Américas, localiza-se em Recife e suas instalações compreende o Centro Judaico de Pernambuco.  <br>',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['284px', '157px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_1',
                            text: '1',
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
                            rect: ['0px', '0px', '587px', '226px', 'auto', 'auto'],
                            text: 'No final da 2a guerra mundial, em 1948, lavradores holandeses, através da KNBTB (Katholieke Nederlandse Boer en Tuiemers Bond), que significa Organização dos Lavradores e Horticultores Católicos da Holanda, compraram a Fazenda Ribeirão, localizada em São Paulo formando uma comunidade a partir do projeto de colonização agrícola coordenado pela Cooperativa Agropecuária Holambra  (CAPH). <br>',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['234px', '184px', '12px', '18px', 'auto', 'auto'],
                            id: '_2',
                            text: '2',
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
            },
            "imagens07_04_01_1": {
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
                            text: 'Segundo Peter<br>',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['148px', '-4px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_3',
                            text: '3',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao04_edgeActions.js");
})("EDGE-29762419");
