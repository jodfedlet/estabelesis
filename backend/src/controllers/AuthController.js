import authenticationService from "../services/AuthService";

const authenticationController = {
    login(req, res){
        try{
            return authenticationService.logon(req, res);
        }catch(error){
            return res.statut(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }
}

module.exports = authenticationController;