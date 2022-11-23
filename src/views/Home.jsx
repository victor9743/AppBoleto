import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rotas from '../routes/Rotas';

function Home(){
    const {sair, clientes, boletos} = Rotas()
    return (
        <View style={[styles.planoDeFundo, {alignItems: "center", justifyContent: "center"}]}>
                <TouchableOpacity style={[styles.botaoParaLogin]} onPress={clientes}>
                    <Text>Clientes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botaoParaLogin, {marginTop: 50}]} onPress={boletos}>
                    <Text>Boletos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botaoParaLogin, {marginTop: 50}]} onPress={sair}>
                    <Text>Sair</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Home