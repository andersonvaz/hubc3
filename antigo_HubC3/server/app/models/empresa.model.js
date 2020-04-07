module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("novaTabEmpresa", {
	// Campos criados automaticamente
	//id
	nome: {
	    allowNull: false,
	    type: Sequelize.STRING
	},
	telefone: {
	    allowNull: false,
	    type: Sequelize.STRING
	},
	url: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	data: {
	    allowNull: true,
	    type: Sequelize.BLOB('long')
	},
	logoNome: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	createdAt: {
            allowNull: true,
            type: Sequelize.DATE
	},
	updatedAt: {
            allowNull: true,
            type: Sequelize.DATE
	}
    });
    return Empresa;
};

