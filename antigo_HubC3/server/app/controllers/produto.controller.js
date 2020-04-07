const db = require("../models");
const Produto = db.produto;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Retrieve all Produto from Empresa X from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;
    Produto.findAll({
	where: { fkEmpresaId: id },
	attributes: {include: [[sequelize.fn('TO_BASE64', sequelize.col('data')), 'imagem']], exclude: ['data']}
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Produtos from Empresa="+id
      });
    });
};

// Find a single Produto with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

    Produto.findByPk(id, {attributes: {include: [[sequelize.fn('TO_BASE64', sequelize.col('data')), 'imagem']], exclude: ['data']}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Produto with id=" + id
      });
    });
};

