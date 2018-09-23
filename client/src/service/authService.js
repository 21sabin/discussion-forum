
const config=require('./../config/baseUrl');

class AuthService {

    login(payload){
        console.log(payload,"payload in serevice")
       return fetch("http://localhost:4000/api/auth/login",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        })
    }
};

module.exports=AuthService;