var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.ext.background(1, [255, 255, 108]);
    acg.put(3, acg.text(
        {x: 0.5, y: 0.8, fontsize: 44, text: 'Today is', colour: [255, 255, 108]},
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
            ['go-number', 1, 1900 + now.getYear()],
            ['delay', 5]
        ]
    ));
    acg.put(5.5, acg.text(
        {x: 0.6, y: 0.5, ax: 0.6, ay: 0.5,
            fontsize: 64, text: '0', colour: [108, 128, 32]},
        ['+',
            ['go-number', 1, 1 + now.getMonth()],
            ['delay', 3.5]
        ]
    ));
    acg.put(7, acg.text(
        {x: 0.8, y: 0.5, ax: 0.8, ay: 0.5,
            fontsize: 64, text: '0', colour: [64, 128, 192]},
        ['+',
            ['go-number', 1, now.getDate()],
            ['delay', 2]
        ]
    ));

    acg.ext.background(10, [128, 255, 128]);
    acg.put(11, acg.text(
        {x: 0.5, y: 0.8, fontsize: 44, text: '距离毕业还有', colour: [128, 255, 128]},
        ['+',
            ['tint-to', 0.7, 0, 0, 0],
            ['delay', 6.3]
        ]
    ));
    var grad_date = new Date(2015, 6);
    acg.put(12, acg.text(
        {x: 0.5, y: 0.5, fontsize: 76, text: '365', colour: [64, 64, 128]},
        ['+',
            ['go-number', 1, Math.floor((grad_date - now) / (86400 * 1000))],
            ['delay', 5]
        ]
    ));
    acg.put(13.5, acg.text(
        {x: 0.7, y: 0.45, text: '天', colour: [128, 255, 128]},
        ['+',
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', 4.3]
        ]
    ));

    acg.ext.background_commit();
    acg.commit();
    acg.travel(10);
};

acg.bootstrap('game_canvas', initStage);
