import { useState, useEffect } from 'react'
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location'
// import { PagerAndroid } from '../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-native-tab-view';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync()
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 200,
                    distanceInterval: 5,
                }, 
                callback
                )
            } catch(err) {
                setErr(err)
            }
        }

        if(shouldTrack) {
            startWatching()
        } else {
            if (subscriber) {
                subscriber.remove()
            }
            subscriber = null
        }

        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }
    }, [shouldTrack, callback])
    return [err]
}