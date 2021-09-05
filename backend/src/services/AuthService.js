import jwt from 'jsonwebtoken';
import User from '../models/User';

const authenticationService = {
    async logon(req, res){
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(401).json({
                errors: ['Email e/ou senha inválidos']
            })
        }

        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(401).json({
                errors: ['Usuário não encontrado']
            }) 
        }

        if(!(await user.passwordIsValid(password))){
            return res.status(401).json({
                errors: ['Senha inválida']
            }) 
        }

        const { id } = user;

        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });

        return res.json({ token })
    }

}

module.exports = authenticationService;