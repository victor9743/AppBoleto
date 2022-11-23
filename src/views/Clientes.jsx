import {View, FlatList, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import styles from '../styles';
import Rotas from '../routes/Rotas';
import cliente from '../models/cliente';
import { useState, useEffect } from 'react'

import {useRoute} from '@react-navigation/native'

const Item = ({ title }) => (
  <View style={styless.item}>
    <Text style={styless.title}>{title}</Text>
  </View>
);

const Clientes = () => {
  const {cadastrarCliente} = Rotas();
  const [clientes, Cliente] = useState({})
  const route = useRoute()
  useEffect(() => {
    cliente().todosClientes().then(function({ _array }){
      Cliente(_array)
      
      // console.log(clientes)
    })
  }, [route.params])



  const renderItem = ({ item }) => (
    // console.log(item)
    <Item title={`${item.nomeCliente} ${item.cpf} ${item.cidade}`}/>
  );
 


  return (
        <View style={styless.container}>
        <FlatList
            data={clientes}
            keyExtractor={item => item.id}
            renderItem={renderItem}
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
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default Clientes;