import Sequelize from "sequelize"; 
import databaseConf from "../config/database";
import User from "../models/User";
import Estabelecimento from "../models/Estabelecimento";

const models = [User, Estabelecimento];

const connection = new Sequelize(databaseConf);

models.forEach((model) => model.init(connection))