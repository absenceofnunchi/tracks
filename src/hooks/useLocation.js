import { useState, useEffect } from 'react'
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location'
// import { PagerAndroid } from '../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-native-tab-view';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, 
            callback
            )
        } catch(err) {
            setErr(err)
        }
    }

    useEffect(() => {
        startWatching()
    }, [shouldTrack])
    return [err]
}