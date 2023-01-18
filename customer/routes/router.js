const express = require('express');

const routes=express.Router()



const {createnewuser,login,addcarts,deletecarts}=require("../controller/controller")
routes.post("/create",createnewuser)
routes.post("/login",login)
routes.patch("/addtocarts/:id",addcarts)
routes.patch("/deletecarts/:id",deletecarts)
// routes.post("/additems",addItems)

module.exports=routes

