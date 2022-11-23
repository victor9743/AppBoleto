import cliente from "../models/cliente"
import { useNavigation } from '@react-navigation/native'
function clienteController(){
    const {save, todosClientes} = cliente()
    const navigation = useNavigation()

    function salvarClientes(clienteArray){
        save(clienteArray)
        navigation.navigate('Clientes')
    }

    return {
        salvarClientes
    }
}
export default clienteController