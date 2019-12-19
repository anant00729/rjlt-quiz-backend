const express = require('express')
const _a_c = require('../controllers/auth/user')
const {checkUserPresentMiddle} = require('../controllers/auth/checkPresent')

// const multer = require('multer');


// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     }
// });
// var upload = multer({storage: storage});


const _r = express.Router()
_r.post('/register', _a_c.register)
_r.post('/login', _a_c.login)
_r.post('/socialLogin', _a_c.s_login)
_r.get('/truncateAll', _a_c.truncateAll) 
_r.post('/logout', _a_c.logout) 

_r.post('/getAuthorCount', checkUserPresentMiddle ,_a_c.getAuthorCount) 
_r.post('/getAllAuthors', checkUserPresentMiddle ,_a_c.getAllAuthors) 


module.exports = _r

