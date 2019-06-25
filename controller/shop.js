const shopModel = require("../model/shop")
const path = require("path");
//1.引入处理formData数据的模块
const multer = require("multer");
//2.处理图片的路径以及，设置将客户端传递到服务端的图片的位置
var storage = multer.diskStorage({
    //设置图片的位置
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    //处理图片的名称
    filename: function (req, file, cb) {
      cb(null,'-' + Date.now()+file.fieldname+file.originalname)
    }
})
//3.使用当前配置
var upload = multer({ storage: storage })
//4.设置传递图片的Key值，以及这个key值能传递多少张图片   
var cpUpload = upload.fields([{name:'shopInputFile',maxCount:1}]);




const addshop = function(req, res, next) {
    let {shopTitle,shopPrice,shopText} = req.body;
    let pathUrl = "./../images/"+path.parse(req.files.shopInputFile[0].path).base;
    shopModel.shopSave({shopTitle,shopPrice,shopText,shopInputFile:pathUrl},function(data){
       console.log(data); 
       if(data){
            res.json({
                code:200,
                errMsg:'',
                data:{
                    status:1,
                    info:"图片上传成功"
                }
            })
       }else{
        res.json({
            code:500,
            errMsg:'',
            data:{
                status:1,
                info:"图片上传失败，服务器错误"
            }
        })
       }
    })
}

module.exports = {
    addshop,
    cpUpload
}