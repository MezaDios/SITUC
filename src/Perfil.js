import * as React from 'react';
import QRCode from 'react-native-qrcode';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

export default class Perfil extends React.Component<Props> {

  state = {
    usuario: global.apiHandler.user,
    qr: `user-${global.apiHandler.user.id}`,
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={styles.wrapper}>
            <View style={styles.qr}>
              <QRCode
                value={this.state.qr}
                size={200}
                bgColor='black'
                fgColor='white'
              />

              <Text style={styles.instructions}>Coloca el código frente al escáner para cobrar el pasaje.</Text>
            </View>

            <Text style={styles.subtitulo}>Tus datos: </Text>

            <TextInput
              label='Nombre'
              value={`${this.state.usuario.name} ${this.state.usuario.last_name}`}
              mode={"outlined"}
              style={styles.input}
            />

            <TextInput
              label='Correo'
              value={this.state.usuario.email}
              mode={"outlined"}
              style={styles.input}
            />

            <TextInput
              label='Contraseña'
              value={'********'}
              secureTextEntry={true}
              mode={"outlined"}
              style={styles.input}
            />

            <Button style={styles.boton} icon="pen" mode="contained" onPress={() => console.log('Pressed')}>
              Modificar datos
            </Button>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper : {
    padding: 20,
  },
  qr: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 20,
    color: "#2495F1",
    textAlign: 'center',
    marginTop: 30
  },
  subtitulo: {
    fontSize: 30,
    color: "#2495F1",
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 40,
    fontWeight: '600'
  },
  boton: {
    marginVertical: 30,
    backgroundColor: "#2495F1",
    width: '80%',
    marginHorizontal: '10%'
  },
  input: {
    marginVertical: 20
  }
});

