import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions

} from 'react-native';
import Board from './board';
import Draggable from './draggable';
const winWidth = Dimensions.get("window").width;

class OpponentBoard extends React.Component {
    render() {
      return (
      <View style={{flexDirection: 'row',backgroundColor: 'grey', width: Dimensions.get('window').width, height: ((Dimensions.get('window').height -30)/2)}}> 
         <Board />


          {/* <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'} }>
            <Draggable {...this.props} yVal={10}/>
            <Draggable {...this.props} yVal={10}/>
            <Draggable {...this.props} yVal={10}/>
            <Draggable {...this.props} yVal={10}/>
            <Draggable {...this.props} yVal={10}/>
            </View> */}
          </View> 
    )
    }
}

export default OpponentBoard;