var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Exit", "Arial", 38);
        // position the label on the center of the screen
        //helloLabel.x = size.width / 2;
        //helloLabel.y = size.height / 2 + 20;
        // add the label as a child to this layer
        // this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        var label = cc.LabelTTF.create("Main Menu", "Arial", 20);
        var menuItem = cc.MenuItemLabel.create(label, this.exitCall, this);
        var menu = cc.Menu.create(menuItem);
        menu.setPosition(0, 0);
        menuItem.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(menu, 5);
        this.scheduleOnce(this.callback, 3);

        this.menuItem = menuItem;
        menuItem.setVisible(false);
        return true;
    },
    exitCall: function () {
        console.log("ssssssss");
        ExitApi.exit();
        //https://itunes.apple.com/app/id934596429?mt=8
    },
    callback: function () {
        this.menuItem.setVisible(true);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

