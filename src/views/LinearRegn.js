import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import CustomHeader from "../components/CustomHeader";
import ModalLinear from "../views/ModalLinear.js";
import { ScrollView } from "react-native-gesture-handler";

export default class LinearRegn extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CustomHeader navigation={this.props.navigation} />
        <ScrollView>
        <View style={{padding:10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold',
    fontSize: 30}} >ML | Linear Regression</Text>
        </View>
        <View style={{padding:10}}>
        <Text>Linear Regression is a machine learning algorithm based on supervised learning.
           It performs a regression task. Regression models a target prediction value based on
            independent variables. It is mostly used for finding out the relationship between 
            variables and forecasting. Different regression models differ based on – the kind 
            of relationship between dependent and independent variables, they are considering 
            and the number of independent variables being used.</Text>
            <Text>
            Linear regression performs the task to predict a dependent variable value (y) based
             on a given independent variable (x). So, this regression technique finds out a linear
             relationship between x (input) and y(output). Hence, the name is Linear Regression.
             In the figure above, X (input) is the work experience and Y (output) is the salary of a person. 
            The regression line is the best fit line for our model.
            </Text>
            <Text style={{fontWeight: 'bold',
    fontSize: 18}} >
            Hypothesis function for Linear Regression :
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}} >
            Y = Β0 + Β1X
            </Text>
            </View>
            <View style={{padding:10}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Project Data:
            </Text>
            <Text>.. _boston_dataset:</Text>
            <Text>Boston house prices dataset</Text>
            <Text>**Data Set Characteristics:**</Text>
            <Text>:Number of Instances: 506 </Text>
            <Text></Text><Text></Text>
            <Text>:Number of Attributes: 13 numeric/categorical predictive. Median Value (attribute 14) is usually the target.</Text>
            <Text></Text>
            <Text>This is a copy of UCI ML housing dataset.</Text>
            <Text>https://archive.ics.uci.edu/ml/machine-learning-databases/housing/</Text>
            <Text>This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University.</Text>
            <Text>The Boston house-price data of Harrison, D. and Rubinfeld, D.L. 'Hedonic
prices and the demand for clean air', J. Environ. Economics & Management,
vol.5, 81-102, 1978.   Used in Belsley, Kuh & Welsch, 'Regression diagnostics
...', Wiley, 1980.   N.B. Various transformations are used in the table on
pages 244-261 of the latter.</Text>
<Text></Text>
            <Text>The Boston house-price data has been used in many machine learning papers that address regression
problems.</Text>
            </View>
            </View>

        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: 3}}> 
        <ModalLinear />
        </View>
        <View style={{marginTop:10}}></View>
        </ScrollView>
      </View>
    );
  }
}


