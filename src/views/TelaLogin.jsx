import {Pressable, View, Text, ScrollView, TextInput, Image} from 'react-native'
import styles from '../styles'
import Money from '../assets/images/money.jpg'
import Rotas from '../routes/Rotas'

function TelaLogin(){
    const {home} = Rotas()
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Image style={[styles.moneyLogo]} source={Money} />
                <Text style={[styles.labelLogin]}>Usuário</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='usuario'/>
                <Text style={[styles.labelLogin]}>Senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='senha'/>
                <Pressable style={[styles.buttonLogin]} onPress={home}>
                    <Text >
                        Entrar
                    </Text>
                </Pressable>
            </ScrollView>
            
        </View>
    )
}

export default TelaLogin