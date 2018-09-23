const router = require('express').Router();
const AuthService = require('../service/authService');
const authService = new AuthService();
const HttpHandler = require('./../utils/httpHandler');
const httpHandler = new HttpHandler();
const Hashfunction = require('./../utils/hashfunction');
const hashfunction = new Hashfunction();
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('./../config/key')


router.post('/login', (req, res) => {
    console.log("login")
    authService.signIn(req.body).then(result=>{
        if(bcrypt.compareSync(req.body.password,result.password)){
            let token = jwt.sign({id : result._id},key.secretKey,{ expiresIn:'1d'});
            let { username,_id,role }=result;
            httpHandler.success({token,message:"Enjoy your token",username,_id,role},res)
        }else{
            httpHandler.error({message:"Credentials doesnot matched",success:false},res)
        }
    })
   
});

router.post('/registration', (req, res) => {
    if(req.user){
        authService
        .registration(req.body)
        .then(result => httpHandler.success(result,res))
        .catch(error=>httpHandler.error(error,res))
    }else{
        httpHandler.error({message:"unable to hash for empty object."},res);
    }
   
})

generateToken=()=>{

}

module.exports = router;