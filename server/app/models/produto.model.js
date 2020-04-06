module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("novaTabEmpresa", {
    // Campos criados automaticamente
	//id
	//createdAt
	//updatedAt
    nome: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    logoNome: {
      type: Sequelize.STRING
    }
  });
  return Empresa;
};

/*
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
*/
