import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { EducationData } from '../data/AchivementsData';


  const Separator = () => <View style={[
    {
      borderBottomWidth:StyleSheet.hairlineWidth,
      marginVertical:responsiveHeight(2),
    },
  ]}></View>


const Education = () => {
  return (
    <View style={{backgroundColor:'#fff'}}>
      <FlatList 
      keyExtractor={(item) => item.id}
      data={EducationData}
      renderItem={({item}) =>{
        return(
          <View>
            <View style={styles.container}>
              <Text style={styles.clgName}>{item.college}</Text>
              <Separator />
              <Text style={styles.branchName}><Text style={styles.name}>Branch : </Text> {item.branch}</Text>
              <Text style={styles.year}><Text style={styles.name}>Years : </Text>{item.year}</Text>
              <Text style={styles.per}><Text style={styles.name}>Percentage : </Text>{item.per}%</Text>
            </View>
          </View>
        );
      }}
      marginBottom={10}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:responsiveHeight(0.1),
    padding:responsiveHeight(4),
    marginHorizontal:responsiveWidth(4),
    marginVertical:responsiveHeight(2),
    backgroundColor:'#FFFFFF',
    elevation:8,
    borderRadius:responsiveHeight(2),
  },
  clgName:{
    color:"black",
    fontSize:responsiveFontSize(3.2),
    fontWeight:'bold',
    textAlign:'center',
    textTransform:'capitalize',
  },
  branchName:{
    color:"black",
    fontSize:responsiveFontSize(2.8),
    fontWeight:"bold",
    textTransform:'capitalize',
  },
  name:{
    color:"black",
    fontSize:responsiveFontSize(2.5),
    fontWeight:"bold",
    color:"grey",
    textTransform:'capitalize',
  },
  year:{
    fontSize:responsiveFontSize(2.9),
    fontWeight:"600",
    marginVertical:responsiveHeight(2)
  },
  per:{
    fontSize:responsiveFontSize(2.9),
    fontWeight:"600",
  },




  // home:{
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   position:"absolute",
  //   bottom:25,
  //   left:"28%",
  //   backgroundColor:"grey",
  //   width:200,
  //   borderRadius:10,
  // },
  // btnText:{
  //   fontSize:20,
  //   fontWeight:"bold",
  //   padding:5,
  //   textTransform:"uppercase",
  //   color:"#FFFFFF"
  // },
});


export default Education;