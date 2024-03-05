import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import UpcomingMovies from '../components/UpcomingMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import TrendingMovies from '../components/TrendingMovies';
import ImageSlider from '../components/ImageSlider';

 
const MovieMainScreen = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'black', height:'100%'}}>
      <ImageSlider />
      <UpcomingMovies />
      <TrendingMovies />
      <TopRatedMovies />
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  headingStyle:{
    color:'#fff',
    fontSize:responsiveFontSize(2.5),
    marginHorizontal:responsiveWidth(5),
    fontWeight:'bold'
  },
});



export default MovieMainScreen;