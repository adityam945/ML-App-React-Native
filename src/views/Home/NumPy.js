import React, { Component } from "react";
import { View, Text } from "react-native";

export default class NumPy extends Component {
  render() {
    return( <View style={{ flex: 1, backgroundColor: "white" }} > 
    <View style={{justifyContent: "center", alignItems: 'center'}}>
      <Text style={{fontWeight:'bold', fontSize:20}}>
      Introduction to NumPy
      </Text>
      <View style={{padding:8}}>
      <Text>
      For example, the words in documents can be represented as the numbers 
      that encode letters in computers or even the frequency of particular words
      in a collection of documents. Digital images can be thought of as two-dimensional 
      arrays of numbers representing pixel brightness or color. Sound files can be represented 
      as one-dimensional arrays of frequency versus time. However, no matter what form our data 
      takes, in order to analyze it, our first step will be to transform it into arrays of numbers—which
       is where NumPy comes in (and pandas down the road).

       NumPy is short for Numerical Python, and it provides an efficient means of storing and operating on 
       dense data buffers in Python. Array-oriented computing in Python goes back to 1995 with the Numeric library. 
       Scientific programming in Python took off over the next 10 years, but the collections of libraries splintered. 
       The NumPy project began in 2005 as a means of bringing the Numeric and NumArray projects together around a 
       single array-based framework.
      </Text>
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
      textAlign: 'center',}}>import numpy as np</Text>
      </View>
      </View>
    </View>
     </View>
    );
  }
}

