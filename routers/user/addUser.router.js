const express = require('express')
const Router = express.Router()

//controller
const addUser = require('../../controllers/addUser.controller')
//
Router.get('/add', addUser)