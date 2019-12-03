import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class Pasajes extends React.Component<Props> {

    state = {
        credito: 0,
        pasajes: null
    }

    componentDidMount() {
        console.warn(this.props.credito);
        console.warn(this.props.pasajes);
        this.setState({ pasajes: this.props.pasajes });
        this.setState({ credito: this.props.credito });
    }


    render() {
        return (
            <View>

                <ScrollView style={styles.container}>

                    <View style={styles.cuadro}>
                        <Text style={styles.saldo}>${this.state.credito}0</Text>
                    </View>

                    <Text style={styles.titulo}>Saldo</Text>

                    <Text style={styles.subtitulo}>Últimos viajes</Text>

                    <Button style={styles.boton} icon="refresh" mode="contained" onPress={() => console.log('Pressed')}>
                        Recargar
                    </Button>

                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    cuadro: {
        margin: 10,
        borderColor: "#4FC3F7",
        borderWidth: 4,
        padding: 5,
    },
    saldo: {
        fontSize: 50,
        textAlign: 'center'
    },
    titulo: {
        fontSize: 50,
        color: "#4FC3F7",
        textAlign: 'center'
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
    }
});

