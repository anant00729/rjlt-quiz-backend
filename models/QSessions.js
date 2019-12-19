const Sequelize = require('sequelize')
const db = require('../config/database')



class QSessions {

  

  static async createQuizSession(qsessionKey,userID){

    let q1 = `INSERT INTO public."QuizSessions"(
      "qsessionKey", "userID")
     VALUES ((:qsessionKey), (:userID));`
    const res_d = await db.query(q1,{
        replacements : {
          qsessionKey, 
          userID
        }
    })

   
    return res_d
  }


  static async disposeQuizSession(qsessionKey){

    let q1 = `DELETE FROM public."QuizSessions" WHERE "qsessionKey" = (:qsessionKey);`
    const res_d = await db.query(q1,{
        replacements : {
          qsessionKey
        }
    })

   
    return res_d
  }


  
}






module.exports = QSessions
