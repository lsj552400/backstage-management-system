function Diyi(){
    this.content = $(".content");  
    this.init(); 
}
Diyi.el = `
<div class="row content_row">
    <div class="col-md-3 cont_rowDiv1">注册量</div>
    <div class="col-md-3 cont_rowDiv2">访问量</div>
    <div class="col-md-3 cont_rowDiv3">商品量</div>
</div>
<div class="content_rowEcha row">
    <div id="content_echart" class="col-md-12"></div>
</div>

`
Diyi.prototype = {
    init:function(){
        this.createContent();
        this.contentEchart();
    },
    createContent:function(){
        this.content.html(Diyi.el);
    },
    contentEchart:function(){
        var app = echarts.init(document.getElementById('content_echart'));

        // 指定图表的配置项和数据
        app.title = '坐标轴刻度与标签对齐';

        option = {
            color: ['hotpink'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '80%',
                    data:[500, 320, 312, 124, 90, 430, 320]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        app.setOption(option);
    }
  
}