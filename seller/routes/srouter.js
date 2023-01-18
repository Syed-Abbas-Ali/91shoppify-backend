const express = require('express');

const routes=express.Router()



const {createnewuser,login,addItems}=require("../controller/controller")
routes.post("/create",createnewuser)
routes.post("/login",login)
routes.post("/additems",addItems)

module.exports=routes

