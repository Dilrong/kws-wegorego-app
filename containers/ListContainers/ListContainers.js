import React from 'react';
import { StyleSheet, Text, Image, View, Linking, StatusBar, ScrollView, Button, Platform } from 'react-native';
import { ListItem } from '../../components/';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class ListContainer extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        const { navigation } = this.props;
        const otherParam = navigation.getParam('otherParam', 'some default value');
        let Predata = JSON.stringify(otherParam);
        let data = JSON.parse(Predata)

        function _openDirections(latitude, longitude) {
            Platform.select({
                ios: () => {
                    Linking.openURL('http://maps.apple.com/maps?daddr=' + latitude + ',' + longitude);
                },
                android: () => {
                    Linking.openURL('http://maps.google.com/maps?daddr=' + latitude + ',' + longitude);
                }
            })();
        }
        return(
        <View>
            <ScrollView>
                <View style={styles.cardview}>
                    <Image style={styles.image} source={{uri:data.photo}}></Image>
                    <Text style={styles.header}>{data.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome style={styles.icon} name="map-marker" size={30} />
                        <Text style={styles.content}>{data.address}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome style={styles.icon} name="phone" size={30} />
                        <Text style={styles.content}>{data.phone}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons style={styles.icon} name="ios-time" size={30} />
                        <Text style={styles.content}>{data.time}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialIcons style={styles.icon} name="work" size={30} />
                        <Text style={styles.content}>{data.work}</Text>
                    </View>
                </View>
                <View style={styles.cardview}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons style={styles.icon} name="ios-hand" size={35}/>
                        <Text style={styles.header}>volunteer</Text>
                    </View>
                    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1, margin: 5}}/>
                    {data.volunteer.map((list, index) => (
                        <ListItem
                            key={index}
                            list={list}
                        />
                    ))}
                </View>
            </ScrollView>
            <Button
                style={styles.button} 
                title="Go visit"
                color="#F26C4F"
                onPress={() => _openDirections(data.latitude, data.longutude)}
            />
            <Button
                style={styles.button}
                title="Go back"
                color="#F26C4F"
                onPress={() => this.props.navigation.navigate('Map')}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: 5
    },
    content: {
        fontSize: 14,
        padding: 10
    },
    info: {
        fontSize: 20,
        color: '#95a5a6',
        textAlign: 'center'
    },
    cardview: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#000000',
        marginBottom: 10
    },
    icon: {
        padding: 5
    }
});