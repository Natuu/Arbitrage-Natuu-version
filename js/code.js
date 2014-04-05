$(function () {

	//Fonction de score
	$('.plus').click(function(){
		var score = $(this).parent().parent().children('.score').text();
		score ++;
		$(this).parent().parent().children('.score').text(score);
	});

	$('.moins').click(function(){
		var score = $(this).parent().parent().children('.score').text();
		score --;
		$(this).parent().parent().children('.score').text(score);
	});

});