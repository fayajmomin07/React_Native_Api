import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieMainScreen from '../screens/MovieMainScreen';
import UpcomingDetails from '../screens/UpcomingDetails';
import { StatusBar } from 'expo-status-bar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FontAwesome } from '@expo/vector-icons';
    

    const Stack = createNativeStackNavigator();

const MovieNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Main' component={MovieMainScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'black', // Change the background color of the header
                },
                title: 'MOVIES',
                headerTintColor: 'white', 
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:responsiveFontSize(3),
                },
              }}
            />
            <Stack.Screen name='UpcomingDetails' component={UpcomingDetails}
              options={
                {
                  headerShown: false,
                }
              }
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MovieNavigation;

const styles = StyleSheet.create({});