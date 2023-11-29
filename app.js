const express = require('express')
const pRouter = require('./routers/ProductRouter')
const oRouter = require('./routers/OrderRouter')
const uRouter = require('./routers/UserRouter') 


const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.json({code:0,message:'success'})
})

app.use('/products',pRouter)
app.use('/orders',oRouter)
app.use('/users',uRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>console.log('http://localhost:'+PORT))