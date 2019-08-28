import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext } from '../context/TrackContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack(TrackContext)

    return(
        <>
        <Spacer>
            <Input 
                placeholer="Enter name" 
                value={name}
                onChangeText={changeName}
            />
        </Spacer>
        <Spacer>
        {recording
           ? <Button buttonStyle={{ borderRadius: 20 }} title="Stop Recording" onPress={stopRecording} /> 
           : <Button buttonStyle={{ borderRadius: 20 }} title="Start Recording" onPress={startRecording} />
        }
        </Spacer>
        <Spacer>
        {!recording && locations.length 
            ? <Button buttonStyle={{ borderRadius: 20 }} title="Save Recording" onPress={saveTrack} />
            : null
        }
        </Spacer>
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackForm