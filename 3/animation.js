var acg = acg || {};
acg.ext = acg.ext || {};
acg.ext.set_res_path('acg-res');

var initStage = function () {
    var now = new Date();
    var now_str = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
    acg.put(2, acg.text(
        {x: 0.5, y: 0.58, fontsize: 34,
            text: now_str, colour: [255, 255, 255], opacity: 0.001},
        ['+', ['fade-in', 0.5], ['delay', 4], ['fade-out', 0.5]]
    ));
    acg.put(3, acg.text(
        {x: 0.5, y: 0.42, fontsize: 34,
            text: '距毕业            天', colour: [255, 255, 255], opacity: 0.001},
        ['+', ['fade-in', 0.5], ['delay', 3], ['fade-out', 0.5]]
    ));
    acg.put(4, acg.text(
        {x: 0.56, y: 0.42, fontsize: 54,
            text: '108', colour: [255, 255, 255], opacity: 0.001},
        ['+', ['fade-in', 0.5], ['delay', 2], ['fade-out', 0.5]]
    ));
    acg.ext.background(8, [192, 192, 0]);
    acg.ext.words(9, '大家好，又见面了。');
    acg.ext.words(10.2, '这次还是没有声音哦哈哈哈^_^');
    acg.ext.words(11.9, '好了，这次我决定快速进入正题。');
    acg.ext.words(13.2, '今天是3月14日，是一个特殊的日子。');
    acg.ext.words(15.9, '');
    acg.put(16, acg.img('IMG_20150314_143331.jpg',
        {x: 0.5, y: 0.5, opacity: 0.01},
        ['+', ['fade-in', 0.1], ['delay', 0.8], ['fade-out', 0.1]]
    ));
    acg.ext.words(16.5, '啊，放错了……');
    acg.ext.words(17.5, '是这个。');
    acg.put(17.9, acg.img('220px-Pi_pie2.jpg',
        {x: 0.42, y: 0.59, opacity: 0.01},
        ['+', ['fade-in', 0.1], ['delay', 2.8], ['fade-out', 0.1]]
    ));
    acg.put(17.9, acg.text(
        {x: 0.96, y: 0.1, ax: 1, ay: 0.5, fontsize: 26,
            text: 'Photo by [GJ on Wiki] on Wikipedia', colour: [0, 0, 0]},
        ['delay', 3]
    ));
    acg.ext.words(18.2, '');
    acg.ext.words(20, '嗯没错，今天就是 Pi Day。');
    acg.ext.words(21.7, '刚意识到今天还是爱因斯坦的生日……\n哦不管的。');
    acg.ext.words(24.5, '还有白色情人节……哦不管的。');
    acg.ext.words(25.3, '');
    /*acg.ext.words(26.5, '……');
    acg.ext.words(28, '');  <-- 搞笑用，不必在意
    acg.ext.words(30, '');*/
    acg.ext.words(26.5, '看到这个派，忽然想起了什么……');
    acg.put(27, acg.img('IMG_20150314_143331.jpg',
        {x: 0.5, y: 0.5, scale: 0.8, opacity: 0.01},
        ['+', ['fade-in', 0.1], ['delay', 3.8], ['fade-out', 0.1]]
    ));
    acg.ext.words(28.3, '请自行把颜色脑补成紫色');
    acg.ext.words(29.6, '并且将其脑补为香芋派。');
    acg.ext.words(30.9, '(原谅我忘记了另一个派的品种 ==)');
    acg.ext.words(32, '2013年3月14日，班级举行的 Pi Day 活动～\n这就是奖品之一～');
    acg.put(32.6, acg.text(
        {x: 0.5, y: 0.5, fontsize: 40,
            text: 'TODO: 此处应有自拍', colour: [0, 0, 0]},
        ['+', ['delay', 0.2], ['change-text', 'TODO: 此处应有照片'], ['delay', 3.8]]
    ));
    acg.ext.words(34.7, '欢乐的记忆对不对？？');
    for (var i = 0; i < 4; ++i) {
        acg.ext.words(35.5 + 0.5 * i, '对不对？？');
        acg.ext.words(35.85 + 0.5 * i, '');
    }
    acg.ext.words(37.5, '对不对？？！');
    acg.ext.words(39, '嗯，很好。');
    acg.ext.words(40, '在初中三年半还多的时间里');
    acg.ext.words(41.4, '这样的东东还是很多滴。');
    acg.put(41.7, acg.img('IMG_20141231_151157.jpg',
        {x: -1, y: 1, ax: 0, ay: 1},
        ['+',
            ['ease-cubic-out', ['move-to', 0.3, acg.p(0, 1)]],
            ['delay', 2.7], ['fade-out', 0.2]
        ]
    ));
    acg.put(42, acg.img('IMG_20150122_175051.jpg',
        {x: 2, y: 1, ax: 1, ay: 1},
        ['+',
            ['ease-cubic-out', ['move-to', 0.3, acg.p(1, 1)]],
            ['delay', 2.4], ['fade-out', 0.2]
        ]
    ));
    acg.put(42.3, acg.img('IMG_20150123_163603.jpg',
        {x: 1, y: -1, ax: 1, ay: 0},
        ['+',
            ['ease-cubic-out', ['move-to', 0.3, acg.p(1, 0)]],
            ['delay', 2.1], ['fade-out', 0.2]
        ]
    ));
    acg.put(42.6, acg.img('IMG_20150126_121033.jpg',
        {x: -1, y: 0, ax: 0, ay: 0},
        ['+',
            ['ease-cubic-out', ['move-to', 0.3, acg.p(0, 0)]],
            ['delay', 1.8], ['fade-out', 0.2]
        ]
    ));
    acg.ext.words(45, '于是，JHZ等人发起了一个伟大的项目。');
    acg.ext.words(46.8, '');
    acg.put(47, acg.text(
        {x: 0.5, y: 1.2, fontsize: 66,
            text: 'Project HHJ', colour: [0, 0, 0]},
        ['+',
            ['ease-elastic-out', ['move-to', 1.8, acg.p(0.5, 0.5)], 0.6],
            ['delay', 3],
            ['ease-elastic-in', ['move-to', 1.8, acg.p(0.5, -0.2)], 0.6]
        ]
    ));
    acg.ext.words(51, 'Project HHJ，正如它的名字一样，');
    acg.ext.words(53, '来自华二初中2015届6班。');
    acg.ext.words(54.4, '自从便便在班级QQ群里手抽把hhh打成hhj之后，');
    acg.ext.words(56.6, '这个词便在班级群和本班内广泛流传。');
    acg.ext.words(58.3, '差不多了，我今天的任务就到这里。\n(我只是来宣布HHJ的开始的。)');
    acg.ext.words(60, '以后会有更多这种玩意发布……\n(不知道算不算视频……毕竟还不是MP4啊)');
    acg.ext.words(62.4, '此外，还有一个神秘项目正在进行中……');
    acg.put(62.4, acg.img('imaginative.png',
        {x: 0.5, y: 0.5, opacity: 0.01},
        ['+', ['fade-in', 0.3], ['delay', 3.8], ['fade-out', 0.3]]
    ));
    acg.ext.words(64.1, '按照目前的进度，下周基本就能公布。');
    acg.ext.words(65.7, '(我知道你们很想看看这货于是简单剧透了一下)\n(上面那货即为一部分代码)');
    acg.ext.words(68, '更多提示：');
    acg.ext.words(68.6, '你好的，不灵，精英都是不上厕所滴～～');
    acg.ext.words(69.9, '再会～～～');
    acg.ext.words(70.8, '');
    acg.put(70.8, acg.text(
        {x: 0.5, y: 0.5, fontsize: 40,
            text: 'TODO: 此处应有另一张自拍', colour: [0, 0, 0]},
        ['delay', 0.2]
    ));
    acg.ext.background_commit();
    acg.ext.words_commit();
    acg.commit();
    acg.ext.cp_enable(function (time, type, colour, cmt) {
        alert(time + '\n' + type + ' ' + colour + '\n' + cmt);
    });
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
