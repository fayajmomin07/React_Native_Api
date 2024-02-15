import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';


const API_KEY = 'a0f71dfaebd9e9cf4aa2217b4b429592';
const API_URL = 'https://api.themoviedb.org/3';


const UpcomingDetails = ({ route, navigation }) => {

    const { movieId } = route.params;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details: ', error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }


    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <View>
                <StatusBar style='light' />
                <ImageBackground
                    style={styles.moviePosterStyle}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` }}
                >
                    <View style={{
                        position:'absolute',
                        top:25,
                        left:15,
                    }}>
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            style={{
                                backgroundColor:'#fff',
                                borderRadius:30,
                            }}
                        >
                            <Ionicons name="arrow-back-circle" size={50} color="black" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Text style={[styles.titleStyle, styles.textColor]}><Text style={styles.subTextStyle}>Title: </Text>{movieDetails.title}</Text>
                

<View>
<Text style={{
    color: '#fff',
    fontSize:responsiveFontSize(2),
    textTransform:"capitalize",
    marginHorizontal:responsiveWidth(5),
    fontWeight:'normal',
}}>Overview: </Text>
<Text style={{
    color:'#fff',
    marginHorizontal:responsiveWidth(5),
    fontSize:responsiveFontSize(2.3),
}}>{movieDetails.overview}</Text>
</View>

                <Text style={[styles.dateStyle, styles.textColor]}><Text style={styles.subTextStyle}>Release Date: </Text>{movieDetails.release_date}</Text>
                <Text style={[styles.genresStyle, styles.textColor]}><Text style={styles.subTextStyle}>Genres: </Text>{movieDetails.genres.map(genre => genre.name).join(', ')}</Text>
                <Text style={[styles.languageStyle, styles.textColor]}><Text style={styles.subTextStyle}>Language: </Text>{movieDetails.original_language}</Text>
                <Text style={[styles.popularityStyle, styles.textColor]}><Text style={styles.subTextStyle}>Popularity: </Text>{movieDetails.popularity}</Text>
                <View style={styles.voteContainer}>
                    <Text style={[styles.averageStyle, styles.textColor]}><Text style={styles.subTextStyle}>Average vote: </Text>{movieDetails.vote_average}</Text>
                    <Text style={[styles.voteStyle, styles.textColor]}><Text style={styles.subTextStyle}>Total vote: </Text>{movieDetails.vote_count}</Text>
                </View>
                

                <View>
                <Text style={{
    color: '#fff',
    fontSize:responsiveFontSize(2),
    textTransform:"capitalize",
    marginHorizontal:responsiveWidth(5),
    fontWeight:'normal',
}}>Cast: </Text>
                <Text style={{
    color:'grey',
    marginHorizontal:responsiveWidth(5),
    fontSize:responsiveFontSize(2.3),
}}>{movieDetails.credits.cast.map(actor => actor.name).join(', ')}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    moviePosterStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    titleStyle:{
        fontSize:responsiveFontSize(3.2),
        fontWeight:"bold",
        textTransform:"uppercase",
        marginHorizontal:responsiveWidth(3),
        marginVertical:responsiveHeight(1),
        padding:responsiveWidth(3),
    },
    dateStyle:{
        fontSize:responsiveFontSize(2.5),
    },
    genresStyle:{
        fontSize:responsiveFontSize(2.5),
    },
    languageStyle:{
        fontSize:responsiveFontSize(2.5),
    },
    popularityStyle:{
        fontSize:responsiveFontSize(2.5),
    },
    voteContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    averageStyle:{
        fontSize:responsiveFontSize(2.5),
    },
    voteStyle:{
        fontSize:responsiveFontSize(2.5),
    },
   
    textColor: {
        color: '#fff',
        padding:responsiveWidth(2.2),
        marginHorizontal:responsiveWidth(5),
        marginVertical:responsiveHeight(1),
    },
    subTextStyle:{
        color: '#fff',
        fontSize:responsiveFontSize(2.3),
        textTransform:"capitalize",
        fontWeight:'normal',
    },
});


export default UpcomingDetails;