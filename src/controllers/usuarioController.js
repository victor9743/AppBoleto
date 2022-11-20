import usuario from "../models/usuario";
import { useNavigation } from '@react-navigation/native'
function usuarioController() {
    const {inserirUsuario, loginUsuario} = usuario()
    const navigation = useNavigation()
    function getAll(){

    }

    function saveUser(user){
        if (user['login'] != '' && user['senha'] != '' && user['confirmSenha'] != '') {
            if (user['senha'] == user['confirmSenha']){
                inserirUsuario([user['login'], user['senha']])
                navigation.navigate('TelaLogin')
                alert('Usuário salvo com sucesso !!')
            } else {
                alert('Senha e confirmar senha não são iguais')
            }
        } else {
            alert('Preenchimento de todos os campos obrigatórios')
        }
    }

    function login(log){
        if (log['login'] != '' && log['senha'] != '') {
            loginUsuario(log['login'], log['senha']).then(function({ _array }){
                if (_array.length > 0) {
                    navigation.navigate('Home')
                } else{
                    alert('Usuário ou senha Inválido(s)')
                }
            })
        } else {
            alert('Por favor, preencha todos os campos para continuar')
        }
        
    }

    return {
        getAll,
        saveUser,
        login
    }
}

export default usuarioController;