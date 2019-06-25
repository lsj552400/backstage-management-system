function Home(){
    this.meunAll = $('.meun_list li');
}
Home.prototype={
    init:function(){
        this.createContent();
        this.contentTab(null,0);
    },
    createContent:function(){
        this.meunAll.each(this.echoList.bind(this));
    },
    echoList:function(i){
        this.meunAll.eq(i).on("click",i,this.meunListclick.bind(this));
    },
    meunListclick:function(e){
        this.contentTab(e.data);
    },
    contentTab:function(e,everyNumber){
        if(everyNumber != null){
            $('.content').html("");
            this.meunAll.eq(everyNumber).addClass("active").siblings().removeClass("active");
            this.updateContent(everyNumber);
        }else{
            this.updateContent(e);
        }
    },
    updateContent:function(e){
        switch(e){
            case 0 : $('.content').html("");
                     this.meunAll.eq(e).addClass("active").siblings().removeClass("active");
                     new Diyi();
                     break;
            case 1 : $('.content').html("");
                     this.meunAll.eq(e).addClass("active").siblings().removeClass("active");
                     new Dier();
                     break;
            case 2 : $('.content').html("");
                     this.meunAll.eq(e).addClass("active").siblings().removeClass("active");
                     new Disan();
                     break;
            case 3 : $('.content').html("");
                     this.meunAll.eq(e).addClass("active").siblings().removeClass("active");
                     new Dise();
                     break;
        }
    }
    
}
new Home().init();