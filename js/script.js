
function byId(id){
      // 封装一个获取对象函数，方便后期调用；
      return typeof(id) ==="string"?document.getElementById(id):id;
    }
     var index = 0;//图片的索引
     var   timer = null;//计时器
     var  pics = byId("banner").getElementsByTagName("div");//获取banner下的div,其实就是获取到那6张图片
     var len=pics.length;//获取图片总数量
     var dots =byId("dots").getElementsByTagName("span");
     var prev = byId("prev");
     var next = byId("next");

     //函数调用，主要实现 
     //1.鼠标悬停在main这个盒子上，清除定时器；
     //2.鼠标离开main这个盒子，设置计时器并实现轮播效果

     function slideImg(){       
       var main = byId("main");
       main.onmouseover = function(){
        if(timer) clearInterval(timer);
      }//1.鼠标悬停在main这个盒子上，清除定时器；


	   main.onmouseout = function(){
           timer = setInterval(function(){
             index++;
            if(index>=len){
              index=0
            }
              changeImg();
            },1000);}
	    main.onmouseout(); 
      //获取小圆点对应那个图片的索引号
      for(var d=0;d<len;d++){
        dots[d].id=d;
        //实现小圆点点哪里指哪里
        // dots[d].onclick=function(){
        //   index=this.id;
        //   changeImg();
        // }

      }

      //下一张点击事件
    next.onclick = function(){
        index++;
        if(index >= len) index=0;
        changeImg();
      }
      // 36.上一张点击事件
      prev.onclick = function () {
         index--;
         if(index < 0) index=len-1;
         changeImg();
      }


     }//.鼠标离开main这个盒子，设置计时器并实现轮播效果
     
     // 切换图片（将所有图片遍历并且隐藏起来都不显示，显示当前index即可）
     function changeImg(){
      for(var i=0;i<len;i++){
        pics[i].style.display ='none';
        dots[i].className="";
        } 
        pics[index].style.display = 'block';  
        dots[index].className="active";
     }
    slideImg();



