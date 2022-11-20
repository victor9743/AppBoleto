import * as SQLite from 'expo-sqlite'
import Rotas from '../routes/Rotas'
function usuario() {
    const Conexao = { getConnection: () => SQLite.openDatabase("database.db") }
    const db = Conexao.getConnection()
    function todosUsuarios() {
        return new Promise(function (resolve, reject) {
            db.transaction(tx => {
              tx.executeSql(`select * from usuarios;`, [], (_, { rows }) => {
                resolve(rows)
                console.log(rows)
              }), (sqlError) => {
                reject(sqlError)
                console.log(reject(sqlError))

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
            () => console.log('Linhas inseridas')
        )
       
    }

    function loginUsuario(usuario, senha){
        return new Promise(function (resolve, reject) {
            db.transaction(tx => {
              tx.executeSql(`select * from usuarios where usuario = ? and senha = ?;`, [usuario, senha], (_, { rows }) => {
                resolve(rows)
              }), (sqlError) => {
                reject(sqlError)
                console.log(reject(sqlError))

              }
            }, (txError) => {
              reject(txError)
              console.log(reject(sqlError))
            })
        })

    }
    return{
        inserirUsuario,
        todosUsuarios,
        loginUsuario
    }
}

export default usuario