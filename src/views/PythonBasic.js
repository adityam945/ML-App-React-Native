import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import CustomHeader from "../components/CustomHeader";
import { FlatList, ScrollView } from "react-native-gesture-handler";


export default class PythonBasic extends Component {
  render() {
    return (
     
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CustomHeader navigation={this.props.navigation} />
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.HeadingText}>Python Programming Language</Text>
        </View>
       
        <ScrollView>
        <View style={{marginBottom: 40,}}>
        <Image
            square
            style={{
              height: 80,
              width: '90%',
              position: "absolute",
              alignSelf: "center",
              top: 50
            }}
            source={require('../views/Python.png')}
          /></View>

        <View style={{paddingLeft:8, paddingRight:4, marginVertical: 100}}>
        <Text style={{fontWeight:'bold'}}>Below are some facts about Python:</Text>
        <Text>
         1. Python is currently the most widely used multi-purpose, high-level programming language.
        </Text>
        <Text>
          2.Python allows programming in Object-Oriented and Procedural paradigms.
        </Text>
        <Text>
          3.Python programs generally are smaller than other programming languages like Java. 
          Programmers have to type relatively less and indentation requirement of the language, 
          makes them readable all the time.
        </Text>
        <Text>
          4.Python language is being used by almost all tech-giant companies like
           – Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc.
        </Text>
        <Text>
          5. The biggest strength of Python is huge collection of standard library which can be used for the following –
        </Text>
        <View style={{paddingLeft:40}}>
        <Text>
        * Machine Learning
        </Text>
        <Text>
          * GUI Applications (like Kivy, Tkinter, PyQt etc. )
        </Text>
        <Text>
        * Web frameworks like Django (used by YouTube, Instagram, Dropbox)
        </Text>
        <Text>
        * Image processing (like OpenCV, Pillow)
        </Text>
        <Text>
        * Web scraping (like Scrapy, BeautifulSoup, Selenium)
        </Text>
        <Text>
        * Test frameworks
        </Text>
        <Text>
        * Multimedia
        </Text>
        <Text>
        * Scientific computing
        </Text>
        <Text>
        * Text processing and many more..
        </Text>
        </View>

        </View>
        </ScrollView>

        
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize:25,
    fontWeight: 'bold'
  }
});