import Produto from '../models/Produto.js'

class ProdutoController {

    index = async function(req, res) {
        const produtos = await Produto.findAll({
            where:{
                status: 1
            }
        });
        if(produtos.length === 0){
            res.status(500).json({message:"Não existe produtos cadastrados!"})
        }

        res.status(200).json(produtos);
    }

    buscar = async function(req, res) {
        const id = req.params.id;
        const produto = await Produto.findOne({
            where:{
                id: id
            }
        })
        if(!produto){
            res.status(500).json({message:"Produto não encontrado!"})
        }
        res.status(200).json(produto);
    }

    salvar = function(req, res) {

        const dados = {
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            status: 1
        }

        Produto.create(dados).then(function(produto){
            res.status(200).json(produto);
        }).catch(function(err){
            res.status(500).json({message: err});
        })

    }

    editar = async function(req, res) {
        const produto = req.body;

        await Produto.update(produto, {
            where: {
                id: produto.id
            }
        })

        res.status(200).json({message: 'Editado com sucesso!'});
    }

    excluir = async function(req, res) {
        const id = req.params.id;

        const produto = await Produto.findOne({
            where:{
                id: id
            },
        })

        if(!produto){
            res.status(500).json({message: 'Produto não encontrado!'})
        }

        await produto.update({status: 0})

        //res.status(200).json({messagem: 'Produto removido com sucesso!'});
        res.status(200).json(produto);

    }

}

export default new ProdutoController();
