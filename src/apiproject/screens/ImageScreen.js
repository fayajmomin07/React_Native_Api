import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const ImageScreen = () => {
    return (
        <ScrollView>
            {/* First Container */}
        <View>
        {/* <Text style={styles.number}>1</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'data:image/jpeg;base64,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' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQknamurkAxRNf1qUEjvLLbdJfi7SH-9zSg&s' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>


        {/* Second Container */}
        <View>
        {/* <Text style={styles.number}>2</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Third Container */}
        <View>
        {/* <Text style={styles.number}>3</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1853354/pexels-photo-1853354.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Forth Container */}
        <View>
        {/* <Text style={styles.number}>4</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'data:image/jpeg;base64,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' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Fifth Container */}

        <View>
        {/* <Text style={styles.number}>5</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/15727994/pexels-photo-15727994/free-photo-of-blonde-woman-with-goggles-wearing-silver-top.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Sixth Container */}

        <View>
        {/* <Text style={styles.number}>6</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWFSWnvfiCp1dX1PLf5P4M3igvWfCwMVpuA&s' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Seventh Container */}
        <View>
        {/* <Text style={styles.number}>7</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/3343626/pexels-photo-3343626.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Eight Container */}
        <View>
        {/* <Text style={styles.number}>8</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1739580/pexels-photo-1739580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1351881/pexels-photo-1351881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Ninth Container */}
        <View>
        {/* <Text style={styles.number}>9</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/18110329/pexels-photo-18110329/free-photo-of-cute-black-cat-on-street.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Tenth Container */}
        <View>
        {/* <Text style={styles.number}>10</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/4004463/pexels-photo-4004463.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>


        {/* Eleventh Container */}
        <View>
        {/* <Text style={styles.number}>11</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/12753701/pexels-photo-12753701.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/3739327/pexels-photo-3739327.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>


        {/* Twelv Container */}
        <View>
        {/* <Text style={styles.number}>12</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/3680319/pexels-photo-3680319.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>

        {/* Thirteen Container */}
        <View>
        {/* <Text style={styles.number}>13</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2510104/pexels-photo-2510104.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>


        {/* Fortheen Container */}
        <View>
        {/* <Text style={styles.number}>14</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2803247/pexels-photo-2803247.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>


        {/* Fifteen Container */}
        <View>
        {/* <Text style={styles.number}>15</Text> */}
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.firstImgStyle}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.imageSubContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.secindImgStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
    },
    imageSubContainer:{
        //borderWidth: responsiveHeight(0.1),
        marginVertical:responsiveHeight(1.5),
        //marginHorizontal:responsiveWidth(3),
        //width: responsiveWidth(44),
        //height: responsiveHeight(30),
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    firstImgStyle: {
        width: responsiveWidth(45),
        height: responsiveHeight(35),
        borderRadius:responsiveHeight(2),
    },
    secindImgStyle: {
        width: responsiveWidth(45),
        height: responsiveHeight(35),
        borderRadius:responsiveHeight(2),
    },
    // number:{
    //     fontSize:25,
    //     textAlign:"center",
    // },
});


export default ImageScreen;