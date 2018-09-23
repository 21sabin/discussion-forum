const mongoose=require('mongoose');
const key = require('./../config/key');

mongoose.connect(key.mongodbUrl,{ useNewUrlParser: true });

mongoose.connection.on('connect',()=>{
    console.log("mongodb connected successfully");
});

mongoose.connection.on('error',(err)=>{
    console.log("error in connection mongodb");
});

module.exports=mongoose;