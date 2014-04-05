$(document).ready(function(){
	var startTime = 0,
	start = 0,
	end = 0,
	diff = 0,
	reset = false,
	timerID = 0,
	running = false;
	 
	$(".chrono").click(function(e){

		if (running === false)
		{
			e.preventDefault();
			Start();
			running = true;
			$(this).css('background-color', '#fefefe').css('color', '#222222');
		}
		else
		{
			e.preventDefault();
			Stop();
			running = false;
			$(this).css('background-color', '#8b8b8b').css('color', '#fefefe');
		}
		
	});
	 
	$("#reset").click(function(e){
		e.preventDefault();
		Reset();
	});
	 
	 
	function chrono(){
		end = new Date();
		diff = end - start;
		diff = new Date(diff);
		var sec = diff.getSeconds();
		var min = diff.getMinutes();
		
		if (sec < 10){
			sec = "0" + sec;
		}
		
		$(".chrono").text(min+"' "+sec+"''");
	}

	function Start(){
		if (reset)
		{
			start = new Date();
		}
		else
		{
			start = new Date()-diff
			start = new Date(start)
		}
		timerID = setInterval(chrono, 1000);
	}
	 
	function Reset(){
		$(".chrono").text("0' 00''");
		start = new Date();
		reset = true;
	}
			
	function Stop(){
		clearTimeout(timerID);
	}
});