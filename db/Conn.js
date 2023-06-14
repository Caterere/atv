const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('banco_atv','root','senai',{
    host: 'localhost',
    dialect: 'mysql',

})


//sequelize.authenticate().then(()=>{
 //   console.log('Conexão realizada com sucesso!')
//}).catch((error)=>{
 //   console.error('Não foi possivel conectar com o banco'+ error)
//})

module.exports = sequelize
