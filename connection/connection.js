const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/91Shoppy")

.then(()=>{
    console.log("connection is stablished")
})

.catch(()=>{
    console.log(`error is :${err}`)
})
