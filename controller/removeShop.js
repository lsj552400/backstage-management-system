const shopModel = require("../model/shop")

const removeshop = function(req, res, next) {
    let {shopInputFile} = req.query;
    console.log(shopInputFile)
    shopModel.removeshop({shopInputFile},function(data){
        
        if(data){
            res.json({
                code:200,
                errMsg:'',
                data:{
                    status:1,
                    info:"删除成功"
                }
            })
        }
        
    });
}

module.exports = {
    removeshop
}
