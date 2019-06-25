function Login(content){
    this.content = content;
    this.init();
}
Login.neirong = `
<form>
    <div class="form-group">
        <label for="login_username">用户名</label>
        <input type="text" class="form-control" id="login_username" placeholder="请输入用户名">
    </div>
    <div class="form-group">
        <label for="login_password">密码</label>
        <input type="password" class="form-control" id="login_password" placeholder="请输入密码">
    </div>
    <button type="submit" class="btn btn-primary login_btn">登录</button>
    <p class="login_pclick">立即注册</p>
</form>  
`
Login.prototype = {
    init:function(){
        this.createPage();
        this.qiehuan();
        this.login();
    },
    createPage:function(){
        this.content.append(Login.neirong);
        
    },
    qiehuan:function(){
        this.content.find('.login_pclick').click(this.dianji.bind(this));
    },
    dianji:function(){
        this.content.html("");
        new Page().createPage(false);
    },
    login:function(){
        this.content.find('.login_btn').click(this.login_btnclick.bind(this));
    },
    login_btnclick:function(e){
        e.preventDefault();
        var username = this.content.find("#login_username").val();
        var psword = this.content.find("#login_password").val();
        $.ajax({
            type:'get',
            url:'/users/login',
            data:{
                username,
                psword
            },
            success:this.successAjax.bind(this)
        })
    },
    successAjax:function(obj){
        console.log(obj);
        if(obj.data.status == 2){
            alert(obj.data.info);
            window.location.href = "/html/home.html";
        }else{
            alert(obj.data.info);
        }
    }
}