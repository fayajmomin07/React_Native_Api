import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavigationScreen from '../screens/NavigationScreen';
import StoreApiScreen from '../screens/StoreApiScreen';
import ProductDetails from '../screens/ProductDetails';
import Details from '../screens/Details';
import ImageScreen from '../screens/ImageScreen';


const Stack = createNativeStackNavigator();

const ApiNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Navigation'>
                <Stack.Screen name='Navigation' component={NavigationScreen}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='StoreApi' component={StoreApiScreen} />
                <Stack.Screen name='Product' component={ProductDetails}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen name='Details' component={Details}/>
                <Stack.Screen name='Images' component={ImageScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({});


export default ApiNavigation;