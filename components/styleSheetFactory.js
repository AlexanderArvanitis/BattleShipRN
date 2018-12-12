import React, { Component } from 'react';

import {
 StyleSheet

} from 'react-native';

export default class StyleSheetFactory {
    static getSheet(shipLenght, shipWidth) {
        console.log(shipLenght , shipWidth )
        return StyleSheet.create({
            ship : {
                backgroundColor: "black",
                width:  shipWidth,
                height: shipLenght * 26,
                margin: 6
            }
        })
    }
}
