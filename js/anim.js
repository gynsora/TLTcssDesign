
$(document).ready(function(){
	$('.hamburger').on('click', function(){
		$('.nav-links').toggleClass('open');

	});
	
	/*
	var i = 0;
	var txt = 'Web developer junior and  Game developer junior';
	var speed = 50;
	typeWriter();
	function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("demo").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	  }
	}
	*/
	AOS.init({
		easeing:'ease',
		duration:1800 ,
		once:true
	});
});