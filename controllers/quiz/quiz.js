
const  QQuestions = require('../../models/QQuestions')
const  QSessions = require('../../models/QSessions')
const  QResults = require('../../models/QResults')
const {randomString} = require('./../../util/tokenGenerator')

// exports.submitQuizResponse = async (req,res) => {


//     const answer = req.body.answer
//     const userId  = req.user.id || 7
//     const isActive = req.body.isActive || 1
//     const cq_id = req.body.cq_id ||  23

    

//     try{
//         await CAns.create({
//             answer,
//             userId,
//             isActive,
//             cq_id
//         })
//         res.json({Status : true , Message : 'Answer Created'})
//     }catch(err){
//         res.json({Status : false , Message : err.message })
//     }
    
//  }



 exports.getAllQuestionsAndAnswers = async (req,res) => {
    try{

        const pageLimit = req.body.numberOfItems
        const pageNumber = req.body.pageNo 

        const questions = await QQuestions.getAllQuestionsAndAnswers(pageLimit, pageNumber)
        res.json({Status : true , Message :'' , questions})
    }catch(err){
        res.json({Status : false , Message : err.message })
    }
    
 }




 

 exports.addAllQuestions = async (req,res) => {
    const questions = req.body.questions
    try{
        const insertCount = await QQuestions.addQuestions(questions)
        res.json({Status : true , Message : `${insertCount} questions added`})
    }catch(err){
        res.json({Status : false , Message : err.message })
    }
    
 }


 exports.createQuizSession = async (req,res) => {
    try{
        const token = randomString(50)

        await QSessions.createQuizSession(token, req.user.id)
        res.json({Status : true , Message : ``, token})
    }catch(err){
        res.json({Status : false , Message : err.message })
    }
    
 }


 exports.disposeQuizSession = async (req,res) => {
    try{

        const quizToken = req.body.quizToken
        const token = req.body.token
        const questions = req.body.questions

        const correct_ans = await QQuestions.getAllQuestionsAndAnswers(15, 1 ,true)
        
        let score = 0
        for (const _userRes of questions) {
            for (const _correctRes of correct_ans) {
                if(_userRes.id === _correctRes.id){
                    if(_userRes.answered == _correctRes.correctAnswer){
                        ++score 
                    }
                }
            }
        }


        await QSessions.disposeQuizSession(token, req.user.id)
        const expQuizSession = quizToken
        const {id} = req.user 
        const finalScore = `${score}/${questions.length}` 
        await QResults.addQuizResults(expQuizSession ,id , finalScore)

        
        res.json({Status : true , Message : ``, finalScore})
    }catch(err){
        res.json({Status : false , Message : err.message })
    }
    
 }

 exports.getAllResults = async (req,res) => {

    try {
        const quizResList = await QResults.getAllQuizResults()
        res.json({Status : true , Message : ``, quizResList})
        
    } catch (error) {
        res.json({Status : false , Message : error.message })
    }
 }
 



 
 