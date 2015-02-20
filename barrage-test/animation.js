var acg = acg || {};
acg.ext = acg.ext || {};
//var loc = window.location.href;
//loc = loc.substr(0, loc.lastIndexOf('/'));
//loc = loc.substr(0, loc.lastIndexOf('/'));
//acg.ext.set_res_path(loc + 'acg-res');
acg.ext.set_res_path('acg-res');
acg.ext._233_enable();

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
