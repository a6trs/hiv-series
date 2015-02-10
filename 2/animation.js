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

var initMainPart = function () {
    acg.put(0, acg.img('timeline.png',
        {x: 0.5, y: 0.5, ax: 0, ay: 0.5, opacity: 0.0001, scale: 1.1},
        ['+',
            ['fade-in', 0.5],
            ['delay', 1],
            ['ease-cubic-out', ['move-by', 2, acg.p(-1.35, 0)]],
            ['delay', 2],
            ['move-by', 0.5, acg.p(-0.2, 0)],
            ['delay', 3]
        ]
    ));
    putText(0, '从开学刷题百二十天，', 2.5);
    putText(2.5, '隔篁竹，闻水声，', 2);
    putText(4.5, '如鸣佩环，心乐之。', 2);
    putText(6.5, '啊不不不不不不，怎么可能！！', 2.5);
    putText(9, '一模使我们几乎每天把这玩意背一遍，', 3);
    putText(12, '再加上如此多的《点击》（……）', 2.5);
    putText(14.5, '用脚趾头想想都知道会不会“心乐之”。', 3);
    acg.put(18, acg.img('IMG_0018.JPG', {x: 0.5, y: 0.5}, ['delay', 5]));
    putText(18.5, '在一模准备期间，连这位平常事情不多的老师……', 3);
    putText(21.5, '都能做出这种错乱的事……', 1.5);
    putText(23, '可见，一模真是……哎。', 2.5);

    putText(27, '不过你知道吗……', 1.5);
    putText(28.5, '在紧张的学习背后，总有人忙里偷闲……', 2.5);
    acg.put(31.5, acg.img('IMG_0023.JPG', {x: 0.5, y: 0.5, zorder: -999}, ['delay', 3]));
    putText(31, '比如……这位。', 1);
    acg.put(34.5, acg.img('IMG_0043.JPG', {x: 0.5, y: 0.5, zorder: -999}, ['delay', 3]));
    putText(35, '还有这位，在开学不久就开始无聊了。', 2);
    putText(37.5, '总体而言，', 0.8);
    putText(38.3, '[就作者(叫笔者似乎不大合适)的观察来看，]', 1.2);
    putText(39.5, '大家对于一模的态度还是不错的。', 1.5);
    putText(41, '说到这里，我不得不提发生在327寝室的一件事。', 2.5);
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
    acg.begin_offset(30);
    initMainPart();
    acg.end_offset(30);
    acg.commit();
    acg.ext.cp_enable();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
