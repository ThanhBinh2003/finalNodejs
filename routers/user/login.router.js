const express = require('express')
const Router = express.Router()

//middleware
const loginMiddleware = require('../../middlewares/login.middleware')
//controller
const loginController = require('../../controllers/login.controller')

// [ROUTING]
// Router.get('/login', loginController.getlogin)
Router.get('/login', loginController.getlogin)

Router.post('/login',loginMiddleware , loginController.postLogin)
module.exports = Router