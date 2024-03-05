import { StyleSheet} from 'react-native';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import About from '../screens/About';
import Skills from '../screens/Skills';
import AcademicProject from '../screens/AcademicProject';
import Achivements from '../screens/Achivements';
import Education from '../screens/Education';
import Experience from '../screens/Experience';
import ReactProject from '../screens/ReactProject';
import CustomDrawer from './CustomDrawer';

import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const PortfolioNavigation = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#c6cbef',
                    },
                }}
            >
                <Drawer.Screen name="Home" component={Home}
                    options={{
                        drawerLabel: 'HOME',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<Entypo name="home" size={24} color="white" />:<Entypo name="home" size={24} color="black" />
                        ),
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        }
                    }}
                />
                <Drawer.Screen name="Skills" component={Skills}
                    options={{
                        drawerLabel: 'SKILLS',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<Foundation name="social-skillshare" size={30} color="white" />:<Foundation name="social-skillshare" size={30} color="black" />
                        ),

                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        }
                    }}
                />
                {/* <Drawer.Screen name='React Project' component={ReactProject}
                    options={{
                        drawerLabel: 'REACT PROJECT',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<FontAwesome5 name="react" size={24} color="white" />:<FontAwesome5 name="react" size={24} color="black" />
                        ),
                    }}
                /> */}
                <Drawer.Screen name='Education' component={Education}
                    options={{
                        drawerLabel: 'EDUCATION',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<MaterialCommunityIcons name="book-education" size={24} color="white" />:<MaterialCommunityIcons name="book-education" size={24} color="black" />
                        ),
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        }
                    }}
                />
                <Drawer.Screen name='Achivements' component={Achivements}
                    options={{
                        drawerLabel: 'ACHIVEMENTS',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<FontAwesome6 name="child-reaching" size={30} color="white" />:<FontAwesome6 name="child-reaching" size={30} color="black" />
                        ),
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        }

                    }}
                    
                />
                
                {/* <Drawer.Screen name='Experience' component={Experience}
                    options={{
                        drawerLabel: 'EXPERIENCE',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<FontAwesome6 name="file-export" size={21} color="white" />:<FontAwesome6 name="file-export" size={21} color="black" />
                        ),
                    }}
                /> */}


                <Drawer.Screen name='AcademicProject' component={AcademicProject}
                    options={{
                        drawerLabel: 'ACADEMIC PROJECTS',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<FontAwesome5 name="project-diagram" size={18} color="white" />:<FontAwesome5 name="project-diagram" size={18} color="black" />
                        ),
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        }
                    }}
                />
                <Drawer.Screen name="About" component={About}
                    options={{
                        drawerLabel: 'ABOUT ME',
                        drawerActiveTintColor: '#fff',
                        drawerActiveBackgroundColor: 'grey',
                        drawerInactiveTintColor:'black',
                        drawerLabelStyle:{
                            fontWeight:'bold',
                            fontSize:20,
                        },
                        drawerIcon: ({ focused, size }) => (
                            focused?<AntDesign name="meho" size={24} color="white" />:<AntDesign name="meho" size={24} color="black" />
                        ),
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontSize:25,
                            textTransform:'uppercase',
                        },
                        // headerTintColor:'purple',
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({});


export default PortfolioNavigation;