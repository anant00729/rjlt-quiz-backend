const express = require('express')

const _a_c = require('../controllers/quiz/quiz')
const {checkUserPresentMiddle} = require('../controllers/auth/checkPresent')


const _r = express.Router()
_r.post('/getAllQuestions', checkUserPresentMiddle ,_a_c.getAllQuestionsAndAnswers)

_r.post('/addAllQuestions', checkUserPresentMiddle ,_a_c.addAllQuestions)
_r.post('/createQuizSession', checkUserPresentMiddle ,_a_c.createQuizSession)
_r.post('/summitScore', checkUserPresentMiddle ,_a_c.disposeQuizSession)
_r.post('/getAllResults', checkUserPresentMiddle ,_a_c.getAllResults)



module.exports = _r

