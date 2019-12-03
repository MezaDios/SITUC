import * as React from 'react';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Pasajes from './src/Pasajes';
import Credito from './src/Credito';

const pasajes = [
  {
    monto: 10.20,
    fecha: "12/12/2012",
    ruta: "Ruta 20"
  },
  {
    monto: 10.20,
    fecha: "12/12/2012",
    ruta: "Ruta 20"
  },
  {
    monto: 10.20,
    fecha: "12/12/2012",
    ruta: "Ruta 20"
  }
]

const PasajesRoute = () => {
  return (
    <View>
      <Appbar.Header style={styles.topBar}>
        <Appbar.Content
          title="Pasajes"
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <Pasajes pasajes={pasajes}></Pasajes>
    </View>
  )
};

const CreditoRoute = () => {
  return (
    <View>
      <Appbar.Header style={styles.topBar}>
        <Appbar.Content
          title="Crédito"
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <Credito credito={12.5} pasajes={pasajes}></Credito>
    </View>
  )
};

const PerfilRoute = () => {
  return (
    <View>
      <Appbar.Header style={styles.topBar}>
        <Appbar.Content
          title="Perfil"
          titleStyle={styles.title}
        />
      </Appbar.Header>
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
        activeColor={"#303F9F"}
        inactiveColor={"#9FA8DA"}
        barStyle={styles.bar}

      />
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#FEFEFE",
  },
  topBar: {
    backgroundColor: "#303F9F",
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
