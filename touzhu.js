$(function(){
	setGameMethod();
	$('.gamecontrol > div ').on('click',function(){
		if(gameimgCurrent($(this))){
			$(this).removeClass('gameimgcurrent');
		} else {
			if(getGameMethod() == 2){
				if(gameimgnum() < 2){
					$(this).addClass('gameimgcurrent');
				} else {
					layer.msg('当前为两骰玩法，最多下注两个图案！',{time:1300});
				}
			} else if(getGameMethod() == 3) {
				if(gameimgnum() < 3) {
					$(this).addClass('gameimgcurrent');
				} else {
					layer.msg('当前为三骰玩法，最多下注三个图案！',{time:1300});
				}
			}
		
			// $(this).siblings().removeClass('gameimgcurrent');
		}
		console.log(gameimgnum());
		console.log(getGameMethod()+'玩法');
});
	$('.zaixian').on('mouseover',function(){
		$(this).addClass('scroll');
});
	$('.zaixian').on('mouseout',function(){
		$(this).removeClass('scroll');
});
	$('.choumaimg').on('click',function(){
		if(choumaCurrent($(this))){
			$(this).removeClass('choumacurrent');
		} else {
			$(this).addClass('choumacurrent');
			$(this).siblings().removeClass('choumacurrent');
		}
	});
	$('#xiazhubtn').on('click',function(){
		console.log(getChouma());
	});
});
