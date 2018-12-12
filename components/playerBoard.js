import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions

} from 'react-native';
import Board from './board';
import Draggable from './draggable';
const winWidth = Dimensions.get("window").width;

class PlayerBoard extends React.Component {
    render() {
      return (
      <View style={{flexDirection: 'row',backgroundColor: 'grey', width: Dimensions.get('window').width, height: ((Dimensions.get('window').height -30)/2)}}> 
         <Board />


          <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'} }>
            <Draggable {...this.props} yVal={2}/>
            <Draggable {...this.props} yVal={3}/>
            <Draggable {...this.props} yVal={3}/>
            {/* <Draggable {...this.props} yVal={4}/>
            <Draggable {...this.props} yVal={5}/> */}
            </View>
            
          <View style={{flex: 1, flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center'} }>
            <Draggable {...this.props} yVal={4} xVal={10}/>
            <Draggable {...this.props} yVal={5} xVal={10}/>
           
            </View>
          </View> 
    )
    }
}

export default PlayerBoard;