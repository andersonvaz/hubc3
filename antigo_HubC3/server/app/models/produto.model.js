module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define("novaTabProduto", {
	// Campos criados automaticamente
	//id
	nome: {
	    allowNull: false,
	    type: Sequelize.STRING
	},
	descricao: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	preco: {
	    allowNull: true,
	    type: Sequelize.FLOAT
	},
	data: {
	    allowNull: true,
	    type: Sequelize.BLOB('long')
	},
	imagemNome: {
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
    
    return Produto;
};

