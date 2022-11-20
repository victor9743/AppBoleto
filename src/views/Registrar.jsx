import {Pressable, View, Text, ScrollView, TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'
import usuarioController from '../controllers/usuarioController';
function Registrar() {
    const [form, setForm] = useState({ login: '', senha: '', confirmSenha: '' })
    const { saveUser} = usuarioController()
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Text style={[styles.labelLogin, {marginTop: 150}]}>Usuário</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='usuario' onChangeText={function (text) { setForm({ ...form, login: text, }) }}/>
                <Text style={[styles.labelLogin]}>Senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='senha' onChangeText={function (text) { setForm({ ...form, senha: text, }) }}/>
                <Text style={[styles.labelLogin]}>Confirmar senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='Confirmar senha' onChangeText={function (text) { setForm({ ...form, confirmSenha: text, }) }}/>
                <Pressable style={[styles.buttonLogin]} onPress={function(){ saveUser(form)}}>
                    <Text >
                        Registrar Usuário
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default Registrar;