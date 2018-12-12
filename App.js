import React from 'react';
import { StyleSheet, Text, View, Dimensions,  PanResponder,
  Animated } from 'react-native';
// import Board from './components/board';
import PlayerBoard from './components/playerBoard';
import OpponentBoard from './components/opponentBoard';
import Draggable from './components/draggable';
import Heading from './components/heading';
// const DeviceWidth = Dimensions.get('window').width


export default class App extends React.Component {
  

  constructor() {
    super();
    
    this.state = {yVal : 200}
    
  }
  
  render() {
    
    return (
      
      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
      
       <View style={{height: 30, width: Dimensions.get('window').width}}></View>
        <Heading message={"Battle Cruiser Operational PVP"}/>
        <PlayerBoard />
        <OpponentBoard/>
       <View >
       
          
        </View>  
     
        
     </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCOntainer: {

  }
  
});
