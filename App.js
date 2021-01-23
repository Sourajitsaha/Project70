import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'; 
// You can import from local files
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
     // <View style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
        <Appcontainer />
      //</View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
 Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./PRO+C70+Images/write.png")}
          style={{width:30, height:30}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./PRO+C70+Images/read.png")}
          style={{width:30, height:30}}
        />)
        
      }
    }
  })
}
);
const Appcontainer = createAppContainer(TabNavigator)
