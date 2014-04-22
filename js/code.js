$(function () {

	var toChange = 0,
		newValue = 0;

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
				<span class="numero">0</span>
				<div class="actions-joueur">
					<span data-time="120" class="2-min">2"</span>
					<span class="carton"></span>
					<span class="carton"></span>
					<span class="out"></span>
					<span class="out1"></span>
					<span class="out2"></span>
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

		var carton = $(this);

		if (!carton.attr('style'))
		{
			carton.css('background-color', 'yellow');
		}
		else if (carton.css('background-color') === 'rgb(255, 255, 0)')
		{
			carton.css('background-color', 'red');
		}
		else if (carton.css('background-color') === 'rgb(255, 0, 0)')
		{
			carton.removeAttr('style');
		}
	});

<<<<<<< HEAD
	$(document).on("click", ".2-min", function(){

		var $t = $(this);

		if($t.attr('data-time') == 120)
		{
			var interval = setInterval(function(){

				var time = $t.attr('data-time');
				time-- ;

				if(time > 0)
				{
					$t.attr('data-time', time);
					$t.text(parseInt(time / 60) + '" ' + (time % 60) + "'");

					time % 2 == 1 ? $t.addClass('red') : $t.removeClass('red');
				}
				else
				{
					clearInterval(interval);

					$t.removeClass('red');
					$t.text('2"');

					alert('Pénalité joueur ' + $t.parent().parent().find('.numero').text() + ' terminée');
				}

			}, 1000);
		}

	});

	$(document).on("click", '.edit', function(){
		$(this).parent().parent().children('.numero').toggle();
		$(this).parent().parent().children('.numero-change').toggle();
=======
	$(document).on("click", '.out', function(){

		var out = $(this);

		if (!out.attr('style'))
		{
			out.css('background-image', 'url(images/out1x.png)');

			setTimeout(function() {
				out.css('background-image', 'url(images/out1.png)');
			}, 120000);
		}
		else if (out.css('background-image').match(/out1x/g))
		{
			out.css('background-image', 'url(images/out1.png)');
		}
		else if (out.css('background-image').match(/out1/g))
		{
			out.css('background-image', 'url(images/out2x.png)');

			setTimeout(function() {
				out.css('background-image', 'url(images/out2.png)');
			}, 120000);
		}
		else if (out.css('background-image').match(/out2x/g))
		{
			out.css('background-image', 'url(images/out2.png)');
		}
		else if (out.css('background-image').match(/out2/g))
		{
			out.removeAttr('style');
		}
>>>>>>> FETCH_HEAD
	});



	//Fonctions du menu
	$(document).on("click", '.edit', function() {
		toChange = $(this).parent().parent().children('.numero');

		$('.numero-change').text(toChange.text());
		$('.edit-menu').show();
	});

	$('.menu-quit').click(function() {
		if (toChange.text() === '')
		{
			toChange.text('0');
		}

		$('.light-box').hide();
	});


	//Fonctions du numpad
	$(document).on("keyup", function(){

		if (event.keyCode == '13')
		{
			if (toChange.text() === '')
			{
				toChange.text('0');
			}

			$('.light-box').hide();
		}
		else if (event.keyCode == '48' || event.keyCode == '96')
		{
			newValue = $('.numero-change').text() + 0;
		}
		else if (event.keyCode == '49' || event.keyCode == '97')
		{
			newValue = $('.numero-change').text() + 1;
		}
		else if (event.keyCode == '50' || event.keyCode == '98')
		{
			newValue = $('.numero-change').text() + 2;
		}
		else if (event.keyCode == '51' || event.keyCode == '99')
		{
			newValue = $('.numero-change').text() + 3;
		}
		else if (event.keyCode == '52' || event.keyCode == '100')
		{
			newValue = $('.numero-change').text() + 4;
		}
		else if (event.keyCode == '53' || event.keyCode == '101')
		{
			newValue = $('.numero-change').text() + 5;
		}
		else if (event.keyCode == '54' || event.keyCode == '102')
		{
			newValue = $('.numero-change').text() + 6;
		}
		else if (event.keyCode == '55' || event.keyCode == '103')
		{
			newValue = $('.numero-change').text() + 7;
		}
		else if (event.keyCode == '56' || event.keyCode == '104')
		{
			newValue = $('.numero-change').text() + 8;
		}
		else if (event.keyCode == '57' || event.keyCode == '105')
		{
			newValue = $('.numero-change').text() + 9;
		}
		else if (event.keyCode == '46' || event.keyCode == '8')
		{
			newValue = $('.numero-change').text();
			newValue = newValue.slice(0, -1);
		}

		if ($('.light-box').css('display') !== 'none')
		{
			$('.numero-change').text(newValue);
			toChange.text(newValue);
		}
	});

	$('.numpad-1').click(function() {
		newValue = $('.numero-change').text() + 1;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-2').click(function() {
		newValue = $('.numero-change').text() + 2;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-3').click(function() {
		newValue = $('.numero-change').text() + 3;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-4').click(function() {
		newValue = $('.numero-change').text() + 4;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-5').click(function() {
		newValue = $('.numero-change').text() + 5;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-6').click(function() {
		newValue = $('.numero-change').text() + 6;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-7').click(function() {
		newValue = $('.numero-change').text() + 7;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-8').click(function() {
		newValue = $('.numero-change').text() + 8;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-9').click(function() {
		newValue = $('.numero-change').text() + 9;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-0').click(function() {
		newValue = $('.numero-change').text() + 0;
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});

	$('.numpad-del').click(function() {
		newValue = $('.numero-change').text();
		newValue = newValue.slice(0, -1);
		$('.numero-change').text(newValue);
		toChange.text(newValue);
	});
});