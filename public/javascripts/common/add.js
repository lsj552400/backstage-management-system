function Add(content){
    this.content = content;
    this.init();
}
Add.neirong = `
<form>
    <div class="form-group">
        <label for="add_username">用户名</label>
        <input type="text" class="form-control" id="add_username" placeholder="请输入用户名">
    </div>
    <div class="form-group">
        <label for="add_password">密码</label>
        <input type="password" class="form-control" id="add_password" placeholder="请输入密码">
    </div>
    <button type="submit" class="btn btn-primary add_btn">注册</button>
    <p class="add_pclick">已有账号，立即登录</p>
</form>  
`
Add.prototype = {
    init:function(){
        this.createPage();
        this.qiehuan();
        this.add();
    },
    createPage:function(){
        this.content.append(Add.neirong);
    },
    qiehuan:function(){
        this.content.find(".add_pclick").click(this.dianji.bind(this));
    },
    dianji:function(){
        this.content.html("");
        new Page().createPage(true);
    },
    add:function(){
        this.content.find(".add_btn").click(this.add_btnclick.bind(this));
    },
    add_btnclick:function(e){
        e.preventDefault();
        var username = this.content.find("#add_username").val();
        var psword = this.content.find("#add_password").val();
        $.ajax({
            type:'get',
            data:{
                username:username,
                psword:psword
            },
            url:'/users/add',
            success:this.successAjax.bind(this)
        })
    },
    successAjax:function(obj){
        alert(obj.data.info);
    }
}
