const bcrypt = require('bcrypt');

class HashService {

    hashPassword(password) {
        console.log("hash called",password)
       let hash=bcrypt.hashSync(password,10);
       console.log(hash,"hash created")
       return hash;
    }

    compareHash(password, hashPassword) {
        bcrypt.compareSync(password, hashPassword, (err, result) => {
            console.log(result,"hash result")
            if (result) {
                return true;
            } else {
                return false;
            }
        })
    }
}

module.exports = HashService;