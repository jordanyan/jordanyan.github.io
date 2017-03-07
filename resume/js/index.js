(function(){
		var fBall=document.getElementsByClassName("f-ball")[0];
		var sBall=document.getElementsByClassName("s-ball")[0];
		var tBall=document.getElementsByClassName("t-ball")[0];
		var time,index=0,alpha=0;
		clearInterval(time);
		time=setInterval(function(){
			index--;
			alpha++;
			fBall.style.top=70+index+"px";
			fBall.style.left=30+index+"px";
			fBall.style.opacity=alpha/100;

			sBall.style.top=60+index+"px";
			sBall.style.left=70+index+"px";
			sBall.style.opacity=alpha/100;

			tBall.style.top=40+index+"px";
			tBall.style.left=80+index+"px";
			tBall.style.opacity=alpha/100;
			index<=-100&&(index=0);
			alpha>=100&&(alpha=0);
		},100)
	})()