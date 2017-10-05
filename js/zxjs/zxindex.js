$(function(){

	// 导航
	var zx_nav_inner=$('.zx-nav-inner')[0]
	var zx_word=$(".zx-word");
	var zx_line=$(".zx-line")[0];

Array.from(zx_word).forEach(function(val,index){
	// var zx_bw=index*100+"px";
	val.onmouseenter=function(){
		for(var i=0;i<zx_word.length;i++){
			zx_word[i].style.color="#666";
		}
		zx_word[index].style.color="#FF67AE";
		zx_line.style.left=+100*index+'px';
	}
})

// banner
	var zx_banner=$('.zx-banner')[0];
	var zx_lise=$('.zx-bannerImg');
	var zx_dian=$('.zx-dian1')
	var num=0;
	function move(type="r"){
		if(type=='r'){
			num++;
			if(num>=zx_lise.length){
			num=0;
			}
		}else if(type=='l'){
			num--;
			if(num<0){
				num=zx_lise.length-1;
			}
		}
		for(var i=0;i<zx_lise.length;i++){
			zx_lise[i].style.zIndex='2';
			zx_dian[i].style.width="13px"
			zx_dian[i].style.borderRadius="50%";
		}
		zx_lise[num].style.zIndex="30";
		zx_dian[num].style.width="32px"
		zx_dian[num].style.borderRadius="10px"

	}
	var t=setInterval(function(){
		move();

	},2000)

	zx_banner.onmouseenter=function(){
		clearInterval(t);

	}
	zx_banner.onmouseleave=function(){
		t=setInterval(function(){
		move();

	},2000)
	}

	Array.from(zx_dian).forEach(function(val,index){
		val.onmouseenter=function(){
			num=index-1;
			move()
		}

	})

// 加盟案例
	var JM_box1=$('.JM-box1')[0];
	var JM_dong=$('.JM-dong');
	var JM_dian=$('.JM-dian')
	var num1=0;
	function move1(type='r'){
		if(type=='r'){
			num1++;
			if(num1>=JM_dong.length){
				num1=0;
			}
		}else if(type=="l"){
			num1--;
			if(num1<0){
				num1=JM_dong.length-1
			}
		}
		for(i=0;i<JM_dong.length;i++){
		JM_dong[i].style.zIndex='2';
		JM_dian[i].style.width='11px';
		JM_dian[i].style.borderRadius='50%';
		JM_dian[i].style.background='#FFDC36';

		}
		JM_dong[num1].style.zIndex='20';
		JM_dian[num1].style.width='17px';
		JM_dian[num1].style.borderRadius='5px';
		JM_dian[num1].style.background='#FF3795';
	}
	
	var t1=setInterval(function(){
		move1()
	},1000)

	JM_box1.onmouseenter=function(){
		clearInterval(t1)
	}
	JM_box1.onmouseleave=function(){
		t1=setInterval(function(){
		move1();
	},1000)
	}

	Array.from(JM_dian).forEach(function(val1,index1){
		val1.onmouseenter=function(){
			alert(1)
			num1=index1-1;
			move1()
		}

	})














})