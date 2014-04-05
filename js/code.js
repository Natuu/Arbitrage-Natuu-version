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

		if (score < 0)
		{
			score = 0;
		}

		$(this).parent().parent().children('.score').text(score);
	});


	// Fonction de couleur
	$('.color-pickable').click(function() {
		var color = $(this).data('color'),
			initalColor = $(this).parent().parent().parent().parent().parent().data('color');

		$(this).parent().parent().parent().parent().parent().removeClass(initalColor).addClass(color).data('color', color);		
	});


	//Fonction d'affichage des equipes
	$('.joueurs').click(function(){
		$(this).parent().parent().parent().children('.index').toggle();
		$(this).parent().parent().parent().children('.options').toggle();
	});
});