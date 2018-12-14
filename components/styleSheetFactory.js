import React, { Component } from 'react';

import {
 StyleSheet

} from 'react-native';

export default class StyleSheetFactory {
    static getSheet(length, width) {
        console.log("length is ", length + " width is", width )
        return StyleSheet.create({
            ship : {
                backgroundColor: "black",
                width:  width,
                height: length,
                margin: 6
            }
        })
    }
}
 