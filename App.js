import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
// import { YellowBow } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';



const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an Event'
    }),
  },
});

export default createAppContainer( AppNavigator )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
