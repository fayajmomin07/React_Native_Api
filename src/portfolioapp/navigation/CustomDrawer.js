import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
      <View style={styles.mainContainer}>
          <Image 
            source={require('../assets/images/fayaj2.png')}
            style={styles.myImageStyle}
            //resizeMode='contain'
          />
        <Text style={styles.myNameStyle}>Fayaj Momin</Text>
        </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    marginVertical:responsiveHeight(1),
    //marginHorizontal:responsiveWidth(5),
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  myImageStyle:{
    width:responsiveWidth(31),
    height:responsiveHeight(15),
    borderRadius:responsiveHeight(25),
  },
  myNameStyle:{
    fontSize:responsiveFontSize(3.5),
    color:'#fff',
    textTransform:'uppercase',
    fontWeight:'bold',
    marginTop:responsiveHeight(1),

  },
});



export default CustomDrawer;


























// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SafeAreaView from 'react-native-safe-area-view';

// const CustomDrawer = (props) => {
//   return (
//     <SafeAreaProvider>
        
//         <DrawerContentScrollView {...props}>
//         <DrawerItem {...props}/>
//     </DrawerContentScrollView>
 
//     </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({});


// export default CustomDrawer;