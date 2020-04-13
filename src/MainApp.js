import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import MLLibray from "./views/MLLibray";
import LinearRegn from "./views/LinearRegn";
import KNN from "./views/KNN";
import PythonBasic from "./views/PythonBasic";

const MainNavigator = createDrawerNavigator(
  {

    PythonBasic: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="logo-python" style={{ color: '#4B8BBE' }} />
        ),
        drawerLabel: "Python Basics"
      },
      screen: PythonBasic
    },


    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-cog" style={{ color: '#4B8BBE' }} />
        ),
        drawerLabel: "ML-Library"
      },
      screen: MLLibray
    },

    ML_Topics: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-list" style={{ color: '#4B8BBE' }} />
        ),
        drawerLabel: "Linear Regeression"
      },
      screen: LinearRegn 
    },

    Projects: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-filing" style={{ color: '#4B8BBE' }} />
        ),
        drawerLabel: "K-Nearest Number"
      },
      screen: KNN
    }

  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
