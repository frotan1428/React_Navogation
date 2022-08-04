import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCartScreen from './ShoppingCartScreen';
import ProductScreen from './ProductScreen';
import FaIcon from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Products' screenOptions={{
        tabBarStyle:styles.tabbar,
        tabBarLabelStyle:styles.label,
        headerShown:false
       
    }}>
     <Tab.Screen name="products" component={ProductScreen} options={{
        tabBarLabel:"products",
        tabBarIcon: ()=> <FaIcon name="layer-group" size={20}/>
      }}/>
      <Tab.Screen name="shopping-cart" component={ShoppingCartScreen} options={{
         tabBarLabel:"shopping-cart",
        tabBarIcon: ()=> <FaIcon name="shopping-cart" size={20}/>
      }}/>
    </Tab.Navigator>
  )
}

export default HomeTabsScreen

const styles = StyleSheet.create({
    tabbar:{
       height:60
    },
    label:{ 
        fontSize:15,
        marginTop:10
    }
})