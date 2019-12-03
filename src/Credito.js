import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import Pasajes from './Pasajes';

export default class Credito extends React.Component<Props> {
  state = {
    credito: global.apiHandler.user.credit.toFixed(2),
    pasajes: global.apiHandler.user.payments
  }

  addCredit = () => {
    global.apiHandler.addCredit(1)
    .then(credit => {
      this.setState({credito: parseFloat(credit).toFixed(2)});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.credit}>
          <View style={styles.cuadro}>
            <Text style={styles.saldo}>${this.state.credito}</Text>
          </View>

          <Text style={styles.titulo}>Saldo</Text>
        </View>

        <View style={styles.rides}>
          <Text style={styles.subtitulo}>Últimos viajes</Text>
          <Pasajes count={2}/>
        </View>

        <Button style={styles.boton} mode="contained" onPress={this.addCredit}>
          Recargar crédito
        </Button>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  cuadro: {
    marginHorizontal: 80,
    marginBottom: 20,
    borderColor: "#2495F1",
    borderWidth: 4,
    padding: 8,
  },
  saldo: {
    fontSize: 50,
    textAlign: 'center',
    color: "#2495F1"
  },
  titulo: {
    fontSize: 35,
    color: "#2495F1",
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    color: "#2495F1",
    textAlign: 'center',
    fontWeight: '200'
  },
  boton: {
    backgroundColor: "#2495F1",
    width: '80%',
    marginHorizontal: '10%'
  },
  credit: {
    flex: 2,
  },
  rides: {
    flex: 2
  }
});

