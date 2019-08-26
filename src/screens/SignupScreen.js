import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

import Spacer from '../components/Spacer'
// import { TouchableOpacity } from '../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-native';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign Up'
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 200
    },
    link: {
        color: 'blue',
    }
})

export default SignupScreen