import Sequelize from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = '';
const DB_HOST = process.env.HOST;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
})

sequelize.authenticate().then(function () {
    console.log('Conectado ao banco com sucesso!')
}).catch(function (error) {
    console.error('Falha na conexão: '+error);
})

export default {Sequelize, sequelize}