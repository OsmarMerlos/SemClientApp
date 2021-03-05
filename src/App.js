/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'; //son librerias
import {NavigationContainer} from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icons from 'react-native-vector-icons/AntDesign';

import color from './layout/color.js';
import addhomework from './views/addhome.js';
import listhomework from './views/listhome.js';

const Tab = createBottomTabNavigator(); 

class App extends React.Component{
  constructor(props){
    super(props);
  } 

  adhomework(){
    return< addhomework/>;
  }
  lishomework(){ 
    return < listhomework/>;
  }
  render(){
    return (
    <NavigationContainer>
      <Tab.Navigator   
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
            case 'Add Homework': {
              if (focused) {
                return ( <Icons name="rightcircle" size={22} color={color.opt2.threecolor}/>);
              }else{
                return ( <Icons name="rightcircle"  size={22} color={color.opt2.fourcolor}/>);
              }
            }
            case 'Homework list':{
              if (focused) {
                return ( <Icons name="rightcircle" size={22} color={color.opt1.onecolor}/> );
              }else{
                return (<Icons name="rightcircle" size={22} color={color.opt1.twocolor} />);
              }
            }
          }
        },   
        })}>

    <Tab.Screen name="Add new Homework" component={this.adhomework} />
       <Tab.Screen name="list Homeworks" component={this.lishomework} />
       </Tab.Navigator>
    </NavigationContainer>

    );   
  }
}

export default App;
