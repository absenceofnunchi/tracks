import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps' // comes with Expo
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { 
        state: { currentLocation, locations }
    } = useContext(LocationContext)

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200}} />
    }

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
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
            >
                <Polyline 
                    coordinates={locations.map(loc => loc.coords)} 
                    strokeWidth={10}

                />
                <Circle
                    center={currentLocation.coords}
                    radius={125}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
            </MapView>            
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get("window").height,
    }
})

export default Map