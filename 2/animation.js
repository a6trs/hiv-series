var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.commit();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
