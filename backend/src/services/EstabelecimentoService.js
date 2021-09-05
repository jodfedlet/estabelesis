import Estabelecimento from '../models/Estabelecimento';
import Sequelize from 'sequelize';

const operadores = Sequelize.Op;

const estabelecimentoService = {
    async index(req, res){
        const estabelecimentos = await Estabelecimento.findAll();
        return res.json(estabelecimentos);
    },

    async store(req, res){
        const { name, email, phone, director, localization } = req.body;
        const estabelecimento = await Estabelecimento.create({
            name,
            email,
            phone,
            director,
            localization,
            logo: req.file.path
        });
        return res.json(estabelecimento);
    },

    async show(req, res){
        const { id } = req.params;

        if(!id){
            return res.status(401).json({
                errors: ['Id não informado']
            });
        }

        const estabelecimento = await Estabelecimento.findByPk(id);

        if(!estabelecimento){
            return res.status(401).json({
                errors: ['Estabelecimento não encontrado']
            });
        }

        return res.json(estabelecimento);
    },

    async update(req, res){
        const { id } = req.params;

        if(!id){
            return res.status(401).json({
                errors: ['Id não informado']
            });
        }

        const estabelecimento = await Estabelecimento.findByPk(id);

        if(!estabelecimento){
            return res.status(401).json({
                errors: ['Estabelecimento não encontrado']
            });
        }

        if(req.file.path){
            req.body.logo = req.file.path;
        }

        const estabelecimentoAtualizado = await estabelecimento.update(req.body);

        return res.json(estabelecimentoAtualizado);
    },

    async delete(req, res){
        const { id } = req.params;

        if(!id){
            return res.status(401).json({
                errors: ['Id não informado']
            });
        }

        const estabelecimento = await Estabelecimento.findByPk(id);

        if(!estabelecimento){
            return res.status(401).json({
                errors: ['Estabelecimento não encontrado']
            });
        }

        await estabelecimento.destroy();

        return res.json({
            response:'Registro removido com sucesso!'
        });
    },

    async getByLocalization(req, res){
        const { local } = req.params;

        if(!local){
            return res.status(401).json({
                errors: ['Localização não informado não informado']
            });
        }

        const estabelecimentos = await Estabelecimento.findAll({
            where: {
                localization: { [operadores.like] : `%${local}%`}
            }
        });
       
        if(!estabelecimentos){
            return res.status(401).json({
                errors: ['Nenhum estabelecimento foi encontrado']
            });
        }

        return res.json(estabelecimentos);
    }
}

export default estabelecimentoService;