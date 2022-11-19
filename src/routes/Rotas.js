import { useNavigation } from '@react-navigation/native'

function Rotas(){
    const navigation = useNavigation()

    function rotaLogin(){
      navigation.navigate('TelaLogin')
    }

    function rotaReg(){
      navigation.navigate('Registrar')
    }

    function home(){
      navigation.navigate('Home')
    }

    function sair(){
      navigation.navigate('BoasVindas')
    }

    function cadastrarCliente() {
      navigation.navigate('CadastroCliente')
    }

    function clientes() {
      navigation.navigate('Clientes')
    }

    return {
        rotaLogin,
        rotaReg,
        home,
        sair,
        cadastrarCliente,
        clientes
    }
}

export default Rotas