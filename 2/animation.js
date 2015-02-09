var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.put(0, acg.img('a6_title.png',
        {x: 0.5, y: 0.5, opacity: 0.0001},
        ['+', ['fade-in', 0.8], ['delay', 1.4], ['fade-out', 0.8]]
    ));
    acg.put(0, acg.text(
        {x: 0.5, y: 0, ax: 0.5, ay: 0, fontsize: 26,
            text: '-= 鸭梨山大的毕业 出品 =-', colour: [255, 255, 255]},
        ['delay', 3]
    ));
    acg.put(4, acg.img('IMO_title.png',
        {x: 0.5, y: 0.5, opacity: 0.0001},
        ['//',
            ['+', ['fade-in', 0.8], ['delay', 2.4], ['fade-out', 0.8]],
            ['scale-to', 4, 1.2]
        ]
    ));
    acg.put(4, acg.text(
        {x: 0.5, y: 0, ax: 0.5, ay: 0, fontsize: 26,
            text: '-= 一模前的那些事儿 =-', colour: [255, 255, 255]},
        ['delay', 4]
    ));
    acg.commit();
    acg.ext.cp_enable();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
