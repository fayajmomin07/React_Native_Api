import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const NavigationScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:"lightgrey", height:"100%"}}>
      <ImageBackground 
        source={{uri:'https://media.istockphoto.com/id/1206970820/photo/api-application-programming-interface-concept-api-concept-with-businesswoman-using-a-tablet.jpg?s=612x612&w=0&k=20&c=0FVWXGLrniErY-XLVG-J2JPTZXL7qcg0hsQspz-GjHE='}}
        style={{ width:"100%", height:undefined, aspectRatio:1}}
        resizeMode='cover'
      >
      </ImageBackground>

      <View style={{marginTop:responsiveHeight(4)}}>
        <View style={styles.homeButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.homeButtonStyle}
        >
          <Ionicons name="home" size={30} color="white" />
          <Text style={styles.buttonText}>My Home</Text>
        </TouchableOpacity>
        </View>


<View style={styles.homeButtonContainer}> 
        <TouchableOpacity 
          onPress={() => navigation.navigate('StoreApi')}
          style={styles.homeButtonStyle}
        >
          <Ionicons name="storefront-sharp" size={30} color="white" />
          <Text style={styles.buttonText}>My Store</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.homeButtonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Details')}
          style={styles.homeButtonStyle}
        >
          <MaterialCommunityIcons name="card-account-details" size={30} color="white" />
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.homeButtonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Images')}
          style={styles.homeButtonStyle}
        >
          <Entypo name="images" size={30} color="white" />
          <Text style={styles.buttonText}>Images</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  homeButtonContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:responsiveHeight(1.5),
  },
  homeButtonStyle:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    borderWidth:responsiveHeight(0.1),
    width:responsiveScreenWidth(60),
    height:responsiveHeight(6),
    borderRadius:responsiveHeight(1),
    backgroundColor:"blue"
  },
  buttonText:{
    fontSize:responsiveFontSize(3),
    textTransform:"uppercase",
    color:"white",
    fontWeight:"bold",
  },
});



export default NavigationScreen;