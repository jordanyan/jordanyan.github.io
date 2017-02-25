/*轮播图=======================B*/

	function animate(element,target) {
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        var current=element.offsetLeft;
        var step=25;
        step=current<target?step:-step;
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            element.style.left=current+"px";
        }
    },10);

}

	(function(){
		var box=document.getElementById("screen");
		var screen_box=box.children[0];
		var imgWidth=screen_box.offsetWidth;
		var ul=screen_box.children[0];
		var lis=ul.children;
		var ol=screen_box.children[1];
		var arrow=document.getElementById("arrow");
		var arrow_left=document.getElementById("arrow_left");
		var arrow=document.getElementById("arrow");
		var arrow_right=document.getElementById("arrow_right");
		var pic=0;
		for(var i=0,l=lis.length;i<l;i++){
			var li=document.createElement("li");
			li.setAttribute("index",i);
			ol.appendChild(li);
			li.onmouseover=function(){
				for(var j=0,k=ol.children.length;j<k;j++){
					ol.children[j].removeAttribute("class");
				}
				this.className="current";
				var index=parseInt(this.getAttribute("index"));
				animate(ul,-index*imgWidth);
				pic=parseInt(this.getAttribute("index"));
			}
		}
		ol.children[0].className="current";
		ul.appendChild(ul.children[0].cloneNode(true));
		ul.style.width=lis.length*imgWidth+"px";
		ol.style.marginLeft=-(ol.offsetWidth)/2+"px";
		var setId=null;
		setId=setInterval(timer,4000);
		box.onmouseenter=function(){
			arrow.style.display="block";
			clearInterval(setId);
		}
		box.onmouseleave=function(){
			arrow.style.display="none";
			setId=setInterval(timer,4000);
		}
		arrow_right.onclick=timer;
		function timer(){
			if(pic===lis.length-1){
				pic=0;
				ul.style.left=0+"px";
			}
			pic++;
			animate(ul,-pic*imgWidth);
			if(pic===lis.length-1){
				ol.children[0].className="current";
				ol.children[ol.children.length-1].removeAttribute("class");
			}else{
				for(var i=0;i<ol.children.length;i++){
					ol.children[i].removeAttribute("class");
				}
				ol.children[pic].className="current";
			}
		}
		arrow_left.onclick=function () {
    	    if(pic==0){
    	        pic=lis.length-1;
    	        ul.style.left=-pic*imgWidth+"px";
    	    }
    	    pic--;
    	    animate(ul,-pic*imgWidth);
    	    for(var i=0;i<ol.children.length;i++){
    	        ol.children[i].removeAttribute("class");
    	    }
    	    ol.children[pic].className="current";
    	};
}());
/*轮播图=======================E*/

/*热门商品点击小圆点更换图片================B*/
	(function hot_panel(){
		var hot_shop=document.getElementById("hot_shop");
		var ul=hot_shop.children[0];
		var lis=ul.children;
		var img=lis[0].children[4].children[0];
		var circle=lis[0].children[2];
		var circle_red=document.getElementById("circle_red");
		var circle_brown=document.getElementById("circle_brown");
		var operator=document.getElementById("operator");
		circle.style.marginLeft=-(circle.offsetWidth)/2+"px";
		circle_red.onmouseenter=function(){
		img.src="./images/hot1.jpg";
		this.style.border="4px solid #ACB0B3";
		
	}
	circle_red.onmouseleave=function(){
		img.src="./images/hot1.jpg";
		this.style.border="none";
		
	}
	circle_brown.onmouseenter=function(){
		img.src="./images/hot2.jpg";
		this.style.border="4px solid #ACB0B3";
		
	}
	circle_brown.onmouseleave=function(){
		img.src="./images/hot2.jpg";
		this.style.border="none";
		
	}
	for(var i=0,l=lis.length;i<l;i++){
		lis[i].onmouseenter=function(){
			this.children[3].style.visibility="visible";
			this.children[1].style.display="none";
		}
		lis[i].onmouseleave=function(){
			this.children[3].style.visibility="hidden";
			this.children[1].style.display="block";
		}
	}
}());
/*热门商品点击小圆点更换图片================E*/
	

