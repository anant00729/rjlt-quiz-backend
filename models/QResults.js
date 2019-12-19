const Sequelize = require('sequelize')
const db = require('../config/database')



class QResults {

  static async getAllQuizResults(){

    let q = `SELECT
    *
    FROM
    "QuizResults" a
    INNER JOIN "Users" u ON  a."userID" = u."id" ORDER BY a."id" DESC;`  
    const res_d = await db.query(q)
    return res_d[0]
  }

  static async addQuizResults(expQuizSession ,id , finalScore){

    let q1 = `INSERT INTO public."QuizResults"(
      "expQuizSession", "userID", "score")
      VALUES ((:expQuizSession), (:userID), (:score));`
   const res_d = await db.query(q1,{
       replacements : {
        expQuizSession, 
        userID : id,
        score : finalScore
       }
   })

    
    return res_d[1]
  }



}


module.exports = QResults
