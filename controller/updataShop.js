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



const updatashop = function(req, res, next) {
    let {shopId,shopTitle,shopPrice,shopText} = req.body;
    let pathUrl = "./../images/"+path.parse(req.files.shopInputFile[0].path).base;
    console.log(req.body,pathUrl);
    shopModel.updatashop({shopInputFile:shopId},{shopTitle,shopPrice,shopText,shopInputFile:pathUrl},function(result){
        console.log({shopTitle,shopPrice,shopText,pathUrl})
        if(result.ok){
            console.log(result);
            res.json({
                code:200,
                errMsg:'',
                data:{
                    status:1,
                    info:"修改成功"
                }
            })
        }
    });
}

module.exports = {
    updatashop,
    cpUpload
}