import RX = require('reactxp');
import {
  Styles,
  Component,
  Animated,
  Types,
  View,
  Link,
  Text
} from 'reactxp'

import CustomButton = require('./CustomButton');

export = class App extends Component<null, null> {
  private _translationValue: Animated.Value;
  private _animatedStyle: Types.AnimatedTextStyleRuleSet;

  constructor() {
    super();

    this._translationValue = new Animated.Value(-700);
    this._animatedStyle = Styles.createAnimatedTextStyle({
      transform: [
        {
          translateY: this._translationValue
        }
      ]
    });
  }

  componentDidMount() {
    let animation = Animated.timing(this._translationValue, {
        toValue: 0,
        easing: Animated.Easing.OutBack(),
        duration: 500
      }
    );

    animation.start();
    console.log("rendered")
  }

  render(): JSX.Element | null {
    return (
      <View style={ styles.container }>
        <Animated.Text style={ [styles.helloWorld, this._animatedStyle] }>
          Hello World!
        </Animated.Text>
        <Text style={ styles.welcome }>
          Welcome to ReactXP
        </Text>
        <CustomButton
          large
          title="Aye this works!"
          onPress={() => console.log("This works!")}
          disabled={false}
          buttonStyle={{borderRadius: 10}}
        />
      </View>
    );
  }
}

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }, false),
  helloWorld: Styles.createTextStyle({
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 28
  }, false),
  welcome: Styles.createTextStyle({
    fontSize: 32,
    marginBottom: 12,
    color: 'red',
    fontWeight: 'bold'
  }, false),
}
