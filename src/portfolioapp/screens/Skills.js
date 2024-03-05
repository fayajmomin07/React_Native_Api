import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Separator = () => <View style={[
  {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
]}></View>

const Skills = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff', height: '100%' }}>
      <View>
        {/* REACT JS STYLE */}
        <View style={styles.skillContainerStyle}>
          <Text style={styles.headingStyle}>React Js [Web developmant]</Text>

          {/* First line */}
          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }
          }>

            <View style={styles.skillsubStyle}>
              <AntDesign name="HTML" size={60} color="red" />
              <Text style={styles.skillnameStyle}>HTML-5</Text>
            </View>


            <View style={styles.skillsubStyle}>
              <Fontisto name="css3" size={60} color="blue" />
              <Text style={styles.skillnameStyle}>CSS-3</Text>
            </View>


            <View style={styles.skillsubStyle}>
              <FontAwesome5 name="bootstrap" size={60} color="purple" />
              <Text style={styles.skillnameStyle}>BOOTSTRAP-5</Text>
            </View>

          </View>


          {/* Second Line */}
          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: responsiveHeight(2)
            }
          }>
            <View style={styles.skillsubStyle}>
              <FontAwesome5 name="js-square" size={60} color="yellow" />
              <Text style={styles.skillnameStyle}>JAVASCRIPT</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <MaterialCommunityIcons name="react" size={60} color="skyblue" />
              <Text style={styles.skillnameStyle}>REACT JS</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <FontAwesome6 name="node" size={60} color="green" />
              <Text style={styles.skillnameStyle}>NODE JS</Text>
            </View>

          </View>

          {/* Third Line */}
          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: responsiveHeight(3),
            }
          }>
            <View style={styles.skillsubStyle}>
              <MaterialIcons name="screenshot-monitor" size={60} color="lightblue" />
              <Text style={styles.skillnameStyle}>SINGLE PAGE APPLICATION</Text>
            </View>
          </View>

        </View>


        <Separator />

        {/* REACT NATIVE STYLE */}
        <View style={styles.skillContainerStyle}>
          <Text style={styles.headingStyle}>React Native [mobile Application developmant]</Text>


          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }
          }>
            <View style={styles.skillsubStyle}>
              <MaterialCommunityIcons name="nativescript" size={60} color="skyblue" />
              <Text style={styles.skillnameStyle}>NATIVE CORE COMPONANTS</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <Fontisto name="css3" size={60} color="blue" />
              <Text style={styles.skillnameStyle}>CSS-3</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <FontAwesome5 name="js-square" size={60} color="yellow" />
              <Text style={styles.skillnameStyle}>JAVASCRIPT</Text>
            </View>
          </View>


          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: responsiveHeight(2)
            }
          }>

            <View style={styles.skillsubStyle}>
              <FontAwesome6 name="mobile-screen-button" size={60} color="green" />
              <Text style={styles.skillnameStyle}>NATIVE NAVIGATION</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <MaterialCommunityIcons name="react" size={60} color="skyblue" />
              <Text style={styles.skillnameStyle}>REACT NATIVE</Text>
            </View>

            <View style={styles.skillsubStyle}>
              <FontAwesome6 name="node" size={60} color="purple" />
              <Text style={styles.skillnameStyle}>NODE JS</Text>
            </View>

          </View>
          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: responsiveHeight(3),
            }
          }>

            <View style={styles.skillsubStyle}>
              <Entypo name="tablet-mobile-combo" size={60} color="green" />
              <Text style={styles.skillnameStyle}>UI/UX</Text>
            </View>
          </View>

        </View>


        <Separator />
        {/* FLUTTER STYLE */}
        <View style={styles.skillContainerStyle}>
          <Text style={styles.headingStyle}>Flutter [mobile Application developmant]</Text>

          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: responsiveHeight(2)
            }
          }>

            <View style={styles.skillsubStyle}>
              <FontAwesome6 name="jsfiddle" size={60} color="skyblue" />
              <Text style={styles.skillnameStyle}>DART</Text>
            </View>


            <View style={styles.skillsubStyle}>
              <MaterialIcons name="flutter-dash" size={60} color="blue" />
              <Text style={styles.skillnameStyle}>FLUTTER</Text>
            </View>


            <View style={styles.skillsubStyle}>
              <FontAwesome6 name="mobile-screen-button" size={60} color="purple" />
              <Text style={styles.skillnameStyle}>FLUTTER NAVIGATION</Text>
            </View>

          </View>

          <View style={
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: responsiveHeight(3),
            }
          }>
            <View style={styles.skillsubStyle}>
              <Entypo name="tablet-mobile-combo" size={60} color="green" />
              <Text style={styles.skillnameStyle}>UI/UX</Text>
            </View>
          </View>


        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  skillContainerStyle: {
    marginHorizontal: responsiveWidth(1),
    //marginVertical: responsiveHeight(1.5),
  },
  headingStyle: {
    fontSize: responsiveFontSize(2.9),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginVertical: responsiveHeight(2),
  },
  skillsubStyle: {
    width: responsiveWidth(31),
    height: responsiveHeight(18),
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skillnameStyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
  },
});



export default Skills;