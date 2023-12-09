const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{

    let token = req.cookies.token
    if (!token)
    {
        return res.redirect('users/login')

    }
    
    const {JWT_SECRET} = process.env

    jwt.verify(token,JWT_SECRET,(err,data)=>{
        if (err)
        {
            return res.redirect('users/login')
        }
        req.user = data
        next();
    })
}