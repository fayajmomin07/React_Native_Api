import { StyleSheet, Text, TouchableOpacity, View, Linking, Alert  } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const MediaAccount = () => {
    return (
        <View style={styles.mainMediaContainer}>
            <View style={styles.mediaTextContainer}>
                <Text style={styles.mediaText}>Follow me on social Media</Text>
            </View>

            <View style={styles.iconStyle}>
                <TouchableOpacity
                    onPress={()=>{
                        Linking.openURL('https://www.linkedin.com/in/fayaj-momin-b1b549278');
                    }}
                >
                    <AntDesign name="linkedin-square" size={45} color="blue" />
                </TouchableOpacity>


                <TouchableOpacity
                onPress={()=>{
                    Linking.openURL('https://github.com/fayajmomin07');
                }}
                >
                    <FontAwesome name="github-square" size={45} color="darkgreen" />
                </TouchableOpacity>


                <TouchableOpacity
                onPress={()=>{
                    Linking.openURL('https://www.instagram.com/fayaj_momin?gshid=OGQ5ZDc2ODk2ZA==');
                }}
                >
                    <FontAwesome5 name="instagram-square" size={45} color="red" />
                </TouchableOpacity>


                <TouchableOpacity
                onPress={()=>{
                    Linking.openURL('https://www.facebook.com/profile.php?id=61550936019131&mibextid=ZbWKwL');
                }}
                >
                    <FontAwesome name="facebook-square" size={45} color="blue" />
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() =>{
                        Alert.alert("My WhatsApp Number : 8669286973");
                    }}
                >
                    <FontAwesome5 name="whatsapp-square" size={45} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainMediaContainer: {
        marginHorizontal: responsiveWidth(2),
        marginVertical: responsiveHeight(2)
    },
    mediaText: {
        fontSize: responsiveFontSize(2.7),
        marginHorizontal: responsiveWidth(4),
        textTransform: 'uppercase',
        marginBottom: responsiveHeight(2),
        fontWeight:'500',
    },
    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default MediaAccount;