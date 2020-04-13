import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Pandas extends Component {
  render() {
    return( <View style={{ flex: 1, backgroundColor: "white" }} > 
    <View style={{justifyContent: "center", alignItems: 'center'}}>
      <Text style={{fontWeight:'bold', fontSize:20}}>
      Introduction to Pandas
      </Text>
      <View style={{padding:8}}>
      <Text style={{fontSize:15}}>
      Data scientists use Pandas for its following advantages:
      </Text>
      <Text>* Easily handles missing data</Text>
      <Text>* It uses Series for one-dimensional data structure and DataFrame for multi-dimensional data structure</Text>
      <Text>* It provides an efficient way to slice the data</Text>
      <Text>* It provides a flexible way to merge, concatenate or reshape the data</Text>
      <Text>* It includes a powerful time series tool to work with</Text>
      <View style={{ padding:20 }}>
      <Text style={{fontWeight:'bold', 
      fontSize:20,
      }}>importing the library:</Text>
      <Text style={{fontWeight:'bold', 
      fontSize:20,
      borderRadius: 5, 
      borderWidth: 2,
      borderColor: '#FF5722',
      color: '#fff',
      backgroundColor : '#CDDC39',
      fontSize: 20,
      textAlign: 'center',}}>import pandas as pd</Text>
      </View>
      </View>
    </View>
     </View>
    );
  }

}

