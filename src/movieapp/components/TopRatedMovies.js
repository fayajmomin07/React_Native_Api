import { Image, FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const API_KEY = 'a0f71dfaebd9e9cf4aa2217b4b429592';
const API_URL = 'https://api.themoviedb.org/3';


const TopRatedMovies = () => {

    const navigation = useNavigation();

    const [upcomingMoviesApi, setUpcomingMoviesApi] = useState([]);

    useEffect(() => {
        const upcomingMoviesData = async () => {
            try {
                const reaponse = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
                const data = await reaponse.json();

                setUpcomingMoviesApi(data.results);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        upcomingMoviesData();
    }, []);


    const navigateToDetail = (movieId) => {
        navigation.navigate('UpcomingDetails', { movieId });
      };

    const renderUpcomingMovies = ({ item }) => {
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => navigateToDetail(item.id)}
                    style={styles.buttonContainer}
                >
                <Image
                    style={styles.poster}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                    resizeMode='contain'
                />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.upcomingTitle}>Top Rated Movies</Text>
            <FlatList
                data={upcomingMoviesApi}
                renderItem={renderUpcomingMovies}
                keyExtractor={(item) => item.id.toString()}
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginVertical:responsiveHeight(2),
        marginHorizontal:responsiveWidth(1),
    },
    upcomingTitle:{
        color:'#fff',
        fontSize:responsiveFontSize(2.3),
        marginHorizontal:responsiveWidth(5),
        marginVertical:responsiveHeight(1),
    },
    poster: {
        width: responsiveWidth(45),
        height: responsiveHeight(30),
        borderRadius:responsiveHeight(2),
    }
});


export default TopRatedMovies;