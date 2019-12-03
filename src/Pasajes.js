import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class Pasajes extends React.Component<Props> {

    state = {
        pasajes: null
    }

    objetos = [];

    componentDidMount() {
        console.warn(this.props.pasajes);
        this.setState({ pasajes: this.props.pasajes });
        this.cargarPasajes();
    }

    cargarPasajes() {
        this.objetos = [];
        this.props.pasajes.forEach(pasaje => {
            this.objetos.push(
                <List.Item
                    title={`${pasaje.ruta}`}
                    description={`$${parseFloat(pasaje.monto)}0`}
                    descriptionStyle={styles.desc}
                    right={
                        () => {
                            return (
                                <Text style={styles.fecha}>
                                    {pasaje.fecha}
                                </Text>
                            );
                        }}
                    left={() => <List.Icon icon="bus" />}
                    style={styles.item}
                />
            );
        });
    }



    render() {
        return (

            <ScrollView style={styles.container}>

                {this.objetos}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    desc: {
        color: '#4CAF50'
    },
    fecha: {
        color: '#4FC3F7',
        marginTop: 10
    },
    container: {
        padding: 10,
    },
    item: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
});

