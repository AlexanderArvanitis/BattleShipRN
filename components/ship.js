import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,  PanResponder, 
  Animated, StyleSheet, TouchableOpacity

} from 'react-native';
import StyleSheetFactory from './styleSheetFactory';


class Ship extends Component {
 
      
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

    // this.state.pan.setValue({ x:0, y:0})
    this._val = { x:0, y:0 }
    
    // Add a listener for the delta value change
    
    this.state.pan.addListener((value) => this._val = value);
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: (e, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
       
      },
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        return gestureState.dx == 0 && gestureState.dy == 0;
      },
      // onStartShouldSetPanResponder: (e, gesture) => true,
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
        if (this.isDropArea(gesture)) {
          if(gesture.dx == 0 && gesture.dy ==0 ){ 
            let oldState = this.state.vertAlign;
            console.log("oldState is:", oldState)
            var newState = oldState == true ? false : true;
            console.log("after", newState);
            this.setState({vertAlign : newState})
            console.log("new state is:", this.state.vertAlign)
          }
          Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1000
        }).start(() =>
          this.setState({
             showDraggable: false
          })
        );
      } else {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5
     
        }).start();
      }

      
      },
     
      
    });
  }

  isDropArea = (gesture) => {
    return gesture.moveY < 400;
  }
  updateState = () => this.setState({ vertAlign: !vertAlign })
  render() {
    const panStyle = {
        transform: this.state.pan.getTranslateTransform()
       
      } 
      
      let ship = StyleSheet;
      if(this.state.vertAlign){

      
        ship = StyleSheetFactory.getSheet(this.props.yVal, this.props.xVal);
      }
      else{
        ship = StyleSheetFactory.getSheet(this.props.xVal, this.props.yVal);
      }
     
    
    return (  
      <View><Animated.View
      {...this.panResponder.panHandlers}
      style={[panStyle, ship.ship]}
    >
    </Animated.View>
    </View>
    
    )
      
      
      
}}

Ship.propTypes = {
yVal : PropTypes.number,
xVal : PropTypes.number
}
Ship.defaultProps = {
    yVal : 50,
    xVal : 50
}


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
    backgroundColor: "green",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    // position: 'absolute'
    margin: 6
  },
  square: {
    backgroundColor: "black",
    width: BOAT_SIZE * 2,
    height: BOAT_SIZE * 2,
    margin: 6
  }
});

export default Ship;