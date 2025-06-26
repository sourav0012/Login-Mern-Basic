const user = require("../models/user");
const bcrypt = require('bcryptjs');


const registercontroller = async(req,res)=>{
    try{
        const {email,pwd}= req.body;
        let salt = bcrypt.genSaltSync(10);
        let encryptedpwd = bcrypt.hashSync(pwd,salt);
        let userdata= new user({
            email:email,
            pwd: encryptedpwd 
        })
        let result = await userdata.save();
        if(result){
            res.status(201).json({msg:"user registered successfully"})
        }
        else{
            res.status(404).json({msg:"user registration failed"})
        }

    }
    catch(err){
        console.log(err);
        res.status(500).send("internal server error")
    }

}

module.exports = registercontroller