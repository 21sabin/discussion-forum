const UserModel = require('../model/user');
const HashService = require('../utils/hashfunction');
const hashService = new HashService();

class AuthService {

    registration(user){
        return UserModel.create({
            username:user.username,
            password:hashService.hashPassword(user.password),
            status:1
        })
    }

    signIn(payload){
        return UserModel.findOne({username:payload.username});
    }
}

module.exports=AuthService;