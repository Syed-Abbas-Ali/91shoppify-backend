const newusers=require("../models/users");
// const newitems=require("../models/newtems");
const bcrypt=require("bcrypt")

// resgester
const createnewuser=async(req,res)=>{
    const {_id,email,password}=req.body;
    newusers.findOne({email:email},async(err,user)=>{
        if(!user){
            
                const newdata=new newusers(req.body); 
                const data= await newdata.save(); 
            res.status(201).send({message:"success"}) 
        }
        else{
          
            res.send({message:"this email already registered"})
        }
    })
 
}

// login
const login=async(req,res)=>{
    const {email,password}=req.body;
    newusers.findOne({email:email},async(err,user)=>{
        const ismatch=await bcrypt.compare(password,user.password)

        if(email !== user.email ){
            return    res.send({message:"Email not found!"})
        }
        if(user){
           if(ismatch){
            res.status(200).json({message:"success",user:user})
           }
           else{
            res.status(401).json({message:"password wrong"})
           }
        }
        else{
          res.status(400).json({message:"user not found"})
        }
    })
 
}


// add to carts
const addcarts=async(req,res)=>{
  
try{
    const id=req.params.id

    const {ids,names}=req.body
    await newusers.findOneAndUpdate({_id:id},
        {
            $push:{
                carts:{
                    _id:ids,
                    name:names
                }
            }
        }
      )
      res.status(200).json({message:"success"})
}
catch(err){()=>
    res.status(500).json({message:err});
}
}


// delete to carts item
const deletecarts=async(req,res)=>{
  
    try{
        const id=req.params.id
    
        const {itemid}=req.body
        await newusers.findOneAndUpdate({_id:id},
           { $pull: { carts: {_id:itemid } }}
          )
          res.status(200).json({message:"success"})
    }
    catch(err){()=>
        res.status(500).json({message:err});
    }
    }






// exporting modules
module.exports={createnewuser,login,addcarts,deletecarts}