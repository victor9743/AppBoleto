import {Pressable, View, Text, ScrollView, TextInput} from 'react-native'
import styles from '../styles'
function Registrar() {
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Text style={[styles.labelLogin, {marginTop: 150}]}>Usuário</Text>
                <TextInput style={[styles.inputLogin]} placeholderTextColor="rgba(225,255,255,0.4)" placeholder='usuario'/>
                <Text style={[styles.labelLogin]}>Senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='senha'/>
                <Text style={[styles.labelLogin]}>Confirmar senha</Text>
                <TextInput style={[styles.inputLogin]} secureTextEntry placeholderTextColor="rgba(225,255,255,0.4)" placeholder='Confirmar senha'/>
                <Pressable style={[styles.buttonLogin]}>
                    <Text >
                        Registrar Usuário
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default Registrar;