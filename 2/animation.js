var acg = acg || {};
acg.ext = acg.ext || {};

// 懒得再去修改 acg.ext.words 的实现了，干脆直接在这里写一个
// TODO: 把 acg.ext.words 的实现变成这个
putText = function (time, text, delay) {
    acg.ext.words(time, text);
    if (delay) acg.ext.words(time + delay, '');
};

// acg.ac.parse 里面的 'repeat' 类型有问题……
// 先写个代替方案再说……
var rpt = function (times, array) {
    if (times <= 1) return array.concat();
    var r = array.concat(array);
    while (--times >= 2)    // 要少用 forEach 吗??
        //for (var i = 0; i < array.length; i++) r[r.length] = array[i];
        r = r.concat(array);
    return r;
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
    acg.ext.words_colour(255, 255, 255);
    putText(1, '-= 319 寝室 =-\n-= 一模前一周某日下午 =-', 1.6);
    ///////////////////// DHR Part /////////////////////
    var toDHRend = ['+', ['delay', 9], ['ease-sine-in', ['move-by', 1, acg.p(-0.55, 0)]]];
    // The wall
    acg.put(0, acg.rect(
        {x: 0.2, y: 0, width: 0.01, height: 1, colour: [0, 0, 0]},
        toDHRend.concat()
    ));
    // The table (...)
    acg.put(0, acg.rect(
        {x: 0.2, y: 0.31, width: 0.09, height: 0.013, colour: [0, 0, 0]},
        toDHRend.concat()
    ));
    // The chair
    acg.put(0, acg.img('chair.png',
        {x: 0.36, y: 0, ax: 0, ay: 0},
        toDHRend.concat()
    ));
    acg.put(0, acg.ext.stickman({x: 0.36, y: 0.072, scale: 1.3}, toDHRend.concat(), {
        'leg1': ['rotate-by', 0.001, 90],
        'leg2': ['rotate-by', 0.001, 90],
        'leg1-shin': ['+',
            ['rotate-by', 0.001, -80],
            ['+'].concat(rpt(5, [['rotate-by', 0.6, 20], ['rotate-by', 0.6, -20]]))
        ], 'leg2-shin': ['+',
            ['rotate-by', 0.001, -80],
            ['+'].concat(rpt(5, [['rotate-by', 0.6, -20], ['rotate-by', 0.6, 20]]))
        ], 'arm1': ['rotate-by', 0.001, 85],
        'arm2': ['rotate-by', 0.001, 85]
    }));
    acg.put(3, acg.ext.nametag('DHR', '六班学生', 0.5, 0.25));
    // The recorder (...)
    acg.put(0, acg.rect(
        {x: 0.27, y: 0.32, width: 30 / acg.width, height: 45 / acg.height, colour: [0, 0, 0]},
        toDHRend.concat()
    ));
    acg.put(0, acg.text(
        {x: 0.2, y: 0.5, fontsize: 26,
            text: '录音中', colour: [108, 0, 0], zorder: 99},
        ['+', ['delay', 4], ['fade-out', 0.2]]
    ));
    acg.put(2, acg.ext.speechbub('天下的事情\n有困难和容易的区别吗？', .5, .72, .2, 0, .1, -.25, ['delay', 3]));
    acg.put(5, acg.ext.speechbub('如果去做了，\n那么困难的事也会变容易；', .5, .72, .2, 0, .1, -.25, ['delay', 3]));
    acg.put(8, acg.ext.speechbub('如果不去做，\n那么容易的事也会变困难。', .5, .72, .2, 0, .1, -.25,
        ['+', ['delay', 1], ['ease-sine-in', ['move-by', 1, acg.p(-0.55, 0)]]]));
    acg.ext.words_colour(0, 0, 0);
    putText(7.1, '这位读《点击》以复习语文……', 1.6);
    putText(9.5, '而这位……', 0.9);
    ///////////////////// JHZ Part /////////////////////
    // JHZ part lasts from +10.0s to +18.0s, plus 0.2s transition (out)
    // Formally starts at +11.0s, since 1.0s is used to move JHZ in.
    var fromJHZbegin = function () {
        return ['+', ['ease-sine-out', ['move-by', 1, acg.p(-0.55, 0)]], ['delay', 7.2]];
    };
    // The wall, will move by (-0.55, 0)
    acg.put(10, acg.rect(
        {x: 0.8 + 0.55, y: 0, width: 0.01, height: 1, colour: [0, 0, 0]},
        fromJHZbegin()
    ));
    // The table (...)
    acg.put(10, acg.rect(
        {x: 0.8 + 0.55 - 0.09, y: 0.31, width: 0.09, height: 0.013, colour: [0, 0, 0]},
        fromJHZbegin()
    ));
    // The chair
    acg.put(10, acg.img('chair.png',
        {x: 0.64 + 0.55, y: 0, ax: 1, ay: 0, flipx: true},
        fromJHZbegin()
    ));
    acg.put(10, acg.ext.stickman({x: 0.7 + 0.55 - acg.ext.sm_headsize,
        y: 0, ax: 0, ay: 0, scale: 1.3}, fromJHZbegin(), {
        'leg1': ['rotate-by', 0.001, -90],
        'leg2': ['rotate-by', 0.001, -90],
        'leg1-shin': ['rotate-by', 0.001, 80],
        'leg2-shin': ['rotate-by', 0.001, 80],
        'arm1': ['+', ['rotate-by', 0.001, -85], ['delay', 2], ['rotate-by', 0.7, -30]],
        'arm2': ['+', ['rotate-by', 0.001, -85], ['delay', 2], ['rotate-by', 0.7, -30]]
    }));
    // Optical
    acg.put(10, acg.rect(
        {x: 0.67 + 0.55, y: 0.38, width: 0.01, height: 0.1,
            colour: [128, 128, 128], rotation: 18},
        // Too lazy to add an optional parameter to fromJHZbegin()
        ['+', ['ease-sine-out', ['move-by', 1, acg.p(-0.55, 0)]],
            ['delay', 1], ['move-by', 0.7, acg.p(-0.01, 0.05)],
            ['delay', 1], ['rotate-by', 0.3, -15],
            ['delay', 4], ['fade-out', 0.2]
        ]
    ));
    // Hope you won't pay too much attention to that dot...
    putText(11.6, '则是在饶有兴趣地研究\n.  相机上掉下来的光学器件。', 3.1);
    acg.put(13, acg.ext.nametag('JHZ', '六班学生', 0.22, 0.25));
    acg.put(13.5, acg.ext.speechbub('LSQ，这玩意是透光的～',
        .45, .63, .8, 0, .9, -.25, ['delay', 2.3]));
    ///////////////////// ZHF Part /////////////////////
    acg.ext.background(18, [0, 0, 0]);
    acg.ext.words_colour(255, 255, 255);
    putText(18.5, '-= 319 寝室 =-\n-= 一模前一周某日熄灯后 =-', 1.6);
    acg.put(19.8, acg.ext.nametag('ZHF', '六班学生', 0.5, 0.5, acg.colour.WHITE));
    putText(21, 'TODO: Bla bla bla.', 3.1);
    acg.begin_offset(25);
};

var mainPart4 = function () {
    acg.ext.background(0, [255, 255, 255]);
    acg.ext.words_colour(0, 0, 0);
    putText(1, '-= 初三(6)班教室 =-\n-= 一模前一周某日xxx =-', 1.6);
    acg.put(0, acg.text(
        {x: 0.5, y: 0.5, text: 'TODO: 老板来点想法~~ T^T', colour: [0, 0, 0]}, ['delay', 3]
    ));
    //acg.begin_offset(xxx);
};

var initMainPart = function () {
    mainPart1();
    mainPart2();
    mainPart3();
    mainPart4();
    acg.end_offset();
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
