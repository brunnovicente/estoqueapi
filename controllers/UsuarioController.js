import Usuario from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const blacklist = []

class UsuarioController {

    salvar = async function (req, res) {
        try {
            const novo = req.body;

            const existe = await Usuario.findOne({
                where: {
                    username: novo.username,
                }
            })

            if (existe) {
                res.status(500).json({message: 'Usuário ' + novo.username + ' já existe'})
            }

            novo.status = 1;
            novo.categoria = 1;

            const salt = await bcrypt.genSalt(10);
            novo.password = await bcrypt.hash(req.body.password, salt);

            const usuario = await Usuario.create(novo)
            res.status(200).json(usuario);
        } catch (err) {
            res.status(500).json({message: 'Erro no Servidor: ' + err});
        }
    }//Fim do Salvar

    login = async function (req, res) {
        try {
            const dados = req.body;

            //Verifica se o usuário existe
            const usuario = await Usuario.findOne({
                where: {
                    username: dados.username,
                }
            })

            if (!usuario) {
                console.log('Usuário não existe!')
                return res.status(404).json({message: 'Usuário não encontrado'})
            }

            //Veririca se a senha está correta
            const isMatch = await bcrypt.compare(dados.password, usuario.password)
            if (!isMatch) {
                console.log('Senha Inválida!')
                return res.status(400).json({message: 'Senha incorreta!'})
            }

            //Gerar o Token
            const token = jwt.sign(
                {id: usuario.id, username: usuario.username},
                JWT_SECRET,
                {expiresIn: '1h'}
            )
            //console.log('USUARIO: '+req.userId)
            console.log('Usuário logado: '+token)
            res.status(200).json(token);
        } catch (err) {
            res.status(500).json({message: 'Erro no Servidor: ' + err});
        }
    }//Fim do Login

    logout = function (req, res){

        const token = req.headers['authorization'].replace('Bearer ', '');

    }

}

export default new UsuarioController();