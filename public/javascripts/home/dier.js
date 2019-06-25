function Dier(){
    this.content = $(".content");
    this.init();   
}
Dier.el = `
<div class="row" id="contentDier">
</div>
`
var mask = new Masking();
Dier.prototype = {
    init:function(){
        this.createContent();
    },
    createContent:function(){
        this.content.append(Dier.el);
        this.appendShop();
    },
    appendShop:function(){
        var str = '';
        $.ajax({
            url:'/shop/find',
            type:"get",
            success:this.eachShop.bind(this)
        })
    },
    eachShop:function(obj){
        console.log(obj)
        var str = '';
        $(obj).each(function(i){
            str += `
            <div class="col-sm-6 col-md-4 shoplist">
                <div class="thumbnail">
                    <img src="${obj[i].shopInputFile}">
                    <div class="caption">
                        <h3>￥${obj[i].shopPrice}</h3>
                        <p class="shopTitle" _id=${obj[i]._id}>${obj[i].shopTitle}</p>
                        <p class="shopText">${obj[i].shopText}</p>
                        <p class="double_btn"><a href="" class="btn btn-primary" id="compileBtn" role="button">编辑</a> <a href="" class="btn btn-default removeBtn" id="removeBtn" role="button">删除</a></p>
                    </div>
                </div>
            </div>
            `
        });
        this.content.find('#contentDier').html(str);
        this.removeBtn();
        this.updataBtn();
        
    },
    removeBtn:function(){
        this.content.find("#contentDier #removeBtn").on("click",this.removeBtnClick);
    },
    removeBtnClick(e){
        e.preventDefault();
        let shopInputFile = $(this).parent().parent().parent().find("img").attr("src");
        console.log(shopInputFile);
        $.ajax({
            url:'/shop/remove',
            type:'get',
            data:{
                shopInputFile
            },
            success:function(obj){
                console.log(obj);
                alert(obj.data.info);
                new Dier().appendShop();
            }
        })
    },
    
    updataBtn:function(){
        this.content.find("#contentDier #compileBtn").on("click",this.updataBtnClick);
    },
    updataBtnClick(e){
        e.preventDefault();
        let shopId = $(this).parent().parent().parent().find("img").attr("src");
        new Masking().maskHide(shopId);
    }

}