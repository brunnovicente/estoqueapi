import banco from '../config/banco.js'

const Cliente = banco.sequelize.define('clientes', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: banco.Sequelize.STRING(150),
    },
    telefone: {
        type: banco.Sequelize.STRING(20)
    },
    email: {
        type: banco.Sequelize.STRING(150),
        isUnique: true,
    },
    cpf:{
        type: banco.Sequelize.STRING(20),
        isUnique: true,
    }
})

export default Cliente