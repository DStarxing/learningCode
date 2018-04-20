function choumaCurrent($this) {
	return $this.hasClass('choumacurrent');
}
function gameimgCurrent($this) {
	return $this.hasClass('gameimgcurrent');
}
function gameimgnum() {
	var num = 0;
	var divs = $('.gamecontrol > div');
	divs.each(function(index,val){
		if($(val).hasClass('gameimgcurrent')){
			num++;
		}
	});
	return num;
}
function getGameMethod() {
	return $('#wanfa').val();
}
function setGameMethod() {
	if($('#wanfa').val() == 2){
		$('#gameTwo').addClass('gamecurrent');
	} else if($('#wanfa').val() == 3) {
		$('#gameThree').addClass('gamecurrent');
	}
}
function getChouma() {
	var s = $('.choumaimg');
	var money = 0;
	s.each(function(i,v){
		if($(v).hasClass('choumacurrent')) {
			money = $(this).attr('money');
		
		}
	});
		return money;
}
function getTouZhu() {
	var a = $('.gamecontrol > div');
	var zhu = '';
	a.each(function(i,v){

	});
}