//加密模块
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userModel = require("../model/users")

const secret = "sz1905";

const add = function(req, res, next) {
    //接受get提交的数据
    let {username,psword} = req.query;
    userModel.userFind({username},function(data){
        //data存在，用户名存在
        if(data){
            res.json({
                code:200,
                errMsg:'',
                data:{
                    status:1,
                    info:"用户名已存在"
                }
            })
        }else{
            //创建sha256算法 
            const hash = crypto.createHash('sha256');
            //加密内容
            hash.update(psword);
            //得到加密内容
            userModel.userSave({username,psword:hash.digest('hex')},function(){
                res.json({
                    code:200,
                    errMsg:'',
                    data:{
                        status:0,
                        info:"注册成功"
                    }
                })
            })
        }
    })

  };

  const login = function(req, res, next) {
    let {username,psword} = req.query;
    userModel.userFind({username},function(result){
        if(result){
            console.log(result);
            const hash = crypto.createHash('sha256');
            hash.update(psword);
            if(result.psword == hash.digest('hex')){
                //用户名和密码验证成功后发送一个token到客户端

                //token 1 生成一个token
                let token = jwt.sign({username}, secret, { expiresIn: '1h' });
                //向客户端发送cookie
                res.cookie("token",token);


                res.json({
                    code:200,
                    errMsg:'',
                    data:{
                        status:2,
                        info:"登录成功"
                    }
                })
            }else{
                res.json({
                    code:200,
                    errMsg:'',
                    data:{
                        status:5,
                        info:"密码错误"
                    }
                })
            }
        }else{
            res.json({
                code:200,
                errMsg:'',
                data:{
                    status:3,
                    info:"用户名不存在"
                }
            })
        }
    })
  }

  module.exports = {
      add,
      login
  }