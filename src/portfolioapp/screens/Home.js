import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageSlider from '../componants/ImageSlider';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MediaAccount from '../componants/MediaAccount';

const Home = () => {
  const name = 'Fayaj Mubarak Momin';
  const education = 'BE [Mechanical Engineering]';
  return (
    <View style={styles.homeContainer}>

      <ImageSlider />


      <View style={styles.detailContainer}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.educationStyle}>{education}</Text>
      </View>

      <View style={{
        marginHorizontal:responsiveWidth(5),
        marginVertical:responsiveHeight(1),
        borderWidth:responsiveHeight(0.2),
        borderRadius:responsiveHeight(1),
      }}>
        <Text style={styles.infoStyle}>My positive attitude, work ethics, and long-term goals align with the job requirements, making me a committed and valuable asset to the company.</Text>
        <Text style={styles.infoStyle}>I have skills and passion for the IT (as a developer) industry. I am self motivated and hard working person.</Text>
      </View>


      <MediaAccount />

    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  detailContainer:{
    marginHorizontal:responsiveWidth(3),
    marginVertical:responsiveHeight(2),
  },
  nameStyle:{
    fontSize:responsiveFontSize(3.5),
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign:'center',
  },
  educationStyle:{
    fontSize:responsiveFontSize(3),
    textAlign:'center',
  },
  infoStyle:{
    fontSize:responsiveFontSize(2.3),
    textAlign:'center',
    padding:responsiveWidth(3),
    color:'grey',
    fontWeight:"bold",
  },
});


export default Home;