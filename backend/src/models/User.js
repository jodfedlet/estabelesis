import Sequelize, { Model } from "sequelize";  
import bcryptjs from "bcryptjs"

export default class User extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING(70),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(70),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
        },{
            sequelize,
        })
        return this;
    }

    passwordIsValid(currentPassword){
        return bcryptjs.compare(currentPassword, this.password)
    }
}