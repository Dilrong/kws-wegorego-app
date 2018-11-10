import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CustomCallout = ({data}) => (
    <View style={styles.view}>
        <Image style={styles.image} source={{uri:data.photo}}></Image>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.info}>{data.address}</Text>
    </View>
)
const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    info: {
        fontSize: 12,
        color: '#95a5a6',
        textAlign: 'center'
    }
});
export default CustomCallout;