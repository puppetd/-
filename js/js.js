/**
 * Created by Administrator on 2016/8/30.
 */

var XC={
    navUlNode: $(".nav"),
    flashLeftNode: $(".flashLeft"),
    flashRightNode: $(".flashRight"),
    flashUlNode: $(".flash_ul"),
    flashNode: $("#flash"),
    flashDSpanNode:$(".flash_span"),
    mianTransNode:$(".mian_trans"),
    mainANode:$(".photo"),
    MCimgNode:$(".MCimg"),
    MCRightNode:$(".MCRight"),
    MCBLeftNode: $(".MCBLeft"),
    MCBRightNode: $(".MCBRight"),
    MBRightUlNode: $(".MCRight"),
    MBtransnNode:$(".MBtrans"),
    MCbRightNode: $(".MCbRight"),
    MCbLeftNode: $(".MCbLeft"),

    navShowFun:function(e){
        var lisNode=this.navUlNode.children("li");
        var navTopNode=lisNode.children("dl");
        lisNode.mouseover(function(e){
            $(this).children("dl").show();
        });
        navTopNode.children("dd").mouseover(function(e){
            $(this).children("dl").show();
        })
        lisNode.mouseout(function(e){
            $(this).children("dl").hide();
        });

        navTopNode.children("dd").mouseout(function(e){
            $(this).children("dl").hide();
        })
    },

    arrowShowFun:function(){//按钮的隐藏与显示
        var $this = this;
        $this.flashUlNode.mouseover(function (e){
            $this.flashLeftNode.show();
            $this.flashRightNode.show();
        });
        $this.flashUlNode.mouseout(function (e){
            $this.flashLeftNode.hide();
            $this.flashRightNode.hide();
        });
    },

    moveFun:function(){//点击按钮的变化
        var $this=this;
        var lisNode=$this.flashNode.find('li');
        $this.flashLeftNode.click(function(){
            var oldPos=$this.flashUlNode.find('.current').index();//之前li位置
            var lastPos=$this.flashUlNode.find('li').length-1;
            var curPos=oldPos==0?lastPos:oldPos-1;
            $this.changeFun(oldPos,curPos,$this);
        });
        $this.flashRightNode.click(function(){
            var oldPos=$this.flashUlNode.find('.current').index();//之前li位置
            var lastPos=$this.flashUlNode.find('li').length-1;
            var curPos=oldPos==lastPos?0:oldPos+1;
            $this.changeFun(oldPos,curPos,$this);
        });
    },

    spanMoveFun:function(e){//span运动
        var $this=this;
        var flashSpanNode=$this.flashNode.find("span");
        flashSpanNode.mouseenter(function(e){
            if($(this).hasClass("current")){
                return;
            }
            var oldPos=$this.flashNode.find('.current').index();//之前li位置
            var curPos=$(this).index();
            $this.changeFun(oldPos,curPos,$this);
        });
    },

    changeFun:function (oldPos,curPos,$this){//幻灯片运动
        var lisNode=$this.flashNode.find('li');
        var flashSpanNode=$this.flashNode.find("span");
        flashSpanNode.eq(curPos).addClass("current");
        flashSpanNode.eq(oldPos).removeClass("current");
        lisNode.eq(curPos).addClass("current");
        lisNode.eq(oldPos).removeClass("current");
        lisNode.eq(curPos).stop(false,true).fadeIn("slow");
        lisNode.eq(oldPos).stop(false,true).fadeOut("slow");
    },

    transFun:function(){//球运动
        var $this=this;
        var mliNode=$this.mianTransNode.find("li");
        mliNode.mouseenter(function(){
            if($(this).hasClass("main_Cur")){
                return;
            }
            var oldPos=$(".main_Cur").index();
            $(this).addClass("main_Cur").animate({width:"486px"},300);
            mliNode.eq(oldPos).removeClass("main_Cur").animate({width:"160px"},300);
        });
    },

    windFlash:function(){//自动切换
        var $this=this;
        windowDo=setInterval(function(){
            var oldPos=$this.flashUlNode.find('.current').index();//之前li位置
            var lastPos=$this.flashUlNode.find('li').length-1;
            var curPos=oldPos==lastPos?0:oldPos+1;
            $this.changeFun(oldPos,curPos,$this);
        },3000);
        $this.flashUlNode.mouseenter(function(){
            clearInterval(windowDo);
        });
        $this.flashUlNode.mouseleave(function(){
            windowDo=setInterval(function(){
                var oldPos=$this.flashUlNode.find('.current').index();//之前li位置
                var lastPos=$this.flashUlNode.find('li').length-1;
                var curPos=oldPos==lastPos?0:oldPos+1;
                $this.changeFun(oldPos,curPos,$this);
            },3000);
        });
    },

    BigImageFun:function(){//图片缩放
        var $this=this;
        var ImgNode=$this.MCimgNode.find("img");
        var ImgSpanNode=$this.MCimgNode.find("span");
        $this.MCimgNode.mouseenter(function(){
            ImgNode.animate({width:"120%",hight:"120%",marginLeft:"-30px",marginTop:"-20px"},500);
            ImgSpanNode.animate({top:"0"},500);
        });
        $this.MCimgNode.mouseleave(function(){
            ImgNode.animate({width:"100%",hight:"100%",marginLeft:"0px",marginTop:"0px"},500);
            ImgSpanNode.animate({top:"243px"},500);
        });
    },

    CentMoveFun:function(){
        var $this=this;
        var MCliNode=$this.MBRightUlNode.find("li");
        $this.MCBLeftNode.click(function(){
            var oldPos=$this.MBRightUlNode.find('.MBt_cur').index();//之前li位置
            var lastPos=$this.MBRightUlNode.find('li').length-1;
            var curPos=oldPos==0?lastPos:oldPos-1;
            $this.ImgChangeFun(oldPos,curPos,$this,MCliNode);
        });
        $this.MCBRightNode.click(function(){
            var oldPos=$this.MBRightUlNode.find('.MBt_cur').index();//之前li位置
            var lastPos=$this.MBRightUlNode.find('li').length-1;
            var curPos=oldPos==lastPos?0:oldPos+1;
            $this.ImgChangeFun(oldPos,curPos,$this,MCliNode);
        });
    },
    ImgChangeFun:function (oldPos,curPos,$this,MCliNode){//幻灯片运动
        MCliNode.eq(curPos).addClass("MBt_cur");
        MCliNode.eq(oldPos).removeClass("MBt_cur");
        MCliNode.eq(curPos).stop(false,true).show();
        MCliNode.eq(oldPos).stop(false,true).hide();
    },
    ImgMoveFun:function(){
        var $this=this;
        var MBtransliNode=$this.MBtransnNode.find("li");
        $this.MCbLeftNode.click(function(){
            var oldPos=$this.MBtransnNode.find('.MBt_cur').index();//之前li位置
            var lastPos=$this.MBtransnNode.find('li').length-1;
            var curPos=oldPos==0?lastPos:oldPos-1;
            MBtransliNode.eq(curPos).parent().prepend(MBtransliNode.eq(curPos));
            MBtransliNode.eq(curPos).parent().css({marginLeft:'-202px'});
            MBtransliNode.eq(curPos).parent().animate({marginLeft:"0px"},500);
        });
        $this.MCbRightNode.click(function(){
            var oldPos=$this.MBtransnNode.find('.MBt_cur').index();//之前li位置
            var lastPos=$this.MBtransnNode.find('li').length-1;
            var curPos=oldPos==lastPos?0:oldPos+1;
            MBtransliNode.eq(curPos).parent().animate({marginLeft:"-202px"},500,function(){
                $(this).css({marginLeft:'0px'});
                MBtransliNode.eq(curPos).addClass("MBt_cur");
                MBtransliNode.eq(oldPos).removeClass("MBt_cur");
            });
            });
    },
    init:function(){//初始
        this.navShowFun();
        this.arrowShowFun();
        this.moveFun();
        this.spanMoveFun();
        this.transFun();
        this.windFlash();
        this.BigImageFun();
        this.CentMoveFun();
        this.ImgMoveFun();
    }
}
    XC.init();

$('.allShowUl').isotope({
    itemSelector: '.allShow li'
});

$('.showNavUl li').click(function(){
    $(this).addClass('showNav_Cur').siblings('li').removeClass('showNav_Cur');
    var dataValue=$(this).attr('data');
    $('.allShowUl').isotope({
        itemSelector: '.allShowUl li',
        filter:dataValue
    });
});