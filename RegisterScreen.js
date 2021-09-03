import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';


const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    const register =() => {

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
            })
        }).catch(error => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
         <StatusBar  style="light"/>
     <Image source={{uri:"data:image/jpeg;base64,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",}} 
      style={{width: 150, height: 150, }} />
        <View style={styles.inputContainer}>
       
            <Input
                placeholder="Full Name"
                autofocus
                type="text"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Password"
                type="password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            
    </View>

        <Button
            containerStyle={styles.button}
            onPress={register}
            title="Register"
            raised
        />

      
    </KeyboardAvoidingView>

            
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10
    },
    inputContainer: {
        width: 300,
    }
});


