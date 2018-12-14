import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions

} from 'react-native';
import Board from './board';
import Ship from './ship';
const winWidth = Dimensions.get("window").width;

class PlayerBoard extends React.Component {
    render() {
      return (
      <View style={{flexDirection: 'row',backgroundColor: 'grey', width: Dimensions.get('window').width, height: ((Dimensions.get('window').height -30)/2)}}> 
         <Board />
         <View style={{flexDirection: 'column', alignContent: 'center'}}> 
            <View style={{margin: 2, position: 'absolute'}}> 
              <Ship {...this.props} yVal={52} xVal={20}/>
            </View>
            <View style={{margin: 2, position: 'absolute'}}>
              <Ship {...this.props} yVal={78} xVal={20}/>
            </View>
            <View style={{margin: 2, position: 'absolute'}}> 
              <Ship {...this.props} yVal={78} xVal={20}/>
            </View> 
            <View style={{margin: 2, position: 'absolute'}}>
              <Ship {...this.props} yVal={104} xVal={20}/>
            </View>
            <View style={{margin: 2, position: 'absolute'}}>
              <Ship {...this.props} yVal={130} xVal={20}/>
            </View>
            </View> 
          </View> 
    )
    }
} 
// style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}
export default PlayerBoard;