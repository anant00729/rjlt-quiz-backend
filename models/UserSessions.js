const Sequelize = require('sequelize')
const db = require('../config/database')



const UserSession = db.define('UserSession', {
    token  : {
        type : Sequelize.STRING
    },
    userId : {
        type : Sequelize.STRING
    }
    
})



module.exports = UserSession
