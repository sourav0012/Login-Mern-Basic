const user = require("../models/user");
const bcrypt = require('bcryptjs');


const logincontroller = async(req,res)=>{
    try{
        const {email,pwd}= req.body;
        let chk=await user.findOne({email:email});
        if(chk){
            let result = await bcrypt.compare(pwd,chk.pwd);
            if(result){
                res.status(200).json({msg:"user logged in successfully"});
            }
            else{
                res.status(404).json({msg:"user login failed"});
            }   
        }

    }
    catch(err){
        console.log(err);
        res.status(500).send("internal server error")
    }

}

module.exports = logincontroller