import Cliente from '../models/Cliente.js';

class ClienteController{

    index = async function (req, res) {

        const clientes = await Cliente.findAll();

        res.status(200).json(clientes);

    }

    salvar = async function (req, res) {
        try {
            const dados = req.body;
            const cliente = await Cliente.create(dados);
            res.status(200).json(cliente);
        }catch(err){
            res.status(401).json({message: err});
        }
    }

    editar = async function (req, res) {

        const cliente = req.body

        await Cliente.update(cliente, {
            where:{
                id: cliente.id
            }
        })

        res.status(200).json(cliente);

    }

}

export default new ClienteController();