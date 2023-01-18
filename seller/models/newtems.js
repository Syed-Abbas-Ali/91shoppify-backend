const mongoose=require("mongoose");


const addnewitems=new mongoose.Schema({
    sellerid:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
  
    price:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true    },
    stars:{
        type:String
    },

    images: [],
    // timestamps:true
},

)

const addnewitemsModel = new mongoose.model("items",addnewitems)


module.exports = addnewitemsModel;