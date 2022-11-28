import * as SQLite from 'expo-sqlite'
function boleto(){
    const Conexao = {
        getConnection: () => SQLite.openDatabase("database.db"),
    }
    const db = Conexao.getConnection()

    function saveBoleto(boleto){
        boleto = [boleto[0], boleto[1], boleto[4], boleto[2], boleto[3]]
        db.exec(
            [
              { sql: 'insert into boletos (idBoleto, clientID, vencimento, valor, linkBoleto) values (?,?,?,?,?);', args: boleto },
            ],
            false,
            () => console.log('Boleto cadastrado')
        )
    }

    function listarBoletos(){
        return new Promise(function (resolve, reject) {
            db.transaction(tx => {
              tx.executeSql(`select * from boletos;`, [], (_, { rows }) => {
                resolve(rows)
              }), (sqlError) => {
                reject(sqlError)
              }
            }, (txError) => {
              reject(txError)
            })
          })
    }

    return {
        saveBoleto,
        listarBoletos
    }
}

export default boleto;