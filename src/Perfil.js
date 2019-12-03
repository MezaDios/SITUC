import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

export default class Perfil extends React.Component<Props> {

    state = {
        usuario: null
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
        textAlign: 'center'
    },
    boton: {
        backgroundColor: "#4FC3F7",
        width: '80%',
        marginHorizontal: '10%'
    },
});

