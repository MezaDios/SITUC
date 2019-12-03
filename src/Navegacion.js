import * as React from 'react';
import { BottomNavigation, Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import Pasajes from './Pasajes';
import Credito from './Credito';
import Perfil from './Perfil';

const PasajesRoute = () => {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.Content
                    title="Pasajes"
                    titleStyle={styles.title}
                />
            </Appbar.Header>
            <Pasajes/>
        </View>
    )
};

const CreditoRoute = () => {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.Content
                    title="Crédito"
                    titleStyle={styles.title}
                />
            </Appbar.Header>
            <Credito/>
        </View>
    )
};

const PerfilRoute = () => {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.Content
                    title="Perfil"
                    titleStyle={styles.title}
                />
            </Appbar.Header>
            <Perfil />
        </View>
    )
};

export default class App extends React.Component<Props> {
    state = {
        index: 1,
        routes: [
            { key: 'pasajes', title: 'Pasajes', icon: 'ticket' },
            { key: 'credito', title: 'Crédito', icon: 'coin' },
            { key: 'perfil', title: 'Perfil', icon: 'face' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        pasajes: PasajesRoute,
        credito: CreditoRoute,
        perfil: PerfilRoute,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                activeColor={"#2495F1"}
                inactiveColor={"#BDBDBD"}
                barStyle={styles.bar}
                shifting={true}

            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        backgroundColor: "#FEFEFE",
    },
    topBar: {
        backgroundColor: "#2495F1",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
});
