// 位图的显示
(function () {
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;//舞台
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL = Laya.WebGL;

    var imgUrl1 = "../laya/assets/comp/btn_close.png";
    var imgUrl2 = "../laya/assets/comp/button.png";

    var imgUrl3 = '../laya/assets/comp/radio.png';
    var imgUrl4 = '../laya/assets/comp/tab.png';

    var ape;
    var flag = false;
    // laya.display.Sprite 搜到位图相关的api
    (function () {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        // 
        method1()
        method2()
    })();
    // 方法1
    function method1() {
        //加载图片资源，Handler.create回调函数
        Laya.loader.load([imgUrl1, imgUrl2], Handler.create(this, onAssetsLoad));
    }

    function onAssetsLoad() {
        ape = new Sprite();
        Laya.stage.addChild(ape);
        switchTexture();
        // 绑定事件
        ape.on('click', this, switchTexture)
    }
    // 切换图片
    function switchTexture() {
        var textureUrl = (flag = !flag) ? imgUrl1 : imgUrl2;
        ape.loadImage(textureUrl);
        // 设置尺寸
        ape.size(200,200)
    }

    /**
     * 方法二：使用drawTexture方法
     */
    function method2() {
        Laya.loader.load([imgUrl3, imgUrl4], Handler.create(this, onAssetsLoaded2))
        var ape2;
        var flag2 = false;
        function onAssetsLoaded2() {
            ape2 = new Sprite();
            // 添加child到舞台
            Laya.stage.addChild(ape2);
            // 起始定位
            ape2.pos(200, 200);
            // 首次渲染
            switchTexture2()
            // 点击切换
            ape2.on('click', this, switchTexture2);
        }
        function switchTexture2() {
            // 清理纹理
            ape2.graphics.clear();
            var nowUrl = (flag2 = !flag2) ? imgUrl3 : imgUrl4;
            var t2 = Laya.loader.getRes(nowUrl);
            ape2.graphics.drawTexture(t2, 0, 0,200,200);//绘制纹理。 drawTexture(url,x,y,width,height)
            // 设置交互区域
            ape2.size(200,200);
        }
    }
})();