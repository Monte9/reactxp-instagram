"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var RX = require("reactxp");
var reactxp_1 = require("reactxp");
var styles = {
    wrapper: reactxp_1.Styles.createViewStyle({
        borderRadius: 5,
        marginBottom: 5,
    }, false),
    button: reactxp_1.Styles.createViewStyle({
        padding: 19,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, false),
    text: reactxp_1.Styles.createViewStyle({
        color: 'white',
        fontSize: 16
    }, false),
    icon: reactxp_1.Styles.createViewStyle({
        marginRight: 10
    }, false),
    iconRight: reactxp_1.Styles.createViewStyle({
        marginLeft: 10
    }, false),
    small: reactxp_1.Styles.createViewStyle({
        padding: 12
    }, false),
    smallFont: reactxp_1.Styles.createViewStyle({
        fontSize: 14
    }, false),
    activityIndicatorStyle: reactxp_1.Styles.createViewStyle({
        marginHorizontal: 10,
        height: 0
    }, false)
};
module.exports = (function (_super) {
    __extends(CustomButton, _super);
    function CustomButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomButton.prototype.renderLoadingElement = function () {
        if (this.props.loading) {
            return (RX.createElement(reactxp_1.ActivityIndicator, { style: [styles.activityIndicatorStyle, activityIndicatorStyle], deferTime: 100, color: color || 'white', size: large && 'large' || 'small' }));
        }
    };
    CustomButton.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, loading = _a.loading, loadingRight = _a.loadingRight, activityIndicatorStyle = _a.activityIndicatorStyle, buttonStyle = _a.buttonStyle, borderRadius = _a.borderRadius, title = _a.title, onPress = _a.onPress, icon = _a.icon, secondary = _a.secondary, secondary2 = _a.secondary2, secondary3 = _a.secondary3, primary1 = _a.primary1, primary2 = _a.primary2, backgroundColor = _a.backgroundColor, color = _a.color, fontSize = _a.fontSize, underlayColor = _a.underlayColor, textStyle = _a.textStyle, large = _a.large, iconRight = _a.iconRight, fontWeight = _a.fontWeight, disabledStyle = _a.disabledStyle, fontFamily = _a.fontFamily, attributes = __rest(_a, ["disabled", "loading", "loadingRight", "activityIndicatorStyle", "buttonStyle", "borderRadius", "title", "onPress", "icon", "secondary", "secondary2", "secondary3", "primary1", "primary2", "backgroundColor", "color", "fontSize", "underlayColor", "textStyle", "large", "iconRight", "fontWeight", "disabledStyle", "fontFamily"]);
        return (RX.createElement(reactxp_1.Button, { style: styles.wrapper, onPress: onPress, disabled: disabled },
            RX.createElement(reactxp_1.View, { style: [
                    styles.button,
                    secondary && { backgroundColor: 'pink' },
                    secondary2 && { backgroundColor: 'yellow' },
                    secondary3 && { backgroundColor: 'green' },
                    primary1 && { backgroundColor: 'blue' },
                    primary2 && { backgroundColor: 'green' },
                    backgroundColor && { backgroundColor: 'red' },
                    borderRadius && { borderRadius: borderRadius },
                    !large && styles.small,
                    buttonStyle && buttonStyle,
                    disabled && { backgroundColor: 'grey' },
                    disabled && disabledStyle && disabledStyle
                ] },
                RX.createElement(reactxp_1.Text, { style: [
                        styles.text,
                        color && { color: color },
                        !large && styles.smallFont,
                        fontSize && { fontSize: fontSize },
                        textStyle && textStyle,
                        fontWeight && { fontWeight: fontWeight },
                        fontFamily && { fontFamily: fontFamily }
                    ] }, title))));
    };
    return CustomButton;
}(reactxp_1.Component));
//# sourceMappingURL=CustomButton.js.map