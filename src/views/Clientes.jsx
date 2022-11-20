import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Pressable } from 'react-native';
import styles from '../styles';
import Rotas from '../routes/Rotas';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  }
];

const Item = ({ title }) => (
  <View style={styless.item}>
    <Text style={styless.title}>{title}</Text>
  </View>
);

const Clientes = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
const {cadastrarCliente} = Rotas();

  return (
        <View style={styless.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
         <Pressable style={[styles.botaoParaLogin, {margin: 100}]} onPress={cadastrarCliente}>
            <Text style={{textAlign: 'center'}}>+ Cliente</Text>
        </Pressable>
        </View>
    
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Clientes;