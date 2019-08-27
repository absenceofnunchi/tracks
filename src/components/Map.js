import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps' // comes with Expo
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200}} />
    }
    console.log(currentLocation)
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
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Polyline  coordinates={points} />
            <Circle
                center={currentLocation.coords}
                radius={120}
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map