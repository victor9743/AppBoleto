import * as SQLite from 'expo-sqlite'
function cliente () {
    const Conexao = { getConnection: () => SQLite.openDatabase("database.db") }
    const db = Conexao.getConnection()
    function save(cliente){
        db.exec(
            [
              { sql: 'insert into clientes (nomeCliente, cep, cpf, endereco, siglaEstado, cidade, bairro) values (?,?,?,?,?,?,?);', args: [cliente[5], cliente[1], cliente[3], cliente[4], cliente[6], cliente[2], cliente[0]] },
            ],
            false,
            () => console.log('Cliente cadastrado')
        )
    }

    function todosClientes() {
        return new Promise(function (resolve, reject) {
          db.transaction(tx => {
            tx.executeSql(`select * from clientes;`, [], (_, { rows }) => {
              resolve(rows)
            }), (sqlError) => {
              reject(sqlError)
            }
          }, (txError) => {
            reject(txError)
          })
        })
    }


    function clientesByName(cliente) {
      return new Promise(function (resolve, reject) {
          db.transaction(tx => {
            tx.executeSql(`select * from clientes where nomeCliente = ?;`, [cliente], (_, { rows }) => {
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
        save,
        todosClientes,
        clientesByName
    }
}
export default cliente