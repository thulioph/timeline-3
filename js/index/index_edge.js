/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/index/',
        aud='media/',
        vid='media/',
        js='js/index/',
        fonts = {
            'LithosPro-Regular': '@font-face {        font-family: \'LithosPro-Regular\';        src: url(\'font/LithosPro-Regular.eot\'),          url(\'font/LithosPro-Regular.ttf\') format(\'truetype\'),          url(\'font/LithosPro-Regular.otf\'),          url(\'font/LithosPro-Regular.woff\');        font-weight: normal;        font-style: normal;}'        },
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
                            rect: ['3px', '6px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'texto_tela_inicial_afroCopy',
                            symbolName: 'imagem03_03_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-902px', '126', '891', '118', 'auto', 'auto']
                        },
                        {
                            id: 'imagem_tela_inicial_01',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '23px', '453px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem_tela_inicial_01.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'text',
                            rect: ['334px', '38px', 'auto', 'auto', 'auto', 'auto'],
                            text: "CULTURA BRASILEIRA",
                            align: "justify",
                            font: ['LithosPro-Regular', [28, "px"], "rgba(243,234,210,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['817px', '341px', '116px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['407px', '477px', '81px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['854px', '531px', '88px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['187px', '555px', '88px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 2840,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_4}",
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
                            2440,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "display",
                            2840,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '-902px',
                            '52px'
                        ],
                        [
                            "eid25",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '52px',
                            '42px'
                        ],
                        [
                            "eid26",
                            "left",
                            1400,
                            100,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '42px',
                            '52px'
                        ],
                        [
                            "eid27",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '52px',
                            '-902px'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${titulo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${titulo}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            250,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            250,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${titulo}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "imagem03_03_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'texto_inicial',
                            textStyle: ['', '', '27px', ''],
                            text: 'Considerada como uma das mais miscigenadas do mundo, a história da cultura brasileira é um processo continuado de amalgamento cultural.  Comumente aponta-se que a cultura brasileira tem três matrizes básicas: a nativa (indígena), a portuguesa (ibérica) e a africana. A essas matrizes podem ser acrescidas as influências das migrações sucessivas (sobretudo após o século XIX) dos europeus, dos orientais, dos americanos e mais recentemente dos africanos e caribenhos. <br>Mas deve-se ressaltar que a convivência dos povos que participaram da formação da cultura brasileira nem sempre foi pacífica. Na verdade foi e continua sendo uma história de lutas e conflitos. Darcy Ribeiro, no seu premiado livro “O povo brasileiro”  , afirma que por trás dessa aparente <br>[...]..uniformidade cultural brasileira, esconde-se uma profunda discrepância, gerada pelo tipo de estratificação que o processo de formação nacional produziu (...) fazendo as distâncias sociais mais intransponíveis que as diferenças raciais. <br>A cultura brasileira é um mosaico étnico . Traçar tópicos simbólicos que expliquem a cultura brasileira, ao longo da história da formação social nacional deve, portanto, afastar-se da visão eurocêntrica e aproximar-se de outros olhares e relatos de mundo.  Como afirma Antunes , somos o que somos, inclassificáveis <br>',
                            rect: ['0px', '0px', '891px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['876px', '213px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['426px', '351px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_3',
                            text: '3',
                            align: 'justify',
                            rect: ['889px', '404px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_4',
                            text: '4',
                            align: 'justify',
                            rect: ['220px', '430px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '891px', '118px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/index/index_edgeActions.js");
})("EDGE-3778037");
