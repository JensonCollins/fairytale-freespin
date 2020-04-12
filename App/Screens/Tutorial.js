App.Tutorial = new Screen({

	Name: "Tutorial",

	Containers: [
		{
			name: 'TutorialContainer',
			scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
			scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
			childs: [
				{
					name: 'BG_squizzed',
					type: 'sprite',
					image: 'BG_squizzed',
					scale: [1920 / 1280, 1080 / 360]
				},
				{
					name: 'main spine',
					type: 'spine',
					scale: 0.75,
					spineData: "tutorial_body",
					spineAtlas: "tutorial_data",
					spineAtlasFolder: "",
					position: [0, -100],
					visible: true
				},
				{
					name: 'continue button bar',
					position: [0, 350],
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
	],

	Events: {

		'Tutorial before build': function() {

			this.updateChildParamsByName(Settings[this.Name]);

		},

		'Tutorial build': function() {
			this['main spine'].state.setAnimation(0, '2_FeatureSelect', true);
			// App.Gameplay.show();
			setTimeout(() => {
			}, 1000);
		},

		'Tutorial showed': function () {

		},

		'Tutorial resize': function() {

		},

		'Tutorial button over': function (container, e) {
			this.handleButtonOver(container, e);
		},

		'Tutorial button out': function (container, e) {
			this.handleButtonOut(container, e);
		},

		'Tutorial button up': function (container, e) {
			this.handleButtonUp(container, e);
		},

		'Tutorial button down': function (container, e) {
			this.handleButtonDown(container, e);
		},


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

		if (name === 'continue button') {
			this.buttonHandleContinue(container, name);
		}
	},

	handleButtonDown: function (container, e) {
		let nameGlow1 = container.name + ' glow';
		if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
		this[nameGlow1].tween = this.tween({
			to: ['alpha', 1, 150, 0, Power1.easeOut]
		}, nameGlow1);
	},

	buttonHandleContinue: function(container, e) {
		App.Tutorial.hide();
		App.Gameplay.show();
	}

});
