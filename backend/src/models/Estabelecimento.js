import Sequelize, { Model } from "sequelize";  

export default class Estabelecimento extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING(70),
                allowNull: false
              },
              logo: {
                type: Sequelize.STRING(100),
                allowNull: false
              },
              director: {
                type: Sequelize.STRING(70),
                allowNull: false
              },
              email: {
                type: Sequelize.STRING(70),
                allowNull: false
              },
              phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
              },
              localization: {
                type: Sequelize.STRING(100),
                allowNull: false,
              },
        },{
            sequelize,
        })
        return this;
    }
}