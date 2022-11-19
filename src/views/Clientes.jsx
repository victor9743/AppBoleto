import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Pressable } from 'react-native';
import styles from '../styles';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styless.item}>
    <Text style={styless.id}>{id}</Text>
    <Text style={styless.title}>{title}</Text>
  </View>
);

const Clientes = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
        <View style={styless.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
         <Pressable style={[styles.botaoParaLogin]}>
            <Text>dfkjlng;fdj</Text>
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