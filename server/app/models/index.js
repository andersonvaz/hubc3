const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//DEFINE CAMPOS TABELAS
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.empresa = require("./empresa.model.js")(sequelize, Sequelize);
db.produto = require("./produto.model.js")(sequelize, Sequelize);
// RELACOES ENTRE TABELAS
db.empresa.hasMany(db.produto);
db.produto.belongsTo(db.empresa,{as: 'fk_empresa'});

module.exports = db;
