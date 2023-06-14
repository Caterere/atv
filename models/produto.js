const { DataTypes } = require('sequelize')
const db = require('../db/Conn')
const produto = db.define('produto', {
    nome: {
        type: DataTypes.STRING(30),
    },
    qtde_produto: {
        type: DataTypes.INTEGER
    },
    preco_prod: {
        type: DataTypes.DOUBLE
    }
},{
    createdAt: false,
    updatedAt: false

})

//User.sync({force:true})

 module.exports = produto