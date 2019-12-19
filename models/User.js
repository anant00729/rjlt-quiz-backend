const Sequelize = require('sequelize')
const db = require('../config/database')



const User = db.define('User', {
        
        name : {
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        },
        isActive : {
            type : Sequelize.STRING
        },
        UserType : {
            type : Sequelize.STRING
        },
        picture : {
            type : Sequelize.STRING
        }
    
})



module.exports = User
