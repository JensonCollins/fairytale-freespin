App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'background container wrapper',
                    childs: [
                        {
                            name: 'BG_squizzed',
                            type: 'sprite',
                            image: 'BG_squizzed',
                            scale: [1920 / 1280, 1080 / 360]
                        },
                        {
                            name: 'BG_fs_squizzed',
                            type: 'sprite',
                            visible: false,
                            image: 'BG_fs_squizzed',
                            scale: [1920 / 1280, 1080 / 360 * 2]
                        },
                        {
                            name: 'tree container',
                            scale: [1, 1],
                            position: [0, 100],
                            childs: [
                                {
                                    name: 'base tree back',
                                    childs: [
                                        {
                                            name: 'tree background 1',
                                            scale: [1.3, 1.3],
                                            position: [0, 100],
                                            rotation: Math.PI,
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'trees_back'
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'trees_back',
                                                    rotation: -30 / 180 * Math.PI,
                                                    pivot: [-400, -100]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'tree secondary background',
                                            scale: [1.3, 1.3],
                                            position: [0, 60],
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'tree3_secondary',
                                                    position: [-180, 0]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree1_secondary',
                                                    position: [0, 80]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree1_secondary',
                                                    position: [-350, 120],
                                                    pivot: [0, -90],
                                                    rotation: -30 / 180 * Math.PI
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'hill container',
                            position: [0, 1014 + 450],
                            scale: [1.1, 1.1],
                            pivot: [0, 1014],
                            childs: [
                                {
                                    name: 'hill background',
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [-50, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: -45 / 180 * Math.PI,
                                    pivot: [715, 300],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: 45 / 180 * Math.PI,
                                    pivot: [-715, 300],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: 90 / 180 * Math.PI,
                                    pivot: [-1000, 1013],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: -90 / 180 * Math.PI,
                                    pivot: [1000, 1013],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: -135 / 180 * Math.PI,
                                    pivot: [715, 1720],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: 135 / 180 * Math.PI,
                                    pivot: [-715, 1720],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                                {
                                    name: 'hill background',
                                    rotation: 180 / 180 * Math.PI,
                                    pivot: [0, 2018],
                                    childs: [
                                        {
                                            name: 'tree third background',
                                            childs: [
                                                {
                                                    name: 'tree_clubs',
                                                    type: 'sprite',
                                                    image: 'tree_clubs',
                                                    position: [-400, -300],
                                                    pivot: [0, -110],
                                                    rotation: -15 / 180 * Math.PI
                                                },
                                                {
                                                    name: 'tree_spades',
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [0, -300]
                                                },
                                                {
                                                    type: 'sprite',
                                                    image: 'tree_spades',
                                                    position: [300, -250],
                                                    rotation: 15 / 180 * Math.PI
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'land_seamless2'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'character spine',
                            type: 'spine',
                            spineData: 'rrh_main',
                            spineAtlas: 'rrh_main_data',
                            spineAtlasFolder: 'footage/',
                            scale: [0.65, 0.7],
                            visible: false,
                            position: [-780, 450],
                        },
                        {
                            name: 'rabbit background',
                            scale: [3.2, 3.2],
                            position: [0, 430],
                            childs: [
                                {
                                    name: 'land_front 1',
                                    position: [0, 0],
                                    childs: [
                                        {
                                            name: 'land_front 11',
                                            type: 'sprite',
                                            image: 'land_front',
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'land_front 12',
                                            type: 'sprite',
                                            image: 'land_front',
                                            position: [590, 0]
                                        },
                                    ]
                                },
                                {
                                    name: 'land_front 2',
                                    position: [590, 0],
                                    childs: [
                                        {
                                            name: 'land_front 21',
                                            type: 'sprite',
                                            image: 'land_front',
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'land_front 22',
                                            type: 'sprite',
                                            image: 'land_front',
                                            position: [590, 0]
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: false,
            childs: [
                {
                    name: 'main container wrapper',
                    position: [0, 0],
                    scale: [1, 1],
                    childs: [
                        {
                            name: 'linebet container',
                            position: [0, -55],
                            childs: []
                        },
                        {
                            name: 'line container',
                            position: [0, -45],
                            childs: [
                                {
                                    name: 'line 1',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]
                                    ],
                                },
                                {
                                    name: 'line 2',
                                    type: 'graphics',
                                    position: [0, -265],
                                    visible: false,
                                    draw: [['beginFill', 0xf2ebb4], ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]],
                                    blur: 0.8
                                },
                                {
                                    name: 'line 3',
                                    type: 'graphics',
                                    position: [0, 265],
                                    visible: false,
                                    draw: [['beginFill', 0xf2ebb4], ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]],
                                },
                                {
                                    name: 'line 4',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [0, 265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [0, 265]],
                                        ['moveTo', [0, 265]],
                                        ['lineTo', [1040 / 2, -265]]
                                    ],
                                },
                                {
                                    name: 'line 5',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [0, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 265]],
                                        ['lineTo', [0, -265]],
                                        ['moveTo', [0, -265]],
                                        ['lineTo', [1040 / 2, 265]]
                                    ],
                                },
                                {
                                    name: 'line 6',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 7',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 8',
                                    type: 'graphics',
                                    position: [0, -265],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 9',
                                    type: 'graphics',
                                    position: [0, 265],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 10',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 265, 4]],
                                        ['drawCircle', [0, -265, 4]],
                                        ['drawCircle', [1040 / 4, 265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, 265]],
                                        ['moveTo', [-1040 / 4, 265]],
                                        ['lineTo', [0, -265]],
                                        ['moveTo', [0, -265]],
                                        ['lineTo', [1040 / 4, 265]],
                                        ['moveTo', [1040 / 4, 265]],
                                        ['lineTo', [1040 / 2, -265]]
                                    ],
                                },
                                {
                                    name: 'line 11',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 265, 4]],
                                        ['drawCircle', [0, -265, 4]],
                                        ['drawCircle', [1040 / 4, 265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, 265]],
                                        ['moveTo', [-1040 / 4, 265]],
                                        ['lineTo', [0, -265]],
                                        ['moveTo', [0, -265]],
                                        ['lineTo', [1040 / 4, 265]],
                                        ['moveTo', [1040 / 4, 265]],
                                        ['lineTo', [1040 / 2, -265]]
                                    ],
                                },
                                {
                                    name: 'line 12',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 0, 4]],
                                        ['drawCircle', [1040 / 4, 0, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, 0]],
                                        ['moveTo', [-1040 / 4, 0]],
                                        ['lineTo', [1040 / 4, 0]],
                                        ['moveTo', [1040 / 4, 0]],
                                        ['lineTo', [1040 / 2, 265]]
                                    ],
                                },
                                {
                                    name: 'line 13',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 0, 4]],
                                        ['drawCircle', [1040 / 4, 0, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, 0]],
                                        ['moveTo', [-1040 / 4, 0]],
                                        ['lineTo', [1040 / 4, 0]],
                                        ['moveTo', [1040 / 4, 0]],
                                        ['lineTo', [1040 / 2, 265]]
                                    ],
                                },
                                {
                                    name: 'line 14',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, 265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, 265]],
                                        ['moveTo', [1040 / 4, 265]],
                                        ['lineTo', [1040 / 2, 265]]
                                    ],
                                },
                                {
                                    name: 'line 15',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, 265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, 265]],
                                        ['moveTo', [1040 / 4, 265]],
                                        ['lineTo', [1040 / 2, 265]]
                                    ],
                                },
                                {
                                    name: 'line 16',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 265, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 265]],
                                        ['moveTo', [0, 265]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, -265]]
                                    ],
                                },
                                {
                                    name: 'line 17',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, -265, 4]],
                                        ['drawCircle', [0, 265, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, -265]],
                                        ['moveTo', [-1040 / 4, -265]],
                                        ['lineTo', [0, 265]],
                                        ['moveTo', [0, 265]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, -265]]
                                    ],
                                },
                                {
                                    name: 'line 18',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, 265]],
                                        ['moveTo', [-1040 / 4, 265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 19',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, -1],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 265, 4]],
                                        ['drawCircle', [0, 0, 4]],
                                        ['drawCircle', [1040 / 4, -265, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, 0]],
                                        ['lineTo', [-1040 / 4, 265]],
                                        ['moveTo', [-1040 / 4, 265]],
                                        ['lineTo', [0, 0]],
                                        ['moveTo', [0, 0]],
                                        ['lineTo', [1040 / 4, -265]],
                                        ['moveTo', [1040 / 4, -265]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                },
                                {
                                    name: 'line 20',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [
                                        ['beginFill', 0xf2ebb4],
                                        ['drawCircle', [-1040 / 4, 0, 4]],
                                        ['lineStyle', [8, 0xf2ebb4]],
                                        ['beginFill', 0xf2ebb4],
                                        ['moveTo', [-1040 / 2, -265]],
                                        ['lineTo', [-1040 / 4, 0]],
                                        ['moveTo', [-1040 / 4, 0]],
                                        ['lineTo', [1040 / 2, 0]]
                                    ],
                                }
                            ]
                        },
                        {
                            name: 'game board container',
                            scale: [1519 / 1522, 726 / 732],
                            visible: true,
                            position: [0, -40],
                            childs: [
                                {
                                    name: 'game board symbols container',
                                    childs: []
                                },
                                {
                                    name: 'game board symbols highlighted container',
                                    childs: []
                                },
                                {
                                    name: 'game board symbols wildcard container',
                                    childs: []
                                }
                            ]
                        },
                        {
                            name: 'test animation',
                            position: [0, -45],
                            childs: []
                        },
                    ]
                }
            ]
        },
        {
            name: 'ChestContainer',
            // visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'cheat animation container',
                    visible: false,
                    position: [0, 40],
                    childs: [
                        {
                            name: 'cheat overlay background',
                            type: 'graphics',
                            alpha: 0.5,
                            position: [0, -40],
                            draw: [
                                ['beginFill', 0x000000],
                                ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]
                            ]
                        },
                        {
                            name: 'cheat spine 1',
                            type: 'spine',
                            event: 'cheat box',
                            spineData: 'chestAnimation',
                            spineAtlas: 'chestAnimation_atlas',
                            spineTexture: 'chestAnimation_image',
                            status: 'not',
                            scale: 0.5,
                            position: [-520, 0],
                        },
                        {
                            name: 'cheat spine 3',
                            type: 'spine',
                            event: 'cheat box',
                            spineData: 'chestAnimation',
                            spineAtlas: 'chestAnimation_atlas',
                            spineTexture: 'chestAnimation_image',
                            status: 'not',
                            scale: 0.5,
                            position: [0, 0],
                        },
                        {
                            name: 'cheat spine 5',
                            type: 'spine',
                            event: 'cheat box',
                            spineData: 'chestAnimation',
                            spineAtlas: 'chestAnimation_atlas',
                            spineTexture: 'chestAnimation_image',
                            status: 'not',
                            scale: 0.5,
                            position: [520, 0],
                        },
                    ]
                }
            ]
        },
        {
            name: 'ControlPanelContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'control panel container wrapper',
                    position: [0, 404],
                    childs: [
                        {
                            name: 'control panel bg',
                            type: 'sprite',
                            position: [0, 0],
                            childs: [
                                {
                                    name: 'control main background',
                                    visible: false,
                                    childs: [
                                        {
                                            name: 'start button bar',
                                            position: [0, 30],
                                            scale: [1.3, 1.3],
                                            childs: [
                                                {
                                                    name: 'start button',
                                                    type: 'sprite',
                                                    image: 'spinButtonIdle.png',
                                                    button: 'button',
                                                    position: [0, 0],
                                                },
                                                {
                                                    name: 'start button glow',
                                                    type: 'sprite',
                                                    image: 'spinButtonOver.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'start button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'spinButtonDisabled.png',
                                                    alpha: 0,
                                                    visible: false,
                                                }
                                            ]
                                        },
                                        {
                                            name: 'maxbet button bar',
                                            position: [165, 30],
                                            scale: [1.3, 1.3],
                                            childs: [
                                                {
                                                    name: 'maxbet button',
                                                    type: 'sprite',
                                                    button: 'button',
                                                    image: 'autoPlayButtonUp.png',
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'maxbet button glow',
                                                    type: 'sprite',
                                                    image: 'autoPlayButtonOver.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'maxbet button text',
                                                    position: [0, 0],
                                                    scale: [1 / 1.3, 1 / 1.3],
                                                    type: 'text',
                                                    text: 'MAX BET',
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: '700',
                                                        stroke: 0x000000,
                                                        strokeThickness: 2,
                                                    }
                                                },
                                                {
                                                    name: 'maxbet button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'autoPlayButtonDisabled.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                            ]
                                        },
                                        {
                                            name: 'auto start button bar',
                                            position: [-165, 30],
                                            scale: [1.3, 1.3],
                                            childs: [
                                                {
                                                    name: 'auto start button',
                                                    type: 'sprite',
                                                    button: 'button',
                                                    image: 'autoPlayButtonUp.png',
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'auto start button glow',
                                                    type: 'sprite',
                                                    image: 'autoPlayButtonOver.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'auto start button text',
                                                    position: [0, 0],
                                                    scale: [1 / 1.3, 1 / 1.3],
                                                    type: 'text',
                                                    text: 'AUTOPLAY',
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: '700',
                                                        stroke: 0x000000,
                                                        strokeThickness: 2,
                                                    }
                                                },
                                                {
                                                    name: 'auto start button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'autoPlayButtonDisabled.png',
                                                    alpha: 0,
                                                    visible: false,
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button paytable',
                                            position: [-720, 40],
                                            scale: [1.3, 1.3],
                                            type: 'sprite',
                                            image: 'paytableButtonUp.png',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'button paytable glow',
                                                    type: 'sprite',
                                                    image: 'paytableButtonOver.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'coin bar',
                                            position: [350, 40],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'coin bar background',
                                                    type: 'graphics',
                                                    position: [0, -45],
                                                    draw: [
                                                        ['beginFill', [0x000000]],
                                                        ['drawRect', [-82 / 2, 45 / 2, 82, 45]]
                                                    ],
                                                },
                                                {
                                                    name: 'coin bar text',
                                                    type: 'text',
                                                    text: '1',
                                                    position: [0, 0],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'coin bar label',
                                                    type: 'text',
                                                    text: 'COIN VALUE',
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                },
                                                {
                                                    name: 'coin bar up container',
                                                    scale: [1.5, 1.5],
                                                    position: [60, 0],
                                                    childs: [
                                                        {
                                                            name: 'coin bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'coin bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar down container',
                                                    scale: [-1.5, 1.5],
                                                    position: [-60, 0],
                                                    childs: [
                                                        {
                                                            name: 'coin bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'coin bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 1,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar progress',
                                                    position: [23, 50],
                                                    scale: [1, 1],
                                                    childs: [
                                                        {
                                                            name: 'coin progress back',
                                                            type: 'sprite',
                                                            mask: 'coin progress mask',
                                                            position: [-87, -31],
                                                            scale: [1.5, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'coin progress mask',
                                                            type: 'graphics',
                                                            position: [-23, -37],
                                                            alpha: 0.5,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-80 / 2, 5 / 2, 80, 5]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'level bar',
                                            position: [-350, 40],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'level bar background',
                                                    type: 'graphics',
                                                    position: [0, -45],
                                                    draw: [
                                                        ['beginFill', [0x000000]],
                                                        ['drawRect', [-82 / 2, 45 / 2, 82, 45]]
                                                    ],
                                                },
                                                {
                                                    name: 'level bar text',
                                                    type: 'text',
                                                    text: '35',
                                                    position: [0, 0],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'level bar label',
                                                    type: 'text',
                                                    text: 'LEVEL',
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                },
                                                {
                                                    name: 'level bar up container',
                                                    scale: [1.5, 1.5],
                                                    position: [60, 0],
                                                    childs: [
                                                        {
                                                            name: 'level bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar down container',
                                                    scale: [-1.5, 1.5],
                                                    position: [-60, 0],
                                                    childs: [
                                                        {
                                                            name: 'level bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 1,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar progress',
                                                    position: [23, 50],
                                                    scale: [1, 1],
                                                    childs: [
                                                        {
                                                            name: 'level progress back',
                                                            type: 'sprite',
                                                            mask: 'progress mask',
                                                            position: [-87, -31],
                                                            scale: [1.5, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'progress mask',
                                                            type: 'graphics',
                                                            position: [-23, -37],
                                                            alpha: 0.5,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-80 / 2, 5 / 2, 80, 5]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'betamount',
                                            position: [-550, 40],
                                            scale: 1.5,
                                            type: 'sprite',
                                            image: 'keypadBetBalanceBackground.png',
                                            childs: [
                                                {
                                                    name: 'betamount text',
                                                    type: 'text',
                                                    text: '125',
                                                    position: [0, 0],
                                                    scale: [1 / 1.5, 1 / 1.5],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'betamount label',
                                                    type: 'text',
                                                    text: 'BET',
                                                    scale: [1 / 1.5, 1 / 1.5],
                                                    position: [0, -25],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'total_bet bar',
                                            position: [550, 40],
                                            scale: [1.5, 1.5],
                                            type: 'sprite',
                                            image: 'keypadBetBalanceBackground.png',
                                            childs: [
                                                {
                                                    name: 'total_bet bar text',
                                                    type: 'text',
                                                    text: '0.1',
                                                    position: [0, 0],
                                                    scale: [1 / 1.5, 1 / 1.5],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'total_bet label',
                                                    type: 'text',
                                                    text: 'COINS',
                                                    scale: [1 / 1.5, 1 / 1.5],
                                                    position: [0, -25],
                                                    styles: {
                                                        fill: 0xf9e482,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    // width 1650
                                    name: 'control bottom background',
                                    type: 'graphics',
                                    position: [0, 114],
                                    draw: [['beginFill', 0x131313], ['drawRect', [-1920 / 2, -44 / 2, 1920, 44]]],
                                    childs: [
                                        {
                                            name: 'bottom background top',
                                            type: 'graphics',
                                            position: [0, -21],
                                            draw: [['beginFill', 0x322c33], ['drawRect', [-1920 / 2, -2 / 2, 1920, 2]]],
                                        },
                                        {
                                            name: 'btn_setting',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20, 0],
                                            image: 'btn_setting'
                                        },
                                        {
                                            name: 'btn_speaker',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            image: 'btn_speaker'
                                        },
                                        {
                                            name: 'audio_set button',
                                            type: 'sprite',
                                            image: 'btn_speaker_on',
                                            button: 'button',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            childs: [
                                                {
                                                    name: 'audio_set button glow',
                                                    type: 'graphics'
                                                },
                                            ]
                                        },
                                        {
                                            name: 'btn_auto',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70, 0],
                                            image: 'btn_auto',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'btn_auto glow',
                                                    type: 'sprite',
                                                    image: 'btn_autoGlow.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'autoamount text',
                                            type: 'text',
                                            text: '100',
                                            visible: false,
                                            position: [-1650 / 2 + 20 + 50 + 70 + 60, 0],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '20px'
                                            }
                                        },
                                        {
                                            name: 'btn_question',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70 + 100, 0],
                                            image: 'btn_question'
                                        },
                                        {
                                            name: 'timer',
                                            position: [1650 / 2 - 50 - 100, 0],
                                            childs: [
                                                {
                                                    name: 'timer hour',
                                                    position: [-20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer symbol',
                                                    position: [0, -2],
                                                    type: 'text',
                                                    text: ':',
                                                    visible: true,
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer minute',
                                                    position: [20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                            ]
                                        },
                                        {
                                            name: 'logo',
                                            type: 'text',
                                            text: 'NET|ENT',
                                            position: [1650 / 2 - 50, 0],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '22px',
                                                fill: 0x5b5b5b,
                                            }
                                        },
                                        {
                                            name: 'credits bar',
                                            type: 'text',
                                            position: [-200, 0],
                                            childs: [
                                                {
                                                    name: 'credits bar label',
                                                    type: 'text',
                                                    text: 'Cash: ',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'credits bar text',
                                                    type: 'text',
                                                    text: '50000$',
                                                    position: [75, 0],
                                                    styles: {
                                                        align: 'right',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: 'bet bar',
                                            position: [0, 0],
                                            childs: [
                                                {
                                                    name: 'bet bar label',
                                                    type: 'text',
                                                    text: 'Bet: ',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'bet bar text',
                                                    type: 'text',
                                                    text: '0.10',
                                                    position: [50, 0],
                                                    styles: {
                                                        align: 'left',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },

                                    ]
                                }
                            ]
                        },
                        {
                            name: 'win bar',
                            position: [0, -100],
                            visible: false,
                            childs: [
                                {
                                    name: 'win bar text',
                                    type: 'text',
                                    text: '75',
                                    styles: {
                                        align: 'center',
                                        fontSize: '85px',
                                        fontFamily: 'Oswald-Bold',
                                        fill: [0xfffbf2, 0xf9d688],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0xb93d6b,
                                        dropShadowDistance: 2,
                                        dropShadowBlur: 5,
                                        stroke: "#b93d6b",
                                        strokeThickness: 5,
                                        lineJoin: "bevel",
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'freespin control panel container wrapper',
                    visible: false,
                    position: [0, 470],
                    childs: [
                        {
                            scale: 1.5,
                            type: 'sprite',
                            position: [-200, 0],
                            image: 'win_field.png',
                            childs: [
                                {
                                    type: 'text',
                                    text: 'FREE SPINS PLAYED:',
                                    scale: 0.5,
                                    position: [0, -35],
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '30px',
                                    }
                                },
                                {
                                    name: 'freespin played count text',
                                    type: 'text',
                                    scale: 0.5,
                                    text: '1 of 10',
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '60px',
                                        fontFamily: 'NETENT_MyriadPro-Bold'
                                    }
                                }
                            ]
                        },
                        {
                            scale: 1.5,
                            type: 'sprite',
                            position: [200, 0],
                            image: 'win_field.png',
                            childs: [
                                {
                                    type: 'text',
                                    text: 'TOTAL WIN:',
                                    scale: 0.5,
                                    position: [0, -35],
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '30px',
                                    }
                                },
                                {
                                    name: 'freespin total win text',
                                    type: 'text',
                                    scale: 0.5,
                                    text: '0',
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '60px',
                                        fontFamily: 'NETENT_MyriadPro-Bold'
                                    }
                                }
                            ]
                        },
                        {
                            type: 'sprite',
                            image: 'FSkeypadBetBalanceBackground.png',
                            position: [800, 10],
                            scale: 1.5,
                            childs: [
                                {
                                    type: 'text',
                                    text: 'BET',
                                    scale: 0.5,
                                    position: [0, -30],
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '30px',
                                    }
                                },
                                {
                                    name: 'freespin betamount text',
                                    type: 'text',
                                    scale: 0.5,
                                    text: '200',
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '40px',
                                        fontFamily: 'NETENT_MyriadPro-Bold'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'AutoMenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'automenu overlay',
                    childs: [
                        {
                            name: 'automenu overlay rect',
                            event: 'automenu overlay',
                            type: 'graphics',
                            preventDefault: false,
                            draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                            alpha: 0,
                        },
                        {
                            name: 'automenu items container',
                            type: 'graphics',
                            position: [0, 0],
                            // position: [670 + 45, 661 - (1080 / 2) - 45],
                            draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                            alpha: 0.9,
                            childs: [
                                {
                                    name: 'automenu items container border',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                                },
                                {
                                    name: 'automenu title',
                                    type: 'text',
                                    text: 'Number of Auto Spins',
                                    position: [0, -120],
                                    styles: {
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '33px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'button automenu_50',
                                    type: 'graphics',
                                    pressed: true,
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 50,
                                    position: [160 * 2 + 20 * 2, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_50 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_50 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_50 text',
                                            type: 'text',
                                            text: '50',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_40',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 40,
                                    position: [160 + 20, -50],
                                    button: 'button',
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_40 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40 text',
                                            type: 'text',
                                            text: '40',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_30',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 30,
                                    position: [0, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_30 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30 text',
                                            type: 'text',
                                            text: '30',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_20',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 20,
                                    button: 'button',
                                    position: [-160 - 20, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_20 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20 text',
                                            type: 'text',
                                            text: '20',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_10',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 10,
                                    position: [-(160 * 2 + 20 * 2), -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_10 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10 text',
                                            type: 'text',
                                            text: '10',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'center_line',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, 1],
                                    draw: [['beginFill', 0xeeeeee], ['drawRect', [-870 / 2, -2 / 2, 870, 2]]]
                                },
                                {
                                    name: 'autospin comment',
                                    type: 'text',
                                    position: [0, 50],
                                    scale: [870 / 1020, 1],
                                    text: '\"Auto Spin stops automatically if cash amount is smaller than bet amount\"',
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        stroke: 'black',
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'autospin_dialog close button',
                                    type: "graphics",
                                    button: 'button',
                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                    position: [-100, 115],
                                    childs: [
                                        {
                                            name: 'autospin_dialog close button glow',
                                            type: "graphics",
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'close button text',
                                            type: 'text',
                                            text: 'Close',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
                                                fontSize: '28px',
                                                fill: 0xffffff
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'refresh start button bar',
                                    position: [100, 115],
                                    childs: [
                                        {
                                            name: 'refresh start button',
                                            type: "graphics",
                                            button: 'button',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                        },
                                        {
                                            name: 'refresh start button glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'refresh start button disabled',
                                            type: 'graphics',
                                            button: 'disabled button',
                                            draw: [['beginFill', 0x919191], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                        },
                                        {
                                            name: 'refresh button text',
                                            type: 'text',
                                            text: 'Start',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
                                                fontSize: '28px',
                                                fill: 0xffffff
                                            }
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusWinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus_win overlay',
                    childs: [
                        {
                            name: 'bonus_win overlay rect',
                            event: 'automenu overlay',
                            type: 'graphics',
                            preventDefault: false,
                            draw: [['beginFill', 0x00000000], ['drawRect', [-1920, -1920, 3840, 3840]]],
                            alpha: 0.7,
                        },
                        {
                            name: 'bonus_win items container',
                            type: 'sprite',
                            image: 'popup_award_back',
                            position: [0, -50],
                            scale: [1500 / 1017, 700 / 426],
                            alpha: 1,
                            childs: [
                                {
                                    name: 'bonus_win header',
                                    type: 'text',
                                    text: 'TOTAL BONUS WIN',
                                    position: [0, -80],
                                    scale: [1.4, 1.8],
                                    styles: {
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '80px',
                                        padding: 20,
                                        fill: [0xffd236, 0xff8e00],
                                        stroke: 0xe3ac16,
                                        strokeThickness: 3
                                    }
                                },
                                {
                                    name: 'bonus_win title',
                                    type: 'text',
                                    text: '150',
                                    position: [0, 80],
                                    scale: [1.4, 1.8],
                                    styles: {
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '80px',
                                        padding: 20,
                                        fill: [0xd0b172, 0xf8e2a3, 0x97783d],
                                        stroke: 0x553e1c,
                                        strokeThickness: 3,
                                        dropShadow: true,
                                        dropShadowAngle: 0.1,
                                        dropShadowColor: "black",
                                        dropShadowDistance: 3
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'InfoContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'infocontainer overlay rect',
                    event: 'infocontainer overlay',
                    type: 'graphics',
                    preventDefault: false,
                    draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]],
                    alpha: 0.5,
                },
                {
                    name: 'info background',
                    type: 'sprite',
                    image: 'paytable_bg.png',
                    event: 'infobackground',
                    position: [0, -30],
                    scale: [382, 1.5],
                },
                {
                    name: 'info container wrapper',
                    childs: [
                        {
                            name: 'info control container',
                            childs: [
                                {
                                    name: 'info close button',
                                    type: 'sprite',
                                    image: 'close_btn_up.png',
                                    position: [900, -450],
                                    scale: [1.4, 1.4],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info close button glow',
                                            type: 'sprite',
                                            image: 'close_btn_over.png',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info prev button',
                                    type: 'sprite',
                                    image: 'arrow_previev_up.png',
                                    position: [-900, -100],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info prev button glow',
                                            type: 'sprite',
                                            image: 'arrow_previev_over.png',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info next button',
                                    type: 'sprite',
                                    image: 'arrow_previev_up.png',
                                    position: [900, -100],
                                    scale: [-1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info next button glow',
                                            type: 'sprite',
                                            image: 'arrow_previev_over.png',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info indicator container',
                                    scale: [1.5, 1.5],
                                    position: [0, 280],
                                    childs: []
                                },
                                {
                                    name: 'info content 2',
                                    type: 'text',
                                    text: 'Only the highest win per bet line is paid. Bet line wins pay if in succession from the leftmost reel to the rightmost reel. Malfunction voids all pays and plays. FOr more \n information, see the Game Rules.',
                                    position: [0, 340],
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '20px'
                                    }
                                },
                            ]
                        },
                        {
                            name: 'info container 1',
                            visible: true,
                            childs: [
                                {
                                    name: 'container1 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            type: 'sprite',
                                            image: 'SYM1.png',
                                            position: [-200, -50]
                                        },
                                        {
                                            name: 'info container1 randomimage',
                                            type: 'sprite',
                                            image: 'randomWilds_1.png',
                                            position: [130, -70],
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 11',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'STICKY WILD RE-SPINS',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'info content 12',
                                    type: 'text',
                                    position: [0, 150],
                                    scale: [1, 1.1],
                                    text: 'Wild symbols appear on reels 2,3 and 4 in the main game and on all reels in Free Spins. \n 2 or more Wild symbols appearing on the reels in the main game act as Sticky Wilds and award a Sticky Wild Re-Spin',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '25px',
                                        fontWeight: 500
                                    }
                                },
                            ]
                        },
                        {
                            name: 'info container 2',
                            visible: false,
                            childs: [
                                {
                                    name: 'container2 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            type: 'sprite',
                                            image: 'SYM0.png',
                                            position: [-200, -50]
                                        },
                                        {
                                            name: 'info container1 randomimage',
                                            type: 'sprite',
                                            image: 'bonusSelector.png',
                                            position: [130, -70],
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 21',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'BONUS FEATURES',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'info content 22',
                                    type: 'text',
                                    position: [0, 150],
                                    scale: [1, 1.1],
                                    text: '3 Bonus symbols appearing on reels 1, 3 and 5 in the main game activate one of the Bonus Features. \n The 3 Bonus Features are: Beware the Wolf Bonus, Free Spins and Coin Win. \n To activate a Bonus Feature, the player picks one of three chests',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '25px',
                                        fontWeight: 500
                                    }
                                },
                            ]
                        },
                        {
                            name: 'info container 3',
                            visible: false,
                            childs: [
                                {
                                    name: 'container3 background',
                                    position: [0, -100],
                                    scale: [0.8, 0.8],
                                    childs: [
                                        {
                                            type: 'sprite',
                                            image: 'free_spins.png',
                                            position: [-220, 0]
                                        },
                                        {
                                            name: 'info container1 randomimage',
                                            type: 'sprite',
                                            image: 'coin_win.png',
                                            position: [220, 0],
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 31',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'FREE SPINS AND COIN WIN',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'info content 32',
                                    type: 'text',
                                    position: [0, 150],
                                    scale: [1, 1.1],
                                    text: 'When Free Spins are activated, the player is awarded with 10 Free Spins. \n If the Coin Win is won, the player is awarded a coin win, which is equal to the current bet multiplied x15.',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '25px',
                                        fontWeight: 500
                                    }
                                },
                            ]
                        },
                        {
                            name: 'info container 4',
                            visible: false,
                            childs: [
                                {
                                    name: 'info content 51',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'MEDIUM WIN SYMBOLS',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM3.png',
                                    position: [-580, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '400',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '80',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '40',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '2',
                                            position: [-30, 290],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM4.png',
                                    position: [-290, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '250',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '65',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '20',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM5.png',
                                    position: [0, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '200',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM6.png',
                                    position: [290, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '150',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '50',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM7.png',
                                    position: [580, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '100',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '45',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'info container 5',
                            visible: false,
                            childs: [
                                {
                                    name: 'info content 51',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'MEDIUM WIN SYMBOLS',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM8.png',
                                    position: [-580, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM9.png',
                                    position: [-290, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM10.png',
                                    position: [0, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM11.png',
                                    position: [290, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM12.png',
                                    position: [580, -160],
                                    scale: [1.4, 1.4],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [-30, 140],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [-30, 190],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [-30, 240],
                                            styles: {
                                                fill: 0xbc504c,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [70, 0],
                                                    styles: {
                                                        fill: 0x752154,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'info container 6',
                            visible: false,
                            childs: [
                                {
                                    name: 'info content 61',
                                    type: 'text',
                                    position: [0, -320],
                                    scale: [0.8, 1],
                                    text: 'BET LINES',
                                    styles: {
                                        align: 'center',
                                        fill: 0x752154,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'betlines',
                                    type: 'sprite',
                                    image: 'betlines.png',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: 'TutorialContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'tutorial title',
                    type: 'text',
                    text: 'FAIRY MAGIC SPIN',
                    position: [0, -350],
                    styles: {
                        fill: 0xfee6a9,
                        fontSize: '65px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0xa31f4e,
                        dropShadowDistance: 2,
                        dropShadowBlur: 25,
                        lineJoin: "bevel",
                        stroke: "#a31f4e",
                        strokeThickness: 7,
                        padding: 20
                    }
                },
                {
                    name: 'main spine',
                    type: 'spine',
                    scale: 0.75,
                    spineData: "tutorial_body",
                    spineAtlas: "tutorial_data",
                    spineAtlasFolder: "",
                    position: [0, 0],
                    visible: true
                },
                {
                    name: 'continue button bar',
                    position: [0, 430],
                    scale: 1.2,
                    childs: [
                        {
                            name: 'continue button',
                            type: 'sprite',
                            button: 'button',
                            image: 'continueUp.png',
                            position: [0, 0]
                        },
                        {
                            name: 'continue button glow',
                            type: 'sprite',
                            image: 'continueOver.png',
                            alpha: 0,
                            visible: false,
                        },
                        {
                            name: 'continue button text',
                            position: [0, 0],
                            scale: [1 , 1],
                            type: 'text',
                            text: 'CONTINUE',
                            styles: {
                                fill: 0xf9e482,
                                fontSize: '30px',
                                fontWeight: '700',
                                stroke: 0x000000,
                                strokeThickness: 2,
                            }
                        },
                        {
                            name: 'continue button disabled',
                            type: 'sprite',
                            button: 'disabled button',
                            image: 'continueDisabled.png',
                            alpha: 0,
                            visible: false,
                        }
                    ]
                },
            ]
        },
        {
            name: 'LogoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'logo spine',
                    type: 'spine',
                    spineData: 'intro_body',
                    spineAtlas: 'intro_data',
                    spineAtlasFolder: 'intro/',
                    scale: 0.75,
                    position: [0, 0],
                }
            ]
        },
        /*{
            name: 'Testcontiner',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'test spin container',
                    type: 'spine',
                    spineData: 'bigwin_json',
                    spineAtlas: 'bigwin_atlas',
                    spineTexture: 'bigwin_image',
                }
            ]
        },*/
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'Bonus freespin intro container',
                    scale: 1.5,
                    visible: false,
                    childs: [
                        {
                            name: 'Bonus freespin intro background',
                            type: 'sprite',
                            image: 'bgIntroBg'
                        },
                        {
                            name: 'Bonus freespin intro perspective icon',
                            type: 'sprite',
                            position: [65, 0],
                            image: 'free_spins_perspective.png'
                        },
                        {
                            name: 'Bonus freespin intro text',
                            type: 'text',
                            position: [-85, -240],
                            rotation: -20 / 180 * Math.PI,
                            text: 'CONGRATULATIONS!',
                            styles: {
                                align: 'center',
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '40px',
                                fill: 0xfffb94
                            }
                        },
                        {
                            name: 'Bonus freespin intro label',
                            type: 'text',
                            position: [-65, -195],
                            rotation: -21 / 180 * Math.PI,
                            text: 'YOU WON',
                            styles: {
                                align: 'center',
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '40px',
                                fill: 0xfffb94
                            }
                        },
                        {
                            name: 'Bonus freespin intro count text',
                            type: 'text',
                            position: [-30, -155],
                            rotation: -24 / 180 * Math.PI,
                            text: '10',
                            styles: {
                                align: 'center',
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '50px',
                                fill: 0xfffb94
                            }
                        },
                        {
                            name: 'freespin start button bar',
                            position: [450, 300],
                            childs: [
                                {
                                    name: 'freespin start button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'continueUp.png',
                                    position: [0, 0]
                                },
                                {
                                    name: 'freespin start button glow',
                                    type: 'sprite',
                                    image: 'continueOver.png',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'freespin start button text',
                                    position: [0, 0],
                                    scale: [1 , 1],
                                    type: 'text',
                                    text: 'START',
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '30px',
                                        fontWeight: '700',
                                        stroke: 0x000000,
                                        strokeThickness: 2,
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Bonus freespin outro container',
                    scale: 1.5,
                    visible: false,
                    childs: [
                        {
                            name: 'Bonus freespin outro background',
                            type: 'sprite',
                            image: 'bgOutroBg.png'
                        },
                        {
                            type: 'sprite',
                            image: 'FS_rh_win_outro_icon.png',
                            position: [-65, 100],
                        },
                        {
                            type: 'sprite',
                            image: 'FS_win_outro.png',
                            position: [380, -15],
                        },
                        {
                            type: 'text',
                            text: 'CONGRATULATIONS!\nYOU WON',
                            position: [0, -270],
                            styles: {
                                align: 'center',
                                fontFamily: 'NETENT_MyriadPro-Bold',
                                fontSize: '50px',
                                fill: [0xfff1c8, 0xffd967, 0xf99843],
                                stroke: "#5b3331",
                                strokeThickness: 3,
                            }
                        },
                        {
                            name: 'Bonus freespin total amount text',
                            type: 'text',
                            text: '5920',
                            position: [0, -150],
                            styles: {
                                align: 'center',
                                fontFamily: 'pfdindisplaypro-reg-webfont',
                                fontSize: '150px',
                                fontWeight: 'bold',
                                fill: [0xfff1c8, 0xffd967, 0xf99843],
                                stroke: "#6a3c39",
                                strokeThickness: 6,
                            }
                        },
                        {
                            name: 'freespin continue button bar',
                            position: [450, 300],
                            childs: [
                                {
                                    name: 'freespin continue button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'continueUp.png',
                                    position: [0, 0]
                                },
                                {
                                    name: 'freespin continue button glow',
                                    type: 'sprite',
                                    image: 'continueOver.png',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'freespin continue button text',
                                    position: [0, 0],
                                    scale: [1 , 1],
                                    type: 'text',
                                    text: 'CONTINUE',
                                    styles: {
                                        fill: 0xf9e482,
                                        fontSize: '30px',
                                        fontWeight: '700',
                                        stroke: 0x000000,
                                        strokeThickness: 2,
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BigwinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bigwin overlay',
                    type: 'graphics',
                    position: [0, -1080],
                    alpha: 0.9,
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1920 / 2, 1080 / 2, 1920, 1080]]
                    ],
                },
                {
                    name: 'bigwin spine',
                    type: 'spine',
                    spineData: 'bigwin',
                    spineAtlas: 'bigwin_data',
                    spineAtlasFolder: '',
                    scale: 0.75,
                    position: [0, 0],
                    childs: [
                        {
                            name: 'bigwin title',
                            type: 'text',
                            text: 'BONUS',
                            position: [0, -310],
                            styles: {
                                fill: 0xfee6a9,
                                fontSize: '100px',
                                fontWeight: 700,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0xa31f4e,
                                dropShadowDistance: 2,
                                dropShadowBlur: 25,
                                lineJoin: "bevel",
                                stroke: "#a31f4e",
                                strokeThickness: 7,
                                padding: 20
                            }
                        },
                        {
                            name: 'bigwin content',
                            type: 'text',
                            text: '353',
                            position: [0, 0],
                            styles: {
                                fill: 0xfee6a9,
                                fontSize: '300px',
                                fontWeight: 800,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0xa31f4e,
                                dropShadowDistance: 2,
                                dropShadowBlur: 25,
                                lineJoin: "bevel",
                                stroke: "#a31f4e",
                                strokeThickness: 7,
                                padding: 20
                            }
                        }
                    ]
                },
                /*{
                    name: 'bonus container', visible: false, childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
                        // {name: 'bonus close button', type: 'graphics', position: [565/2, -445/2], button: 'bonus close', hit: ['rect', -60, -20, 80, 40], childs:[
                        // 	{name: 'bonus close button text', type:'text', text: "CLOSE",position:[-30,0], styles: {fontFamily: 'Vinque', fontSize: '25px', padding: 20, fill: 0xcccccc}}
                        // ]},
                        {
                            name: 'bonus text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, -90],
                            styles: {
                                align: 'center',
                                fontFamily: 'Vinque, serif',
                                fontwegiht: 600,
                                stroke: 'white',
                                'strokeThickness': 5,
                                fontSize: '60px',
                                padding: 15,
                                fill: [0xff0b00, 0xffa61f]
                            }
                        }
                    ]
                }*/
            ]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale: [1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        {
                            name: 'orient switch icon',
                            type: 'sprite',
                            image: 'orient_switch',
                        },
                        {
                            name: 'orient switch text',
                            type: 'text',
                            position: [0, -300],
                            text: 'PLEASE TURN YOUR DEVICE',
                            alpha: 1,
                            styles: {
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '60px',
                                fontWeight: 'Bold',
                                fill: 0xffffff
                            }
                        }
                    ]
                }
            ]
        }
    ],

    Events: {

        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.automenu_mode = false;
            this['AutoMenuContainer'].visible = this.automenu_mode;
        },

        'Gameplay infocontainer overlay up': function (container, e) {
            this['InfoContainer'].visible = false;
            this['MainContainer'].visible = true;
        },

        'Gameplay infobackground up': function (container, e) {

        },

        'Gameplay cheat box down': function(container, e) {
            let types = ['bonus', 'freespin', 'coinwin'];
            let name = container.name;
            if(this[name].status !== 'ready') return;
            this['cheat spine 1'].status = 'not';
            this['cheat spine 3'].status = 'not';
            this['cheat spine 5'].status = 'not';
            this.selectRandomChest(name, 0);
        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {
            this.is_local_mode = true;
            //getting init data from server
            if (!this.is_local_mode) {
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "s" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if(r1 == null || r2 == null){
                    console.log("no");
                    this.userBlockLayer.active = true;
                    return;
                }
                this.game_id = r1[2];
                this.session_id = r2[2];
            }
            // server end

            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0x000000,
                    BIGMONEY: 0x000001,
                    JACKPOT: 0x000002,
                    BLUEJACKPOT: 0x000003,
                    REDJACKPOT: 0x000004
                },
                STATUS_TYPE: {
                    NORMAL: 0,
                    DISABLED: 1,
                    INVISIBLE: 2,
                    VISIBLE: 3
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;
            this.automenu_mode = false;

            this.current_auto_amount = 0;

            //getting init data from server

            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            } else {
                this.credits = {
                    value: 11250,
                    drawed: 11250
                };
            }
            //server end

            if (!this.is_local_mode) {
                var array_server = this.getInitData();
                if (array_server.error == 0) {
                    // this.line_value_list = array_server.response.arrLinesValue;
                    // this.betperline_value_list = array_server.response.arrBetValue;
                    // this.denoms_value_list = array_server.response.arrDenomValue;

                    this.line_value_list = array_server.response.arrLinesValue;
                    this.level_value_list = array_server.response.arrBetValue;
                    this.coin_value_list = array_server.response.arrDenomValue;

                    this.bet = {
                        amount: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                        drawed: this.coin_value_list[0],
                        step: 1
                    };

                    this.lines = {
                        value: this.line_value_list[0],
                        step: 1
                    };

                    this.levels = {
                        value: this.level_value_list[0],
                        step: 1
                    };

                    this.coins = {
                        value: this.coin_value_list[0],
                        step: 1
                    };


                } else {
                    console.warn("Server error");
                    this.userBlockLayer.active = true;
                    return;
                }
            } else {

                this.line_value_list = [10];
                this.level_value_list = [5, 10, 20, 30, 40];
                this.coin_value_list = [5, 10, 20, 25, 30, 40, 50];

                this.bet = {
                    amount: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                    drawed: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                    step: 1
                };

                this.lines = {
                    value: 1,
                    step: 1
                };

                this.levels = {
                    value: this.level_value_list[0],
                    step: 1
                };

                this.coins = {
                    value: this.coin_value_list[0],
                    step: 1
                };

            }


            this.level_progress_step = this.progressbar_size / this.level_value_list.length;
            this['level progress back'].x = this.progressbar_pos + this.level_progress_step;

            this.coin_progress_step = this.progressbar_size / this.coin_value_list.length;

            this['coin progress back'].x = this.progressbar_pos + this.coin_progress_step;

            this.spinCombinations = [];
            this.helpPageVisabilityFlag = false;

            /*-----------------line indicator build start-----------------*/
            let line_pos_y = [-310 - 10, -241 - 10, -174 - 10, -102 + 20, -34 + 20, 36 + 20, 103 + 20, 172 + 60, 239 + 60, 306 + 60];
            let line_pos_array = [4, 2, 8, 6, 1, 7, 11, 5, 3, 9, 10, 13, 16, 15, 18, 19, 20, 17, 12, 14];
            for (let i = 0; i < 20; i++) {
                let template = {
                    name: 'line indicator ' + line_pos_array[i],
                    type: 'sprite',
                    image: 'betLineButton2Base.png',
                    scale: [1.4, 1.4],
                    event: 'betindicator',
                    position: [Math.floor(i / 10) === 1 ? 700 : -700, line_pos_y[i % 10]],
                };

                this.buildChild(this['linebet container'], template);
                this.buildChild(this['line indicator ' + line_pos_array[i]], {
                    name: 'line indicator ' + line_pos_array[i] + ' glow',
                    type: 'sprite',
                    image: 'betLineButton2Over.png',
                    alpha: 0
                });
                this.buildChild(this['line indicator ' + line_pos_array[i] + ' glow'], {
                    name: 'line indicator ' + line_pos_array[i] + ' text',
                    type: 'text',
                    text: line_pos_array[i],
                    styles: {
                        fill: 0xf9e482,
                        fontSize: '20px',
                        fontWeight: 700
                    }
                })
            }
            /*-----------------line indicator build end-----------------*/


            /*-----------------help indicator build start-----------------*/
            let help_indicator_pos_x = [-100, -60, -20, 20, 60, 100];
            for (let i = 0; i < 6; i++) {
                let template = {
                    name: 'info indicator ' + (i + 1) + ' bar',
                    position: [help_indicator_pos_x[i], 0],
                };

                this.buildChild(this['info indicator container'], template);
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1),
                    type: 'sprite',
                    image: 'indicator_active.png',
                    step: i,
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled',
                    type: 'sprite',
                    event: 'infoindicator',
                    image: 'indicator.png',
                    step: i,
                    alpha: 0
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled glow',
                    type: 'sprite',
                    image: 'indicator_over.png',
                    alpha: 0
                });
            }
            /*-----------------help indicator build end-----------------*/

            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);

            this.staticTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.hideTweens = [];
                    this.staticTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideQuickTweens = [];
                }
            };

            this.passiveTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.hideTweens = [];
                    this.passiveTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideQuickTweens = [];
                }
            };

            this.flashTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.flashTweens.showTweens.forEach((tween, index) => {
                        tween.play();
                        /*var self = this;
                        var loop = setInterval(function() {
                            if(index < this.flashTweens.showTweens.length - 1) {
                                tween.play();
                            } else {
                                clearInterval(loop);
                            }
                        }, 0);*/
                        /* setTimeout(function run() {
                             if(index === this.flashTweens.showTweens.length - 1)
                                 return;
                             setTimeout(run, 100);
                         }, 100);*/
                    });
                },
                hide: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.hideTweens = [];
                    this.flashTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                                if (container.children.length > 1) {
                                    for (var i = 1; i < container.children.length; i++)
                                        container.children[i].gotoAndPlay(0);
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.creditsNotInc = true;

            this.BOARD_SIZE = [1225, 790];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 260;
            this.ROWS_OFFSET = 265; // symbols offset in the reel

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 0;

            this.SYMBOLS_SCALE = [1.4, 1.4];

            this.reels = [];
            let init_card = [
                [9, 11, 0],
                [3, 10, 11],
                [8, 6, 10],
                [10, 5, 8],
                [9, 6, 10]
            ];

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET - 2; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [['beginFill', [0x000000]], ['drawRect', [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2, this.BOARD_SIZE[0], this.BOARD_SIZE[1]]]],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0],
                    alpha: 0.5
                });

                let reelSprite = this.buildChild(this['game board symbols container'],
                    {
                        name: 'reel ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
                        name: 'reel highlighted ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelWildHighlight = this.buildChild(this['game board symbols wildcard container'], {
                    name: 'reel wildhighlight ' + i,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                });

                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    wildHighlight: reelWildHighlight,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {

                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: [1, 170 / 150],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel wildhighlight ' + i], {
                        name: 'reel ' + i + ' symbol wildhighlight container ' + j,
                        scale: [1, 170 / 150],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol wildhighlight container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' wildhighlight',
                        position: [0, 0],
                        scale: [1.4, 1.25],
                        type: 'sprite',
                        image: 'SYM1.png',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        position: [0, 0],
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',
                        type: 'sprite'
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlighttext',
                        type: 'sprite',
                        visible: false
                    });

                    var card_index = 0;
                    if (j >= (this.ROWS_COUNT + 1)) {
                        card_index = init_card[i][j - (this.ROWS_COUNT + 1)];
                    } else {
                        card_index = _.random(0, App.Symbols.length - 1);
                    }
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }
            }

            let frames = [];
            for (let i = 5; i < 17; i++) {
                frames.push('sparks_000' + (i < 10 ? '0' + i : i));
            }
            this.buildChild(this['test animation'], {
                name: 'test animation1',
                type: 'sprite',
                image: 'winEnd.png',
                scale: [1.5, 1.5],
                visible: false,
            });
            // this['test animation1'].gotoAndPlay(0);

            /*let intenseBlast_frames = [];
            for (let i = 1; i < 19; i++) {
                intenseBlast_frames.push('simplePulse_' + (i < 10 ? '0' + i : i) + '.png');
            }
            this.buildChild(this['test animation'], {
                name: 'intenseBlast animation1',
                type: 'movie-clip',
                frames: intenseBlast_frames,
                speed: 0.2,
                loop: true
            });
            this['intenseBlast animation1'].gotoAndPlay(0);*/

            /*this.buildChild(this['test animation1'],
                {
                    name: "spine",
                    type: "spine",
                    scale: [0.5, 0.5],
                    /!*spineData: "char4-data",
                    spineAtlas: "texture",
                    spineAtlasFolder: "char4/",*!/
                    spineData: "rrh_main",
                    spineAtlas: "rrh_main_data",
                    spineAtlasFolder: "footage/",
                    /!*spineData: "fairy",
                    spineAtlas: "fairy_data",
                    spineAtlasFolder: "front/",*!/
                    /!*spineData: "Netent_Logo",
                    spineAtlas: "Netent_Logo_data",
                    spineAtlasFolder: "",*!/
                    /!*spineData: 'intro_spine',
                    spineAtlas: 'intro_data',
                    spineAtlasFolder: '',*!/
                    position: [0, 0],
                });*/
            this['character spine'].skeleton.setSkinByName('day');
            this['character spine'].stateData.setMix('idle1', 'walk_loop', 0.2);
            this['character spine'].stateData.setMix('walk_loop', 'idle1', 0.2);
            this['character spine'].state.setAnimation(0, 'idle1', true);
            // this['spine'].state.setAnimation(0, 'Logo+frame_reveal', true);
            // this['spine'].state.setAnimation(0, 'happy1.5s', true);
            this.setStatusControlBar('refresh start button', this.const.STATUS_TYPE.DISABLED);

            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });
            this['main spine'].state.setAnimation(0, '1_RandomFeature', false);
            setTimeout(() => {
                this['logo spine'].state.setAnimation(0, 'Logo+frame_reveal', false);
            }, 1000);

            var self = this;
            this['main spine'].state.addListener({
                complete: function(entry) {
                    if(this.tutorial_mode === false)
                        return;
                    if(entry.animation.name === "1_RandomFeature") {
                        self['tutorial title'].text = "FAIRY WILD SPIN";
                        self['tutorial title'].text = "BEWARE THE WOLF BONUS";
                        self['main spine'].state.setAnimation(0, '3_Bonusgame', false);
                    } else if(entry.animation.name === "3_Bonusgame") {
                        self['tutorial title'].text = "FREE SPINS";
                        self['main spine'].state.setAnimation(0, '4_Freespins', false);
                    } else if(entry.animation.name === "4_Freespins") {
                        self['tutorial title'].text = "STICKY WILD RE-SPINS";
                        self['main spine'].state.setAnimation(0, '5_StickyWilds', false);
                    } else if(entry.animation.name === "5_StickyWilds") {
                        self['tutorial title'].text = "FAIRY MAGIC SPIN";
                        self['main spine'].state.setAnimation(0, '1_RandomFeature', false);
                    }
                }
            });
            this['cheat spine 1'].hackTextureBySlotName('feature_icon', this.getTexture("coin_win.png"));
            this['cheat spine 3'].hackTextureBySlotName('feature_icon', this.getTexture("free_spins.png"));
            this['cheat spine 5'].hackTextureBySlotName('feature_icon', this.getTexture("bonus_game_icon.png"));
            this['cheat spine 1'].state.addListener({
                complete: entry => {
                }
            })
        },

        'Gameplay resize': function () {

            this.refreshPanelValues();

            if(this.tutorial_mode === false)
            {
                this['character spine'].visible = true;
                this['MainContainer'].visible = true;
                this['control main background'].visible = true;
                this['TutorialContainer'].visible = false;
            }
            if (this.menu_mode === true)
                this['MenuContainer'].visible = true;
            if (this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;

        },

        'Gameplay showed': function () {

            if (Settings["intro"]) {

                this.showIntro(function () {

                    this.startGame();

                });

            } else {

                this.skipIntro(function () {

                    this.startGame();

                });

            }

        },

        'Gameplay update': function () {

            let time = this.updateTimeOffset / (1000 / 60);

            if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {

                        if (this.reels[i].animation.state === 0) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.ROWS_OFFSET / 3 - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.5;

                            if (this.reels[i].speed <= 1) {

                                this.reels[i].animation.state = 1;

                            }

                        } else if (this.reels[i].animation.state === 1) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.3 - 1;

                        }

                    }

                    this.reels[i].sprite.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {

                        if (this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT + 1) * this.ROWS_OFFSET) {

                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {

                                let symbol = this.reels[i].sprite.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {
                                let symbol = this.reels[i].spriteHighlight.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);
                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }
                            this.reels[i].completed = true;

                            if (this.reels.every(item => item.completed)) {
                                this.completeSpin();
                            }
                        }
                    }
                }
            }
        },

        'Gameplay update tick 5': function () {

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    this.reels[i].sprite.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                }

            }

        },

        'Gameplay update tick 30': function () {
            this['timer symbol'].visible = this['timer symbol'].visible !== true;
            this.updateTimerpanel();
        },

        'Gameplay disabled button up': function (container, e) {

        },

        'Gameplay button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay infoindicator over': function (container, e) {
            var name = container.name;

            let nameGlow = container.name + ' glow';

            if (this[nameGlow].tween) this[nameGlow].tween.stop();

            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 1, 150, 0, Power1.easeOut],
                    ['visible', true, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);

        },

        'Gameplay infoindicator out': function (container, e) {
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 0, 150, 0, Power1.easeOut],
                    ['visible', false, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
        },

        'Gameplay infoindicator down': function (container, e) {
            this.refreshHelpPage(container.step);
            this.refreshHelpIndicator(container.step);
        },

        'Gameplay betindicator over': function (container, e) {
            var name = container.name;
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 1, 150, 0, Power1.easeOut],
                    ['visible', true, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            this[line_name].visible = true;
        },
        'Gameplay betindicator out': function (container, e) {
            var name = container.name;
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 0, 150, 0, Power1.easeOut],
                    ['visible', false, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            this[line_name].visible = false;
        },

        'Gameplay bonus close down': function () {
            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'overlay', () => {
                this['overlay'].visible = false;
            });

            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'bonus container', () => {
                this['bonus container'].visible = false;
            });

        },

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },
    },

    transferToCTA: function () {
        //
        // if (!App.CallToAction.showed) App.CallToAction.show();

    },

    showIntro: function (next) {

        //Show intro animation if needed and call next

        App.Tutorial.show();
        if (next) next.call(this);

    },

    skipIntro: function (next) {

        //Hide intro animation elements if needed and call next

        if (next) next.call(this);

    },

    startGame: function () {

        MRAID.track('Game Starts');

        this.tutorialTimeout(10000);

        this.state = 'ready';

    },

    spin: function () {
        // this['test spin container'].state.setAnimation(0, 'mw_loop', true);
        // return;
        this.winAnimationMode = false;
        this.is_bonus = false;

        if (this.credits.value - this.bet.amount >= 0) {
            if (this.isfreespin === false) {
                this.credits.value -= this.bet.amount;
                this.credits.drawed = this.credits.value;
                this.server_win_amount.value = 0;
                this.server_win_amount.drawed = 0;
                // this['win bar'].drawed = 0;

                this.refreshPanelValues();

                this.creditsNotInc = true;
            }
        } else {
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this.startHillAnimation();
        this.starRabbitAnimation();

        this['character spine'].state.setAnimation(0, 'walk_loop', true);

        this.setStatusControlBar(['start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);

        if (this.winSound) {

            this.winSound.stop();
            this.winSound = false;

            // if (this.mainSound) this.mainSound.volume = this.sound_mode ? 1 : 0;

        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        this.hideWinanimation();

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true && this.isfreespin !== true) {
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
            }

            this.refreshPanelValues();
        }

        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step, this.isfreespin))).done((response) => {
            var serverData = response;
            console.log(response);
            if (serverData.error === "0") {

                this.credits.value = serverData.response.balance;
                this.server_initMatrix = serverData.response.initCards;

                this.spinCombination = null;

                this.spinCombination = App.escalibur.mathFromServer(this.bet.amount, this.server_initMatrix);

                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
                this.win_anim_mode = 0;
                this.server_win_amount.value = serverData.response.winAmount;
                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        newArrRetval.push(arrRetval[i]);
                    }

                    if (arrRetval[i].retType === 7) {
                        this.wildReelArray = arrRetval[i].wildReelAry;
                        this.freespin_count = 1;
                    }

                    //In bonus case
                    if (arrRetval[i].retType === 2) {
                        this.isfreespin = true;
                        this.auto_mode = false;
                        this.freespin_animation = true;
                        this.freespin_count = arrRetval[i].count;
                        this.freespin_first_animation = true;
                    }

                    //Free spin case
                    if (arrRetval[i].retType === 4) {
                        let scatter = arrRetval[i];
                        if(scatter.arrMatchedCardsXPos.length > 2) {
                            this.freespin_count = scatter.count;
                            this.total_freespin_amount = 0;
                            this.isfreespin = this.freespin_count > 0;
                            this.freespin_index = 0;
                            this.isfreespinStart = true;
                        }
                    }
                }

                this.server_arrRetVal = newArrRetval;

                if(this.isfreespin && this.isfreespinStart === false) {
                    if(this.freespin_count !== this.freespin_index) {
                        this.total_freespin_amount += serverData.response.winAmount;
                        this.freespin_index++;
                        // this['freespin count text'].text = this.freespin_count - this.freespin_index;
                    }
                    if((this.freespin_count - 1) === this.freespin_index) {
                        this.freespinEnd = true;
                    }
                }
                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 3) {
                        // In Case Jackpot

                        this.is_bonus = true;
                        this.bonus_amount = parseInt(arrRetval[0].win);
                        this.server_win_amount.value = parseInt(arrRetval[0].win);
                    } else if (arrRetval[0].retType === 0) {
                        // In Case NORMAL
                        this.is_bonus = false;
                        this.spinCombination.winData.winLines = this.generateWinData();
                    } else if (arrRetval[0].retType === 1) {

                    }
                }
            } else {

            }

        });

        if (this.timeouts && this.timeouts.length > 0) {

            this.timeouts.forEach((timeout) => {

                clearTimeout(timeout);

            });

        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    var card_index = _.random(0, App.Symbols.length - 1);

                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[card_index].Image);

                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);

                }

                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 80;

                let stopReelInterval = setInterval(() => {

                    if (this.spinCombination) {

                        if (stopReelInterval) clearInterval(stopReelInterval);

                        this.timeout(() => {

                            this.stopReel(i);

                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);

                    }

                }, 80);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    stopReel: function (reel, errorStop) {

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;

        this.reels[reel].animation = {
            state: 0
        };

        for (let i = 0; i < this.ROWS_COUNT; i++) {

            let highlightSprites = [];
            let activeSprites = [];
            let imageName;

            if (errorStop) {

                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);

            } else {
                imageName = this.spinCombination.symbols[i][reel];

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName]);

                /*if (imageName === "Symbol_Bonus" && i !== 0 && i !== 4) {
                    if (reel === 0) {
                        this.playSound('bonus_one', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.first_reel = true;
                    } else if (reel === 1 && this.first_reel) {
                        this.playSound('bonus_two', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.second_reel = true;
                    } else if (reel === 2 && this.first_reel && this.second_reel) {
                        this.third_reel = true;
                        this.playSound('bonus_three', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.isfreespin = true;
                        this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                        this.bonus_active.push(this.reels[reel].sprite.children[i]);
                    } else {
                        continue;
                    }

                    this.playSound(imageName, {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                    activeSprites.push(this.reels[reel].sprite.children[i]);
                    highlightSprites.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_active.push(this.reels[reel].sprite.children[i]);

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 0],
                            ['visible', false]
                        ]
                    }, activeSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
                    this.staticTweens.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 1, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', true],
                                ['alpha', 1]
                            ]
                        }
                    }, activeSprites));

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 1],
                            ['visible', true],
                            ['scale', this.SYMBOLS_SCALE]
                        ]
                    }, highlightSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();

                    this.staticTweens.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 0, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', false],
                                ['alpha', 0]
                            ]
                        }
                    }, highlightSprites));

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();
                    this.staticTweens.show();

                    let temptimeout = setTimeout(() => {
                        this.staticTweens.hide();
                        this.staticTweens.showTweens = [];
                        this.staticTweens.hideTweens = [];
                    }, 900);
                }*/
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {

            let symbol = this.reels[reel].sprite.children[i];

            this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {

            let symbol = this.reels[reel].spriteHighlight.children[i];

            // this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        this.playSound('reelStop' + reel, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.state = 'spinStop';

    },

    completeSpin: function () {
        this.setStatusControlBar(['start button', 'maxbet button', 'auto start button'], this.const.STATUS_TYPE.NORMAL);

        this.stopHillAnimation();
        this.stopRabbitAnimation();
        this['character spine'].state.setAnimation(0, 'idle1', true);

        if (this.wildReelArray && this.isfreespin === false) {
            this.wildAnimation(this.wildReelArray);
        }

        // if (this.isfreespin === true && this.freespin_count === 0) {
        //     this.hideWildanimation();
        // }

        if (this.isfreespin && this.isfreespinStart === true) {
            this.isfreespinStart = false;
            this.tempAutoMode = this.auto_mode;
            this.tempCurrentAutoAmount = this.current_auto_amount;
            this.auto_mode = false;
            this.current_auto_amount = 0;
            setTimeout(() => {
                this.boxShowingAnimation();
            }, 3000);
        }

        if (this.current_auto_amount === 0 || this.state === 'ready') {
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
        }

        if (this.spinCombination) {

            if (!this.is_bonus) {
                if (this.spinCombination.winData.winLines.length > 0) {

                    this.spinCombinations.push(this.spinCombination);

                    this.winSpinCombination = this.spinCombination;

                    this.state = 'ready';

                    this.win_sound_play = true;

                    this.winAnimationMode = true;

                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                        // this.startJackpotAnimation();
                    }

                    this.winAnimation();
                    this.animatePassiveLines(this.spinCombination.winData);

                    // this.credits.value += this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                } else {

                    this.spinCombinations.push(0);

                    // this.animFieldPoints('win', 0);

                    this.winAnimationMode = false;

                    this.state = 'ready';
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    // this.drawJackpot();

                    /*if (this.freespin_end && this.isfreespin) {
                        setTimeout(() => {
                            this['bonus_win title'].text = this.total_freespin_amount;
                            this['BonusWinContainer'].visible = true;
                            this.freespin_count = 0;
                            this.freespin_index = 0;
                            this.total_freespin_amount = 0;
                            this.isfreespin = false;
                            this.freespin_end = false;
                            setTimeout(() => {
                                this['BonusWinContainer'].visible = false;
                                this.completeFreespin();
                            }, 3000);
                        }, 3000);
                    }*/
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode || (this.isfreespin === true && this.freespin_index > 0)) {
                            this.spin();
                        }
                    }, 500);
                }
            } else {
                this.credits.value += parseInt(this.bonus_amount);
                this.credits.drawed += parseInt(this.bonus_amount);
                this.refreshPanelValues();

                this.showBigwinContainer(this.bonus_amount);
                this.playSound('bigWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});


            }
        } else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }

        if(this.is_local_mode == false)
            this.sendSignalToSite();
    },

    drawJackpot: function () {

    },

    updateTimerpanel: function () {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;

        this['timer hour'].text = h;
        this['timer minute'].text = m;
    },

    setSymbolTexture: function (container, image) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image.replace(".png", "-BLURRED.png"));

        this[name + ' highlight'].removeChildren();
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'sprite',
            visible: true,
            alpha: 1,
            image: image.replace(".png", "_glow.png"),
        });

        this[name + ' highlighttext'].removeChildren();
        this.buildChild(this[name + ' highlighttext'], {
            name: name + ' highlight animation1',
            type: 'text',
            text: '35',
            styles: {
                fill: 0xffe6aa,
                fontSize: '80px',
                fontWeight: 700,
                dropShadow: true,
                dropShadowAngle: 0.5,
                dropShadowColor: 0xf6a3aa,
                dropShadowDistance: 2,
                dropShadowBlur: 25,
                lineJoin: "bevel",
                stroke: "#da7b77",
                strokeThickness: 7,
                padding: 20
            }
        });
    },

    setSymbolsBlur: function (container, state) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;

    },

    tweensBySprites: function (activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, indicatorSprites, textValue, lineNum, callback) {

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];

        this.staticTweens.showTweens = [];
        this.staticTweens.hideTweens = [];
        this.staticTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        if (this.state === 'ready') {

            //highlight animation
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: ['scale', [1.4, 1.25]],
                to: [
                    ['alpha', 1, 300],
                    ['visible', true]
                ],
                next: {
                    to: [
                        ['alpha', 0, 700],
                        ['visible', false, 700]
                    ],
                }
            }, highlightSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 10],
                ]
            }, highlightSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 10, 0]
                ]
            }, highlightSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

            //Passivesprite animation
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 500],
            }, passiveSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();

            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300, 500]
            }, passiveSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50, 0]
            }, passiveSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

            //Center text Animation
            if (textSprites.length > 0) {
                this[textSprites[0]].children[0].text = textValue.toString();

                this.currentTweens.showTweens.push(this.tween({
                    name: 'win-animation',
                    to: [
                        ['alpha', 1, 500],
                        ['visible', true, 500],
                        ['scale', 1, 500]
                    ]
                }, textSprites));

                this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
                this.currentTweens.hideTweens.push(this.tween({
                    name: 'win-animation',
                    to: [
                        ['scale', 0.9],
                        ['alpha', 0, 100]
                    ],
                    next: {
                        set: [
                            ['visible', false],
                            ['alpha', 0]
                        ]
                    }
                }, textSprites));

                this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

                this.currentTweens.hideQuickTweens.push(this.tween({
                    name: 'win-animation',
                    to: [
                        ['scale', 0, 50, 0, Back.easeIn.config(2)],
                        ['alpha', 0, 50, 0]
                    ],
                    next: {
                        set: [
                            ['visible', false],
                            ['alpha', 0]
                        ]
                    }
                }, textSprites));

                this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
            }

        }

        //line animation
        {
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 50],
                    ['visible', true, 50]
                ]
            }, lineSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['visible', false, 50]
                ]
            }, lineSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 1, 0],
                    ['visible', false, 1]
                ]
            }, lineSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 50],
                ]
            }, indicatorSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                ]
            }, indicatorSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 1, 0],
                ]
            }, indicatorSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();
        }

        if (this.state === 'ready') {
            if (this.currentTweens.showTweens.length > 0)
                this.currentTweens.show();
            if (this.staticTweens.showTweens.length > 0)
                this.staticTweens.show();
        }

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {

            if (this.state !== 'ready') {
                if (tempTimeout) clearTimeout(tempTimeout);
                return;
            }

            if (this.state === 'ready') {
                this.currentTweens.hide();
                this.staticTweens.hide();
            }

            if (callback && (this.state === 'ready')) {

                let tempTimeout2 = null;
                let tempTimeout3 = null;

                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {

                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }

                    if (this.state === 'ready') {
                        this.currentTweens.hide();
                        this.staticTweens.hide();
                        // this.hideLinecontainer();
                        // caapllback.call(this);
                    }
                }, 1000);
                if (this.state === 'ready') tempTimeout3 = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                    callback.call(this);
                }, 200);

            }

        }, 1000);

    },


    allanimatepassive: function (activeSprites, passiveSprites) {

        this.passiveTweens.showTweens = [];
        this.passiveTweens.hideTweens = [];
        this.passiveTweens.hideQuickTweens = [];
        this.flashTweens.showTweens = [];
        this.flashTweens.hideTweens = [];
        this.flashTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        //Passivesprite animation
        if (this.state === 'ready') {

            this.passiveTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.35, 300]
            }, passiveSprites));

            this.passiveTweens.showTweens[this.passiveTweens.showTweens.length - 1].stop();

            this.passiveTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300]
            }, passiveSprites));

            this.passiveTweens.hideTweens[this.passiveTweens.hideTweens.length - 1].stop();

            this.passiveTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50]
            }, passiveSprites));

            this.passiveTweens.hideQuickTweens[this.passiveTweens.hideQuickTweens.length - 1].stop();

        }

        //flash Animation
        /*if (this.state === 'ready') {
            for (var i = 0; i < activeSprites.length; i++) {
                this.flashTweens.showTweens.push(this.tween({
                    name: 'win-animation',
                    to: [
                        ['alpha', 1],
                        ['visible', true],
                        ['scale', 0.8, 100]
                    ],
                }, activeSprites[i]));
            }

            this.flashTweens.showTweens[this.flashTweens.showTweens.length - 1].stop();

            this.flashTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['scale', 0, 50]
                ]
            }, activeSprites));

            this.flashTweens.hideTweens[this.flashTweens.hideTweens.length - 1].stop();

            this.flashTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['scale', 0, 50]
                ]
            }, activeSprites));

            this.flashTweens.hideQuickTweens[this.flashTweens.hideQuickTweens.length - 1].stop();
        }*/


        if (this.state === 'ready') {
            if (this.passiveTweens.showTweens.length > 0)
                this.passiveTweens.show();
            /*if (this.flashTweens.showTweens.length > 0)
                this.flashTweens.show();*/
        }

        setTimeout(() => {
            this.passiveTweens.hide();
            this['win bar'].visible = false;
        }, 1500);

    },


    animateLine: function (line, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [];
        let activeSprites = [];
        let passiveSprites = [];
        let textSprites = [];
        let linesNum = line[4];

        let spritesModel = [];

        let matched_symbol_cnt = line[3] === 1 ? 3 : line[3];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                spritesModel[i][j] = '';

                if (line[0][j][i] !== 0) {
                    if (activeSprites.length < matched_symbol_cnt) {
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                        spritesModel[i][j] = 'active';
                    } else
                        passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                    if (highlightSprites.length < matched_symbol_cnt) {
                        spritesModel[i][j] = 'highlight';
                        highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                    }

                    if (i === 2) {
                        let sprite_name = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[1].params.name.replace('crisp', 'highlighttext');
                        this[sprite_name].text = line[5];
                        textSprites.push(sprite_name);
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }
        let lineSprites = [];
        lineSprites.push("line " + linesNum);

        let indicatorSprites = [];
        indicatorSprites.push('line indicator ' + linesNum + ' glow');

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;

        this.tweensBySprites(activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, indicatorSprites, line[5], linesNum, callback);
    },

    animatePassiveLines: function (winData) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }
        this['win bar'].visible = true;
        this['win bar text'].text = this.server_win_amount.value;

        let activeSprites = [];
        let passiveSprites = [];
        let highlightSprites = [];

        let spritesModel = [];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;

                spritesModel[i][j] = '';

                for (let k = 0; k < winData.winLines.length; k++) {
                    let lineData = winData.winLines[k];

                    if ((lineData[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        spritesModel[i][j] = 'active';
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        if ((spritesModel[i][j] !== 'highlight')) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }
                    }
                }
            }
        }

        if (winData.winLines.length === 2 || winData.winLines.length === 1) {
            this.playSound('smallWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        } else if (winData.winLines.length === 3) {
            this.playSound('mediumWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        } else if (winData.winLines.length > 3) {
            this.playSound('largeWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        }

        // this.startFlashAnimation(winData);

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }

        if (this.state === 'ready') this.allanimatepassive(activeSprites, passiveSprites);
    },

    animateEachLine: function (winLines, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        this.timeouts = [];

        for (let i = 0; i < winLines.length; i++) {

            let lineData = winLines[i];

            let lineNum = i;

            if (this.state !== 'ready' || this.winAnimationMode === false) {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {

                if (this.state !== 'ready' || this.winAnimationMode === false) {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination) {
                    this.staticTweens.hide();
                    this.currentTweens.hide();
                }
                this.animateLine(lineData, () => {
                    if (this.spinCombination) {
                        if (this.spinCombination.winData.winLines.length - 1 === lineNum) {
                            if (this.state !== 'ready' || this.winAnimationMode === false) {
                                callback = null;
                                return;
                            }
                            if ((callback) && (this.state === 'ready')) callback.call(this);
                        }
                    }
                });

                //if (this.state === 'ready') //this.playSound('symb'+lineData[4]+'.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

            }, lineNum * 1200);

            this.timeouts.push(tempTimeout);

        }

    },

    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }

            this.animateEachLine(this.spinCombination.winData.winLines, () => {
                if (this.state !== 'ready') return;
                let tempTimeout = null;
                if (this.state === 'ready') tempTimeout = setTimeout(() => {

                    if (this.state !== 'ready' || this.winAnimationMode === false) {
                        if (tempTimeout) clearTimeout(tempTimeout);
                        return;
                    }

                    this.state = 'ready';
                    // this.winAnimationMode = false;
                    if (this.auto_mode || (this.isfreespin === true && this.freespin_index > 0)) {
                        this.spin();
                    } else {
                        if (this.state === 'ready') this.winAnimation();
                    }

                }, 0);
            });
        } else {

            if (this.creditsNotInc) {
                this.credits.value += this.server_win_amount;
                this.credits.drawed = this.credits.value;
            }

            this.refreshPanelValues();
        }

    },

    animFieldPoints: function (fieldName, points, bAnim = false, speed = 0) {
        if (bAnim === false) {
            if (this[fieldName + ' text'].text === points.toString()) return;
            this[fieldName + ' text'].text = points.toString();
        } else if (this[fieldName].text !== points.toString()) {
            let duration = 1000;
            if (points > 10000)
                duration = 9000;
            else if (points > 5000)
                duration = 6000;
            else if (points > 1000)
                duration = 4000;
            else if (points > 500)
                duration = 2000;

            this.tween({
                set: ['drawed', this[fieldName].drawed],
                to: ['drawed', points, duration, 100, Expo.easeOut],
                update: () => {
                    this[fieldName + ' text'].text = Math.trunc(this[fieldName].drawed).toString();
                    this.roll_sound_play = false;
                }
            }, fieldName);
        }
    },

    tutorialTimeout: function (timeout) {

        if (this.state !== 'intro') {

            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function () {

                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();

            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);

        }

    },

    hideTutorial: function () {

        clearTimeout(this.TutorialTimeout);

        if (App.Tutorial.showed) App.Tutorial.hide();

    },

    handleButtonOut: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: [
                ['alpha', 0, 150, 0, Power1.easeOut],
                ['visible', false, 150, 0, Power1.easeOut],
            ]
        }, nameGlow);
    },

    handleButtonOver: function (container, e) {
        if (this.state !== 'ready')
            return;
        this.playSound('buttonHover', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: [
                ['alpha', 1, 150, 0, Power1.easeOut],
                ['visible', true, 150, 0, Power1.easeOut],
            ]
        }, nameGlow1);
    },

    handleButtonUp: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        switch (name) {
            case 'auto start button':
                this.buttonHandlerAuto(container, name);
                break;
            case 'btn_auto':
                this.buttonHandlerAuto(container, name);
                break;
            case 'coin bar down':
                this.buttonHandleCoinUpDown(false, container, name);
                break;
            case 'coin bar up':
                this.buttonHandleCoinUpDown(true, container, name);
                break;
            case 'continue button':
                this.buttonHandleContinue();
                break;
            case 'level bar down':
                this.buttonHandleLevelBarUpDown(false, container);
                break;
            case 'level bar up':
                this.buttonHandleLevelBarUpDown(true, container);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                this.automenu_mode = false;
                this['AutoMenuContainer'].visible = this.automenu_mode;
                break;
            case 'button paytable':
                this.buttonHandlePaytable(container);
                break;
            case 'start button':
                // this['spine'].state.setAnimation(0, "happy1.5s", true);
                // return;
                if (this.auto_mode) {
                    return;
                } else {
                    if (!this.isfreespin)
                        this.buttonHandleStartButton(container, false);
                    else
                        this.buttonHandleFreeStartButton(container);
                }
                break;
            case 'freespin start button':
                this.buttonHandleFreeStartButton(container);
                break;
            case 'maxbet button':
                if (this.auto_mode) {
                    return;
                } else {
                    this.buttonHandleMaxbetButton(container);
                }
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'info prev button':
                this.buttonHandlerPrev(container);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'info close button':
                this.returnToOrginalFromHelp();
                break;
            case 'audio_set button':
                this.buttonHandlerAudioSet(container);
                break;
            case 'close button':
                this.buttonHandlerClose(container);
                break;

            default:
                if (name.indexOf('button automenu') === 0) {
                    this.buttonHandleAutoItem(container, name);
                }
                break;
        }
    },

    handleButtonDown: function (container, e) {
        if (this.state !== 'ready')
            return;
        if (container.name === "level bar up" && this.levelup_state === true)
            return;
        if (container.name === "level bar down" && this.leveldown_state === true)
            return;
        if (container.name === "coin bar up" && this.coinup_state === true)
            return;
        if (container.name === "coin bar down" && this.coindown_state === true)
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);

        this.cur_mouse_capture_container_name = container.name;
    },

    buttonHandlerAuto: function (container, name) {
        if (this.auto_mode === true) {
            this['auto start button text'].text = "AUTOPLAY";
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this['autoamount text'].visible = false;
            this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;
            if (this.automenu_mode !== true) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                this.automenu_mode = true;
            } else {
                this.automenu_mode = false;
            }
            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
    },

    buttonHandleAutoItem: function (container, name) {
        if (this.state !== 'ready') return;

        this.winAnimationMode = false;
        this.current_auto_amount = container.step;
        let number = name.slice(-2);
        this.refreshPanelValues();

        let nameGlow1 = container.name + ' selected';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        this.refreshAutoItemBack(number);
    },

    refreshAutoItemBack: function (number) {
        let items = ["10", "20", "30", "40", "50"];
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                let tweenname = "button automenu_" + items[i] + " selected";
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, tweenname);
            } else {
                this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.NORMAL);
            }
        }
    },

    buttonHandleCoinUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode === true) return;
        this.winAnimationMode = false;

        var cur_step = this.coins.step;
        if (bUp === true) {
            if (cur_step < this.coin_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step++;
            }
            this.refreshCoinBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step - 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step--;
            }
            this.refreshCoinBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, this.levels.step, cur_step) === false)
            cur_step = this.coins.step;
    },

    buttonHandleContinue: function() {
        this.tutorial_mode = false;
        this['character spine'].visible = true;
        this['MainContainer'].visible = true;
        this['control main background'].visible = true;
        this['TutorialContainer'].visible = false;
    },

    buttonHandleLevelBarUpDown: function (bUp, container) {
        if (this.state !== 'ready' || this.auto_mode) return;
        this.winAnimationMode = false;

        var cur_step = this.levels.step;
        if (bUp === true) {
            if (cur_step < this.level_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step++;
            }
            this.refreshLevelBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step - 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step--;
            }
            this.refreshLevelBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, cur_step, this.coins.step) === false)
            cur_step = this.levels.step;
    },

    buttonHandleMaxbetButton: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        if (this.levels.step !== this.level_value_list.length || this.coins.step !== this.coin_value_list.length) {
            this.showalllines();
            setTimeout(() => {
                this.hidealllines();
            }, 1000);
            this.levels.step = this.level_value_list.length;
            this.coins.step = this.coin_value_list.length;
            this.setBetAmountValues(1, this.levels.step, this.coins.step);
            this.tween({
                to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
            }, 'coin progress back');
            this.tween({
                to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
            }, 'level progress back');
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
            this.coindown_state = false;
            this.leveldown_state = false;
        } else {
            this.spin();
        }
    },

    setMinbet: function () {
        this.levels.step = 1;
        this.coins.step = 1;
        let line_step = 1;
        let level_step = 1;
        let coin_step = 1;
        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];
        let betAmount = line_value * level_value * coin_value;
        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
        this.tween({
            to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
        }, 'coin progress back');
        this.tween({
            to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
        }, 'level progress back');
        this.setStatusControlBar(['level bar down', 'coin bar down'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['level bar up', 'coin bar up'], this.const.STATUS_TYPE.NORMAL);
        this.coinup_state = false;
        this.levelup_state = false;
    },

    buttonHandleStartButton: function (container, isAuto = false) {
        if (isAuto === false) {
            if (this.credits.value < this.bet.amount)
                return;

            MRAID.markMeaningfulInteraction();

            if (this.state !== 'ready') return;

            let rand_sound_idx = _.random(1, 16);
            this.playSound("spinButtonClick" + rand_sound_idx, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

            this.spin();

        } else {
            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this.refreshAutoItemBack();
                    this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.DISABLED);
                    this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.DISABLED);
                    this['autoamount text'].visible = true;
                    this['auto start button text'].text = 'STOP';
                    this.spin();
                }
            }
        }
        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function (container) {
        this.state = 'ready';
        this['Bonus freespin intro container'].visible = false;
        this['BG_fs_squizzed'].visible = true;
        this['control panel container wrapper'].visible = false;
        this['freespin control panel container wrapper'].visible = true;
        this['cheat animation container'].visible = false;
        // this['ControlPanelContainer'].visible = false;
        // this['back_fire'].visible = false;
        // this['background container wrapper'].visible = false;
        // this['free_background container wrapper'].visible = true;

        setTimeout(() => {
            this.spin();
        }, 500);
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },

    buttonHandlerNext: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 5) {
            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex++;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerPrev: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 0) {
            this.helpPageIndex = 5;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex--;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerAudioSet: function (container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode) {
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true});
            this['audio_set button'].texture = this.getTexture("btn_speaker_on");
        } else {
            this.backSound.stop();
            this['audio_set button'].texture = this.getTexture("btn_speaker_off");
        }
    },

    buttonHandlerClose: function (container) {
        this.closeGame();
    },

    buttonHandlePaytable: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.refreshHelpPage(this.helpPageIndex);
        this.refreshHelpIndicator(this.helpPageIndex);
        this['InfoContainer'].visible = true;
    },

    returnToOrginalFromHelp: function () {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
    },

    setBetAmountValues: function (line_step, level_step, coin_step) {

        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];

        let betAmount = line_value * level_value * coin_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            this.setMinbet();
            return false;
        }

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits bar', this.credits.drawed.toString());
        this.animFieldPoints('level bar', this.levels.value);
        this.animFieldPoints('coin bar', this.coins.value);
        this.animFieldPoints('win bar', this.server_win_amount.drawed);
        this.animFieldPoints('betamount', this.levels.value * this.line_value_list[0]);
        this.animFieldPoints('bet bar', this.bet.amount.toString());
        this.animFieldPoints('total_bet bar', this.bet.amount.toString());

        if (this.auto_mode) {
            this.animFieldPoints('autoamount', this.current_auto_amount);
        }

        if (this.auto_mode === false) {
            this['start button'].visible = true;
        } else {
            this['start button'].visible = true;
        }
    },

    selectRandomChest: function(name, type) {
        let names = ['cheat spine 1', 'cheat spine 3', 'cheat spine 5'];
        let textures = ['free_spins.png', 'coin_win.png', 'bonus_game_icon.png'];
        let j = 0;
        for(let i = 0 ; i < names.length; i++) {
            if(names[i] === name) {
                this[name].skeleton.setSlotsToSetupPose();
                this[name].hackTextureBySlotName('feature_icon', this.getTexture(textures[type]));
                this[name].state.setAnimation(0, 'win', false);
            } else {
                this[names[i]].skeleton.setSlotsToSetupPose();
                if(j === type) j++;
                this[names[i]].hackTextureBySlotName('feature_icon', this.getTexture(textures[j]));
                j++;
                setTimeout(() => {
                    this[names[i]].state.setAnimation(0, 'nowin', false);
                }, 2000);
            }
        }
        setTimeout(() => {
            if(type === 0) {
                this.tween({
                    set: [['visible', 1], ['alpha', 0], ['scale', 1.6]],
                    to: [['alpha', 1, 500], ['scale', 1.5, 2000]]
                }, 'Bonus freespin intro container');
                this['cheat spine 1'].status = 'ready';
                this['cheat spine 3'].status = 'ready';
                this['cheat spine 5'].status = 'ready';
            }
        }, 7000);
    },

    removeCellMatrix: function (matrix, card_count) {
        for (var i = 0; i < 3; i++) {
            for (var j = card_count; j < 5; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    },

    exchangeMatrix: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name;
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].linePosIdx + 1;
            card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            pay_line = this.removeCellMatrix(pay_line, serverData[k].cardCount);
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                    }
                }
            }
            windata.push(pay_line);
            windata.push(pos_array);
            windata.push("symbol_name");
            windata.push(card_count);
            windata.push(linePosIdx);
            windata.push(serverData[k].win);
            windata.push(serverData[k].direction);
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function () {
        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'overlay', () => {
            this['overlay'].visible = false;
        });

        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'bonus container', () => {
            this['bonus container'].visible = false;
        });
    },

    apiRequest: function (options) {
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });

        return xhr;
    },

    getCashInfo: function () {
        var options = {
            endpoint: 'user_balance',
            params: [
                {
                    key: 'verify_code',
                    value: this.session_id
                },
                {
                    key: 'game_id',
                    value: this.game_id
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerData: function () {

        var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[2,0,2],[2,2,5],[3,2,2],[4,2,0],[1,1,2]],\"arrRetVal\":[{\"retType\":7,\"wildReelAry\":[4,6]},{\"retType\":0,\"win\":3000,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1},{\"retType\":0,\"win\":1400,\"linePosIdx\":6,\"cardCount\":3,\"direction\":1}],\"betAmount\":200,\"winAmount\":4400,\"balance\":6058206.7}}";
        // var response = '{"error":"0","response":{"initCards":[[3,7,4],[6,5,3],[10,5,4],[6,2,3],[4,7,7]],"arrRetVal":[{"retType":3,"win":15,"linePosIdx":10,"cardCount":4}],"betAmount":20,"winAmount":15,"balance":10015}}';
        var response = {"error":"0","response":{"initCards":[[4,7,9],[6,9,6],[2,9,8],[1,7,7],[0,8,8]],"arrRetVal":[{"retType":0,"win":2,"linePosIdx":11,"cardCount":3},{"retType":0,"win":2,"linePosIdx":19,"cardCount":3}],"betAmount":20,"winAmount":4,"balance":41698}};
        // var response = '{"error":"0","response":{"initCards":[[3,4,7],[5,0,4],[8,5,9],[1,4,10],[5,3,11]],"arrRetVal":[{"retType":7,"wildReelAry":[11]}],"betAmount":20,"winAmount":0,"balance":41060}}';
        // var response = '{"error":"0","response":{"initCards":[[11,8,2],[9,10,10],[6,5,6],[4,2,6],[6,5,8]],"arrRetVal":[{"retType":7,"wildReelAry":[4,5]}],"betAmount":20,"winAmount":0,"balance":41020}}';

        var response = {"error":"0","response":{"valid":1,"initCards":[[11,1,7],[0,11,2],[1,3,11],[8,9,5],[5,8,3]],
                "arrRetVal":[
                    {"retType":4,"arrMatchedCardsXPos":[0,1,2],
                        "arrMatchedCardsYPos":[0,1,2],"win":5,
                        "count": 10
                    }
                ],
                "betAmount":30,"originalBetAmount":30,"winAmount":32,"winType":0, "balance":13000}};
        return response;
    },

    getInitData: function () {
        var options = {
            endpoint: 'game_info',
            params: [
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            async: false,
            type: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerCardsInfo: function (bet, isfreespin) {

        var options = {
            endpoint: 'play_game',
            params: [
                {
                    key: 'lines',
                    value: 0
                },
                {
                    key: 'bet',
                    value: this.levels.step - 1
                },
                {
                    key: 'denom',
                    value: this.coins.step - 1
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'isfreespin',
                    value: isfreespin
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'initbalance',
                    value: this.credits.value
                },
                {
                    key: 'play_for_fun',
                    value: 0
                }
            ]
        };

        if (isfreespin === true) {
            options.params.push({
                key: 'wildReelAry',
                value: this.wildReelArray
            })
        }
        return this.apiRequest(options);
    },

    sendSignalToSite: function () {
        var options = {
            endpoint: 'game_ping',
            params: [{
                key: 'session_id',
                value: this.gamesession_id
            }]
        };
        return this.apiRequest(options);
    },

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    },

    /*-------------------New generated methods by Jenson only for Fairytale-------------------*/
    setStatusControlBar: function (names, status) {
        let bar_names = ['start button bar', 'maxbet button bar', 'auto start button bar', 'coin bar up container', 'coin bar down container', 'level bar down container', 'level bar up container', 'refresh start button bar'];
        let button_names = ['start button', 'maxbet button', 'auto start button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up', 'refresh start button'];
        for (let i = 0; i < bar_names.length; i++) {
            if (names.includes(button_names[i])) {
                this[bar_names[i]].visible = true;
                if (status === this.const.STATUS_TYPE.DISABLED) {
                    this[button_names[i]].visible = false;
                    this[button_names[i] + ' disabled'].alpha = 0.5;
                    this[button_names[i] + ' disabled'].visible = true;
                } else if (status === this.const.STATUS_TYPE.INVISIBLE) {
                    this[bar_names[i]].visible = false;
                } else if (status === this.const.STATUS_TYPE.NORMAL) {
                    this[button_names[i]].visible = true;
                    this[button_names[i] + ' disabled'].alpha = 0;
                    this[button_names[i] + ' disabled'].visible = false;
                } else if (status === this.const.STATUS_TYPE.VISIBLE) {
                    this[bar_names[i]].visible = true;
                }
            }
        }
    },

    refreshCoinBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.coin_value_list.length:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    refreshLevelBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.level_value_list.length:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    showalllines: function () {
        for (let i = 0; i < 20; i++) {
            this['line ' + (i + 1)].alpha = 1;
        }
    },

    hidealllines: function () {
        for (let i = 0; i < 20; i++) {
            this['line ' + (i + 1)].alpha = 0;
        }
    },

    wildAnimation: function (wildReelAry) {
        this.isfreespin = true;
        this.wildhighlightSprites = [];
        for (let i = 0; i < wildReelAry.length; i++) {
            let x_pos = Math.floor(wildReelAry[i] / 3);
            let y_pos = (2 - wildReelAry[i] % 3);
            this.wildhighlightSprites.push(this.reels[x_pos].wildHighlight.children[this.ROWS_COUNT + 1 + y_pos].children[0].params.name.replace('crisp', 'highlight'));
        }
        this.tween({
            name: 'win-animation',
            to: [
                ['alpha', 1, 300],
                ['visible', true]
            ]
        }, this.wildhighlightSprites)
    },

    hideWildanimation: function () {

        this.tween({
            name: 'win-animation',
            to: [
                ['alpha', 0, 300],
                ['visible', false]
            ]
        }, this.wildhighlightSprites)
        this.isfreespin = false;
    },

    hideWinanimation: function () {
        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();
        this.passiveTweens.hide();
        this.passiveTweens.hideQuick();
        this.flashTweens.hide();
        this.flashTweens.hideQuick();
    },

    startHillAnimation: function () {
        this.tween({
            name: 'hill-animation',
            to: [
                ['rotation', this['hill container'].rotation - 1 / 180 * Math.PI, 1000],
            ],
        }, 'hill container');
        this.hill_interval = setInterval(() => {
            this.tween({
                name: 'hill-animation',
                to: [
                    ['rotation', this['hill container'].rotation - 1 / 180 * Math.PI, 1000],
                ],
            }, 'hill container');
        }, 1000);
    },

    stopHillAnimation: function () {
        clearInterval(this.hill_interval);
    },

    starRabbitAnimation: function () {
        this.rabbit_interval = setInterval(() => {
            if (this['land_front 1'].x > -590) {
                this.tween({
                    name: 'rabbit-animation',
                    to: [
                        'x', this['land_front 1'].x - 1, 100
                    ]
                }, 'land_front 1');
                this.tween({
                    name: 'rabbit-animation',
                    to: [
                        'x', this['land_front 2'].x - 1, 100
                    ]
                }, 'land_front 2');
            } else {
                this['land_front 1'].x = 0;
                this['land_front 2'].x = 590;
            }
        }, 100);
    },

    stopRabbitAnimation: function () {
        clearInterval(this.rabbit_interval);
    },

    startFlashAnimation: function (winData) {
        let line_pos_array = [];
        for (let i = 0; i < winData.winLines.length; i++) {
            let lineData = winData.winLines[i];
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                for (let j = 0; j < this.ROWS_COUNT; j++) {
                    if ((lineData[0][j][i] !== 0)) {
                        line_pos_array.push(this.spark_pos_array[j][i]);
                    }
                }
            }
        }

        // this.starTweenAnimationSpark(line_pos_array);
    },

    starTweenAnimationSpark: function (pos_array) {
        let tween = {
            set: [
                ['x', pos_array[0][0]],
                ['y', pos_array[0][1]],
                ['visible', true]
            ],
            to: [
                ['x', pos_array[1][0], 250, 0, Power1.easeOut],
                ['y', pos_array[1][1], 250, 0, Power1.easeOut],
            ],
            next: {
                to: [
                    ['x', pos_array[2][0], 250, 0, Power1.easeOut],
                    ['y', pos_array[2][1], 250, 0, Power1.easeOut],
                ],
            }
        };
        if (pos_array.length === 4) {
            tween.next.next = {
                to: [
                    ['x', pos_array[3][0], 250, 0, Power1.easeOut],
                    ['y', pos_array[3][1], 250, 0, Power1.easeOut],
                ],
            };
        } else if (pos_array.length === 5) {
            tween.next.next = {
                to: [
                    ['x', pos_array[3][0], 250, 0, Power1.easeOut],
                    ['y', pos_array[3][1], 250, 0, Power1.easeOut],
                ],
            };
            tween.next.next.next = {
                to: [
                    ['x', pos_array[4][0], 250, 0, Power1.easeOut],
                    ['y', pos_array[4][1], 250, 0, Power1.easeOut],
                ],
            }
        }
        this.tween(tween, 'test animation1');
        this['test animation1'].visible = false;
    },

    boxShowingAnimation: function() {
        this['cheat animation container'].visible = true;
        this['cheat overlay background'].viisble = true;
        this['cheat spine 1'].state.setAnimation(0, 'shake0', false);
        this['cheat spine 3'].state.setAnimation(0, 'shake1', false);
        this['cheat spine 5'].state.setAnimation(0, 'shake2', false);
        setTimeout(() => {
            this['cheat spine 1'].status = 'ready';
            this['cheat spine 3'].status = 'ready';
            this['cheat spine 5'].status = 'ready';
        }, 1000);
    },

    refreshHelpPage: function (number) {
        for (let i = 0; i < 6; i++) {
            if (number !== i) {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = false;
            } else {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = true;
            }
        }
    },

    refreshHelpIndicator: function (number) {
        for (let i = 0; i < 6; i++) {
            if (number !== i) {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 1;
            } else {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 0;
            }
        }
    },

    showBigwinContainer: function(score) {
        this['bigwin content'].text = score;
        this['bigwin spine'].stateData.setMixByName('idle', 'finish', 0.2);
        this['bigwin spine'].stateData.setMixByName('finish', 'idle', 0.2);
        this['bigwin spine'].state.setAnimation(0, 'idle', true);
        this.tween({
            to: [
                ['alpha', 1, 500, 0, Power1.easeOut],
                ['visible', true, 500, 0, Power1.easeOut],
            ]
        }, 'BigwinContainer');
        setTimeout(() => {
            this.state = 'ready';
            this.hideBigwinContainer();
            if(this.auto_mode)
                this.spin();
        }, 5000);
    },

    hideBigwinContainer: function() {
        this['bigwin spine'].state.setAnimation(0, 'finish', false);
        this.tween({
            to: [
                ['alpha', 0, 500, 0, Power1.easeOut],
                ['visible', false, 500, 0, Power1.easeOut],
            ]
        }, 'BigwinContainer');
    },
    /*-------------------New generated methods by Jenson only for Fairytale-------------------*/

    interval: 0,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    base_amount: [100, 25, 7, 20, 10, 5, 10, 5, 3, 10, 5, 3, 500, 50, 10, 50, 25, 5, 8, 4, 2, 8, 4, 2, 8, 4, 2, 5, 2, 1],
    server_url: "http://localhost/pixi/cui/server.json",
    server_win_amount: {
        value: 0,
        drawed: 0
    },
    gamesession_id: "",
    session_id: 0,
    game_id: 0,
    hill_interval: null,
    rabbit_interval: null,

    api_url: "https://369.games/hosting/game/",
    // api_url: "http://localhost:80/game/",

    first_reel: false,
    second_reel: false,
    third_reel: false,

    freespin_animation: false,
    freespin_count: 0,
    isfreespin: false,
    freespin_index: 0,
    freespin_first_animation: false,
    total_freespin_amount: 0,
    freespin_end: false,
    base_sound: null,
    roll_sound: null,
    roll_sound_play: false,

    progressbar_size: 80,
    progressbar_pos: -103,

    bonus_highlights: [],
    bonus_active: [],

    wildhighlightSprites: [],

    tutorial_mode: true,

    spark_pos_array: [
        [[-520, -265], [-260, -265], [0, -265], [260, -265], [520, -265]],
        [[-520, 0], [-260, 0], [0, 0], [260, 0], [520, 0]],
        [[-520, 265], [-260, 265], [0, 265], [260, 265], [520, 265]],
    ]
});
