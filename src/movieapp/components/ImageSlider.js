import { Image, FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const API_KEY = 'a0f71dfaebd9e9cf4aa2217b4b429592';
const API_URL = 'https://api.themoviedb.org/3';


const ImageSlider = () => {

    const navigation = useNavigation();

    const [upcomingMoviesApi, setUpcomingMoviesApi] = useState([]);

    useEffect(() => {
        const upcomingMoviesData = async () => {
            try {
                const reaponse = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`);
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
                    resizeMode='cover'
                />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={upcomingMoviesApi}
                renderItem={renderUpcomingMovies}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                timer={5000}
                height={240}
                animation
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginVertical:responsiveHeight(2),
        marginHorizontal:responsiveWidth(3),
    },
    poster: {
        width: responsiveWidth(95),
        height: responsiveHeight(25),
        borderRadius:responsiveHeight(2),
    }
});


export default ImageSlider;