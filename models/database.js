const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'empresa', // o nome do banco de dados
    'root', // nome de usuário do banco
    '', // senha do banco de dados

    {
        dialect:'sqlite',
        storage:'./empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}