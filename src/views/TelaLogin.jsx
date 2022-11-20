import {Pressable, View, Text, ScrollView, TextInput, Image} from 'react-native'
import styles from '../styles'
import Money from '../assets/images/money.jpg'
import usuarioController from '../controllers/usuarioController'
import { useState } from 'react'
function TelaLogin(){
    const {login} = usuarioController()
    const [form, setForm] = useState({ login: '', senha: '' })
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Image style={[styles.moneyLogo]} source={Money} />
                <Text style={[styles.labelLogin]}>Usuário</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='usuario' onChangeText={function (text) { setForm({ ...form, login: text, }) }}/>
                <Text style={[styles.labelLogin]}>Senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='senha' onChangeText={function (text) { setForm({ ...form, senha: text, }) }}/>
                <Pressable style={[styles.buttonLogin]} onPress={function(){ login(form) }}>
                    <Text >
                        Entrar
                    </Text>
                </Pressable>
            </ScrollView>
            
        </View>
    )
}

export default TelaLogin