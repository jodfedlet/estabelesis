import Estabelecimento from '../models/Estabelecimento';
import Sequelize from 'sequelize';

const operadores = Sequelize.Op;

const estabelecimentoService = {

    async index(req, res){
        const estabelecimentos = await Estabelecimento.findAll();

        const estabelecimentosFormatados = estabelecimentos.map(estabelecimento => {
            return {
                id: estabelecimento.id,
                name: estabelecimento.name,
                email: estabelecimento.email,
                director: estabelecimento.director,
                logo: `${process.env.APP_BASE_URL}/uploads/${estabelecimento.logo}`,
                localization: estabelecimento.localization,
                phone: estabelecimento.phone,
                created_at: estabelecimento.created_at,
                updated_at: estabelecimento.updated_at,
                request:{
                    type:'GET',
                    url: `${process.env.APP_BASE_URL}/estabelecimentos/${estabelecimento.id}`
                }
            }
        })
        return res.json(estabelecimentosFormatados);
    },

    async store(req, res){
        const { name, email, phone, director, localization } = req.body;
        await Estabelecimento.create({
            name,
            email,
            phone,
            director,
            localization,
            logo: req.file.filename
        });
        return res.json({response: 'Estabelecimento criado com sucesso'});
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

        const response = {
            id: estabelecimento.id,
            name: estabelecimento.name,
            email: estabelecimento.email,
            director: estabelecimento.director,
            logo: `${process.env.APP_BASE_URL}/uploads/${estabelecimento.logo}`, 
            localization: estabelecimento.localization,
            phone: estabelecimento.phone,
            created_at: estabelecimento.created_at,
            updated_at: estabelecimento.updated_at,
            request:{
                type:'GET',
                url: `${process.env.APP_BASE_URL}/estabelecimentos/${estabelecimento.id}`
            }
        }

        return res.json(response);
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

        if(req.file.filename){
            req.body.logo = req.file.filename;
        }

        await estabelecimento.update(req.body);

        return res.json({response: 'Estabelecimento atualizado com sucesso'});
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