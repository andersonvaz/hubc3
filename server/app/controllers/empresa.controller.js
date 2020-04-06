const db = require("../models");
const Empresa = db.empresa;
const Op = db.Sequelize.Op;

// Retrieve all Empresas from the database.
exports.findAll = (req, res) => {
  Empresa.findAll()
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

