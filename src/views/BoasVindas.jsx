
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import styles from '../styles'
import Money from '../assets/images/money.jpg'
import Rotas from '../routes/Rotas'

function BoasVindas() {
    const {rotaLogin, rotaReg} = Rotas()
    return(
        <View style={[styles.planoDeFundo]}>
            <ScrollView>
                <Image style={[styles.moneyLogo]} source={Money} />
                <Text style={[styles.textoBoasVindas, styles.familyFont]}>Olá, comece a gerar seus próprios boletos de forma rápida e prática</Text>
                <View style={styles.botoesBoasVindas}>
                    <TouchableOpacity style={styles.botaoParaLogin} onPress={rotaLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoParaRegistrar} onPress={rotaReg}>
                        <Text>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>           
        </View>
    )
}

export default BoasVindas