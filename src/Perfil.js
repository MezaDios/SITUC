import * as React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

export default class Perfil extends React.Component<Props> {

    state = {
        usuario: {
            nombre: "",
            correo: "",
            contraseña: ""
        }
    }

    componentDidMount() {
        console.warn(this.props.usuario);
        this.setState({ usuario: this.props.usuario });
    }


    render() {
        return (
            <View>

                <ScrollView style={styles.container}>

                    <Image
                        source={require('../assets/qr.png')}
                        style={styles.img}
                        resizeMode="contain"
                    />

                    <Text style={styles.subtitulo}>Coloca el código frente al escáner para cobrar el pasaje.</Text>

                    <Text style={styles.subtitulo}>Tus datos: </Text>

                    <TextInput
                        label='Nombre'
                        value={this.state.usuario.nombre}
                        mode={"outlined"}
                        style={styles.input}
                    />

                    <TextInput
                        label='Correo'
                        value={this.state.usuario.correo}
                        mode={"outlined"}
                        style={styles.input}
                    />

                    <TextInput
                        label='Contraseña'
                        value={this.state.usuario.contraseña}
                        secureTextEntry={true}
                        mode={"outlined"}
                        style={styles.input}
                    />

                    <Button style={styles.boton} icon="pen" mode="contained" onPress={() => console.log('Pressed')}>
                        Modificar datos
                    </Button>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    img: {
        width: '70%',
        marginHorizontal: '15%'
    },
    subtitulo: {
        fontSize: 20,
        color: "#4FC3F7",
        textAlign: 'center',
        marginBottom: 20
    },
    boton: {
        marginVertical: 30,
        backgroundColor: "#4FC3F7",
        width: '80%',
        marginHorizontal: '10%'
    },
    input: {
        marginVertical: 20
    }
});

