const newseller=require("../models/newseller");
const newitems=require("../models/newtems");
const bcrypt=require("bcrypt")

// resgester
const createnewuser=async(req,res)=>{
    const {_id,email,password}=req.body;
    newseller.findOne({email:email},async(err,user)=>{
        if(!user){
            
                const newdata=new newseller(req.body); 
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
    newseller.findOne({email:email},async(err,user)=>{
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


// adding items
const addItems =async(req,res)=>{
    try{
        const {id}=req.body
        const newdata=new newitems(req.body);
        const item=await newdata.save()
        

        await newseller.findOneAndUpdate({_id:id},
            {
                $push:{
                    products:{
                        _id:item._id,
                        name:item.productname
                              }
                }
            }
          )
          res.status(200).json({message:"added successfully"})

    }
    catch(err){()=>{
        res.status(500).json({message:err});
    }
   
}
}



// exporting modules
module.exports={createnewuser,login,addItems}