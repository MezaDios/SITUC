import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const PasajesRoute = () => <Text>Pasajes</Text>;

const CreditoRoute = () => <Text>Crédito</Text>;

const PerfilRoute = () => <Text>Perfil</Text>;

export default class MyComponent extends React.Component {
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
    backgroundColor: "#FEFEFE"

  }
});
