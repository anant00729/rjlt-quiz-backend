const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')
const path = require('path')
const request = require('request')
const http = require('http') 

const home_data = require('./util/home.json')






// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))



const app = express()


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.use('/api/auth' , require('./routes/user'))
app.use('/api/quiz' , require('./routes/quiz'))





const PORT = process.env.PORT || 3001


// app.get('/', (req,res)=> {
//     res.json({Hellloe : "helo all"})
// })



//app.use(express.static('./public'))
//app.use(express.static('./public/build'))

//app.use(express.static(path.join(__dirname, 'public/build')));
// Set static folder




app.get('/test', (req,res)=> {

    res.json(home_data)
    // request('https://www.tatacliq.com/', function (error, response, body) {
        
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    //   });
    // request({
    //     method: 'GET',
    //     url: 'https://www.tatacliq.com/'
    // }, (err, res, body) => {
    
    //     if (err) return console.error(err);
    
    //     let $ = cheerio.load(body);
    
    //     let h1El = $('h1');
    
    //     let parentEl = h1El.parent();
    
    //     console.log(parentEl.get(0).tagName)
    // });
})

// app.use(express.static('public/build'));
// app.use(express.static('public'));



// app.get('*', (req,res)=> {
//     ///app.use(express.static('public/build'))
//     //res.sendFile(path.join(__dirname+'/public/build/index.html'));
    
//     res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
//     //res.sendFile(path.resolve(__dirname, 'public/build', 'index.html'))
// })












app.listen(PORT, () => {
    console.log(`the app is running on ${PORT}`);
})