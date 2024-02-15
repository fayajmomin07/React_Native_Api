import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const API_KEY = 'a0f71dfaebd9e9cf4aa2217b4b429592';
const API_URL = 'https://api.themoviedb.org/3';

const MovieHome = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);


  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      />
      <Text>{item.title}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 16,
  },
  movieContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
});


export default MovieHome;






























// import { FlatList, StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const MovieHome = () => {

//   const [topRatedData, setrTopRatedData] = useState([]);

//   useEffect(() => {
//     movieData();
//   }, []);

//   const movieData = async () => {
//     //console.warn("done");
//     const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a0f71dfaebd9e9cf4aa2217b4b429592';
//     fetch(url).then((request) => {
//       return request.json()
//     }
//     ).then(
//       (data) => {
//         //console.log(data)

//         setrTopRatedData(data);
//       }
//     )
//   }

//   return (
//     <View>
//       <Text style={{ marginTop: 30 }}>Movie Home</Text>

//       <FlatList
//       keyExtractor={(item) => item.id.toString()}
//         data={topRatedData}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Text>{item.page}</Text>
//             </View>
//           )
//         }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({});


// export default MovieHome;