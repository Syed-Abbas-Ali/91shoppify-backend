const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const sellerSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    sellerid:{
        type:String,
        required:true
    },
    email:{
        type: String,
         required: true
    },
    password:{
        type:String,
        required:true
    },

    DOB:{
        type:String
    },
    preaddress:{
        type:String
    },
    location:{
        type:String
    },
    pnumber:{
        type:Number,
    },
    products: [{
        _id:String,
        name:String
    }]
})

//statics signup method
sellerSchema.statics.signupp = async function (fullname, employeeid, email, password) {
    // validation
    if (!fullname || !employeeid || !email || !password) {
      res.send({message:"Please fill all the fields!"});
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid!");
    }
    if (!validator.isStrongPassword(password)) {
      alert("Please choose a strong password");
    }
  
    const exist = await this.findOne({ email });
  
    if (exist) {
      throw Error("Email already exists");
  }}

  sellerSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12)
    }
    next();
   
});






const UserModule=new mongoose.model("seller",sellerSchema);

module.exports=UserModule;
