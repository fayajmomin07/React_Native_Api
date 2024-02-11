import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ProductDetails = ({ navigation }) => {


    const detailData = useRoute().params;


    return (
        <SafeAreaView>
            <StatusBar style='auto' />
            <ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <View>
                    <Image
                        source={{ uri: detailData.ProductImage }}
                        style={styles.imgStyle}
                        resizeMode='contain'
                    />

                    <Text style={styles.titleStyle}>{detailData.ProductTitle}</Text>
                    <View style={styles.priceCategory}>
                        <Text style={styles.priceCategoryText}><Text style={styles.subTextStyle}>Price : </Text>₹{detailData.ProductPrice}</Text>
                        <Text style={styles.priceCategoryText}><Text style={styles.subTextStyle}>Category : </Text>{detailData.ProductCategory}</Text>
                    </View>

                    <View style={styles.desContainer}>
                        <Text style={styles.descriptionText}>{detailData.ProductDetails}</Text>
                    </View>
                </View>

                <View style={styles.mainbuttonContaineStyle}>
                    <View>
                        <TouchableOpacity style={styles.buttonContaineStyle}>
                            <Text style={styles.buttonStyle}>Pay ₹{detailData.ProductPrice}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContaineStyle}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Navigation')}
                        style={styles.buttonContaineStyle}
                    >
                        <Text style={styles.buttonStyle}>Home</Text>
                        <Ionicons name="home" size={21} color="white" />
                    </TouchableOpacity>
                </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.buttonContaineStyle}
                        >
                            <Ionicons name="arrow-back" size={25} color="white" />
                            <Text style={styles.buttonStyle}>Store</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    titleStyle: {
        fontSize: responsiveFontSize(3.5),
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(2),
    },
    priceCategory: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    priceCategoryText: {
        fontSize: responsiveFontSize(2.9),
        fontWeight: "500",
    },
    subTextStyle: {
        fontSize: responsiveFontSize(2),
        color: "grey",
        fontWeight: "500"
    },
    desContainer: {
        marginVertical: responsiveWidth(2),
        marginHorizontal: responsiveHeight(2.3),
    },
    descriptionText: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: "700",
        color: "grey",
    },
    mainbuttonContaineStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-evenly",
    },
    buttonContaineStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        width: responsiveWidth(28),
        height: responsiveHeight(5),
        borderWidth: responsiveHeight(0.1),
        marginVertical: responsiveHeight(5),
        marginHorizontal: responsiveWidth(3),
        backgroundColor:"skyblue",
        borderRadius:responsiveHeight(1),
    },
    buttonStyle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight:"bold",
        textTransform:"uppercase",
        color:"#fff",
    },
});


export default ProductDetails;