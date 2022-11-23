import * as SQLite from 'expo-sqlite'
function boleto(){
    const Conexao = {
        getConnection: () => SQLite.openDatabase("database.db"),
    }
    const db = Conexao.getConnection()

    function saveBoleto(boleto){

    }

    return {
        saveBoleto
    }
}

export default boleto;