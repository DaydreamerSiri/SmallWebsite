$(function(){
	
	
	$("#registrationbtn").click(function(){
			
		
			location.href = "register.html";
		
	});
		
	$("#registrationbtn2").click(function(){
		location.href="index.html";
			alert("Sie haben erfolgreich all ihr Geld auf unser Konto überwiesen x)");
		
	});
	
	$("#loginbtn").click(function(){
		location.reload();
	});
	
	$("#back").click(function(){
		location.href="index.html"
	});
	
});