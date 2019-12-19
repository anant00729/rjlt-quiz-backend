const Sequelize = require('sequelize')
const db = require('../config/database')



class QQuestions {

  static async getAllQuestionsAndAnswers(pageLimit = 15, pageNumber = 1, isForAnswer = false){

    let skipCount = pageLimit * (pageNumber - 1)

    let q 
    if(isForAnswer){
      q = `SELECT "id", "correctAnswer"
      FROM public."QQuestions";` 
    }else {
      q = `SELECT "id", "question", options, "isActive"
      FROM public."QQuestions" LIMIT (:pageLimit) OFFSET (:skipCount);`
    }

    
    const res_d = await db.query(q, {
      replacements : {
        pageLimit, skipCount
      }
    })

    if(!isForAnswer){
      let mainData = res_d[0].map((obj)=> {
        obj.options = JSON.parse(obj.options)
        obj.answered = -1
        return obj
      })
      return mainData
    }else {
      return res_d[0]
    }
    

    
  }


  


  static async addQuestions(questions){

    let i = 0

    for (const _ques of questions) {
      const question = _ques.question
      const correctAnswer = _ques.correctAnswer
      const options = JSON.stringify(_ques.opts)
      const isActive = true

      let q1 = `INSERT INTO public."QQuestions"(
          question, options, "isActive", "correctAnswer")
         VALUES ((:question), (:options), (:isActive), (:correctAnswer));`
     const res_d = await db.query(q1,{
         replacements : {
             question, 
             options,
             isActive,
             correctAnswer
         }
     })
     if(res_d[1] === 1){
         ++i
     }
    }
    return i
  }



}






module.exports = QQuestions
