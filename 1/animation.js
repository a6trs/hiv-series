var acg = acg || {};
acg.ext = acg.ext || {};

var random_highbyte = function () {
    return Math.floor(Math.random() * 128 + 128);
}

var initStage = function () {
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
    //acg.ext.cp_enable();
};

acg.bootstrap('game_canvas', 16 / 9, initStage);
