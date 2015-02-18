var acg = acg || {};
acg.ext = acg.ext || {};

var initStage = function () {
    acg.ext.background(0, [255, 255, 0]);
    acg.put(0, acg.img('danmaku-sliding.png', {scale: 2}, ['delay', 20]));
    acg.ext.background_commit();
    acg.commit();
    acg.ext.cp_enable(function (time, type, colour, cmt) {
        acg.ext._233_add(time + 0.5, cmt, acg.colour(colour), type);
        //acg.ext._233_onresume_reg();    // Force refresh
        var lmnt = document.createElement('script');
        lmnt.src = 'http://cg-u4.cn.gp/comment.php?page_id=8888&action=post&time='
            + time.toString() + '&type=' + type.toString()
            + '&colour=%23' + colour.substr(1) + '&text=' + cmt;
        document.body.appendChild(lmnt);
    });
    acg.ext._233_commit();
    cc.director.setDisplayStats(false);
    // Load all comments
    var lmnt = document.createElement('script');
    lmnt.src = 'http://cg-u4.cn.gp/comment.php?page_id=8888&action=retrieve';
    document.head.appendChild(lmnt);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
