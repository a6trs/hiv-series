var acg = acg || {};
acg.ext = acg.ext || {};

var random_highbyte = function () {
    return Math.floor(Math.random() * 128 + 128);
};

var init2014 = function () {
    var secsRemaining2014 = Math.floor((new Date(2015, 0, 1) - Date.now()) / 1000);
    acg.put(0, acg.text(
        {x: 0.5, y: 0.75, fontsize: 36,
            text: '2014 剩余的秒数',
            colour: [255, 255, 255]},
        ['+',
            ['delay', 10],
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', secsRemaining2014 - 10.2]
        ]
    ));
    acg.put(0.01, acg.text(
        {x: 0.5, y: 0.5, fontsize: 64,
            text: secsRemaining2014.toString(),
            fontname: 'Courier New',
            colour: [255, 255, 255]},
        ['//',
            ['+',
                ['delay', 10],
                ['tint-to', 0.2, 0, 0, 0]
            ],
            ['+',
                ['go-number', secsRemaining2014 - 60, 60],
                ['ease-cubic-out', ['scale-to', 0.15, 1.1]],
                ['go-number', 30 - 0.15, 30],
                ['ease-cubic-out', ['scale-to', 0.15, 1.2]],
                ['go-number', 20 - 0.15, 10],
                ['ease-cubic-out', ['scale-to', 0.15, 1.3]],
                ['go-number', 10 - 0.15, 0],
                ['call-func', function () { window.location.reload(); }],
                ['delay', 1]    // 防止CallFunc调用直接被跳过
            ]
        ]
    ));
    var d = new Date();
    if (d.getHours() < 23 || d.getMinutes() <= 56) {
        acg.put(0.01, acg.text(
            {x: 0.5, y: 0.25, fontsize: 24,
                text: '记得到23:57左右的时候再来看看～',
                colour: [255, 255, 255]},
            ['+',
                ['delay', 5],
                ['fade-out', 0.2]
            ]
        ));
    }
    acg.begin_offset(secsRemaining2014);
    var t = 200;
    acg.put(-t, acg.text(
        {x: 0.5, y: 0.25, fontsize: 24,
            text: '崭新的旅程即将开启！！\n明年，在那边见～～～',
            colour: [0, 0, 0]},
        ['delay', t]
    ));
    acg.put(-t, acg.text(
        {x: 0.5, y: 0.12, fontsize: 18,
            text: '不不不，不要想歪……只是脑洞又大开了一次而已',
            colour: [0, 0, 0]},
        ['delay', t]
    ));
    acg.end_offset();
    var cur_t = 0;
    while (secsRemaining2014 > cur_t) {
        cur_t += 10;
        acg.ext.background(cur_t, [random_highbyte(), random_highbyte(), random_highbyte()]);
    }
    acg.ext.background_commit();
    acg.commit();
    acg.travel(0);
};

var init2015 = function () {
    acg.begin_offset(2);
    acg.ext.background(-1, [0, 192, 255]);
    acg.put(0, acg.text(
        {x: 0.5, y: 0.75, fontsize: 50,
            text: 'WELCOME TO',
            colour: [0, 192, 255]},
        ['+',
            ['tint-to', 0.2, 0, 0, 0],
            ['delay', 3.8],
            ['tint-to', 0.2, 0, 192, 255]
        ]
    ));
    acg.put(1, acg.text(
        {x: 0.5, y: 1.5, fontsize: 80,
            text: '2015!!!',
            colour: [0, 0, 0]},
        ['+',
            ['ease-elastic-out', ['move-to', 1, acg.p(0.5, 0.4)], 0.4],
            ['delay', 2],
            ['tint-to', 0.2, 0, 192, 255]
        ]
    ));
    // -- PLACEHOLDER --
    acg.put(40, acg.text(
        {x: 0.5, y: 1.5, fontsize: 80,
            text: '2015!!!',
            colour: [0, 0, 0]}, ['delay', 2]
    ));
    acg.ext.words(3.7, '好吧……');
    acg.ext.words(4.5, '我觉得刚才这玩意应该没必要放的。');
    acg.ext.words(6.2, '毕竟你们都懂的，现在是2015年了。');
    acg.ext.words(8.7, '哎，对了，');
    acg.ext.words(9.7, '你有没有奇怪，');
    acg.ext.words(10.7, '下面的这个白色条是做甚的？');
    acg.ext.words(12.7, '嗯，你没猜错，');
    acg.ext.words(14.1, '这货就是给我说话用的。');
    acg.ext.words(15.6, '好了，好了，不用再调音量了，');
    acg.ext.words(18.2, '这次是没有声音的。');
    acg.ext.words(20.0, '不过下次，');
    acg.ext.words(20.9, '我应该会拿个机器人讲出声音来。');
    acg.ext.words(22.8, '好了，下面进入正题。');
    acg.ext.words(23.7, '');
    acg.ext.background(24, [0, 64, 128]);
    acg.ext.words(25, '在这辞旧迎新的时刻，');
    acg.ext.words(26.0, '我想向大家解释一下，');
    acg.ext.words(27.0, '学校饮水机上面的数字到底是什么。');
    acg.put(27.8, acg.text(
        {x: 0.5, y: 0.7, fontsize: 32,
            text: '//这两件事有什么关系吗……',
            colour: [255, 255, 255]}, ['delay', 2]
    ));
    acg.end_offset();
    acg.ext.background_commit();
    acg.ext.words_commit();
    acg.commit();
    acg.travel(0);
    acg.ext.cp_enable();
};

var initStage = function () {
    if ((new Date()).getFullYear() == 2015) {
        init2014();
    } else {
        init2015();
    }
    // 不管的，直接用Cocos API了！！
    cc.director.setDisplayStats(false);
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
