import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Pasajes from './src/Pasajes';

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
    <Pasajes pasajes={pasajes}></Pasajes>
  )
};

const CreditoRoute = () => <Text>Crédito</Text>;

const PerfilRoute = () => <Text>Perfil</Text>;

export default class App extends React.Component<Props> {
  state = {
    index: 0,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.78,
    shadowRadius: 16.00,

    elevation: 24,
  }
});
