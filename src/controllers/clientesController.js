import cliente from "../models/cliente"
import { useNavigation } from '@react-navigation/native'
function clienteController(){
    const {save} = cliente()
    const navigation = useNavigation()

    function salvarClientes(clienteArray){
        save(clienteArray)
        navigation.navigate('home')
        alert('Cliente cadastrado com sucesso')
    }

    return {
        salvarClientes
    }
}
export default clienteController