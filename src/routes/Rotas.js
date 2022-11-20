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

    function salvarCliente(cliente) {
      if (cliente[0]['bairro'] == "" && cliente[0]['cep'] == "" && cliente[0]['cpf'] == "" && cliente[0]['nomeCliente'] == "" && cliente[1] == "") {
        alert("Todos os campos são obrigatórios")
      } else{
        let cpf = ''
        let cep =''

        if (cliente[0]['cpf'].includes('.') && cliente[0]['cpf'].includes('-')){
          cpf = cliente[0]['cpf'];
        } else {
          cpf = cliente[0]['cpf'].substring(0,3)+'.'+ cliente[0]['cpf'].substring(3,6)+ '.'+cliente[0]['cpf'].substring(6,9)+'-' +cliente[0]['cpf'].substring(9,11)
        }

        if (cliente[0]['cep'].includes('-')) {
          cep = cliente[0]['cep']
        } else {
          cep = cliente[0]['cep'].substring(0,5)+'-'+cliente[0]['cep'].substring(5,8)
        }
        console.log(cep);
        // navigation.navigate('Clientes')
        
      }
    }

    return {
        rotaLogin,
        rotaReg,
        home,
        sair,
        cadastrarCliente,
        clientes,
        salvarCliente
    }
}

export default Rotas