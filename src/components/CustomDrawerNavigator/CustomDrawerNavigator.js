import React from "react";
import { View, Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

import styles from "./styles";

const CustomDrawerNavigator = props => (
  <View style={[styles.container]}>
    <View>
    <Image
            square
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              alignSelf: "center",
              top: 50
            }}
            source={require('./python_logo.png')}
          />
    </View>
    <View style={{paddingTop:170}}>
    <DrawerItems
      activeBackgroundColor={"#646464"}
      activeTintColor={"#4B8BBE"}
      iconContainerStyle={styles.icons}
      {...props}
    />
    </View>
    </View>
  
  
);

export default CustomDrawerNavigator;
