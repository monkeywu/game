//阻擋右鍵功能
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};

$(window).on('load',function(){
	$('.loading').fadeOut(1000);
	if(game_mode == "gold_mode"){
		$('.coin-mode').css({'display':'none'});
	} else if (game_mode == "coin_mode") {
		$('.gold-mode').css({'display':'none'});
	}
})

window.onunload = function(){
    alert('123');
};
// 8/10
var game_mode = "coin_mode";
var check_coin = 0;
var score_coin_num = 0;


var sound_count = 0;
var win_coin_count = 0;
var win_index = 0;//z-index
var win_count = 0;//中獎海盜特效變數	
var num = 0;//下方按鈕鑽石變數
var pirate_count = 1; //中間底圖特效
var pirate_index = 0; // z-index數字
var barnum = 0;//中bar特效
var auto_default = true;
var i =0; //中獎特效變數
var j =0; //中獎特效變數
var k = 0; //中獎特效變數
var shine_num = 0; //比大小中獎特效變數
var roll =0;
var rollbtn = 0;
var rolldefault = 0;
var rollbtn_control = 0;
var count =0; //起始從左上角開始
var big_small_runtimes;
var time = 500;//變換顏色0.5秒
var big_small_time = 150;
var runtimes; //跑的次數
var round = 0;
var once_more_right_num = 0;
var once_more_left_num = 0;
//比大小計數
var big_small_count = 0;
//壓大或壓小
var bet_small ;
var bet_big ;
var big_small_num = 0;
var big_small_num_result = 0;
//
var startDefault =0;
//左邊四格bet1~bet4數字總和
var left_num = 0;
//右邊四格bet5~bet8數字總和
var right_num = 0;
//round_check = 1 為進入once-more
var round_check = 0;
//進入once-more 額外加注扣元寶
var round_check_add = 0;
// auto_mode = 1 為自動
var auto_mode = 0;
//開始時金幣元寶數
var first_coin = parseInt($('.coin-num').text());
var first_gold = parseInt($('.gold-num').text());
// 結束時元寶數字
var check_gold = 0;
// 押注數字＊倍率
var points =0;
//贏得元寶數字
var score_num =0;
//押注數字陣列
var array = [0,0,0,0,0,0,0,0];
//once-more 額外加注陣列
var once_more_array = [0,0,0,0,0,0,0,0];
//暫存array
var fake_array;
var sec1Btn =0;
var sec2Btn =0;
var sec3Btn =0;
var sec4Btn =0;
var sec5Btn =0;
var sec6Btn =0;
var sec7Btn =0;
var sec8Btn =0;
var once_sec1Btn = 0;
var once_sec2Btn = 0;
var once_sec3Btn = 0;
var once_sec4Btn = 0;
var once_sec5Btn = 0;
var once_sec6Btn = 0;
var once_sec7Btn = 0;
var once_sec8Btn = 0;
//上方總押注數量
var total_bet =0;
var add_total_bet = 0;
var startBtn = document.querySelector('.start');
var smallBtn = document.querySelector('.small');
var bigBtn = document.querySelector('.big');
var autoBtn = document.querySelector('.auto');
var scoreBtn = document.querySelector('.score');
var clearBtn = document.querySelector('.clear');
smallBtn.disabled = true;
bigBtn.disabled = true;
//下方八個按鈕，遊戲執行中不可按
$('#b1').on('click',function(){
	if(sec1Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1 ){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 && rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}

		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec1Btn++;
			splitNum();
			array[0]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec1Btn++;
			splitNum();
			once_more_array[0]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})


