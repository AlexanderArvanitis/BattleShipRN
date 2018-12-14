import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions

} from 'react-native';
import Board from './board';
import Salvo from './salvo';

const winWidth = Dimensions.get("window").width;

class OpponentBoard extends React.Component {
    render() {
      return (
      <View style={{flexDirection: 'row',backgroundColor: 'grey', width: Dimensions.get('window').width, height: ((Dimensions.get('window').height -30)/2)}}> 
         <Board />
         <Salvo/>
      </View> 
    )
    }
}

export default OpponentBoard;