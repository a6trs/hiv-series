var acg = acg || {};
acg.ext = acg.ext || {};

// 懒得再去修改 acg.ext.words 的实现了，干脆直接在这里写一个
// TODO: 把 acg.ext.words 的实现变成这个
putText = function (time, text, delay) {
    acg.ext.words(time, text);
    if (delay) acg.ext.words(time + delay, '');
};

var mainPart1 = function () {
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
    putText(0, '从开学刷题百二十天，');
    putText(2.5, '隔篁竹，闻水声，');
    putText(4.5, '如鸣佩环，心乐之。');
    putText(6.5, '啊不不不不不不，怎么可能！！');
    putText(9, '一模使我们几乎每天把这玩意背一遍，');
    putText(12, '再加上如此多的《点击》（……）');
    putText(14.5, '用脚趾头想想都知道会不会“心乐之”。', 3);
    acg.put(18, acg.img('IMG_0018.JPG', {x: 0.5, y: 0.5}, ['delay', 5]));
    putText(18.5, '在一模准备期间，连这位平常事情不多的老师……');
    putText(21.5, '都能做出这种错乱的事……');
    putText(23, '可见，一模真是……哎。', 2.5);

    putText(27, '不过你知道吗……');
    putText(28.5, '在紧张的学习背后，总有人忙里偷闲……');
    acg.put(31.5, acg.img('IMG_0023.JPG', {x: 0.5, y: 0.5}, ['delay', 3]));
    putText(31, '比如……这位。', 1);
    acg.put(34.5, acg.img('IMG_0043.JPG', {x: 0.5, y: 0.5}, ['delay', 3]));
    putText(35, '还有这位，在开学不久就开始无聊了。', 2);
    putText(37.5, '总体而言，在这场重要的考试之前，');
    putText(39.5, '[就作者(叫笔者似乎不大合适)的观察来看，]');
    putText(40.7, '气氛其实也没紧张到哪里去……');
    putText(42, '(至少在课下是这样。)', 1);
    acg.begin_offset(44);
};

var mainPart2 = function () {
    acg.ext.background(0, [255, 255, 0]);
    acg.ext.words_colour(0, 0, 0);
    putText(1, '-= 327 寝室 =-', 1.6);
    acg.put(0, acg.rect(
        {x: 0, y: 0.17, width: 1, height: 0.013, colour: [0, 0, 0]},
        ['delay', 28]
    ));
    // This is LSQ.
    acg.put(0, acg.ext.stickman({x: 0.3, y: 0.2, ax: 0, ay: 0}, ['delay', 28], {
        'leg1': ['rotate-by', 0.001, 10],
        'leg2': ['rotate-by', 0.001, -10],
        'arm1': ['rotate-by', 0.001, 10],
        'arm2': ['rotate-by', 0.001, -10]
    }));
    acg.put(3, acg.ext.nametag('LSQ', '六班学生', 0.1, 0.25));
    // This is WT.
    acg.put(0, acg.ext.stickman({x: 0.62, y: 0.2, ax: 0, ay: 0}, ['+',
        ['delay', 5], ['move-by', 1, acg.p(0.18, 0)], ['delay', 22]
    ], {
        'leg1': ['+', ['rotate-by', 0.001, 10], ['delay', 5],
            ['+', ['rotate-by', 0.5, -20], ['rotate-by', 0.5, 20]]
        ], 'leg2': ['+', ['rotate-by', 0.001, -10], ['delay', 5],
            ['+', ['rotate-by', 0.5, 20], ['rotate-by', 0.5, -20]]
        ], 'arm1': ['rotate-by', 0.001, 10],
        'arm2': ['rotate-by', 0.001, -10]
    }));
    acg.put(3, acg.ext.nametag('WT', '五班学生', 0.72, 0.25));
    // I miss the conversation~~
    acg.put(2.7, acg.ext.speechbub('还有一个礼拜就要一模了……', 0.75, 0.75, 0.8, 0, 0.76, -0.25, ['delay', 1.3]));
    acg.put(5.5, acg.ext.speechbub('你紧张吗？', 0.75, 0.75, 0.8, 0, 0.95, -0.25, ['delay', 1]));
    acg.put(7, acg.ext.speechbub('呃……', 0.25, 0.75, 0.2, 0, 0.45, -0.25, ['delay', 1.5]));
    acg.put(8, acg.ext.speechbub('还……', 0.45, 0.5, 0, 0.5, -0.1, 1, ['delay', 1.5]));
    acg.put(9, acg.ext.speechbub('还行吧……', 0.41, 0.35, 0, 0.5, -0.1, 1, ['delay', 1.5]));
    acg.put(12, acg.ext.speechbub('唉……\n你们怎么都不紧张的……', .75, .75, .8, 0, .88, -.25, ['delay', 2.5]));
    acg.put(14.5, acg.ext.speechbub('我每次考试前都好紧张', .75, .75, .8, 0, .88, -.25, ['delay', 1.9]));
    acg.put(16.4, acg.ext.speechbub('然后考试的时候老是发挥不好……', .75, .75, .8, 0, .88, -.25, ['delay', 2.4]));
    acg.put(20, acg.ext.speechbub('其实，有一个有效的办法', .3, .8, .24, 0, .35, -.35, ['delay', 1.5]));
    acg.put(21.5, acg.ext.speechbub('就是不要紧张……', .3, .8, .24, 0, .35, -.35, ['delay', 1.5]));
    putText(22.2, '注：这句话是废话', 1.3);
    acg.put(23, acg.ext.speechbub('想着考试是给自己看\n而不是给别人看的，就过去了。',
        .3, .77, .24, 0, .3, -.18, ['delay', 2.5]));
    acg.ext.background(27, [0, 0, 0]);
    acg.begin_offset(29);
};

var mainPart3 = function () {
    acg.ext.background(0, [64, 255, 64]);
    acg.ext.words_colour(0, 0, 0);
    putText(1, '-= 319 寝室 =-', 1.6);
    acg.put(0, acg.rect(
        {x: 0.25, y: 0, width: 0.01, height: 1, colour: [0, 0, 0]},
        ['delay', 27]
    ));
    //acg.begin_offset(xxx);
};

var initMainPart = function () {
    mainPart1();
    mainPart2();
    mainPart3();
    acg.end_offset();
    acg.end_offset();
    //acg.end_offset();
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
    acg.ext.background_commit();
    acg.ext.words_commit();
    acg.commit();
    console.log('Total time: ' + acg.tot_time() + 's');
    acg.ext.cp_enable();
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
