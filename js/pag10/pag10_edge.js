/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag10/',
        aud='media/',
        vid='media/',
        js='js/pag10/',
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
                            id: 'titulo10',
                            type: 'text',
                            rect: ['50px', '35px', '877px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "NOVA IMIGRAÇÃO AFRICANA E CARIBENHA NO BRASIL: O PERFIL MIGRATÓRIO BRASILEIRO DOS ÚLTIMOS ANOS. ",
                            align: "center",
                            font: ['LithosPro-Black', [28, "px"], "rgba(46,112,159,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto10_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '877px', '25px', 'auto', 'auto'],
                            text: "A diáspora africana para o Brasil tem sido pauta de debates entre os movimentos sociais. A politica migratória do governo tem pautado essa migração dos africanos e caribenhos como casos de criminalização. Após o terremoto de 2010 no Haiti, o Brasil passou a ser um dos destinos preferenciais dos migrantes que chegam a grande quantidade. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['46px', '284px', '400px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['25px', '570px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Movimento migratório de haitianos para o Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['512px', '284px', '451px', '310px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['552px', '541px', '364px', '22px', 'auto', 'auto'],
                            text: "Grupo de 400 haitianos desembarcando no Porto de Manaus.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '907px', '25px', 'auto', 'auto'],
                            text: "Em 2013, o governador do Acre, decretou situação de emergência social para os municípios de Epitaciolândia e Brasiléia em consequência da chegada descontrolada de imigrantes nestes locais, em sua maioria haitiana. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['106px', '229px', '760px', '331px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['202px', '567px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Haitianos se reúnem em praça na cidade de Brasileia, no Acre.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto10_03_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem10_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '165px', '439px', '318px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['-641px', '184px', '382px', '25px', 'auto', 'auto'],
                            text: "Além dos haitianos, pessoas de outros países começam a utilizar a fronteira entre Assis Brasil e a cidade peruana de Iñapari como porta de entrada para o Brasil. Vindos de países como o Senegal, Nigéria, República Dominicana e Bangladesh eles passaram a dividir com os haitianos o abrigo montado em Brasiléia. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['182px', '194px', '680px', '243px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto10_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['552px', '448px', '296px', '24px', 'auto', 'auto'],
                            text: "Haitianos e senegaleses têm rivalidade histórica, o que torna a convivência em alojamentos no Acre muito difícil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto10_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '503px', '414px', '27px', 'auto', 'auto'],
                            text: "Esse exemplo revela que mais do que um “problema” do Acre, a imigração é uma questão social de todo o Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['378px', '135px', '80px', '22px', 'auto', 'auto'],
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
                            id: 'imagem10_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['6px', '172px', '958px', '434px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '183px', '907px', '25px', 'auto', 'auto'],
                            text: "Embora estejam em 286 cidades brasileiras, 75% dos haitianos estão concentrados em São Paulo, em torno de 10% em Manaus e 7% – cerca de 3 mil – em Minas Gerais, sobretudo em Belo Horizonte, Esmeraldas e Contagem, ambas na Grande BH. “O Brasil não é mais o país de imigração do início do século nem o país da emigração dos anos ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto10_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '290px', '515px', '25px', 'auto', 'auto'],
                            text: "1980. Somos hoje um país de imigração, emigração e trânsito, além dos brasileiros que retornam depois de viver muitos anos no exterior. A questão migratória é atualmente muito maior do que foi no passado”, considera Duval Fernandes. Segundo ele, considerando a redução da taxa de natalidade no país, em 2030, a população brasileira começará a encolher, e mais da metade das aposentadorias serão bancadas pela contribuição dos imigrantes. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['583px', '295px', '355px', '240px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_04_02.png",'0px','0px']
                        },
                        {
                            id: 'texto10_04_04',
                            display: 'none',
                            type: 'text',
                            rect: ['591px', '540px', '342px', '24px', 'auto', 'auto'],
                            text: "Grupo de haitianos recebe visto para residência permanente no Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['277px', '134px', '87px', '22px', 'auto', 'auto'],
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
                    duration: 14606,
                    autoPlay: true,
                    data: [
                        [
                            "eid178",
                            "opacity",
                            11749,
                            400,
                            "linear",
                            "${imagem10_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            12149,
                            400,
                            "linear",
                            "${imagem10_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid80",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${imagem10_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            9350,
                            400,
                            "linear",
                            "${imagem10_03_01}",
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
                            14206,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "left",
                            3590,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid38",
                            "left",
                            4090,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid39",
                            "left",
                            4985,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid40",
                            "left",
                            5085,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2595,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid164",
                            "left",
                            11149,
                            500,
                            "linear",
                            "${texto10_04_03}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid165",
                            "left",
                            11649,
                            100,
                            "linear",
                            "${texto10_04_03}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid166",
                            "left",
                            12544,
                            100,
                            "linear",
                            "${texto10_04_03}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid167",
                            "left",
                            12644,
                            500,
                            "linear",
                            "${texto10_04_03}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            13951,
                            400,
                            "linear",
                            "${titulo10}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            10345,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            13951,
                            0,
                            "linear",
                            "${texto10_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "opacity",
                            4190,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            6961,
                            0,
                            "linear",
                            "${texto10_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            8956,
                            0,
                            "linear",
                            "${texto10_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_04_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            11749,
                            0,
                            "linear",
                            "${texto10_04_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            12544,
                            0,
                            "linear",
                            "${texto10_04_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "opacity",
                            6961,
                            400,
                            "linear",
                            "${imagem10_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            8561,
                            400,
                            "linear",
                            "${imagem10_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            11749,
                            0,
                            "linear",
                            "${imagem10_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            12544,
                            0,
                            "linear",
                            "${imagem10_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2595,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${imagem10_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            9745,
                            0,
                            "linear",
                            "${imagem10_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            5585,
                            0,
                            "linear",
                            "${texto10_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            10345,
                            0,
                            "linear",
                            "${texto10_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            11149,
                            0,
                            "linear",
                            "${texto10_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            13144,
                            0,
                            "linear",
                            "${texto10_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            2595,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "left",
                            7361,
                            500,
                            "linear",
                            "${texto10_03_04}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid99",
                            "left",
                            7861,
                            100,
                            "linear",
                            "${texto10_03_04}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid92",
                            "left",
                            7961,
                            100,
                            "linear",
                            "${texto10_03_04}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid93",
                            "left",
                            8061,
                            500,
                            "linear",
                            "${texto10_03_04}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            6361,
                            0,
                            "linear",
                            "${texto10_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            9556,
                            0,
                            "linear",
                            "${texto10_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            10945,
                            0,
                            "linear",
                            "${imagem10_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            13351,
                            0,
                            "linear",
                            "${imagem10_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
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
                            12102,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            12202,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            11149,
                            0,
                            "linear",
                            "${texto10_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            13144,
                            0,
                            "linear",
                            "${texto10_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "left",
                            6361,
                            500,
                            "linear",
                            "${texto10_03_02}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid60",
                            "left",
                            6861,
                            100,
                            "linear",
                            "${texto10_03_02}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid96",
                            "left",
                            6961,
                            0,
                            "linear",
                            "${texto10_03_02}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid103",
                            "left",
                            8956,
                            100,
                            "linear",
                            "${texto10_03_02}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid62",
                            "left",
                            9056,
                            500,
                            "linear",
                            "${texto10_03_02}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid182",
                            "opacity",
                            11749,
                            400,
                            "linear",
                            "${texto10_04_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid183",
                            "opacity",
                            12149,
                            400,
                            "linear",
                            "${texto10_04_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid30",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            2990,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            4985,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            2595,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "opacity",
                            10945,
                            400,
                            "linear",
                            "${imagem10_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            12956,
                            400,
                            "linear",
                            "${imagem10_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            2990,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "left",
                            11149,
                            500,
                            "linear",
                            "${texto10_04_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid144",
                            "left",
                            11649,
                            100,
                            "linear",
                            "${texto10_04_02}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid145",
                            "left",
                            12544,
                            100,
                            "linear",
                            "${texto10_04_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid146",
                            "left",
                            12644,
                            500,
                            "linear",
                            "${texto10_04_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid1",
                            "display",
                            14606,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            7361,
                            0,
                            "linear",
                            "${texto10_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            8561,
                            0,
                            "linear",
                            "${texto10_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid52",
                            "left",
                            5585,
                            500,
                            "linear",
                            "${texto10_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid53",
                            "left",
                            6085,
                            100,
                            "linear",
                            "${texto10_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid54",
                            "left",
                            9745,
                            100,
                            "linear",
                            "${texto10_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid55",
                            "left",
                            9845,
                            500,
                            "linear",
                            "${texto10_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            4985,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            7901,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            8011,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            6961,
                            0,
                            "linear",
                            "${imagem10_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            8956,
                            0,
                            "linear",
                            "${imagem10_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "opacity",
                            6961,
                            400,
                            "linear",
                            "${texto10_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            8561,
                            400,
                            "linear",
                            "${texto10_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid47",
                            "opacity",
                            4190,
                            400,
                            "linear",
                            "${texto10_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4590,
                            400,
                            "linear",
                            "${texto10_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid133",
                            "left",
                            10345,
                            500,
                            "linear",
                            "${texto10_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid134",
                            "left",
                            10845,
                            100,
                            "linear",
                            "${texto10_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid135",
                            "left",
                            13351,
                            100,
                            "linear",
                            "${texto10_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid136",
                            "left",
                            13451,
                            500,
                            "linear",
                            "${texto10_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid6",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto10_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid7",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto10_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid8",
                            "left",
                            2990,
                            100,
                            "linear",
                            "${texto10_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid9",
                            "left",
                            3090,
                            500,
                            "linear",
                            "${texto10_01_01}",
                            '45px',
                            '-905px'
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
                            textStyle: ['', '', '27px', ''],
                            text: 'Segundo reportagem de Marcel &amp; Natani',
                            rect: ['0px', '0px', '867px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['411px', '-4px', 'auto', 'auto', 'auto', 'auto']
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
                            textStyle: ['', '', '27px', ''],
                            text: 'Segundo Maakaroun  &amp; Augusto',
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['318px', '-4px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag10/pag10_edgeActions.js");
})("EDGE-19720572");
