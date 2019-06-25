function Masking(){
    this.masking = $('#masKing');
    this.content = $('#contentDier');
}
Masking.prototype = {

    maskHide:function(shopId){
        this.masking.css("display","block");
        this.maskClose();
        this.maskUpload(shopId);
    },
    maskClose:function(){
        this.masking.find('#maskClose').on("click",this.maskCloseClick.bind(this));
    },
    maskCloseClick:function(e){
        e.preventDefault();
        this.masking.css("display","none");
    },
    maskUpload:function(shopId){
        this.masking.find('#maskUpload').on("click",{shopId},this.maskUploadClick.bind(this))
    },
    maskUploadClick:function(e){
        console.log(e.data.shopId);
        e.preventDefault();
        var shopId = e.data.shopId;
        var shopTitle = this.masking.find('#shopTitle');
        var shopPrice = this.masking.find('#shopPrice');
        var shopText = this.masking.find('#shopText');
        var shopInputFile = this.masking.find('#shopInputFile')[0];
        let formData = new FormData();
        //使用append这个方法存入数据
        formData.append("shopId",shopId);
        formData.append("shopTitle",shopTitle.val());
        formData.append("shopPrice",shopPrice.val());
        formData.append("shopText",shopText.val());
        formData.append("shopInputFile",shopInputFile.files[0]);
        $.ajax({
            url:'/shop/updata',
            data:formData,
            cache:false,  //不做缓存，其实POST本身就不会读取缓存中的结构
            processData: false,  // 不处理数据
            contentType: false,   // 不设置内容类型 
            type:"post",
            success:this.shopAddsuccess.bind(this)
        })
    },
    shopAddsuccess:function(obj){
      console.log(obj);
      alert("修改成功");
      this.masking.css("display","none");
      new Dier().appendShop();
    }
}