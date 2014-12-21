var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.ext.background(1, [255, 255, 108]);
    acg.put(3, acg.text(
        {x: 0.5, y: 0.8, fontsize: 44, text: '今天是……', colour: [255, 255, 108]},
        ['+',
            ['tint-to', 0.7, 0, 0, 0],
            ['delay', 6.3]
        ]
    ));
    var now = new Date();
    acg.put(4, acg.text(
        {x: 0.2, y: 0.5, ax: 0.2, ay: 0.5,
            fontsize: 64, text: '1900', colour: [108, 108, 0]},
        ['+',
            ['ease-cubic-out', ['go-number', 2, 1900 + now.getYear()]],
            ['change-text', 1900 + now.getYear() + '.'],
            ['delay', 4]
        ]
    ));
    acg.put(5.5, acg.text(
        {x: 0.6, y: 0.5, ax: 0.6, ay: 0.5,
            fontsize: 64, text: '0', colour: [108, 128, 32]},
        ['+',
            ['ease-cubic-out', ['go-number', 2, 1 + now.getMonth()]],
            ['change-text', 1 + now.getMonth() + '.'],
            ['delay', 2.5]
        ]
    ));
    acg.put(7, acg.text(
        {x: 0.8, y: 0.5, ax: 0.8, ay: 0.5,
            fontsize: 64, text: '0', colour: [64, 128, 192]},
        ['+',
            ['ease-cubic-out', ['go-number', 1.5, now.getDate()]],
            ['delay', 1.5]
        ]
    ));

    acg.ext.background(11, [128, 255, 128]);
    acg.put(12, acg.text(
        {x: 0.5, y: 0.8, fontsize: 44, text: '距离毕业还有', colour: [128, 255, 128]},
        ['+',
            ['tint-to', 0.7, 0, 0, 0],
            ['delay', 6.3]
        ]
    ));
    var grad_date = new Date(2015, 6);
    acg.put(13, acg.text(
        {x: 0.5, y: 0.5, fontsize: 76, text: '365', colour: [64, 64, 128]},
        ['+',
            ['ease-cubic-out',
                ['go-number', 2, Math.floor((grad_date - now) / (86400 * 1000))]
            ],
            ['delay', 4]
        ]
    ));
    acg.put(14.5, acg.text(
        {x: 0.7, y: 0.45, text: '天', colour: [128, 255, 128]},
        ['+',
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', 4.3]
        ]
    ));

    acg.ext.background(20, [128, 128, 255]);
    acg.put(21, acg.text(
        {x: 0.5, y: 0.8, fontsize: 44, text: '你知道吗？', colour: [0, 0, 0]},
        ['delay', 7]
    ));
    acg.put(22.5, acg.text(
        {x: 0.5, y: 0.6, fontsize: 38, text: '2014年12月21日，冬至', colour: [0, 0, 0]},
        ['delay', 5.5]
    ));
    acg.put(24, acg.text(
        {x: 0.5, y: 0.4, fontsize: 28,
            text: '是2015届毕业前\n夜晚最长的一天', colour: [0, 0, 0]},
        ['delay', 4]
    ));
    acg.put(29, acg.text(
        {x: 0.5, y: 0.7, fontsize: 42, text: '珍爱生命', colour: [128, 128, 255]},
        ['+',
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', 3.8]
        ]
    ));
    acg.put(30.5, acg.text(
        {x: 0.5, y: 0.4, fontsize: 30, text: '好好度过12.21的漫漫长夜吧！！', colour: [128, 128, 255]},
        ['+',
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', 2.3]
        ]
    ));

    acg.ext.background(34, [0, 0, 0]);
    acg.put(35, acg.text(
        {x: 0.5, y: 0.618, fontsize: 52, text: 'The End', colour: [0, 0, 0]},
        ['+',
            ['tint-to', 0.2, 255, 255, 255],
            ['delay', 4.3]
        ]
    ));
    acg.put(36, acg.text(
        {x: 0.5, y: 0.31, fontsize: 28,
            text: 'by LSQ\n由于2014.12.20晚上脑洞大开制作\n= =b', colour: [255, 255, 255]},
        ['delay', 3.5]
    ));

    acg.ext.background_commit();
    acg.commit();
    acg.travel(0);
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