$('#b2').on('click',function(){
	
	if(sec2Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec2Btn++;
			splitNum();
			array[1]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec2Btn++;
			splitNum();
			once_more_array[1]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})


$('#b3').on('click',function(){
	if(sec3Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec3Btn++;
			splitNum();
			array[2]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec3Btn++;
			splitNum();
			once_more_array[2]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})



$('#b4').on('click',function(){
	if(sec4Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec4Btn++;
			splitNum();
			array[3]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec4Btn++;
			splitNum();
			once_more_array[3]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})



$('#b5').on('click',function(){
	if(sec5Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec5Btn++;
			splitNum();
			array[4]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec5Btn++;
			splitNum();
			once_more_array[4]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})


$('#b6').on('click',function(){
	if(sec6Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}

		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec6Btn++;
			splitNum();
			array[5]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec6Btn++;
			splitNum();
			once_more_array[5]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})

$('#b7').on('click',function(){
	if(sec7Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec7Btn++;
			splitNum();
			array[6]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec7Btn++;
			splitNum();
			once_more_array[6]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})


$('#b8').on('click',function(){
	if(sec8Btn>=99){
		alert('下注不可大於99');
		return false;
	}
	if(rollbtn == 0 && roll != 0 &&round_check != 1){
		return false;
	}
	if(round_check != 1){
		if(rollbtn >0 && roll != 0 &&rollbtn_control == 0){
		clear_bet();
		rollbtn_control++;
		}
	}
	
		if(round>0) {
		return false;
		} else if (round == 0 && auto_mode != 1){
			sec8Btn++;
			splitNum();
			array[7]++;
		}
		if(round_check == 1 && auto_mode != 1){
			once_sec8Btn++;
			splitNum();
			once_more_array[7]++;
		}
	$('#sound1')[0].play();
	$('#sound1')[0].currentTime=0;
	$('#sound9')[0].play();
	$('#sound9')[0].pause();
	$('#sound10')[0].play();
	$('#sound10')[0].pause();
	$('#sound11')[0].play();
	$('#sound11')[0].pause();
})


// 將數字轉陣列，再將陣列的數字去抓取圖片，length>1代表雙位數
function splitNum() {
 total_bet = sec1Btn + sec2Btn + sec3Btn + sec4Btn + sec5Btn + sec6Btn
   + sec7Btn + sec8Btn;
 left_num = sec1Btn + sec2Btn + sec3Btn + sec4Btn;
 right_num = sec5Btn + sec6Btn + sec7Btn + sec8Btn;
 var x1 = (sec1Btn + '').split('');
 var x2 = (sec2Btn + '').split('');
 var x3 = (sec3Btn + '').split('');
 var x4 = (sec4Btn + '').split('');
 var x5 = (sec5Btn + '').split('');
 var x6 = (sec6Btn + '').split('');
 var x7 = (sec7Btn + '').split('');
 var x8 = (sec8Btn + '').split('');
 $('.sec1 img:nth-child(2)').attr("src", "image/" + x1[0] + ".png");
 $('.sec2 img:nth-child(2)').attr("src", "image/" + x2[0] + ".png");
 $('.sec3 img:nth-child(2)').attr("src", "image/" + x3[0] + ".png");
 $('.sec4 img:nth-child(2)').attr("src", "image/" + x4[0] + ".png");
 $('.sec5 img:nth-child(2)').attr("src", "image/" + x5[0] + ".png");
 $('.sec6 img:nth-child(2)').attr("src", "image/" + x6[0] + ".png");
 $('.sec7 img:nth-child(2)').attr("src", "image/" + x7[0] + ".png");
 $('.sec8 img:nth-child(2)').attr("src", "image/" + x8[0] + ".png");
 // console.log(right_num);
 // console.log(left_num);
 // console.log(round_check);
 if (round_check == 1 && right_num == 0) {
  $('.sec5 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec6 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec7 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec8 img:nth-child(1)').attr("src", "image/dark-8.png");
 }
 if (round_check == 1 && left_num == 0) {
  $('.sec1 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec2 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec3 img:nth-child(1)').attr("src", "image/dark-8.png");
  $('.sec4 img:nth-child(1)').attr("src", "image/dark-8.png");
 }
 if (x1.length > 1) {
  $('.sec1 img:nth-child(2)').attr("src", "image/" + x1[1] + ".png");
  $('.sec1 img:nth-child(1)').attr("src", "image/" + x1[0] + ".png");
 }
 if (x2.length > 1) {
  $('.sec2 img:nth-child(2)').attr("src", "image/" + x2[1] + ".png");
  $('.sec2 img:nth-child(1)').attr("src", "image/" + x2[0] + ".png");
 }
 if (x3.length > 1) {
  $('.sec3 img:nth-child(2)').attr("src", "image/" + x3[1] + ".png");
  $('.sec3 img:nth-child(1)').attr("src", "image/" + x3[0] + ".png");
 }
 if (x4.length > 1) {
  $('.sec4 img:nth-child(2)').attr("src", "image/" + x4[1] + ".png");
  $('.sec4 img:nth-child(1)').attr("src", "image/" + x4[0] + ".png");
 }
 if (x5.length > 1) {
  $('.sec5 img:nth-child(2)').attr("src", "image/" + x5[1] + ".png");
  $('.sec5 img:nth-child(1)').attr("src", "image/" + x5[0] + ".png");
 }
 if (x6.length > 1) {
  $('.sec6 img:nth-child(2)').attr("src", "image/" + x6[1] + ".png");
  $('.sec6 img:nth-child(1)').attr("src", "image/" + x6[0] + ".png");
 }
 if (x7.length > 1) {
  $('.sec7 img:nth-child(2)').attr("src", "image/" + x7[1] + ".png");
  $('.sec7 img:nth-child(1)').attr("src", "image/" + x7[0] + ".png");
 }
 if (x8.length > 1) {
  $('.sec8 img:nth-child(2)').attr("src", "image/" + x8[1] + ".png");
  $('.sec8 img:nth-child(1)').attr("src", "image/" + x8[0] + ".png");
 }
 // 上方總押注數量，轉換圖片方式同上

 var total_bet_num = (total_bet + '').split('');
 // console.log(total_bet_num);
 if (total_bet_num.length == 1) {
  $('.total-num img:nth-child(1)').attr("src",
    "image/" + total_bet_num[0] + ".png");
  $('.total-num img:nth-child(2)').attr("src", "image/dark-8.png");
  $('.total-num img:nth-child(3)').attr("src", "image/dark-8.png");
 }

 if (total_bet_num.length > 1) {
  $('.total-num img:nth-child(1)').attr("src",
    "image/" + total_bet_num[1] + ".png");
  $('.total-num img:nth-child(2)').attr("src",
    "image/" + total_bet_num[0] + ".png");
 }
 if (total_bet_num.length > 2) {
  $('.total-num img:nth-child(1)').attr("src",
    "image/" + total_bet_num[2] + ".png");
  $('.total-num img:nth-child(2)').attr("src",
    "image/" + total_bet_num[1] + ".png");
  $('.total-num img:nth-child(3)').attr("src",
    "image/" + total_bet_num[0] + ".png");
 }
}
$('.auto').click(function(){
	rollbtn = 0;
	var autoname = document.querySelector('.auto').getAttribute("src");
	if( autoname == 'image/auto2.png'){
		$('.auto').attr("src","image/auto2-dark.png");
		auto_mode = 1;
		if(	startDefault == 0 || round == 0){
			if(auto_default == true)
			{
				start();
				auto_default = false;
			}
		}
	}
	if ( autoname == 'image/auto2-dark.png'){
		$('.auto').attr("src","image/auto2.png");
		auto_mode = 0;
	}
})
function auto(){
	var autoname = document.querySelector('.auto').getAttribute("src");
	if(autoname == 'image/auto2-dark.png'){
		if((sec1Btn>0||sec2Btn>0||sec3Btn>0||sec4Btn>0||sec5Btn>0||sec6Btn>0||sec7Btn>0||sec8Btn>0)&&(points == 0)){
			setTimeout(function(){
				if(round == 0){
					start();
				}
			},500)
		} else if ((sec1Btn>0||sec2Btn>0||sec3Btn>0||sec4Btn>0||sec5Btn>0||sec6Btn>0||sec7Btn>0||sec8Btn>0)&&(points > 0)){
			setTimeout(function(){
				if(round == 0){
					start();
				}
			},500)
		}
	} 
}
//取隨機數 
function randANum(max,min){
	var rnd = Math.floor(Math.random()*(max - min + 1)) + min;
	return rnd;
	}
//執行後設定setinterval秒數跟取跑的次數
function start(){
	$('#sound10')[0].pause();
	if(auto_default == false){
		return false;
	}
	round++;
	var coin_num = parseInt($('.coin-num').text());
	var gold_num = parseInt($('.gold-num').text());
	document.getElementById('right-dimaond').src ="image/light-dark.png";
	document.getElementById('left-dimaond').src ="image/light-dark.png";
	$('.count-num img:nth-child(2)').attr("src","image/0.png");
	score();
	if(total_bet == 0){
		alert('請下注');
		round = 0;
		startBtn.disabled = false;
		return false;
	}
	//第一局判斷元寶是否足夠	
	if( game_mode == "gold_mode"){
		if(first_gold-total_bet<0&&roll == 0){
			alert('元寶不足，請儲值');
			round = 0;
			startBtn.disabled = false;
			clear_bet();
			return false;
		}
	} else if (game_mode == "coin_mode") {
		if(first_coin-total_bet<0&&roll == 0){
			alert('金幣不足，請改為元寶模式繼續遊戲');
			round = 0;
			startBtn.disabled = false;
			clear_bet();
			return false;
		}
	}
	
	// once-more狀況下，判斷元寶是否足夠
	if(game_mode == "gold_mode"){
		if (round_check == 1){
			if((gold_num+add_total_bet)-total_bet<0){
			alert('元寶不足，請儲值');
			startBtn.disabled = false;
			round = 0;
			once_more_clear_bet();
			return false;
			}
		}
	} else if (game_mode == "coin_mode") {
		if (round_check == 1){
			if((coin_num+add_total_bet)-total_bet<0){
			alert('金幣不足，請改為元寶模式繼續遊戲');
			startBtn.disabled = false;
			round = 0;
			once_more_clear_bet();
			return false;
			}
		}
	}

	
	// 沒進入once-more狀況下，判斷第二局後元寶是否夠扣
	if(game_mode == "gold_mode") {
		if (round_check == 0){
			if(check_gold-total_bet<0&&roll>0){
				alert('元寶不足，請儲值');
				startBtn.disabled = false;
				round = 0;
				clear_bet();
				return false;
			}
		}
	} else if (game_mode == "coin_mode"){
		if (round_check == 0){
			if(coin_num-total_bet<0&&roll>0){
				alert('金幣不足，請改為元寶模式繼續遊戲');
				startBtn.disabled = false;
				round = 0;
				clear_bet();
				return false;
			}
		}
	}

	if(round_check != 1){
		bet_cost();
		console.log('run normal');
	}
	if(total_bet != add_total_bet&&round_check == 1){
		add_bet_cost();
		console.log('once-more');
	}
	run_animate = setInterval(run_animate_fn,50);
	big_small_count = 0;
	round_check = 0;
	myTimer = setInterval(run,time) ;
	runtimes = randANum(23,0)+72;	
	startBtn.disabled = true;
	scoreBtn.disabled = true;
	}
//讓time每次增加
function stop(){
	clearInterval(myTimer);
	myTimer=setInterval(run,time);
	}
function big_small_stop(){
	clearInterval(my_big_small);
	my_big_small = setInterval(big_small,big_small_time);
}


// 輪流變換格子背景色跟調整秒數
function run(){
	$('.bottom-dimaond>img').eq(num).attr('src','image/light.png');
	$('.bottom-dimaond>img').eq(num).siblings().attr('src','image/light-dark.png');
	num++;
	if (num == 6){
		num = 0;
	}
	if(count%2 == 0){
		$('.light-left img').attr('src','image/light1.png');
		$('.light-right img').attr('src','image/light1.png');
	}
	if(count%2 == 1){
		$('.light-left img').attr('src','image/light2.png');
		$('.light-right img').attr('src','image/light2.png');
	}
	var r = randANum(6,2)
	var r1 = randANum(6,2)
	var r2 = randANum(6,2)
	document.getElementById(((count)%24)).children[0].src ="image/light.png";
	document.getElementById(((count+23)%24)).children[0].src ="image/light-dark.png";
	document.getElementById(((count)%24)).children[r].style.zIndex ="10";
	if(round < runtimes-5){
		if(round>= 2){
			document.getElementById(((count+23)%24)).children[r1].style.zIndex ="10";
		}
		if(round >=3){
			document.getElementById(((count+22)%24)).children[r2].style.zIndex ="10";
		}
		
	}
	document.getElementById(((count+21)%24)).children[2].style.zIndex ="-10";
	document.getElementById(((count+21)%24)).children[3].style.zIndex ="-11";	
	document.getElementById(((count+21)%24)).children[4].style.zIndex ="-12";	
	document.getElementById(((count+21)%24)).children[5].style.zIndex ="-13";	
	document.getElementById(((count+21)%24)).children[6].style.zIndex ="-14";	
	count++;
	i++;
	j++;
	round++;
	stop();
	if(round >= runtimes-5 && round<=runtimes){
		document.getElementById(((count+22)%24)).children[2].style.zIndex ="-10";
		document.getElementById(((count+22)%24)).children[3].style.zIndex ="-11";	
		document.getElementById(((count+22)%24)).children[4].style.zIndex ="-12";	
		document.getElementById(((count+22)%24)).children[5].style.zIndex ="-13";	
		document.getElementById(((count+22)%24)).children[6].style.zIndex ="-14";	
		
	}
	/*if (count%2 == 0){
		document.getElementById('right-dimaond').src ="image/light.png";
		document.getElementById('left-dimaond').src ="image/light-dark.png";						
	} else if (count%2 == 1) {
		document.getElementById('left-dimaond').src ="image/light.png";	
		document.getElementById('right-dimaond').src ="image/light-dark.png";		
	}	*/
	sound_count++;
	if(sound_count <5){
		$('.play').trigger('click');
	}
	if(sound_count == 5){
		$(function(){
		$('.play2').trigger('click');
		})
	}
	if(sound_count >= runtimes-5){
		$('#sound11')[0].pause();
		$('.play').trigger('click');	
	}
	if((round>=3)&&(round<runtimes-6)){
	 	time=35;
	} else if(round == runtimes-5) {
		time=500;
	} else if(round == runtimes) {
		count= Math.floor(((count-1) %24)) ;
		i = Math.floor(((i-1)%24));
		j = Math.floor(((j-1)%24))+24;
	    check();
	    reset();
	    if(auto_mode != 1){
	    	scoreBtn.disabled = false;
		}
		sound_count = 0;
		num = 0;
	    roll++;
	    rolldefault++;
	    startDefault = 0;
	    rollbtn_control = 0;
	    if(roll>1 && auto_mode != 1){
	    	rollbtn = 0;
	    }
	    if (auto_mode == 0){
		    if((sec1Btn>0||sec2Btn>0||sec3Btn>0||sec4Btn>0||sec5Btn>0||sec6Btn>0||sec7Btn>0||sec8Btn>0)&&(points == 0)){
				rollbtn++;
			}
		}
	    /*if(auto_mode == 0&&round_check!=1){
	    	clear_bet();
	    }*/
	}
}
//跑完一圈將參數改為0
function reset() {
	time = 500;
	round = 0;
	runtimes = 0;
	clearInterval(myTimer);
}
//點擊開始執行start()
$('.start').click(function(){
	start();
	startDefault++;
	if(roll>0 && round == 0){
		rollbtn++;
	}
})	

function gold_num(){
	var win_gold_num = (points+'').split('');
	var gold_num = parseInt($('.gold-num').text());
	$('.win-num img:nth-child(1)').attr("src","image/"+win_gold_num[0]+".png");	
	if(win_gold_num.length>1){
		$('.win-num img:nth-child(1)').attr("src","image/"+win_gold_num[1]+".png");	
		$('.win-num img:nth-child(2)').attr("src","image/"+win_gold_num[0]+".png");	
	}
	if(win_gold_num.length>2){
		$('.win-num img:nth-child(1)').attr("src","image/"+win_gold_num[2]+".png");	
		$('.win-num img:nth-child(2)').attr("src","image/"+win_gold_num[1]+".png");
		$('.win-num img:nth-child(3)').attr("src","image/"+win_gold_num[0]+".png");		
	}
	if(win_gold_num.length>3){
		$('.win-num img:nth-child(1)').attr("src","image/"+win_gold_num[3]+".png");	
		$('.win-num img:nth-child(2)').attr("src","image/"+win_gold_num[2]+".png");
		$('.win-num img:nth-child(3)').attr("src","image/"+win_gold_num[1]+".png");		
		$('.win-num img:nth-child(4)').attr("src","image/"+win_gold_num[0]+".png");		
	}
}

function clear(){
	score_num =0;
	points = 0;
}

function score(){
	smallBtn.disabled = true;
	bigBtn.disabled = true;
	var gold_num = $('.gold-num').text();
	var coin_num = $('.coin-num').text();
	if(game_mode == "gold_mode"){
		score_num = parseInt(gold_num)+points;
		document.querySelector('.gold-num').innerHTML = score_num;
		check_gold = score_num;
	} else if (game_mode =="coin_mode"){
		score_coin_num = parseInt(coin_num)+points;
		document.querySelector('.coin-num').innerHTML = score_coin_num;
		check_coin = score_coin_num;
	}
	

	$('.win-num img:nth-child(1)').attr("src","image/0.png");	
	$('.win-num img:nth-child(2)').attr("src","image/dark-8.png");
	$('.win-num img:nth-child(3)').attr("src","image/dark-8.png");		
	$('.win-num img:nth-child(4)').attr("src","image/dark-8.png");
	clear();
}

$('.score').click(function(){
	rollbtn++;
	score();
})

function check(){
	var rollname = document.getElementById(count).getAttribute("class");
	if('flag' == rollname) {
		if(sec7Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
			console.log(sec7Btn);
			}
		points = sec7Btn*10;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('rudder' == rollname){
		if(sec5Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec5Btn*20;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('bar50' == rollname){
		if(sec1Btn>0){
			barnum++;
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec1Btn*50;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('bar100' == rollname){
		if(sec1Btn>0){
			barnum++;
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec1Btn*100;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('bomb' == rollname){
		if(sec8Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec8Btn*5;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('bomb-small' == rollname){
		if(sec8Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec8Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('barrels' == rollname){
		if(sec6Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec6Btn*15;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('rudder-small' == rollname){
		if(sec5Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec5Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('coin' == rollname){
		if(sec4Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec4Btn*20;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('coin-small' == rollname){
		if(sec4Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec4Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('box-big' == rollname){
		if(sec3Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec3Btn*30;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('box-small' == rollname){
		if(sec3Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec3Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('flag-small' == rollname){
		if(sec7Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec7Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('barrels-small' == rollname){
		if(sec6Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec6Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('dimaond-small' == rollname){
		if(sec2Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec2Btn*2;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('dimaond' == rollname){
		if(sec2Btn>0){
			go = setInterval(clockwise,50);
			back = setInterval(Counterclockwise,50);
		}
		points = sec2Btn*40;
		gold_num();
		if(auto_mode != 1){
			smallBtn.disabled = false;
	    	bigBtn.disabled = false;
		}
	} else if ('once-more-left' == rollname){
		total_bet = total_bet-right_num;
		add_total_bet = total_bet;
		sec5Btn = 0;
		sec6Btn = 0;
		sec7Btn =0;
		sec8Btn =0;
		array[4] = 0;
		array[5] = 0;
		array[6] = 0;
		array[7] = 0;
		once_more_array[4] = 0;
		once_more_array[5] = 0;
		once_more_array[6] = 0;
		once_more_array[7] = 0;
		round_check = 1;
		splitNum();
		clearInterval(run_animate);
		$('.first').css({'z-index':10});
		$('.img-box img:nth-child('+pirate_count+')').css({'z-index':-100});
		pirate_count = 1;
		pirate_index = 0;
		once_more_right_num = right_num ;
		once_more_left_num = left_num ;
		if(auto_mode != 1){
			startBtn.disabled = false;
		}
	} else if ('once-more-right' == rollname){
		total_bet = total_bet-left_num;
		add_total_bet = total_bet;
		sec1Btn = 0;
		sec2Btn = 0;
		sec3Btn =0;
		sec4Btn =0;
		array[0] = 0;
		array[1] = 0;
		array[2] = 0;
		array[3] = 0;
		once_more_array[0] = 0;
		once_more_array[1] = 0;
		once_more_array[2] = 0;
		once_more_array[3] = 0;
		round_check = 1;
		splitNum();
		clearInterval(run_animate);
		$('.first').css({'z-index':10});
		$('.img-box img:nth-child('+pirate_count+')').css({'z-index':-100});
		pirate_count = 1;
		pirate_index = 0;
		once_more_right_num = right_num ;
		once_more_left_num = left_num ;
		if(auto_mode != 1){
			startBtn.disabled = false;
		}
	}
	if((sec1Btn>0||sec2Btn>0||sec3Btn>0||sec4Btn>0||sec5Btn>0||sec6Btn>0||sec7Btn>0||sec8Btn>0)&&points == 0){
		auto_default = true;
		bigBtn.disabled = true;
		smallBtn.disabled = true;
		auto();
		startBtn.disabled = false;
		$('.first').css({'z-index':10});
		$('.img-box img:nth-child('+pirate_count+')').css({'z-index':-100});
		pirate_count = 1;
		pirate_index = 0;
		clearInterval(run_animate);
	}
	if((sec1Btn>0||sec2Btn>0||sec3Btn>0||sec4Btn>0||sec5Btn>0||sec6Btn>0||sec7Btn>0||sec8Btn>0)&&points != 0){
			$(function(){
			  $('.play1').trigger('click');
			});

			win_pirate_animate = setInterval(win_animate_fn,75);

			$('.win-coin-img').addClass('move');
			win_coin_move_fn = setInterval(coin_move_fn,50);
			$('.win-coin-img').css({'z-index':8000});
	}

	if(sec1Btn==0&&sec2Btn==0&&sec3Btn==0&&sec4Btn==0&&sec5Btn==0&&sec6Btn==0&&sec7Btn==0&&sec8Btn==0){
		startBtn.disabled = false;
	}
}

function bet_cost() {
	var coin_num = parseInt($('.coin-num').text());
	var gold_num = parseInt($('.gold-num').text());
	startDefault++;
		if(game_mode == "coin_mode"){
			if(roll == 0){
			if(coin_num-total_bet>=0){
				document.querySelector('.coin-num').innerHTML = coin_num - total_bet;
			} else if (coin_num - total_bet<0){
				alert('金幣不足，請改為元寶模式繼續遊戲');
			}
		}
		if(roll>=1){
			if(coin_num-total_bet>=0){
				document.querySelector('.coin-num').innerHTML = coin_num - total_bet;
			} else if (coin_num - total_bet<0){
				alert('金幣不足，請改為元寶模式繼續遊戲');
			}
		}
	} else if (game_mode == "gold_mode"){
		if(game_mode == "gold_mode"){
			if(roll == 0){
			if(gold_num-total_bet>=0){
				document.querySelector('.gold-num').innerHTML = gold_num - total_bet;
			} else if (gold_num - total_bet<0){
				alert('元寶不足，請儲值');
			}
		}
		if(roll>=1){
			if(gold_num-total_bet>=0){
				document.querySelector('.gold-num').innerHTML = gold_num - total_bet;
			} else if (gold_num - total_bet<0){
				alert('元寶不足，請儲值');
			}
		}
	}
}
}

function add_bet_cost() {
	var coin_num = parseInt($('.coin-num').text());
	var gold_num = parseInt($('.gold-num').text());
	startDefault++;
	if(game_mode == "coin_mode"){
			if(roll == 0){
			if((coin_num+add_total_bet)-total_bet>=0){
				document.querySelector('.coin-num').innerHTML = coin_num - total_bet +add_total_bet;
			} else if ((coin_numadd_total_bet)-total_bet<0){
				alert('金幣不足，請改為元寶模式繼續遊戲');
			}
		}
		if(roll>=1){
			if((coin_num+add_total_bet)-total_bet>=0){
				document.querySelector('.coin-num').innerHTML = coin_num - total_bet+add_total_bet;
			} else if ((coin_num+add_total_bet)-total_bet<0){
				alert('金幣不足，請改為元寶模式繼續遊戲');
			}
		}
	} else if (game_mode == "gold_mode"){
			console.log('gold-mode');
			console.log(gold_num);
			console.log(add_total_bet);
			console.log(total_bet);
			if(roll == 0){
			if((gold_num+add_total_bet)-total_bet>=0){
				document.querySelector('.gold-num').innerHTML = gold_num - total_bet+add_total_bet;
			} else if ((gold_num+add_total_bet)-total_bet<0){
				alert('元寶不足，請儲值');
				}
			}
			if(roll>=1){
				if((gold_num+add_total_bet)-total_bet>=0){
					document.querySelector('.gold-num').innerHTML = gold_num - total_bet+add_total_bet;
				} else if ((gold_num+add_total_bet)-total_bet<0){
					alert('元寶不足，請儲值');
				}
			}
		}
}
function clear_bet(){
	array = [0,0,0,0,0,0,0,0];
	once_more_array = [0,0,0,0,0,0,0,0];
	total_bet = 0;
	sec1Btn =0;
	sec2Btn =0;
	sec3Btn =0;
	sec4Btn =0;
	sec5Btn =0;
	sec6Btn =0;
	sec7Btn =0;
	sec8Btn =0;
	once_sec1Btn = 0;
	once_sec2Btn = 0;
	once_sec3Btn = 0;
	once_sec4Btn = 0;
	once_sec5Btn = 0;
	once_sec6Btn = 0;
	once_sec7Btn = 0;
	once_sec8Btn = 0;
	rolldefault = 0;
	$('.total-num img:nth-child(1)').attr("src","image/0.png");
	$('.total-num img:nth-child(2)').attr("src","image/dark-8.png");
	$('.total-num img:nth-child(3)').attr("src","image/dark-8.png");
	$('.footer-num img:nth-child(1)').attr("src","image/dark-8.png");
	$('.footer-num img:nth-child(2)').attr("src","image/0.png");
}
//once-more狀態下注超過元寶數
function once_more_clear_bet(){
	if(once_more_left_num != 0){
		sec5Btn =0;
		sec6Btn =0;
		sec7Btn =0;
		sec8Btn =0;
		once_sec5Btn = 0;
		once_sec6Btn = 0;
		once_sec7Btn = 0;
		once_sec8Btn = 0;
		array[4] = 0;
		array[5] = 0;
		array[6] = 0;
		array[7] = 0;
		once_more_array[4] = 0;
		once_more_array[5] = 0;
		once_more_array[6] = 0;
		once_more_array[7] = 0;
		splitNum();
	} 
	 if (once_more_right_num != 0){
		sec1Btn =0;
		sec2Btn =0;
		sec3Btn =0;
		sec4Btn =0;
		once_sec1Btn = 0;
		once_sec2Btn = 0;
		once_sec3Btn = 0;
		once_sec4Btn = 0;
		array[0] = 0;
		array[1] = 0;
		array[2] = 0;
		array[3] = 0;
		once_more_array[0] = 0;
		once_more_array[1] = 0;
		once_more_array[2] = 0;
		once_more_array[3] = 0;
		splitNum();
	}
}
//比大小
function big_small(){
	big_small_num = randANum(0,9);
	smallBtn.disabled = true;
	bigBtn.disabled = true;
	big_small_count++
	big_small_stop();
	$('.count-num img:nth-child(2)').attr("src","image/"+big_small_num+".png");
	if (big_small_count%2 == 0){
		document.getElementById('right-dimaond').src ="image/light.png";
		document.getElementById('left-dimaond').src ="image/light-dark.png";						
	} else if (big_small_count%2 == 1) {
		document.getElementById('left-dimaond').src ="image/light.png";	
		document.getElementById('right-dimaond').src ="image/light-dark.png";		
	}	
	if(big_small_count >big_small_runtimes-5) {
		big_small_time = 500;
	}
	if (big_small_count == big_small_runtimes){
		clearInterval(my_big_small);
		big_small_time = 150;
		console.log(big_small_num_result+':'+big_small_num);
		big_small_num = big_small_num_result;
		if((big_small_num_result >= 5&&bet_big == 1)||(big_small_num_result <=4 &&bet_small==0)){
			points = points*2;
			console.log('中了');
			gold_num();
			document.getElementById('left-dimaond').src ="image/light-dark.png";	
			document.getElementById('right-dimaond').src ="image/light-dark.png";
			big_small_shine =  setInterval(shine,100);
			$('.count-num img:nth-child(2)').attr("src","image/"+big_small_num+".png");
			big_small_count = 0;
		}
		else if((big_small_num_result< 5&&bet_big == 1)||(big_small_num_result >4 &&bet_small==0)){
			points = 0;
			if(big_small_num_result<5&&bet_big == 1){
			document.getElementById('left-dimaond').src ="image/light-dark.png";	
			document.getElementById('right-dimaond').src ="image/light.png";
			}
			if(big_small_num_result>4&&bet_small == 0){
			document.getElementById('left-dimaond').src ="image/light.png";	
			document.getElementById('right-dimaond').src ="image/light-dark.png";
			}
			console.log('沒中');
			$('.count-num img:nth-child(2)').attr("src","image/"+big_small_num+".png");
			if(auto_mode != 1){
				rollbtn++;	
			big_small_runtimes = 0;
			}
			gold_num();
			$('.win-num img:nth-child(1)').attr("src","image/0.png");	
			$('.win-num img:nth-child(2)').attr("src","image/dark-8.png");
			$('.win-num img:nth-child(3)').attr("src","image/dark-8.png");	
			$('.win-num img:nth-child(4)').attr("src","image/dark-8.png");	
			bet_big = null;
			bet_small = null;
			smallBtn.disabled = true;
			bigBtn.disabled = true;
			big_small_count = 0;
		}
	}
}

$('.big').click(function(){
	bet_big = 1;
	my_big_small = setInterval(big_small,big_small_time);
	big_small_runtimes =  randANum(10,0)+15;
	big_small_num_result = randANum(9,0);
	console.log(big_small_num_result)
})

$('.small').click(function(){
	bet_small = 0;
	my_big_small = setInterval(big_small,big_small_time);
	big_small_runtimes =  randANum(10,0)+15;
	big_small_num_result = randANum(9,0);
})
//順時針跑
function clockwise(){
	i++;
	document.getElementById(((i+1)%24)).children[2].style.zIndex ="10";
	document.getElementById(((i)%24)).children[2].style.zIndex ="-10";
	if(i == count+23){
		clearInterval(go);
		i = count;
	}
}
//逆時針跑
function Counterclockwise(){
	j--;
	document.getElementById(((j)%24)).children[2].style.zIndex ="10";
	document.getElementById(((j+1)%24)).children[2].style.zIndex ="-10";
	if(j -count == 0){
		clearInterval(back);
		j = count;
		if(barnum == 0){
			shinelight = setInterval(shine_light,100);
		}
		if(barnum >0){
			barlight = setInterval(bar,100);
		}
	}
}
//跑的過程特效
function shine_light(){
	if(k%5 == 0){
		document.getElementById(((count)%24)).children[2].style.zIndex ="10";
		document.getElementById(((count)%24)).children[3].style.zIndex ="-11";	
		document.getElementById(((count)%24)).children[4].style.zIndex ="-12";	
		document.getElementById(((count)%24)).children[5].style.zIndex ="-13";	
		document.getElementById(((count)%24)).children[6].style.zIndex ="-14";	
	} else if(k%2 == 1){
		document.getElementById(((count)%24)).children[2].style.zIndex ="-10";
		document.getElementById(((count)%24)).children[3].style.zIndex ="10";	
		document.getElementById(((count)%24)).children[4].style.zIndex ="-12";	
		document.getElementById(((count)%24)).children[5].style.zIndex ="-13";	
		document.getElementById(((count)%24)).children[6].style.zIndex ="-14";		
	} else if (k%5 == 2){
		document.getElementById(((count)%24)).children[2].style.zIndex ="-10";
		document.getElementById(((count)%24)).children[3].style.zIndex ="-11";	
		document.getElementById(((count)%24)).children[4].style.zIndex ="10";	
		document.getElementById(((count)%24)).children[5].style.zIndex ="-13";	
		document.getElementById(((count)%24)).children[6].style.zIndex ="-14";		
	} else if (k%5 == 3){
		document.getElementById(((count)%24)).children[2].style.zIndex ="-10";
		document.getElementById(((count)%24)).children[3].style.zIndex ="-11";	
		document.getElementById(((count)%24)).children[4].style.zIndex ="-12";	
		document.getElementById(((count)%24)).children[5].style.zIndex ="10";	
		document.getElementById(((count)%24)).children[6].style.zIndex ="-14";		
	} else if (k%5 == 2){
		document.getElementById(((count)%24)).children[2].style.zIndex ="-10";
		document.getElementById(((count)%24)).children[3].style.zIndex ="-11";	
		document.getElementById(((count)%24)).children[4].style.zIndex ="-12";	
		document.getElementById(((count)%24)).children[5].style.zIndex ="-13";	
		document.getElementById(((count)%24)).children[6].style.zIndex ="10";		
	}
	k++
	if(k>26){
		clearInterval(shinelight);
		k = 0;
		auto_default = true;
		auto();
		//startBtn.disabled = false;
		$('.first').css({'z-index':10});
		$('.img-box img:nth-child('+pirate_count+')').css({'z-index':-100});
		pirate_count = 1;
		pirate_index = 0
		clearInterval(run_animate);
	}
}
//比大小中獎閃鑽石
function shine(){
	smallBtn.disabled = true;
	bigBtn.disabled = true;
	shine_num++;
	if(big_small_num_result>4&&(bet_big ==1 || bet_small ==0)){
		if(shine_num%2 == 1){
			document.getElementById('left-dimaond').src ="image/light-dark.png";
		} else if (shine_num%2 == 0){
			document.getElementById('left-dimaond').src ="image/light.png";
		}	
	}
	if(big_small_num_result<5&&(bet_big ==1 || bet_small ==0)){
		if(shine_num%2 == 1){
			document.getElementById('right-dimaond').src ="image/light-dark.png";
		} else if (shine_num%2 == 0){
			document.getElementById('right-dimaond').src ="image/light.png";
		}	
	}
	if (shine_num>11){
		clearInterval(big_small_shine);
		big_small_runtimes = 0;
		shine_num = 0;
		smallBtn.disabled = false;
		bigBtn.disabled = false;
		bet_big = null;
		bet_small = null;
	}	
}
//中bar特效
function bar(){
	if(k%2 == 0){
		for(a=0;a<24;a++){
			document.getElementById(((count+a)%24)).children[2].style.zIndex ="10";
			document.getElementById(((count+a)%24)).children[0].src ="image/light.png";
		}
	} else if(k%2 != 0){
	
		for(z=0;z<24;z++){
			document.getElementById(((count+z)%24)).children[2].style.zIndex ="-10";
			document.getElementById(((count+z)%24)).children[0].src ="image/light-dark.png";
		}
	}	
	k++
	if(k>35){
		document.getElementById(((count)%24)).children[2].style.zIndex ="10";
		clearInterval(barlight);
		clearInterval(run_animate);
		$('.first').css({'z-index':10});
		$('.img-box img:nth-child('+pirate_count+')').css({'z-index':-100});
		pirate_count = 1;
		pirate_index = 0;
		k = 0;
		auto_default = true;
		auto();
		startBtn.disabled = false;
		barnum = 0;
	}
}
//中間海盜特效
function run_animate_fn(){
	pirate_count++;
	pirate_index++;
	$('.first').css({'z-index':-10000});
	$('.img-box img:nth-child('+pirate_count+')').css({'z-index':11});
	if(pirate_count >=3) {
		$('.img-box img:nth-child('+(pirate_count-1)+')').css({'z-index':-100-pirate_index});
	}
	if(pirate_count == 58) {
		$('.img-box img:nth-child(58)').css({'z-index':-100-(pirate_index+1)});
		pirate_count = 1;
		pirate_index = 0;
	}
}
//中獎中間海盜特效
function win_animate_fn(){
	$('.win-img img:nth-child('+win_count+')').css({'z-index':20});
	if(win_count>0){
		$('.win-img img:nth-child('+(win_count-1)+')').css({'z-index':-1000-win_index});
	}	
	win_count++;
	win_index++;
	if(win_count == 80){
		$('.win-img img:nth-child(79)').css({'z-index':-1000-win_index-1});
		win_count = 0;
		win_index = 0;
		clearInterval(win_pirate_animate);
		if(auto_mode != 1) {
			startBtn.disabled = false;	
		}
		
	}
}


	$('.play').click(function(){
		$('#sound9')[0].currentTime=0;
		$('#sound9')[0].play();
	})
	

	$('.play1').click(function(){
		$('#sound10')[0].currentTime=0;
		$('#sound10')[0].play();
	})

	$('.play2').click(function(){
		$('#sound11')[0].currentTime=0;
		$('#sound11')[0].play();
	})


//中獎金幣特效
function coin_move_fn(){
	win_coin_count++;
	if(win_coin_count%2 == 0){
		$('.win-coin-img img').attr('src','image/GOLD01.png');
	} else if (win_coin_count%2 ==1 ){
		$('.win-coin-img img').attr('src','image/GOLD02.png');
	}
	
	if(win_coin_count == 120){
		clearInterval(win_coin_move_fn);
		win_coin_count = 0;
		$('.win-coin-img').removeClass('move');
		$('.win-coin-img').css({'z-index':-5000});
	}
}

$('.description').click(function(){
	$('.teach').fadeIn(500);
})

$('.close').click(function(){
	$('.teach').fadeOut(500);
})

//偵測手機是否橫向
var mql = window.matchMedia('(orientation: portrait)');
 function handleOrientationChange(mql) {
if(mql.matches) {
console.log('portrait'); // 列印豎屏
}else {
	alert('請用直立式體驗遊戲!');
}
}

mql.addListener(handleOrientationChange);
 

var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('foo')
var spinner = new Spinner(opts).spin(target);


