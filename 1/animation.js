var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.put(0, acg.text(
        {x: 0.5, y: 0.5, fontsize: 44,
            text: 'INTRODUCING\nA WHOLE NEW VERSION\nOF ACG.JS',
            colour: [255, 255, 255]},
        ['delay', 10]
    ));
    acg.commit();
    acg.travel(0);
    acg.ext.cp_enable();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
