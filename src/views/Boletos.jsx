import {View, ScrollView, Text, Pressable } from 'react-native';
import styles from '../styles';
import Rotas from '../routes/Rotas';
function Boletos () {
    const {cadastrarBoleto} = Rotas()
    return(
        <View>
            <ScrollView>
                <Pressable onPress={cadastrarBoleto} style={[styles.botaoParaLogin, {margin: 100, marginTop: 600}]}>
                    <Text style={{textAlign: 'center'}}>+ boleto</Text>
                </Pressable>
            </ScrollView>
                       
        </View>
    )
}

export default Boletos