var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

var GameConfig = function () {
    function GameConfig() {
        _classCallCheck(this, GameConfig);
    }

    _createClass(GameConfig, null, [{
        key: "init",
        value: function init() {
            //注册Script或者Runtime引用
            var reg = Laya.ClassUtils.regClass;
        }
    }]);

    return GameConfig;
}();

exports.default = GameConfig;

GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode = "fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

},{}],2:[function(require,module,exports){
"use strict";

//创建舞台，默认背景色是黑色的
Laya.init(750, 1334);

var txt = new Laya.Text();
// 设置文本高度
txt.width = 200;
txt.height = 300;
//设置文本内容
txt.text = "HELLO";
// 对齐
txt.align = "center";
txt.valign = "middle";
//设置文本颜色
txt.color = "#FF0000";
//设置文本字体大小，单位是像素
txt.fontSize = 66;
//设置字体描边
txt.stroke = 5; //描边为5像素
txt.strokeColor = "#FFFFFF";
//设置为粗体
txt.bold = true;
// 控制文字可滚动
txt.overflow = "scroll"; //支持scroll接口
//设置文本的显示起点位置X,Y
// txt.pos(60,100);
//设置舞台背景色
Laya.stage.bgColor = '#23238E';
//将文本内容添加到舞台 
Laya.stage.addChild(txt);

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameConfig = require("./GameConfig");

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _HelloLayabox = require("./HelloLayabox");

var _HelloLayabox2 = _interopRequireDefault(_HelloLayabox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(_GameConfig2.default.width, _GameConfig2.default.height);else Laya.init(_GameConfig2.default.width, _GameConfig2.default.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = _GameConfig2.default.scaleMode;
		Laya.stage.screenMode = _GameConfig2.default.screenMode;
		Laya.stage.alignV = _GameConfig2.default.alignV;
		Laya.stage.alignH = _GameConfig2.default.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = _GameConfig2.default.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (_GameConfig2.default.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (_GameConfig2.default.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (_GameConfig2.default.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	_createClass(Main, [{
		key: "onVersionLoaded",
		value: function onVersionLoaded() {
			//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
			Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
		}
	}, {
		key: "onConfigLoaded",
		value: function onConfigLoaded() {
			//加载IDE指定的场景
			_GameConfig2.default.startScene && Laya.Scene.open(_GameConfig2.default.startScene);
		}
	}]);

	return Main;
}();
//激活启动类


new Main();

},{"./GameConfig":1,"./HelloLayabox":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9HYW1lQ29uZmlnLmpzIiwic3JjL0hlbGxvTGF5YWJveC5qcyIsInNyYy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7O0lBR3FCLFU7Ozs7Ozs7K0JBQ0g7QUFDVjtBQUNBLGdCQUFJLE1BQU0sS0FBSyxVQUFMLENBQWdCLFFBQTFCO0FBRUg7Ozs7OztrQkFMZ0IsVTs7QUFPckIsV0FBVyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsV0FBVyxTQUFYLEdBQXNCLFlBQXRCO0FBQ0EsV0FBVyxVQUFYLEdBQXdCLE1BQXhCO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLEtBQXBCO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLE1BQXBCO0FBQ0EsV0FBVyxVQUFYLEdBQXdCLEVBQXhCO0FBQ0EsV0FBVyxTQUFYLEdBQXVCLEVBQXZCO0FBQ0EsV0FBVyxLQUFYLEdBQW1CLEtBQW5CO0FBQ0EsV0FBVyxJQUFYLEdBQWtCLEtBQWxCO0FBQ0EsV0FBVyxZQUFYLEdBQTBCLEtBQTFCO0FBQ0EsV0FBVyxpQkFBWCxHQUErQixJQUEvQjs7QUFFQSxXQUFXLElBQVg7Ozs7O0FDdkJBO0FBQ0EsS0FBSyxJQUFMLENBQVUsR0FBVixFQUFlLElBQWY7O0FBRUEsSUFBSSxNQUFNLElBQUksS0FBSyxJQUFULEVBQVY7QUFDQTtBQUNBLElBQUksS0FBSixHQUFZLEdBQVo7QUFDQSxJQUFJLE1BQUosR0FBYSxHQUFiO0FBQ0E7QUFDQSxJQUFJLElBQUosR0FBVyxPQUFYO0FBQ0E7QUFDQSxJQUFJLEtBQUosR0FBWSxRQUFaO0FBQ0EsSUFBSSxNQUFKLEdBQWEsUUFBYjtBQUNBO0FBQ0EsSUFBSSxLQUFKLEdBQVksU0FBWjtBQUNBO0FBQ0EsSUFBSSxRQUFKLEdBQWUsRUFBZjtBQUNBO0FBQ0EsSUFBSSxNQUFKLEdBQWEsQ0FBYixDLENBQWU7QUFDZixJQUFJLFdBQUosR0FBa0IsU0FBbEI7QUFDQTtBQUNBLElBQUksSUFBSixHQUFXLElBQVg7QUFDQTtBQUNBLElBQUksUUFBSixHQUFlLFFBQWYsQyxDQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFNBQXJCO0FBQ0E7QUFDQSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCOzs7Ozs7O0FDNUJBOzs7O0FBQ0E7Ozs7Ozs7O0lBQ00sSTtBQUNMLGlCQUFjO0FBQUE7O0FBQ2I7QUFDQSxNQUFJLE9BQU8sUUFBUCxDQUFKLEVBQXNCLE9BQU8sSUFBUCxDQUFZLHFCQUFXLEtBQXZCLEVBQThCLHFCQUFXLE1BQXpDLEVBQXRCLEtBQ0ssS0FBSyxJQUFMLENBQVUscUJBQVcsS0FBckIsRUFBNEIscUJBQVcsTUFBdkMsRUFBK0MsS0FBSyxPQUFMLENBQS9DO0FBQ0wsT0FBSyxTQUFMLEtBQW1CLEtBQUssU0FBTCxFQUFnQixNQUFoQixFQUFuQjtBQUNBLE9BQUssWUFBTCxLQUFzQixLQUFLLFlBQUwsRUFBbUIsTUFBbkIsRUFBdEI7QUFDQSxPQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLHFCQUFXLFNBQWxDO0FBQ0EsT0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3QixxQkFBVyxVQUFuQztBQUNBLE9BQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IscUJBQVcsTUFBL0I7QUFDQSxPQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHFCQUFXLE1BQS9CO0FBQ0E7QUFDQSxPQUFLLEdBQUwsQ0FBUyxpQkFBVCxHQUE2QixxQkFBVyxpQkFBeEM7O0FBRUE7QUFDQSxNQUFJLHFCQUFXLEtBQVgsSUFBb0IsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixPQUExQixLQUFzQyxNQUE5RCxFQUFzRSxLQUFLLGdCQUFMO0FBQ3RFLE1BQUkscUJBQVcsWUFBWCxJQUEyQixLQUFLLGtCQUFMLENBQS9CLEVBQXlELEtBQUssa0JBQUwsRUFBeUIsTUFBekI7QUFDekQsTUFBSSxxQkFBVyxJQUFmLEVBQXFCLEtBQUssSUFBTCxDQUFVLElBQVY7QUFDckIsT0FBSyxnQkFBTCxHQUF3QixJQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7Ozs7b0NBRWlCO0FBQ2pCO0FBQ0EsUUFBSyxnQkFBTCxDQUFzQixNQUF0QixDQUE2QixpQkFBN0IsRUFBZ0QsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixFQUEwQixLQUFLLGNBQS9CLENBQWhEO0FBQ0E7OzttQ0FFZ0I7QUFDaEI7QUFDQSx3QkFBVyxVQUFYLElBQXlCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IscUJBQVcsVUFBM0IsQ0FBekI7QUFDQTs7Ozs7QUFFRjs7O0FBQ0EsSUFBSSxJQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/ms6jlhoxTY3JpcHTmiJbogIVSdW50aW1l5byV55SoXHJcbiAgICAgICAgbGV0IHJlZyA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy53aWR0aCA9IDY0MDtcclxuR2FtZUNvbmZpZy5oZWlnaHQgPSAxMTM2O1xyXG5HYW1lQ29uZmlnLnNjYWxlTW9kZSA9XCJmaXhlZHdpZHRoXCI7XHJcbkdhbWVDb25maWcuc2NyZWVuTW9kZSA9IFwibm9uZVwiO1xyXG5HYW1lQ29uZmlnLmFsaWduViA9IFwidG9wXCI7XHJcbkdhbWVDb25maWcuYWxpZ25IID0gXCJsZWZ0XCI7XHJcbkdhbWVDb25maWcuc3RhcnRTY2VuZSA9IFwiXCI7XHJcbkdhbWVDb25maWcuc2NlbmVSb290ID0gXCJcIjtcclxuR2FtZUNvbmZpZy5kZWJ1ZyA9IGZhbHNlO1xyXG5HYW1lQ29uZmlnLnN0YXQgPSBmYWxzZTtcclxuR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgPSBmYWxzZTtcclxuR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbiA9IHRydWU7XHJcblxyXG5HYW1lQ29uZmlnLmluaXQoKTtcclxuIiwiLy/liJvlu7roiJ7lj7DvvIzpu5jorqTog4zmma/oibLmmK/pu5HoibLnmoRcbkxheWEuaW5pdCg3NTAsIDEzMzQpO1xuXG52YXIgdHh0ID0gbmV3IExheWEuVGV4dCgpO1xuLy8g6K6+572u5paH5pys6auY5bqmXG50eHQud2lkdGggPSAyMDA7XG50eHQuaGVpZ2h0ID0gMzAwO1xuLy/orr7nva7mlofmnKzlhoXlrrlcbnR4dC50ZXh0ID0gXCJIRUxMT1wiO1xuLy8g5a+56b2QXG50eHQuYWxpZ24gPSBcImNlbnRlclwiO1xudHh0LnZhbGlnbiA9IFwibWlkZGxlXCI7XG4vL+iuvue9ruaWh+acrOminOiJslxudHh0LmNvbG9yID0gXCIjRkYwMDAwXCI7XG4vL+iuvue9ruaWh+acrOWtl+S9k+Wkp+Wwj++8jOWNleS9jeaYr+WDj+e0oFxudHh0LmZvbnRTaXplID0gNjY7XG4vL+iuvue9ruWtl+S9k+aPj+i+uVxudHh0LnN0cm9rZSA9IDU7Ly/mj4/ovrnkuLo15YOP57SgXG50eHQuc3Ryb2tlQ29sb3IgPSBcIiNGRkZGRkZcIjtcbi8v6K6+572u5Li657KX5L2TXG50eHQuYm9sZCA9IHRydWU7XG4vLyDmjqfliLbmloflrZflj6/mu5rliqhcbnR4dC5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7Ly/mlK/mjIFzY3JvbGzmjqXlj6Ncbi8v6K6+572u5paH5pys55qE5pi+56S66LW354K55L2N572uWCxZXG4vLyB0eHQucG9zKDYwLDEwMCk7XG4vL+iuvue9ruiInuWPsOiDjOaZr+iJslxuTGF5YS5zdGFnZS5iZ0NvbG9yID0gJyMyMzIzOEUnO1xuLy/lsIbmlofmnKzlhoXlrrnmt7vliqDliLDoiJ7lj7AgXG5MYXlhLnN0YWdlLmFkZENoaWxkKHR4dCk7XG5cblxuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSGVsbG8gZnJvbSBcIi4vSGVsbG9MYXlhYm94XCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHQvLyBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCkge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiJdfQ==
