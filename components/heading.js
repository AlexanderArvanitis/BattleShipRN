import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet

} from 'react-native'; 

export default class Heading extends React.Component {
    render () {
      return (
        <View >
        
          <Text style={styles.heading}>{this.props.message}</Text>
        </View>
      )
    }
  }
  Heading.propTypes = {
    message: PropTypes.string
  }
  Heading.defaultProps = {
    message: 'Heading One'
  }
  const styles = StyleSheet.create({
      heading: { 
          fontWeight: 'bold',
          fontSize: 24,
      }
  });