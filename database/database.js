const Sequelize = require ("sequelize")

const connection = new Sequelize('guiapress','root','Reanimation',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;