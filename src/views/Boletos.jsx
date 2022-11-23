import {View, FlatList, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import styles from '../styles';
import Rotas from '../routes/Rotas';
function Boletos () {
    const {cadastrarBoleto} = Rotas()
    return(
        <View>
            <Pressable onPress={cadastrarBoleto}>
                <Text>+ boleto</Text>
            </Pressable>           
        </View>
    )
}

export default Boletos