import estabelecimentoService from "../services/EstabelecimentoService";


const estabelecimentoController = {
    async index(req, res){
        try{
            return await estabelecimentoService.index(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    async create(req, res){
        try{
            return await estabelecimentoService.store(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    async show(req, res){
        try{
            return await estabelecimentoService.show(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    async update(req, res){
        try{
            return await estabelecimentoService.update(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    async delete(req, res){
        try{
            return await estabelecimentoService.delete(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    async getByLocalization(req, res){
        try{
            return await estabelecimentoService.getByLocalization(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }
}

export default estabelecimentoController;