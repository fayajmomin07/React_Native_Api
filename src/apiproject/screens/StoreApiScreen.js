import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const StoreApiScreen = ({navigation}) => {

    const [storeProduct, setStoreProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const URL = 'https://fakestoreapi.com/products';

        fetch(URL).then((response) => {
            return response.json();
        }).then((data) => {
            //console.log(data);

            setStoreProduct(data);
        })
    }

    return (
        <View style={{ backgroundColor: "grey" }}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={storeProduct}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}>                            
                            <View style={styles.storeContainerStyle}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Product',
                                    {
                                        ProductTitle : item.title,
                                        ProductImage : item.image,
                                        ProductDetails : item.description,
                                        ProductPrice : item.price,
                                        ProductCategory : item.category
                                    }
                                )}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.imgStyle}
                                    resizeMode='contain'
                                />
                                <Text style={styles.titleStyle}>{item.title.substring(0, 11)}</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    storeContainerStyle: {
        borderWidth:responsiveHeight(0.2),
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(2.2),
        width:responsiveWidth(70),
        height:responsiveHeight(35),
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: responsiveHeight(1),
        backgroundColor:"#fff",
        elevation:8,
    },
    imgStyle: {
        width: responsiveWidth(40),
        height: responsiveHeight(25),
        //borderRadius: responsiveHeight(15),
    },
    titleStyle: {
        fontSize: responsiveFontSize(2.9),
        textAlign:"center",
        fontWeight:"bold",
    },
});


export default StoreApiScreen;