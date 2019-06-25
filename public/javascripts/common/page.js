function Page(){
    this.content = $(".content");
}

Page.prototype = {
    init:function(){
        this.createPage(true);
    },
    createPage:function(flag){
        if(flag){
            this.login = new Login(this.content);
        }else{
            this.add = new Add(this.content);
        }
    }
}


new Page().init();