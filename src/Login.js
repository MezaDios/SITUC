import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import APIHandler from './api-client';

export default class LoginView extends Component {

    constructor(props) {
        global.apiHandler = new APIHandler();
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    login = () => {
        global.apiHandler.getToken(this.state.username, this.state.password)
        .then(token => {
            console.warn('Holiwis');
            //return api.getUser()
            // Actions.home();
        })
        // .then(user => api.getPayments())
        // .then(payments => console.warn(api.user))
        .catch(error => console.warn(error));
    };

    render() {
        return (
            <View style={styles.cont}>
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>SITUC</Text>

                    <Text style={styles.subtitulo}>Ingresa tus credenciales: </Text>

                    <TextInput
                        label='Correo'
                        mode={"outlined"}
                        style={styles.input}
                        onChangeText={text => {
                            this.setState({ username: text });
                        }}
                        onSubmitEditing={() => { this.passwordTextInput.focus() }}
                        returnKeyType={"next"}
                    />

                    <TextInput
                        label='Conotraseña'
                        secureTextEntry={true}
                        mode={"outlined"}
                        style={styles.input}
                        onChangeText={text => {
                            this.setState({ password: text });
                        }}
                        ref={input => { this.passwordTextInput = input }}
                        returnKeyType={"done"}
                        onSubmitEditing={this.login}
                    />

                    <Button style={styles.boton} icon="login" mode="contained" onPress={this.login}>
                        Iniciar Sesión
                    </Button>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        padding: 10,
        height: "100%",
        backgroundColor: "white",
        width: '100%'
    },
    input: {
        marginVertical: 20,
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 20,
        color: "#4FC3F7",
        textAlign: 'center'
    },
    boton: {
        marginVertical: 30,
        backgroundColor: "#4FC3F7",
        width: '80%',
        marginHorizontal: '10%'
    },
});
