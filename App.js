import React, { Component } from 'react';
import Login from './src/Login';
import Navegacion from './src/Navegacion';
import { Actions, Scene, Router } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar />
    <Scene key="home" component={Navegacion} hideNavBar />
  </Scene>
);

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />;
  }
}
