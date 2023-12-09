require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
var path = require('path')
const flash = require('express-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')

const route = require('./routers')
const a = express.static(__dirname + '/public')

app.use(express.static(__dirname + '/public')) 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(cookieParser('12345'))
app.use(session({cookie: { maxAge: 60000 }}))
app.use(flash())



// [route]
route(app)   
// app.use('/products',pRouter)
// app.use('/orders',oRouter)
// app.use('/users',uRouter)

app.all('*',(req,res)=>{
    //views here 
    //
    //return res.status('-code-').render('views-here')
    res.json({code:404,
        message:'page not supported'})
})


mongoose.connect('mongodb+srv://thanhbinh:thanhbinh2003@finalnodejs.5v0yiuo.mongodb.net/?retryWrites=true&w=majority',{
    //useNewUrlParser:true,
    //useUnifiedTopology: true
}).then(()=>{
    const PORT = process.env.PORT || 8088
    app.listen(PORT,()=>console.log('http://localhost:'+PORT))
}).catch(e=>console.log('error: '+e.message))
