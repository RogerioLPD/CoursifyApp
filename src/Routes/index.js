import React from "react";
import { Image } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../Components/Assets/logo.png';
import Navbar from "../Components/NavBar";

import Courses from '../Screens/CoursesFromCategories';
import Home from "../Screens/Home";
import CoursesFromCategory from "../Screens/CoursesFromCategories";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Main = createNativeStackNavigator()

export default function Router(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Home' component={Home} options={{headerLeft: () => <Image source={logo} style={{width: 175, height: 50}}/>, headerRight: () => <Navbar/>, headerBackVisible: true, headerTitleStyle: {color: 'transparent'}}}/>
                <Main.Screen name='Courses' component={Courses} options={{headerLeft: () => <Image source={logo} style={{width: 175, height: 50}}/>, headerRight: () => <Navbar/>, headerBackVisible: true, headerTitleStyle: {color: 'transparent'}}}/>
                <Main.Screen name='CoursesFromCategory' component={CoursesFromCategory} options={{headerLeft: () => <Image source={logo} style={{width: 175, height: 50}}/>, headerRight: () => <Navbar/>, headerBackVisible: true, headerLargeTitleShadowVisible: false, headerTitleStyle: {color: 'transparent'}}}/>
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}