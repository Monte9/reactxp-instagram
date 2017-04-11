"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var reactxp_1 = require("reactxp");
var CustomButton = require("./CustomButton");
var styles = {
    container: reactxp_1.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }, false),
    helloWorld: reactxp_1.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }, false),
    welcome: reactxp_1.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12,
        color: 'red',
        fontWeight: 'bold'
    }, false),
};
module.exports = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this._translationValue = new reactxp_1.Animated.Value(-700);
        _this._animatedStyle = reactxp_1.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: _this._translationValue
                }
            ]
        });
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var animation = reactxp_1.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: reactxp_1.Animated.Easing.OutBack(),
            duration: 500
        });
        animation.start();
        console.log("rendered");
    };
    App.prototype.render = function () {
        return (RX.createElement(reactxp_1.View, { style: styles.container },
            RX.createElement(reactxp_1.Animated.Text, { style: [styles.helloWorld, this._animatedStyle] }, "Hello World!"),
            RX.createElement(reactxp_1.Text, { style: styles.welcome }, "Welcome to ReactXP"),
            RX.createElement(CustomButton, { large: true, title: "Aye this works!", onPress: function () { return console.log("This works!"); }, disabled: false, buttonStyle: { borderRadius: 10 } })));
    };
    return App;
}(reactxp_1.Component));
//# sourceMappingURL=App.js.map