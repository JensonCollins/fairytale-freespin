var App = new Game({

    ClearBeforeRender: true,
    Antialias: false,
    RoundPixels: false,
    MoveWhenInside: false,
    PrecisionFragment: "mediump",
    Symbols: [
        {
            Image: 'SYM0.png'
        },
        {
            Image: 'SYM1.png'
        },
        {
            Image: 'SYM3.png'
        },
        {
            Image: 'SYM4.png'
        },
        {
            Image: 'SYM5.png'
        },
        {
            Image: 'SYM6.png'
        },
        {
            Image: 'SYM7.png'
        },
        {
            Image: 'SYM8.png'
        },
        {
            Image: 'SYM9.png'
        },
        {
            Image: 'SYM10.png'
        },
        {
            Image: 'SYM11.png'
        },
        {
            Image: 'SYM12.png'
        }
    ],

    SymbolsHighlight: {
        'S01_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S02_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S03_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S04_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S05_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S06_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S07_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S08_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S09_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'W01_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'B01_Static.png': {
            frameStart: 1,
            frameEnd: 60
        },
        'winBoxAnim.png': {
            frameStart: 1,
            frameEnd: 26
        }
    },

    SymbolsNames: {
        'freespin': 'SYM0.png',
        'wild': 'SYM1.png',
        'special': 'SYM3.png',
        'king': 'SYM4.png',
        'key': 'SYM5.png',
        'rose': 'SYM6.png',
        'book': 'SYM7.png',
        'cardA': 'SYM8.png',
        'cardK': 'SYM9.png',
        'cardQ': 'SYM10.png',
        'cardJ': 'SYM11.png',
        'card10': 'SYM12.png',
    },

    ScatterNames: [''],

    prepare: function () {

        this.PrecisionFragment = Settings["precision-fragment"];

    },

    ready: function () {

        MRAID.track('Assets Loaded');

        this.cacheScreenTextures();

        if (Settings["publisher"] === "playable-kit") {

            PlayableKit.onStart(function (options) {

                App.startGame();

            });

            PlayableKit.start();

        } else if (Settings["publisher"] === "facebook-instant-games") {

            if (window.FBInstant) {

                FBInstant.startGameAsync().then(function () {

                    App.startGame();

                });

            } else {

                App.startGame();

            }

        } else {

            if (Settings['start-on'] === 'ready') {

                MRAID.onReady(function () {

                    App.startGame();

                });

            } else if (Settings['start-on'] === 'viewable') {

                MRAID.onViewable(function () {

                    App.startGame();

                });

            } else if (Settings['start-on'] === 'load') {

                App.startGame();

            }

        }

    },

    startGame: function () {

        this.escalibur = new Escalibur();

        if (!App.Loader || !App.Loader.loadCompleted) {

            if (Settings['start-on'] === "none") Settings['start-on'] = 'load';

            return;

        }

        var parent_div = document.createElement("div");
        parent_div.classList.add("container");
        parent_div.appendChild(this.Renderer.view);

        /*var clock_div = document.createElement("div");
        clock_div.classList.add("systemclock");
        clock_div.setAttribute("id", "systemClock");
        parent_div.appendChild(clock_div);*/

        document.body.appendChild(parent_div);
        // document.body.appendChild(this.Renderer.view);

        MRAID.showApp();

        App.scale = [1.5, 1];
        App.resize();

        if (Settings['cta-only']) App.CallToAction.show();

        else {
            App.NETENT_Animation.show();

            // setTimeout(() => {
            //     App.NETENT_Animation.hide();
            //     App.Gameplay.show();
            // }, 1500);
        }

        Loader.hideLoadProgress();

        App.startTicker();
        // startTime();

    }

});
