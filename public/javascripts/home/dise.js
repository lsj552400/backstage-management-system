function Dise(){
    this.content = $(".content");
    this.init();
}
Dise.el = `
<form id="contentDise">
  <div class="form-group">
    <label for="activeTitle">文章标题</label>
    <input type="text" class="form-control" id="activeTitle" placeholder="标题">
  </div>
  <div class="form-group">
    <label for="activeAuthor">作者</label>
    <input type="text" class="form-control" id="activeAuthor" placeholder="作者">
  </div>
  <div class="form-group" id="content_fuText">
    <div id='content_fuText1'></div>
    <div id='content_fuText2'></div>
  </div>

  <button type="submit" class="btn btn-primary content_btn">提交</button>
</form>
`
Dise.prototype = {
    init:function(){
        this.createContent();
        this.fuText();
    },
    createContent:function(){
        this.content.append(Dise.el);
    },
    fuText:function(){
        var E = window.wangEditor
        var editor2 = new E('#content_fuText1',"#content_fuText2")
        editor2.create()
    }
    
}