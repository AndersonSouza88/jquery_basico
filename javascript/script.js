
// JavaScript Document

$(document) .ready(function(){
	
	$(".fa-arrow-circle-right").click(function(){
		var imageUrl ="imagens/rock2.jpg";
		$("#slider").css("background-image", "url(" + imageUrl +")");
		$("#slider").css("transition","0.5s");
		$(".caixadetexto").text("R.I.P CHESTER");
		
	});
	
});

$(document) .ready(function(){
	
	$(".fa-arrow-circle-left").click(function(){
		var imageUrl ="imagens/rock1.jpg";
		$("#slider").css("background-image", "url(" + imageUrl +")");
		$("#slider").css("transition","0.5s");
		$(".caixadetexto").text("LINKIN PARK ");
		
	});
	
});












$(document).ready(function(){//cria função
	
	$(".cabecalho1").click(function(){//usa o construtor para adicionar uma opção de clique na div que esta sendo chamada
		$(".imagem_album1").slideToggle("slow");/*definindo que a div sera afetada pelo parametro SLIDERTOGGLE, que esta vindo da biblioteca
		jquery e criando o efeito ACCORDION dentro da mesma*/
		
	});
		
});

$(document).ready(function(){
	
	$(".cabecalho2").click(function(){
		$(".imagem_album2").slideToggle("slow");
		
	});
		
});
$(document).ready(function(){
	
	$(".cabecalho3").click(function(){
		$(".imagem_album3").slideToggle("slow");
		
	});
		
});
$(document).ready(function(){
	
	$(".cabecalho4").click(function(){
		$(".imagem_album4").slideToggle("slow");
		
	});
		
});
$(document).ready(function() {
	var videoID = 'V1';
	var soucerID = 'srcVideo';
	var newmp4 = 'videos/givenup.mp4';
	
	
	$('#btnGU').click(function(event) {
		
		$('#' + videoID) .get(0).pause();//pausa o video
		$('#' + soucerID) .attr('src', newmp4);//troca o caminho do video
		$('#' + videoID) .get(0).load();//recarrega a pagina
		$('#' + videoID) .get(0).play();//da play no video
		
		
		});
	
	
	
	
});

$(document).ready(function() {
	var videoID = 'V1';
	var soucerID = 'srcVideo';
	var newmp4 = 'videos/fromtheinside.mp4';
	
	
	$('#btnFTI').click(function(event) {
		
		$('#' + videoID) .get(0).pause();//pausa o video
		$('#' + soucerID) .attr('src', newmp4);//troca o caminho do video
		$('#' + videoID) .get(0).load();//recarrega a pagina
		$('#' + videoID) .get(0).play();//da play no video
		
		
		});
	
	
	
	
});
$(document).ready(function() {
	var videoID = 'V1';
	var soucerID = 'srcVideo';
	var newmp4 = 'videos/intheend.mp4';
	
	
	$('#btnITE').click(function(event) {
		
		$('#' + videoID) .get(0).pause();//pausa o video
		$('#' + soucerID) .attr('src', newmp4);//troca o caminho do video
		$('#' + videoID) .get(0).load();//recarrega a pagina
		$('#' + videoID) .get(0).play();//da play no video
		
		
		});
	
	
	
	
});
$(document).ready(function() {
	var videoID = 'V1';
	var soucerID = 'srcVideo';
	var newmp4 = 'videos/numb.mp4';
	
	
	$('#btnNUMB').click(function(event) {
		
		$('#' + videoID) .get(0).pause();//pausa o video
		$('#' + soucerID) .attr('src', newmp4);//troca o caminho do video
		$('#' + videoID) .get(0).load();//recarrega a pagina
		$('#' + videoID) .get(0).play();//da play no video
		
		
		});
	
	
	
	
});








