var acg = acg || {};
acg.ext = acg.ext || {};

// 懒得再去修改 acg.ext.words 的实现了，干脆直接在这里写一个
// TODO: 把 acg.ext.words 的实现变成这个
putText = function (time, text, delay) {
    acg.put(time, acg.text(
        {x: 0.5, y: 0, ax: 0.5, ay: 0, fontsize: 26,
            text: text, colour: [255, 255, 255]},
        ['delay', delay]
    ));
};

var initStage = function () {
    acg.put(0, acg.img('a6_title.png',
        {x: 0.5, y: 0.5, opacity: 0.0001},
        ['+', ['fade-in', 0.8], ['delay', 1.4], ['fade-out', 0.8]]
    ));
    putText(0, '-= 鸭梨山大的毕业 出品 =-', 3);
    for (var i = 1; i <= 5; i++) {
        acg.put(i * 4, acg.img('credits-' + i + '.png',
            {x: 0.618, y: 0.2, ax: 0.618, ay: 0, opacity: 0.0001},
            ['+', ['fade-in', 0.8], ['delay', 1.4], ['fade-out', 0.8]]
        ));
    }
    acg.put(24, acg.img('IMG_0046.JPG',
        {x: 0.5, y: 0.5, opacity: 0.0001, scale: 1.5},
        ['//',
            ['+', ['fade-to', 0.4, 0.4 * 255], ['delay', 4], ['fade-out', 0.4]],
            ['scale-to', 4, 1.2]
        ]
    ));
    acg.put(24, acg.img('IMO_title.png',
        {x: 0.5, y: 0.5, opacity: 0.0001},
        ['//',
            ['+', ['fade-in', 0.8], ['delay', 2.4], ['fade-out', 0.8]],
            ['scale-to', 4, 1.2]
        ]
    ));
    putText(24, '-= 一模前的那些事儿 =-', 4);
    acg.commit();
    acg.ext.cp_enable();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
