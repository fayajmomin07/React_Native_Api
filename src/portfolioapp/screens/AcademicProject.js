import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { AcademicProjectsData } from '../data/AchivementsData';



const AcademicProject = () => {
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={AcademicProjectsData}
          renderItem={({ item }) => {
            return (
              <View style={styles.flatList}>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.imgContainer}>
                  <Image
                    style={styles.imgStyle}
                    source={{ uri: (item.image) }} />
                </View>

                <View style={styles.textContainer}>
                <Text style={styles.subText}>Project Details : </Text>
                  <Text style={styles.mainText}>{item.datails}</Text>



                  <Text style={styles.subText}>Project Year : </Text>
                  <Text style={styles.mainText}>{item.year}</Text>



                  <Text style={styles.subText}>Project Dates : </Text>
                  <Text style={styles.mainText}>{item.date}</Text>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  flatList: {
    borderWidth: responsiveHeight(0.1),
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    backgroundColor: '#fff',
    elevation: 8,
  },
  title: {
    textAlign: "center",
    fontSize: responsiveFontSize(3.8),
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: responsiveHeight(2),
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: 150,
    width: 200,
    margin: 10,
  },
  textContainer: {
    padding: responsiveHeight(2),
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(5),
  },
  mainText: {
    fontSize: responsiveFontSize(2.9),
    marginVertical: responsiveHeight(1),
  },
  subText: {
    fontSize: responsiveFontSize(2.5),
    color: "grey"
  },
});



export default AcademicProject;
