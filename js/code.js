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


	//Fonction d'adaptation de la taille de la liste des joueurs
	var listeHeight = $(window).height() - 160;
	$('.joueurs-detail').css('max-height', listeHeight + 'px');

	$(window).resize(function(){
		var listeHeight = $(window).height() - 160;
		$('.joueurs-detail').css('max-height', listeHeight + 'px');
	});


	//Fonction de changement de nom
	$('.nom-change').keyup(function() {
		$(this).parent().parent().children('.index').children('.nom').text($(this).val());
	});


	//Fonction d'ajout de joueurs
	$('.add-joueur').click(function(){
		$(this).before('
			<li class="joueur">
				<span class="numero">00</span>
				<input type="text" class="numero-change" value="00" style="display: none;">
				<div class="actions-joueur">
					<span class="carton"></span>
					<span class="edit"></span>
					<span class="delete">×</span>
				</div>
			</li>
		');
	});


	//Fonctions des joueurs
	$(document).on("click", '.delete', function(){
		$(this).parent().parent().remove();
	});

	$(document).on("click", '.carton', function(){
		if (!$(this).attr('style'))
		{
			$(this).css('background-color', 'yellow');
		}
		else
		{
			$(this).removeAttr('style');
		}
	});

	$(document).on("click", '.edit', function(){
		$(this).parent().parent().children('.numero').toggle();
		$(this).parent().parent().children('.numero-change').toggle();
	});

	$(document).on("keyup", function(){
		if (event.keyCode == '13')
		{
			$('.numero').show();
			$('.numero-change').hide();
		}
		
	});

	$(document).on("change", '.numero-change', function(){
		$(this).parent().children('.numero').text($(this).val());
	});
});