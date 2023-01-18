// requireing express from 
 const express=require("express")
 const app=express()

 const cors=require("cors")

//  requiring the routes
const seller= require("./seller/routes/srouter")
const customer= require("./customer/routes/router")



 app.use(express.json())
 app.use(cors())
require("./connection/connection")
 const port=process.env.PORT||4000
 app.use("/seller",seller)
 app.use("/customer",customer)

 app.listen(port,()=>{
    console.log(`server is running on the port:${port}`)
})