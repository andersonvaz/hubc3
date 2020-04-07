const db = require("../models");
const Empresa = db.empresa;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Retrieve all Empresas from the database.
exports.findAll = (req, res) => {
    //    Empresa.findAll({attributes: { include: [[sequelize.fn('TO_BASE64', sequelize.col('data'),'imagem')]] }})
    Empresa.findAll({attributes: {include: [[sequelize.fn('TO_BASE64', sequelize.col('data')), 'imagem']], exclude: ['data']}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

