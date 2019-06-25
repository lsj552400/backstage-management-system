function Disan(){
    this.content = $(".content");  
    this.init(); 
}
Disan.el = `
<form id="contentDisan">
<div class="form-group">
  <label for="shopTitle">商品名称</label>
  <input type="text" class="form-control" id="shopTitle" placeholder="商品名称">
</div>

<div class="form-group">
  <label for="shopPrice">商品价格</label>
  <input type="text" class="form-control" id="shopPrice" placeholder="商品价格">
</div>

<div class="form-group">
  <label for="shopText">商品描述</label>
  <input type="text" class="form-control" id="shopText" placeholder="商品描述">
</div>

<div class="form-group">
  <label for="shopInputFile">上传商品图片</label>
  <input type="file" id="shopInputFile">
</div>
<button type="submit" class="btn btn-primary contentDisan_btn">上传</button>
</form>
`
Disan.prototype = {
    init:function(){
        this.createContent();
        this.contentDisan_btn();
    },
    createContent:function(){
        this.content.append(Disan.el);
    },
    contentDisan_btn:function(){
       this.content.find('#contentDisan').on("submit",this.addShop.bind(this));
    },
    addShop:function(e){
        e.preventDefault();
        var shopTitle = this.content.find('#shopTitle').val();
        var shopPrice = this.content.find('#shopPrice').val();
        var shopText = this.content.find('#shopText').val();
        //在后面加上[0]将JQ对象转换成原生JS对象
        var shopInputFile = this.content.find('#shopInputFile')[0];

        //使用ajax提交表单,需要实例化一个formdata
        let formData = new FormData();
        //使用append这个方法存入数据
        formData.append("shopTitle",shopTitle);
        formData.append("shopPrice",shopPrice);
        formData.append("shopText",shopText);
        formData.append("shopInputFile",shopInputFile.files[0]);
        $.ajax({
            url:'/shop',
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
      alert("上传成功");
    }
}
