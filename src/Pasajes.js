import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, ScrollView, FlatList, View, Text } from 'react-native';

export default class Pasajes extends React.Component<Props> {

  state = {
    rides: [],
  }

  componentDidMount() {
    let rides = global.apiHandler.user.payments;
    if (this.props.count) {
      rides = rides.slice(0, this.props.count)
    }

    this.setState({rides: rides});
  }

  render() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (this.state.rides.length < 1)
      return (
        <View style={styles.empty}>
          <Text style={styles.emptyMessage}>No hay pasajes registrados...</Text>
        </View>
      );

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.rides}
          renderItem={({ item }) => (
            <List.Item
              title={`${item.bus.route_name}`}
              description={`$${formatMoney(item.amount)}`}
              descriptionStyle={styles.desc}
              right={
                () => {
                  return (
                    <Text style={styles.fecha}>
                      {new Date(item.created_at).toLocaleDateString('es-MX', options)}
                    </Text>
                  );
              }}
              left={() => <List.Icon icon="bus" />}
              style={styles.item}
            />
          )}
          keyExtractor={item => item}
        />
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
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 30,
    color: "#2495F1",
    textAlign: 'center',
    fontWeight: '400'
  },
  container: {
    padding: 10,
  },
  item: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
}
