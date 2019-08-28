// import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'

import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import { FontAwesome } from '@expo/vector-icons'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const { 
        state: { recording }, 
        addLocation 
    } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)

    return (
        <View style={styles.container}>
            <Map style={styles.map}/>
            {err ? <Text>Please enable location services</Text> : null}
            <View style={styles.trackForm}>
                <TrackForm />
            </View>
        </View>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({
    container: {},
    map: {
        position: 'absolute',

    },
    trackForm: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 100,        
        zIndex: 10,
    }
})

export default withNavigationFocus(TrackCreateScreen)

{/* <SafeAreaView forceInset={{ top: 'always' }} > */}