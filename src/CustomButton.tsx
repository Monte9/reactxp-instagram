import RX = require('reactxp');
import {
  Component,
  View,
  Text,
  Button,
  Styles,
  ActivityIndicator,
  Types
} from 'reactxp'

export = class CustomButton extends Component<null, null> {
  renderLoadingElement() {
    if(this.props.loading) {
      return (
        <ActivityIndicator
          style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
          deferTime={100}
          color={color || 'white'}
          size={large && 'large' || 'small'}
        />
      )
    }
  }

  render(): JSX.Element | null {
    const {
      disabled,
      loading,
      loadingRight,
      activityIndicatorStyle,
      buttonStyle,
      borderRadius,
      title,
      onPress,
      icon,
      secondary,
      secondary2,
      secondary3,
      primary1,
      primary2,
      backgroundColor,
      color,
      fontSize,
      underlayColor,
      textStyle,
      large,
      iconRight,
      fontWeight,
      disabledStyle,
      fontFamily,
      ...attributes,
    } = this.props

    return (
      <Button
        style={ styles.wrapper }
        onPress={onPress}
        disabled={disabled}>
        <View
          style={[
            styles.button,
            secondary && {backgroundColor: 'pink'},
            secondary2 && {backgroundColor: 'yellow'},
            secondary3 && {backgroundColor: 'green'},
            primary1 && {backgroundColor: 'blue'},
            primary2 && {backgroundColor: 'green'},
            backgroundColor && {backgroundColor: 'red'},
            borderRadius && {borderRadius},
            !large && styles.small,
            buttonStyle && buttonStyle,
            disabled && {backgroundColor: 'grey'},
            disabled && disabledStyle && disabledStyle
          ]}>
          <Text
            style={[
              styles.text,
              color && {color},
              !large && styles.smallFont,
              fontSize && {fontSize},
              textStyle && textStyle,
              fontWeight && {fontWeight},
              fontFamily && {fontFamily}
            ]}>
            {title}
          </Text>
        </View>
      </Button>
    )
  }
};

const styles = {
  wrapper: Styles.createViewStyle({
    borderRadius: 5,
    marginBottom: 5,
  }, false),
  button: Styles.createViewStyle({
    padding: 19,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }, false),
  text: Styles.createViewStyle({
    color: 'white',
    fontSize: 16
  }, false),
  icon: Styles.createViewStyle({
    marginRight: 10
  }, false),
  iconRight: Styles.createViewStyle({
    marginLeft: 10
  }, false),
  small: Styles.createViewStyle({
    padding: 12
  }, false),
  smallFont: Styles.createViewStyle({
    fontSize: 14
  }, false),
  activityIndicatorStyle: Styles.createViewStyle({
    marginHorizontal: 10,
    height: 0
  }, false)
}
