const express = require('express')
const usersLogin = require('../routers/user/login.router')

//auth
const loginAuth = require('../auth/loginAuth')
const roleAuth = require('../auth/roleAuth')

function route(app) {

    // [user] LOGIN
    app.use('/users', usersLogin)

    //[GET] HOME_PAGE
    app.get('/',loginAuth, (req, res, next)=>{
        res.render('index')
        
        //views here 
        //
        //return res.status(200).render('views-here')
    })
}

module.exports = route
