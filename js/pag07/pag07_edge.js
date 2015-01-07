/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag07/',
        aud='media/',
        vid='media/',
        js='js/pag07/',
        fonts = {
            'LithosPro-Black': '@font-face {    font-family: \'LithosPro-Black\';    src: url(\'font/LithosPro-Black.eot\'), url(\'font/LithosPro-Black.ttf\') format(\'truetype\'), url(\'font/LithosPro-Black.otf\'), url(\'font/LithosPro-Black.woff\');    font-weight: normal;    font-style: normal;}',
            'MS-Reference-Sans-Serif': '@font-face {    font-family: \'MS-Reference-Sans-Serif\';    src: url(\'font/REFSAN.eot\'), url(\'font/REFSAN.ttf\') format(\'truetype\'), url(\'font/REFSAN.otf\'), url(\'font/REFSAN.woff\');    font-weight: normal;    font-style: normal;}'        },
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
                            rect: ['5px', '4px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo07',
                            type: 'text',
                            rect: ['61px', '35px', '855px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "IMIGRAÇÃO ORIENTAL NO BRASIL: DO PRECONCEITO AO RECONHECIMENTO. DO BRASIL DA ABERTURA DOS PORTOS AO BRASIL ATUAL. ",
                            align: "center",
                            font: ['LithosPro-Black', [20, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto07_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '133', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem07_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '213px', '469px', '279px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01.png",'0px','0px']
                        },
                        {
                            id: 'texto07_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['56px', '498px', '345px', '22px', 'auto', 'auto'],
                            text: "Plantação chinesa de chá na região do Jardim Botânico. Ilustração do pintor alemão Johann Moritz Rugendas (1802-1858). ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['983px', '266px', '479px', '25px', 'auto', 'auto'],
                            text: "Suas contribuições são inúmeras: na culinária, na técnica da acupuntura, nas artes marciais, no horóscopo chinês, nas lavanderias e pastelarias. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['576px', '291px', '357px', '242px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02.png",'0px','0px']
                        },
                        {
                            id: 'texto07_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['564px', '539px', '279px', '22px', 'auto', 'auto'],
                            text: "Porção de Yakisoba\r <br>(prato de origem chinesa).",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['131px', '188px', '225px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto07_02_01',
                            display: 'block',
                            type: 'text',
                            rect: ['985px', '133px', '886px', '25px', 'auto', 'auto'],
                            text: "Os coreanos chegaram ao Brasil entre 1923 e 1926 evadidos da coerção do Japão sobre a Coreia ou como japoneses naturalizados. A imigração tornou-se mais intensa nas décadas de 1960 e 1970 quando se formalizou a imigração dos coreanos no Brasil. A partir da década de 1990, passaram a trabalhar no comércio de roupas em São Paulo. Trouxeram suas artes marciais como o taekwondo e o hapkidô. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '158px', '434px', '406px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03.png",'0px','0px']
                        },
                        {
                            id: 'texto07_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['2px', '559px', '493px', '25px', 'auto', 'auto'],
                            text: "Coreanos saindo do porto de Busan para o Brasil (acervo digital Museu da Imigração).",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'linha07_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['486px', '296px', '4px', '311px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"linha.png",'0px','0px']
                        },
                        {
                            id: 'imagem07_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['507px', '285px', '495px', '331px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem04.png",'0px','0px']
                        },
                        {
                            id: 'imagem07_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '457px', '956px', '151px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07.png",'0px','0px']
                        },
                        {
                            id: 'texto07_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '134px', '890px', '25px', 'auto', 'auto'],
                            text: "Os imigrantes árabes chegaram ao Brasil a partir do final século XIX. A imigração cresceu no século seguinte sendo a maioria de libaneses e os demais de origem síria. Embora viessem principalmente da Síria, do Líbano e de outros pontos do Oriente Médio. A presença de palestinos, egípcios, jordanianos e marroquinos também é evidente. Quanto a esses últimos, foi a partir de sua imigração que criaram a segunda ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto07_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['-663px', '273px', '649px', '25px', 'auto', 'auto'],
                            text: "comunidade judaica do país, em Belém, e estabeleceram a sinagoga Shaar Hashamain em torno de 1824. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['25px', '215px', '440px', '333px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05.png",'0px','0px']
                        },
                        {
                            id: 'texto07_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['45px', '553px', '211px', '25px', 'auto', 'auto'],
                            text: "Armarinho sírio em São Paulo, 1950.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem07_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '328px', '553px', '222px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06.png",'0px','0px']
                        },
                        {
                            id: 'texto07_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['519px', '86.4%', '304px', '25px', 'auto', 'auto'],
                            text: "Sinagoga Shaar Hashamaim de Belém do Pará.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_04_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem07_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['157px', '189px', '781px', '299px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem08.png",'0px','0px']
                        },
                        {
                            id: 'texto07_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['719px', '508px', '227px', '27px', 'auto', 'auto'],
                            text: "Rua 25 de Março localizada no centro da cidade de São Paulo.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['-353px', '242px', '325px', '25px', 'auto', 'auto'],
                            text: "A contribuição cultural dos árabes é rica e sua influência pode ser vista na culinária, no vocabulário e até na religião.   ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['476px', '324px', '215px', '236px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09.png",'0px','0px']
                        },
                        {
                            id: 'texto07_04_04',
                            display: 'none',
                            type: 'text',
                            rect: ['514px', '558px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Quibe frito.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem07_04_03',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '245px', '478px', '342px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem10.png",'0px','0px']
                        },
                        {
                            id: 'texto07_04_05',
                            display: 'none',
                            type: 'text',
                            rect: ['24px', '497px', '376px', '22px', 'auto', 'auto'],
                            text: "Mesquita Omar Ibn Al-Khattab, em Foz do Iguaçu, Paraná; a cidade abriga a maior comunidade muçulmana do Brasil.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['280px', '192px', '128px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 17400,
                    autoPlay: true,
                    data: [
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            9400,
                            0,
                            "linear",
                            "${texto07_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${texto07_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid356",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            13600,
                            0,
                            "linear",
                            "${imagem07_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            15200,
                            0,
                            "linear",
                            "${imagem07_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            17000,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            16800,
                            400,
                            "linear",
                            "${titulo07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid386",
                            "width",
                            10200,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            '890px',
                            '890px'
                        ],
                        [
                            "eid304",
                            "left",
                            12000,
                            500,
                            "linear",
                            "${texto07_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid305",
                            "left",
                            12500,
                            100,
                            "linear",
                            "${texto07_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid306",
                            "left",
                            16200,
                            100,
                            "linear",
                            "${texto07_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid307",
                            "left",
                            16300,
                            500,
                            "linear",
                            "${texto07_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid355",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            13600,
                            0,
                            "linear",
                            "${texto07_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            15200,
                            0,
                            "linear",
                            "${texto07_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid334",
                            "left",
                            13000,
                            500,
                            "linear",
                            "${texto07_04_03}",
                            '-353px',
                            '376px'
                        ],
                        [
                            "eid336",
                            "left",
                            13500,
                            100,
                            "linear",
                            "${texto07_04_03}",
                            '376px',
                            '366px'
                        ],
                        [
                            "eid331",
                            "left",
                            15200,
                            100,
                            "linear",
                            "${texto07_04_03}",
                            '366px',
                            '376px'
                        ],
                        [
                            "eid332",
                            "left",
                            15300,
                            500,
                            "linear",
                            "${texto07_04_03}",
                            '376px',
                            '-353px'
                        ],
                        [
                            "eid261",
                            "display",
                            0,
                            0,
                            "linear",
                            "${linha07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${linha07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            7400,
                            0,
                            "linear",
                            "${linha07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${imagem07_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            16200,
                            0,
                            "linear",
                            "${imagem07_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid250",
                            "opacity",
                            9400,
                            400,
                            "linear",
                            "${texto07_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${texto07_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid353",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_04_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${texto07_04_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            14800,
                            0,
                            "linear",
                            "${texto07_04_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "opacity",
                            5800,
                            400,
                            "linear",
                            "${linha07_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            7000,
                            400,
                            "linear",
                            "${linha07_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            3800,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid320",
                            "opacity",
                            12600,
                            400,
                            "linear",
                            "${imagem07_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            15800,
                            400,
                            "linear",
                            "${imagem07_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid347",
                            "opacity",
                            14000,
                            400,
                            "linear",
                            "${imagem07_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid348",
                            "opacity",
                            14400,
                            400,
                            "linear",
                            "${imagem07_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid343",
                            "opacity",
                            13600,
                            400,
                            "linear",
                            "${texto07_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid344",
                            "opacity",
                            14800,
                            400,
                            "linear",
                            "${texto07_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${imagem07_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            14800,
                            0,
                            "linear",
                            "${imagem07_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto07_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid37",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto07_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid66",
                            "left",
                            4200,
                            100,
                            "linear",
                            "${texto07_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid65",
                            "left",
                            4300,
                            500,
                            "linear",
                            "${texto07_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            9400,
                            0,
                            "linear",
                            "${imagem07_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${imagem07_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${texto07_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            3203,
                            0,
                            "linear",
                            "${texto07_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "left",
                            4800,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid98",
                            "left",
                            5300,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid99",
                            "left",
                            7800,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid103",
                            "left",
                            7900,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid380",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            6600,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid385",
                            "display",
                            17400,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid184",
                            "display",
                            8400,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "opacity",
                            9800,
                            400,
                            "linear",
                            "${imagem07_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid256",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${imagem07_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid185",
                            "left",
                            8400,
                            500,
                            "linear",
                            "${texto07_03_02}",
                            '-663px',
                            '287px'
                        ],
                        [
                            "eid238",
                            "left",
                            8900,
                            100,
                            "linear",
                            "${texto07_03_02}",
                            '287px',
                            '277px'
                        ],
                        [
                            "eid239",
                            "left",
                            11400,
                            100,
                            "linear",
                            "${texto07_03_02}",
                            '277px',
                            '287px'
                        ],
                        [
                            "eid188",
                            "left",
                            11500,
                            500,
                            "linear",
                            "${texto07_03_02}",
                            '287px',
                            '-663px'
                        ],
                        [
                            "eid194",
                            "opacity",
                            9000,
                            400,
                            "linear",
                            "${imagem07_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${imagem07_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            5400,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            7800,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "opacity",
                            6200,
                            400,
                            "linear",
                            "${imagem07_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            6600,
                            400,
                            "linear",
                            "${imagem07_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid259",
                            "display",
                            9800,
                            0,
                            "linear",
                            "${imagem07_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            10600,
                            0,
                            "linear",
                            "${imagem07_03_03}",
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
                            "eid181",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            2850,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${texto07_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            16200,
                            0,
                            "linear",
                            "${texto07_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${texto07_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${texto07_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            6,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "display",
                            11400,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto07_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${texto07_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid381",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid382",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid384",
                            "display",
                            14400,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${texto07_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            11400,
                            0,
                            "linear",
                            "${texto07_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid362",
                            "display",
                            14353,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            14453,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "left",
                            1800,
                            500,
                            "linear",
                            "${texto07_01_02}",
                            '983px',
                            '439px'
                        ],
                        [
                            "eid47",
                            "left",
                            2300,
                            100,
                            "linear",
                            "${texto07_01_02}",
                            '439px',
                            '443px'
                        ],
                        [
                            "eid60",
                            "left",
                            3200,
                            100,
                            "linear",
                            "${texto07_01_02}",
                            '443px',
                            '439px'
                        ],
                        [
                            "eid59",
                            "left",
                            3300,
                            500,
                            "linear",
                            "${texto07_01_02}",
                            '439px',
                            '983px'
                        ],
                        [
                            "eid163",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "opacity",
                            5400,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            7400,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid113",
                            "opacity",
                            5400,
                            400,
                            "linear",
                            "${texto07_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            7400,
                            400,
                            "linear",
                            "${texto07_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto07_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            3800,
                            400,
                            "linear",
                            "${texto07_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid339",
                            "opacity",
                            13600,
                            400,
                            "linear",
                            "${imagem07_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid340",
                            "opacity",
                            14800,
                            400,
                            "linear",
                            "${imagem07_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto07_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${texto07_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid351",
                            "opacity",
                            14000,
                            400,
                            "linear",
                            "${texto07_04_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid352",
                            "opacity",
                            14400,
                            400,
                            "linear",
                            "${texto07_04_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "display",
                            17400,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "opacity",
                            12600,
                            400,
                            "linear",
                            "${texto07_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            15800,
                            400,
                            "linear",
                            "${texto07_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid258",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            6200,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "left",
                            8400,
                            500,
                            "linear",
                            "${texto07_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid153",
                            "left",
                            8900,
                            100,
                            "linear",
                            "${texto07_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid154",
                            "left",
                            11400,
                            100,
                            "linear",
                            "${texto07_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid155",
                            "left",
                            11500,
                            500,
                            "linear",
                            "${texto07_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid198",
                            "opacity",
                            9000,
                            400,
                            "linear",
                            "${texto07_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            11000,
                            400,
                            "linear",
                            "${texto07_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid246",
                            "opacity",
                            9400,
                            400,
                            "linear",
                            "${imagem07_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            10600,
                            400,
                            "linear",
                            "${imagem07_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            8400,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid262",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            5400,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            7800,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            8400,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid360",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${texto07_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            16800,
                            0,
                            "linear",
                            "${texto07_04_01}",
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
                            type: 'text',
                            rect: ['0px', '0px', '898px', '121px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text4',
                            textStyle: ['', '', '27px', ''],
                            text: 'Chineses, coreanos, árabes, turcos, sírio-libaneses, egípcios, marroquinos, jordanianos, iraquianos, palestinos e judeus exerceram importante papel na cultura brasileira. \rSegundo Chang-sheng (2009) os chineses foram os primeiros imigrantes estrangeiros que chegaram ao Brasil no século XIX para trabalhar na agricultura. ',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['309px', '51px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '1',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap']
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
            "texto07_04_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['5px', '0px', '897px', '25px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1.00)', '400', 'none solid rgb(153, 0, 0)', 'normal', 'break-word', ''],
                            text: 'A principal atividade dos árabes foi a do comércio de objetos domésticos, tecidos e café. Criaram, a Rua 25 de Março, hoje um dos maiores centros de comércio do Brasil, segundo a Prefeitura de São Paulo. <br>',
                            id: 'texto07_04_01',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['390px', '53px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text7',
                            text: '2',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1506px', '71px']
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
                            rect: ['0px', '0px', '910px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '27px', ''],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: 'A principal atividade dos árabes foi a do comércio de objetos domésticos, tecidos e café. Criaram, a Rua 25 de Março, hoje um dos maiores centros de comércio do Brasil, segundo a Prefeitura de São Paulo.<br>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['352px', '54px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: '2<br>',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '889px', '64px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag07/pag07_edgeActions.js");
})("EDGE-21969087");
