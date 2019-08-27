import React from 'react'
import { Text, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps' // comes with Expo

const Map = () => {
    let points = [];
    for(let i = 0; i < 20; i++) {
        points.push({
            latitude: 43.6532 + i * 0.001,
            longitude: -79.3832 + i * 0.001,
        })
    }
    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 43.6532,
                longitude: -79.3832,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
        <Polyline  coordinates={points} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map