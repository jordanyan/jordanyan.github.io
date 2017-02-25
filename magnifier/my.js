//获取元素
var box=document.getElementById("box");
var small=box.children[0];
var big=box.children[1];
var img=big.children[0];
var mask=document.getElementById("mask");
var body=document.body;
//注册事件
small.onmouseenter=function(){
	mask.style.display="block";
	big.style.display="block";
	// body.style.background="url('./images/kobeBig.jpg') center no-repeat";
	// body.style.backgroundSize="100% 100%";
}
small.onmouseleave=function(){
	mask.style.display="none";
	big.style.display="none";
	// body.style.background="";
}
small.onmousemove=function(e){
	var left=e.pageX-mask.offsetWidth/2;
	var top=e.pageY-mask.offsetHeight/2;
	var x=left-100;
	var y=top-100;
	//防止mask滑出small范围
	x=x<0?0:x;
	y=y<0?0:y;
	x=x>small.offsetWidth-mask.offsetWidth?small.offsetWidth-mask.offsetWidth:x;
	y=y>small.offsetHeight-mask.offsetHeight?small.offsetHeight-mask.offsetHeight:y;
	mask.style.left=x+"px";
	mask.style.top=y+"px";

	//mask的移动距离/mask最大移动距离=图片移动距离/图片最大移动距离
	var imgMaxWidth=img.offsetWidth-big.offsetWidth;
	var maskMaxWidth=small.offsetWidth-mask.offsetWidth;
	//求出图片y轴的移动距离
	var imgTop=y*imgMaxWidth/maskMaxWidth;
	//求出图片x轴的移动距离
	var imgLeft=x*imgMaxWidth/maskMaxWidth;
	img.style.marginTop=-imgTop+"px";
	img.style.marginLeft=-imgLeft+"px";
}