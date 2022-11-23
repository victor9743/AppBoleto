import { useNavigation } from '@react-navigation/native'
import clienteController from '../controllers/clientesController'

function Rotas(){
    const navigation = useNavigation()
    const {salvarClientes} = clienteController()

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

    function salvarCliente(cliente) {
      console.log(cliente[0].cpf)
      if (cliente[0].bairro == "" && cliente[0].cep == "" && cliente[0].cpf == "" && cliente[0].nomeCliente == "" && cliente[1] == "") {
        alert("Todos os campos são obrigatórios")
      } else{
        let array = []

        if (cliente[0].cpf.includes('.') && cliente[0].cpf.includes('-')){
          cliente[0].cpf = cliente[0].cpf;
        } else {
          cliente[0].cpf = cliente[0].cpf.substring(0,3)+'.'+ cliente[0].cpf.substring(3,6)+ '.'+cliente[0].cpf.substring(6,9)+'-' +cliente[0].cpf.substring(9,11)
        }
        
        array = [cliente[0].bairro, cliente[0].cep, cliente[3], cliente[0]['cpf'], cliente[1], cliente[0].nomeCliente, cliente[2]]
        
        salvarClientes(array)
        
      }
    }

    function boletos() {
      navigation.navigate('Boletos')
    }

    function cadastrarBoleto() {
      navigation.navigate('CadastrarBoleto')
    }

    return {
        rotaLogin,
        rotaReg,
        home,
        sair,
        cadastrarCliente,
        clientes,
        salvarCliente,
        boletos,
        cadastrarBoleto
    }
}

export default Rotas