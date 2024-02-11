import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Details = () => {

    const [personDetails, setPersonDetails] = useState([]);

    useEffect(() => {
        getDetails();
    }, [])


    const getDetails = () => {
        //console.warn("Get Api");
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl).then(
            (request) => {
                return request.json()
            }
        ).then(
            (data) => {
                //console.warn(data);

                setPersonDetails(data);
            }
        )
    }

    return (
        <View>
            <FlatList
                data={personDetails}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.detailsCardContainer}>
                            <View style={styles.detailsCard}>
                                <View>
                                    <Text style={styles.nameStyle}>
                                        <Text style={styles.subTextStyle}>Name : </Text>
                                        {item.name}
                                    </Text>
                                </View>


                                <View style={{
                                    marginVertical: responsiveHeight(1),
                                }}>
                                    <Text style={styles.usernameStyle}>
                                        <Text style={styles.subTextStyle}>Username :
                                        </Text> {item.username}
                                    </Text>
                                </View>

                                <View style={{
                                    marginVertical: responsiveHeight(1),
                                }}>
                                    <Text style={styles.emailStyle}>
                                        <Text style={styles.subTextStyle}>Email : </Text>
                                        {item.email}
                                    </Text>
                                </View>


                                <View style={{
                                    marginVertical: responsiveHeight(1),
                                }}>
                                    <Text style={styles.phoneStyle}><Text style={styles.subTextStyle}>Phone : </Text>{item.phone}</Text>
                                </View>

                                <View style={{
                                    marginVertical: responsiveHeight(1),
                                }}>
                                    <Text style={styles.subTextStyle}>Address</Text>
                                    <Text style={styles.addressStyle}>
                                        {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}
                                    </Text>

                                    <View style={{
                                        marginVertical: responsiveHeight(2),
                                    }}>
                                        <Text style={styles.subTextStyle}>Geo Location :</Text>
                                        <Text style={styles.geoLocationStyle}>
                                            Lat : {item.address.geo.lat} Lang : {item.address.geo.lng}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    detailsCardContainer: {
        borderWidth: responsiveHeight(0.1),
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(2.2),
        borderRadius: responsiveHeight(2),
        elevation: 10,
        backgroundColor: "#fff",
    },
    detailsCard: {
        marginVertical: responsiveHeight(3),
        marginHorizontal: responsiveWidth(2.5),
        padding: responsiveHeight(2),
    },
    nameStyle: {
        fontSize: responsiveFontSize(3.2),
        fontWeight: "bold",
    },
    usernameStyle: {
        fontSize: responsiveFontSize(2.7),
    },
    emailStyle: {
        fontSize: responsiveFontSize(2.7),
    },
    phoneStyle: {
        fontSize: responsiveFontSize(2.7),
    },
    addressStyle: {
        fontSize: responsiveFontSize(2.5),
    },
    geoLocationStyle: {
        fontSize: responsiveFontSize(2.7),
        //fontWeight:"500",
    },
    subTextStyle: {
        fontSize: responsiveFontSize(2.3),
        color: "grey",
        fontWeight: "bold",
    },
});


export default Details;