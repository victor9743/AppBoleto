import {View, ScrollView, Text, Pressable, StatusBar, FlatList, StyleSheet } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from '../styles';
import Rotas from '../routes/Rotas';
import { useState, useEffect } from 'react'
import {useRoute} from '@react-navigation/native'
import boleto from '../models/boleto';

function teste(value){
  return value.slice(0, 33);
}
function Boletos () {
    const {cadastrarBoleto} = Rotas()
    const route = useRoute()
    const {listarBoletos}= boleto()
    const [boletos, Boleto] = useState({})
    useEffect(() => {
        listarBoletos().then(function({ _array }){
          Boleto(_array)
        })
      }, [route.params])

    const renderItem = ({ item }) => (
      <View style={[styless.container, styless.item]}>
            <View style={{marginRight: 20}}>
              <Text>#</Text>
              <Text>{item.id}</Text>
            </View>
            <View>
              <Text>Link do Boleto</Text>
              <Hyperlink linkDefault={true}>
                <Text>{item.linkBoleto}</Text>
              </Hyperlink>
            </View>
            <View style={{marginLeft: 50}}>
              <Text>Valor</Text>
              <Text>{item.valor}</Text>
            </View>
      </View>
    );
    return(
        <View>  
          <FlatList
              data={boletos}
              keyExtractor={item => item.id}
              renderItem={renderItem}
          />
          <Pressable onPress={cadastrarBoleto} style={[styles.botaoParaLogin, {margin: 100, marginTop: 100}]}>
              <Text style={{textAlign: 'center'}}>+ boleto</Text>
          </Pressable>         
        </View>
    )
}
const styless = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#10c491',
      padding: 20,
      borderRadius: 15,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    title: {
      fontSize: 20,
    },
  });

export default Boletos