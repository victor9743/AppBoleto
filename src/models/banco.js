import * as SQLite from 'expo-sqlite'
function banco (){
    const Conexao = {
        getConnection: () => SQLite.openDatabase("database.db"),
    }
    const db = Conexao.getConnection()
    function criarBanco() {
        const sql = [
          `CREATE TABLE IF NOT EXISTS usuarios (
            id integer primary key autoincrement,
                usuario text,
                senha text
            );`,
            `CREATE TABLE IF NOT EXISTS clientes(
                id integer primary key autoincrement,
                nomeCliente text,
                cpf text,
                cidade text,
                cep text,
                endereco text,
                bairro text
            );`,
            `CREATE TABLE IF NOT EXISTS boletos(
                id integer primary key autoincrement,
                idBoleto integer,
                clientID integer,
                vencimento text,
                valor text,
                linkBoleto text
            );`
        ]
    
        db.transaction(
          tx => {
            for (var i = 0; i < sql.length; i++) {
              console.log("execute sql : " + sql[i])
              tx.executeSql(sql[i])
            }
          }, (error) => {
            console.log(error)
          }, () => {
            console.log("erro ")
          }
        )
    }

    function apagarTables() {
        const sql = [
            `DROP TABLE IF EXISTS usuarios;`,
            `DROP TABLE IF EXISTS clientes;`,
            `DROP TABLE IF EXISTS boletos;`,
        ];

       
    
        db.transaction(
          tx => {
            for (var i = 0; i < sql.length; i++) {
              console.log("execute sql : " + sql[i])
              tx.executeSql(sql[i])
            }
          }, (error) => {
            console.log(error)
          }, () => {
            console.log("erro ")
          }
        )
    }
    return {
        criarBanco,
        apagarTables
    }
}

export default banco