/*官方精选鼠标悬浮显示物品详情===============B*/
(function(){
	var goods=document.getElementById("goods");
	var ul=goods.children[0];
	var lis=ul.children;
	for(var i=0,l=lis.length;i<l;i++){
		lis[i].onmouseenter=function(){
			this.children[3].style.visibility="visible";
			this.children[1].style.display="none";
		}
		lis[i].onmouseleave=function(){
			this.children[3].style.visibility="hidden";
			this.children[1].style.display="block";
		}
	}
}());
/*官方精选鼠标悬浮显示物品详情===============E*/

/*品牌精选鼠标悬浮显示物品详情===============B*/
(function(){
		var off_goods=document.getElementById("off_goods");
		var ul=off_goods.children[0];
		var lis=ul.children;
		for(var i=0,l=lis.length;i<l;i++){
		lis[i].onmouseenter=function(){
			this.children[3].style.visibility="visible";
			this.children[1].style.display="none";
		}
		lis[i].onmouseleave=function(){
			this.children[3].style.visibility="hidden";
			this.children[1].style.display="block";
		}
	}
}());
/*品牌精选鼠标悬浮显示物品详情===============E*/

/*官方精选S-1000耳机圆点==================B*/
	(function(){
		var goods=document.getElementById("goods");
		var ul=goods.children[0];
		var lis=ul.children;
		var circle=lis[2].children[2];
		var beats_red=document.getElementById("beats_red");
		var beats_black=document.getElementById("beats_black");
		var beats_gray=document.getElementById("beats_gray");
		var img=lis[2].children[4];
		beats_red.onmouseenter=function(){
			img.src="./images/beats_red.jpg";
			this.style.border="4px solid #ACB0B3";
		}
		beats_red.onmouseleave=function(){
			img.src="./images/beats_red.jpg";
			this.style.border="none";
		}
		beats_black.onmouseenter=function(){
			img.src="./images/beats_b.jpg";
			this.style.border="4px solid #ACB0B3";
		}
		beats_black.onmouseleave=function(){
			img.src="./images/beats_b.jpg";
			this.style.border="none";
		}
		beats_gray.onmouseenter=function(){
			img.src="./images/beats_g.jpg";
			this.style.border="4px solid #ACB0B3";
		}
		beats_gray.onmouseleave=function(){
			img.src="./images/beats_g.jpg";
			this.style.border="none";
		}
	}());

/*官方精选S-1000耳机圆点==================E*/


/*锤子应用==========================B*/
(function (){
	var app_tech=document.getElementById("app_tech");
	var ul=app_tech.children[1];
	var lis=ul.children;
	var app_content=document.getElementsByClassName("app_content");
	var app_operation=document.getElementsByClassName("app_operation");
	for(var i=0,l=lis.length;i<l;i++){
		lis[i].onmouseenter=function(){
				this.children[0].style.opacity=0;
				this.children[0].style.visibility="hidden";
				this.children[1].style.opacity=1;
				this.children[1].style.visibility="visible";
		}
		lis[i].onmouseleave=function(){
			this.children[0].style.opacity=1;
			this.children[0].style.visibility="visible";
			this.children[1].style.opacity=0;
			this.children[1].style.visibility="hidden";
		}
	}
		
	
}())
/*锤子应用==========================E*/


/*判断页面卷曲的高度==================B*/
	var up=document.getElementById("up");
	window.onscroll=function(){
		if (document.body.scrollTop>500) {
			console.log(document.body.scrollTop);
			up.style.display="block";
		}else{
			up.style.display="none";
		}
	}
/*判断页面卷曲的高度==================E*/
