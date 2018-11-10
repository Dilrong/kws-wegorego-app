import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { MapView } from 'expo';
import {CustomCallout} from '../../components/index';
import { TextInput } from 'react-native-gesture-handler';

export default class MapContainers extends React.Component{
    static navigationOptions = {
        header: null,
    };

    state = {
        data: [],
    }

    componentDidMount(){
        this._getMapData();
    }

    _getMapData = async() => {
        const data = await this._callMapData();
        this.setState({
          data: data,
        })
    }
    
    _callMapData = async() => {
        return fetch('http://13.125.238.235:8083/api/kws/v1/location')
        .then(request => request.json())
        .catch(err => console.log(err))
    }

    _selectMarker(category){
        switch(category){
            case 1:
                return require('./Government-marker.png');
            case 2:
                return require('./Police-marker.png');
            case 3:
                return require('./hospital-marker.png');
        }
    }

    render(){
        return(
            <MapView
                style={styles.mapview}
                showsMyLocationButton={true}
                showsUserLocation
                initialRegion={{
                    latitude: 37.548176,
                    longitude: 127.061219,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
            >
            <TextInput
                style={styles.input}
                placeholder="Search places"
            />
            {this.state.data.map((marker, index) => (
                <MapView.Marker 
                    key={index}
                    image={this._selectMarker(marker.category_num)}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longutude
                    }}           
                >
                <MapView.Callout onPress={() => this.props.navigation.navigate('List', {otherParam: marker})}>
                    <CustomCallout data={marker}/>
                    </MapView.Callout>
                    </MapView.Marker>
            ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    mapview: {
        flex: 1, 
        ...StyleSheet.absoluteFillObject,
        marginTop: StatusBar.currentHeight
    },
    input: {
        padding: 10,
        margin: 10,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
});