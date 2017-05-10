$(function() {
	var tab = ['un', 'deux', 'trois', 'quatre']; // Noms des classes principales
	
	var nb = 0; // Valeur de nb : un=0, deux=1, trois=2, quatre=3

  $('.page').click (function() {
  	$( ".active" ).removeClass( "active" )
    $(this).addClass('active');
	});

  $('.un').addClass('active');
});