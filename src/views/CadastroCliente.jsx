import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useState } from 'react'
import styles from '../styles'
import axios from 'axios'
import Rotas from "../routes/Rotas";

function CadastroCliente(){
    const [cepvalue, setCEP] = useState('')
    const [endereco, Endereco] = useState({})
    const [form, setForm] = useState({ nomeCliente: '', cpf: '', cep: '', bairro: '' })
    const {salvarCliente} = Rotas()
    
    function verificarCep(){
        axios
        .get(`https://cep.awesomeapi.com.br/json/${cepvalue}`)
        .then(function ({ data, status }) {
            if (status === 200) {
                Endereco(data);
                
            }
        })
        .catch(function (err) {
          console.log(err);
        })
    }
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Text style={{marginTop: 50, marginLeft:35, marginBottom: 5}}>Nome do Cliente</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='Nome do cliente' onChangeText={function (text) {
                    setForm({ ...form, nomeCliente: text, })
                }} />

                <Text style={{marginTop: 15, marginLeft:35, marginBottom: 5}}>CPF</Text>
                <TextInput keyboardType='numeric' style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='999.999.999-99' onChangeText={function (text) {
                    setForm({ ...form, cpf: text, })
                }} maxLength={11}/>

                <Text style={{marginTop: 15, marginLeft:35, marginBottom: 5}}>CEP</Text>
                <TextInput keyboardType='numeric' style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='99999-999' onChangeText={function (text) {
                setCEP(text)
                setForm({ ...form, cep: text, })
                }} maxLength={8} onBlur={verificarCep}/>

                <Text style={{marginTop: 15, marginLeft:35, marginBottom: 5}}>Endereço</Text>
                <TextInput editable={false} selectTextOnFocus={false} value={endereco.address} style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='Rua teste' />

                <Text style={{marginTop: 15, marginLeft:35, marginBottom: 5}}>Bairro</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='Bairro' onChangeText={function(text){
                    setForm({ ...form, bairro: text, })
                }}/>
                
                <Pressable style={[styles.botaoParaLogin, {marginTop: 15, marginLeft: 205, marginRight: 30, paddingLeft: 55, marginBottom: 20}]} onPress={function() {salvarCliente([form,  endereco.address, endereco.state, endereco.city])}}>
                    <Text>Cadastrar</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default CadastroCliente;