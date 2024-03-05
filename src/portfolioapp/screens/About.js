import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import MediaAccount from '../componants/MediaAccount';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.myImageContainer}>
        <Image
          source={require('../assets/images/fayaj1.png')}
          style={styles.myImage}
        />
      </View>
      <Text style={styles.myName}>Fayaj Mubarak Momin</Text>


      <View style={styles.myDetailsContainer}>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Name : </Text> Fayaj Mubarak Momin</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Email : </Text> mominfayaj2@gmail.com</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Mobile : </Text> 8669286973</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Date of Birth : </Text> 4 Sept 1996</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Gender : </Text> Male</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Marital Status : </Text> Unmarried</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Languages Known : </Text> Hindi, Enhlish, Marathi</Text>
        <Text style={styles.personalDetails}><Text style={styles.startName}>Address : </Text> At Post Mandrup Tal. Solapur dist. Solapur Maharashtra, 413221</Text>
      </View>

      <MediaAccount />
    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  myImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
  },
  myImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  myName: {
    fontSize: responsiveFontSize(3),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: responsiveHeight(2),
  },
  myDetailsContainer:{
    borderWidth:1,
    marginHorizontal:responsiveWidth(3),
    borderRadius:10,
    marginVertical:responsiveHeight(1),
    elevation:8,
    backgroundColor:'#fff',
  },
  personalDetails:{
    fontSize:responsiveFontSize(2.5),
    padding:responsiveWidth(1),
    marginHorizontal:responsiveHeight(3),
  },
  startName:{
    fontSize:responsiveFontSize(2),
    color:'grey',
    textTransform:'capitalize',
  },
});


export default About;