import React, { Component } from "react";
import { View , Text} from "react-native";

import CustomHeader from "../components/CustomHeader";
import KNNModal from "../views/KNNModal.js";
import { ScrollView } from "react-native-gesture-handler";


export default class KNN extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CustomHeader navigation={this.props.navigation} />
        <ScrollView>
        <View style={{padding:5, alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontSize:25, fontWeight: 'bold'}}>
          K-Nearest Neighbor Algorithm
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize:18, fontWeight: 'bold'}}>
          Supervised Learning :
          </Text>
          <Text>
          It is the learning where the value or result that we want to predict is within the training data (labeled data) 
          and the value which is in data that we want to study is known as Target or Dependent Variable or Response Variable.
          All the other columns in the dataset are known as the Feature or Predictor Variable or Independent Variable.
          </Text>
          <Text>

          </Text>
          <Text style={{fontSize:18}}>
          Supervised Learning is classified into two categories:
          </Text>
          <Text>1. Clarification: Here our target variable consists of the categories.</Text>
          <Text>2. Regression: Here our target variable is continuous and we usually try to find out the line of the curve.</Text>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:18, fontWeight: 'bold'}} >Project Data:</Text>
          <Text>.. _wine_dataset:</Text>
          <Text> 

          </Text>
          <Text>Wine recognition dataset</Text>
          <Text>------------------------</Text>
          <Text>
             </Text>
          <Text>**Data Set Characteristics:**</Text>
          <Text> :Number of Instances: 178 (50 in each of three classes)</Text>
          <Text>:Number of Attributes: 13 numeric, predictive attributes and the class</Text>
          <Text>:Attribute Information:</Text>
          <Text>- Alcohol</Text>
          <Text>- Malic acid</Text>
          <Text>- Ash</Text>
          <Text>- Magnesium</Text>
          <Text>- Alcalinity of ash  </Text>
          <Text>- Total phenols</Text>
          <Text>- Flavanoids</Text>
          <Text>- Nonflavanoid phenols</Text>
          <Text>- Proanthocyanins</Text>
          <Text>- Color intensity</Text>
          <Text>- Hue</Text>
          <Text>- OD280/OD315 of diluted wines</Text>
          <Text>- Proline</Text>
          <Text>

          </Text>
          <Text>This is a copy of UCI ML Wine recognition datasets.</Text>
          <Text>https://archive.ics.uci.edu/ml/machine-learning-databases/wine/wine.data</Text>
          <Text>Original Owners: </Text>
          <Text>

          </Text>
          <Text>Forina, M. et al, PARVUS - 
An Extendible Package for Data Exploration, Classification and Correlation. 
Institute of Pharmaceutical and Food Analysis and Technologies,
Via Brigata Salerno, 16147 Genoa, Italy.</Text>
        </View>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop:1, paddingBottom: 20}}>
          <KNNModal />
        </View>
        </ScrollView>
      </View>
    );
  }
}
