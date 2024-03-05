import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {
    return (

        <View style={{ backgroundColor: "#fff", height:'100%' }}>
            <View>
                <Text style={styles.headingStyle}>Api's project</Text>
            </View>
            <View style={styles.imageContainerStyle}>
                <Image
                    source={{ uri: 'https://media.licdn.com/dms/image/D4D12AQF7x5wr9Oxg4g/article-cover_image-shrink_600_2000/0/1679150442277?e=2147483647&v=beta&t=HRK9RBUoX9ny0C9JYCfA1umXSh3eSHaOf-ZuNcJxJQM' }}
                    style={styles.apiImageStyle}
                    resizeMode='contain'
                />
            </View>
            <View >
                <View style={styles.apiDescriptionContainerStyle}>
                    <Text style={styles.apiDescriptionStyle}>
                        APIs are mechanisms that enable two software components to communicate with
                        each other using a set of definitions and protocols. A set of rules and protocols that allow different software applications to communicate and exchange data seamlessly.
                    </Text>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    headingStyle: {
        fontSize: responsiveFontSize(4.5),
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: responsiveHeight(1.5),
    },
    apiImageStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        marginVertical: responsiveHeight(2),
    },
    apiDescriptionStyle: {
        fontSize: responsiveFontSize(2.7),
        marginHorizontal: responsiveHeight(2.5),
        color: "grey",
        fontWeight: "700",
        marginVertical: responsiveHeight(1.5),

    },
});


export default HomeScreen;