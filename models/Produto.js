import banco from '../config/banco.js'

const Produto = banco.sequelize.define('produtos', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao:{
        type: banco.Sequelize.STRING(150),
    },
    preco: {
        type: banco.Sequelize.DECIMAL(10,2)
    },
    estoque: {
        type: banco.Sequelize.DECIMAL(10,2)
    },
    status: {
        type: banco.Sequelize.INTEGER
    },
})

export default Produto