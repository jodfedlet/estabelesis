import estabelecimentoService from "../services/EstabelecimentoService";


const estabelecimentoController = {
    index(req, res){
        try{
            return estabelecimentoService.index(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    create(req, res){
        try{
            return estabelecimentoService.store(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    show(req, res){
        try{
            return estabelecimentoService.show(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    update(req, res){
        try{
            return estabelecimentoService.update(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    delete(req, res){
        try{
            return estabelecimentoService.delete(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    },

    getByLocalization(req, res){
        try{
            return estabelecimentoService.getByLocalization(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }
}

export default estabelecimentoController;