import * as SQLite from 'expo-sqlite'
function usuario() {
    const Conexao = { getConnection: () => SQLite.openDatabase("database.db") }
    const db = Conexao.getConnection()
    function todosUsuarios() {
        return new Promise(function (resolve, reject) {
            db.transaction(tx => {
              tx.executeSql(`select * from usuarios;`, [], (_, { rows }) => {
                resolve(rows)
              }), (sqlError) => {
                reject(sqlError)

              }
            }, (txError) => {
              reject(txError)
            })
        })
    }

    function inserirUsuario(usuario) {
        db.exec(
          [
            { sql: 'insert into usuarios (usuario, senha) values (?,?);', args: usuario },
          ],
          false,
          () => console.log('Usuario cadastrado')
        )
       
    }

    function loginUsuario(usuario, senha){
      console.log(usuario, senha)
        return new Promise(function (resolve, reject) {
            db.transaction(tx => {
              tx.executeSql(`select * from usuarios where usuario = ? and senha = ?;`, [usuario, senha], (_, { rows }) => {
                resolve(rows)
              }), (sqlError) => {
                reject(sqlError)

              }
            }, (txError) => {
              reject(txError)
            })
        })

    }
    return{
        inserirUsuario,
        loginUsuario,
        todosUsuarios
    }
}

export default usuario