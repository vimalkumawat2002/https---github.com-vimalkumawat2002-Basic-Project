import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Books from './src/Screens/Books';
import Calendar from './src/Screens/Calendar';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (
            <MIcon name="home" size={30} />
          ),
        }} />
        <Tab.Screen name="Books" component={Books} options={{
          tabBarIcon: () => (
            <MIcon name="book-open-variant" size={30} />
          ),
        }} />
        <Tab.Screen name="Calendar" component={Calendar} options={{
          tabBarIcon: () => (
            <MIcon name="calendar" size={30} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => (
            <Ficon name="user" size={30} />
          ),
        }} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}