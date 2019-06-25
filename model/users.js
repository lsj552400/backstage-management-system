const mongoose = require("../utils/databass").mongoose;
const User =  mongoose.model("user",{
    username : String,
    psword : String
  })
//数据查
  const userFind = function(userInfo,cb){
      User.findOne(userInfo).then(function(result){
          cb(result);
      })
  }
//数据增
  const userSave = function(userInfo,cb){
      let user = new User(userInfo);
      user.save().then(function(result){
          cb(result)
      })
  }



  module.exports = {
      userFind,
      userSave
  }

  