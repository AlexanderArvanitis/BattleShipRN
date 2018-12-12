import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions

} from 'react-native';
// import Draggable from './draggable';
const DeviceWidth = 140;

class Board extends Component {
  render() {
    return (
        // <View style={{flexDirection: 'row', backgroundColor: 'grey', width: 400, height: 340}}>
        <View style={{flexDirection: 'row'}}>
         
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
            <View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1,marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}}></View>
                <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'powderblue'}}></View>
            </View>
{/*         
        //     <View style={{} }>
        // <Draggable {...this.props} yVal={10}/>
        // <Draggable {...this.props} yVal={20}/>
        // <Draggable {...this.props} yVal={30}/>
        // <Draggable {...this.props} yVal={40}/>
        // <Draggable {...this.props} yVal={50}/>
        // </View> */}
         </View>
      

    );
  }
}

export default Board;