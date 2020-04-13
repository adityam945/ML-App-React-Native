import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import NumPy from "../../views/Home/NumPy";
import Pandas from "../../views/Home/Pandas";


const CustomTabNavigator = createMaterialTopTabNavigator(
  {
    PageA: {
      navigationOptions: {
        tabBarLabel: "Numpy",
      },
      screen: NumPy
    },
    PageB: {
      navigationOptions: {
        tabBarLabel: "Pandas"
      },
      screen: Pandas
    },     
  }
);

export default CustomTabNavigator;
