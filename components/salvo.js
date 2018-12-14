import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,  PanResponder, 
  Animated, StyleSheet, TouchableOpacity

} from 'react-native';
import StyleSheetFactory from './styleSheetFactory';


class Salvo extends Component {
 
      
  constructor(props) {
    super(props);
    
    this.state = {
      vertAlign: true,
      boatSize: props.yVal,
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
        
    };
    
  }
 

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture) && this.gestureIsTap(gesture)) {
            
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 500
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } 
        // else {
        //     Animated.spring(this.state.pan, {
        //       toValue: { x: 0, y: 0 },
        //       friction: 5
         
        //     }).start();
        //   }
        }
      });
  }
 
  isDropArea(gesture) {
      console.log(gesture.moveY);
    return gesture.moveY > 430;
  }

  gestureIsTap(gesture){
    return gesture.dx == 0 && gesture.dy ==0;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}






Salvo.propTypes = {
yVal : PropTypes.number,
xVal : PropTypes.number
}
Salvo.defaultProps = {
    yVal : 50,
    xVal : 50
};



let CIRCLE_RADIUS = 10;
// console.log("props is", ...this.state)
let BOAT_SIZE = 10 ;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: "red",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    // position: 'absolute',
    margin: 6
  },
  square: {
    backgroundColor: "black",
    width: BOAT_SIZE * 2,
    height: BOAT_SIZE * 2,
    margin: 6
  }
});

export default Salvo;