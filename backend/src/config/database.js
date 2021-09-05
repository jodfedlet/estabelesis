require("dotenv").config()
module.exports = {
    dialect: "mysql",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "estabelesis",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    dialectOptions: {
        timezone: "-03:00",
    },
    timezone: "-03:00",
}