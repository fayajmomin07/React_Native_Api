import { Image, FlatList, StyleSheet, Text, View, ActivityIndicator  } from 'react-native';
import React, {useState} from 'react';
import { SliderBox } from "react-native-image-slider-box";


const localImages = [
  require('../assets/images/fayaj3.png'),
  require('../assets/images/fayaj1.png'),
  require('../assets/images/vvp.jpg'),
  require('../assets/images/vvp2.jpg'),
  require('../assets/images/fayaj2.png'),
  require('../assets/images/vvp3.jpg'),
  require('../assets/images/vvp garden.jpg'),
];

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <SliderBox 
        images={localImages} 
        sliderBoxHeight={280}
        dotColor="red"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  },
});


export default ImageSlider;