import banco from '../config/banco.js'

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: banco.Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: banco.Sequelize.STRING(250),
        allowNull: true
    },
    categoria:{
        type: banco.Sequelize.INTEGER,
        default: 0
    },
    email:{
        type: banco.Sequelize.STRING(150),
        allowNull: false,
        unique: true
    },
    status: {
        type: banco.Sequelize.INTEGER,
        default: 0
    },
})

export default Usuario