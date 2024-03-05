import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AchivementsData } from '../data/AchivementsData';


const Seperator = () => <View style={
  {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: responsiveHeight(2),
  }
}></View>


const Achivements = () => {

  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={AchivementsData}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: "#FFFFFF" }}>
              <View style={styles.mainContainer}>
                <View style={styles.container}>
                  <Text style={styles.college}>{item.college}</Text>
                  <Seperator />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  
                  
                  <Seperator />


                  <View>
                    <Text style={[styles.role, styles.commonStyle]}><Text style={styles.subText}>Role : </Text>{item.role}</Text>
                    <Text style={[styles.date, styles.commonStyle]}><Text style={styles.subText}>Date : </Text>{item.date}</Text>
                    <Text style={[styles.rank, styles.commonStyle]}><Text style={styles.subText}>Position : </Text>{item.rank}</Text>
                  </View>
                </View>
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
  mainContainer: {
    //borderWidth:1,
    marginVertical: responsiveHeight(2),
  },
  container: {
    padding: responsiveHeight(2.5),
    marginHorizontal: responsiveWidth(4),
    borderWidth: 1,
    borderRadius: responsiveHeight(2),
    elevation: 8,
    backgroundColor: '#fff'
  },
  college: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
  },
  title: {
    fontSize: responsiveFontSize(3.2),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontStyle:'italic',
  },
  subTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "800",
    textAlign: "center",
    color: "grey",
    textTransform: "capitalize",
  },
  commonStyle: {
    marginHorizontal: 20,
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.7),
    textTransform: "capitalize",
  },
  subText: {
    color: "darkgrey",
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold'
  },
});



export default Achivements;