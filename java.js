
$('#goch .box').easyDrag();
$('.sauce').easyDrag();
$('#bg').delay('2000').fadeOut(5000);

$('#m').click(function(){
  $('#bite').attr("href",'');
  $('#bite').html('Mail reçu');
  $('#photo').css('content',"url('./src/mailmarie.jpg'");
  $('#bite').css('textDecoration','none');
});
$('#m1').click(function() {
    $('#photo').css('content',"url('./src/marimg1.jpg'");
    $('#bite').attr("href",'https://www.flickr.com/photos/kampalilas/');
    $('#bite').html("https://www.flickr.com/photos/kampalilas/");
    $('#bite').css('textDecoration','underline');
});
$('#m2').click(function() {
    $('#photo').css('content',"url('./src/marimg2.jpg'");
    $('#bite').attr("href",'https://www.flickr.com/photos/kampalilas/');
    $('#bite').html("https://www.flickr.com/photos/kampalilas/");
    $('#bite').css('textDecoration','underline');
});
$('#m3').click(function() {
    $('#photo').css('content',"url('./src/marimg3.jpg'");
    $('#bite').attr("href",'https://www.flickr.com/photos/kampalilas/');
    $('#bite').html("https://www.flickr.com/photos/kampalilas/");
    $('#bite').css('textDecoration','underline');
});
$('#m4').click(function() {
    $('#photo').css('content',"url('./src/marimg4.jpg'");
    $('#bite').attr("href",'https://www.flickr.com/photos/kampalilas/');
    $('#bite').html("https://www.flickr.com/photos/kampalilas/");
    $('#bite').css('textDecoration','underline');
});
$('#m5').click(function() {
    $('#photo').css('content',"url('./src/marimg5.jpg'");
    $('#bite').attr("href",'https://www.flickr.com/photos/kampalilas/');
    $('#bite').html("https://www.flickr.com/photos/kampalilas/");
    $('#bite').css('textDecoration','underline');
});
$('#eri1').click(function() {
    $('#photo').css('content',"url('./src/arme.jpg'");
    $('#bite').attr("href",'');
    $('#bite').html("Kerguelen");
    $('#bite').css('textDecoration','none');
});
$('#eri2').click(function() {
    $('#photo').css('content',"url('./src/arme2.jpg'");
    $('#bite').attr("href",'');
    $('#bite').html("Kerguelen");
    $('#bite').css('textDecoration','none');
});
$('#eri3').click(function() {
    $('#photo').css('content',"url('./src/arme3.jpg'");
    $('#bite').attr("href",'');
    $('#bite').html("Kerguelen");
    $('#bite').css('textDecoration','none');
});
$('#ambre').click(function() {
    $('#photo').css('content',"url('./src/mailambre.jpg'");
    $('#bite').attr("href",'');
    $('#bite').html("Mail reçu");
    $('#bite').css('textDecoration','none');
});
$('#jesu1').click(function() {
    $('#photo').css('content',"url('./src/jesusimg1.jpg'");
    $('#bite').attr("href",'https://jesus-sbaptista.tumblr.com/');
    $('#bite').html("https://jesus-sbaptista.tumblr.com/");
    $('#bite').css('textDecoration','underline');
});
$('#jesu2').click(function() {
    $('#photo').css('content',"url('./src/jesusimg2.jpg'");
    $('#bite').attr("href",'https://jesus-sbaptista.tumblr.com/');
    $('#bite').html("https://jesus-sbaptista.tumblr.com/");
    $('#bite').css('textDecoration','underline');
});
$('#jesu3').click(function() {
    $('#photo').css('content',"url('./src/jesusimg3.jpg'");
    $('#bite').attr("href",'https://jesus-sbaptista.tumblr.com/');
    $('#bite').html("https://jesus-sbaptista.tumblr.com/");
    $('#bite').css('textDecoration','underline');
});
$(document).ready(function () {
    $('#sqmar').click(function () {
	$('ul.menugmarie').slideToggle('medium');
    });
});
$(document).ready(function () {
    $('#sqeric').click(function () {
	$('ul.menugeric').slideToggle('medium');
    });
});
$(document).ready(function () {
    $('#sqambr').click(function () {
	$('ul.menugambre').slideToggle('medium');
    });
});
$(document).ready(function () {
    $('#sqjesus').click(function () {
	$('ul.menugjesus').slideToggle('medium');
    });
});
//opopopo
  //ARM ERI
pop(document.getElementById("arm01"));
pop(document.getElementById("arm02"));
pop(document.getElementById("arm03"));
pop(document.getElementById("arm04"));
    //MAR
pop(document.getElementById("mar01"));
pop(document.getElementById("mar02"));
pop(document.getElementById("mar03"));
pop(document.getElementById("mar04"));
pop(document.getElementById("mar05"));
pop(document.getElementById("mar06"));
pop(document.getElementById("mar07"));
pop(document.getElementById("mar08"));
pop(document.getElementById("mar09"));
pop(document.getElementById("mar10"));
  //AMBRE
pop(document.getElementById("amb01"));
pop(document.getElementById("amb02"));
pop(document.getElementById("amb03"));
pop(document.getElementById("amb04"));
pop(document.getElementById("amb05"));
  //JESUS
popson(document.getElementById("jes01"));
pop(document.getElementById("jes02"));
popson(document.getElementById("jes03"));
pop(document.getElementById("jes04"));
pop(document.getElementById("jes05"));
popson(document.getElementById("jes06"));
popson(document.getElementById("jes07"));
pop(document.getElementById("jes08"));
pop(document.getElementById("jes09"));
pop(document.getElementById("jes10"));
//SONSON
son(document.getElementById("jes01son"));
son(document.getElementById("jes03son"));
son(document.getElementById("jes06son"));
son(document.getElementById("jes07son"));
//click
function chng(fuck){
	fuck.style.color = 'blue';
  fuck.style.textDecoration = 'none';
}
function chng2(fuck){
	fuck.style.color = '#ff5b12';
  fuck.style.textDecoration = 'none';
}
//SLIDER

//sons
function son(elmnt){

function openTest() {
	if (document.getElementById(elmnt.id+"mp3").paused) {
 document.getElementById(elmnt.id+"mp3").play();
 document.getElementById(elmnt.id).style.content="url('./src/pausebttn.png')";
}
else{
	document.getElementById(elmnt.id+"mp3").pause();
	document.getElementById(elmnt.id).style.content="url('./src/playbttn.jpg')";
}

}
document.getElementById(elmnt.id).addEventListener('click', openTest)

}

//sour

//pop
var z=2;
function pop(elmnt){
  document.getElementById(elmnt.id).style.display = "none";

function openTest() {
    document.getElementById(elmnt.id).style.display = "block";
		z = z+2;
		document.getElementById(elmnt.id).style.zIndex = z;
    $(elmnt).delay('20000').fadeOut(10000);



}
document.getElementById("pop"+elmnt.id).addEventListener('click', openTest)

}
function popson(elmnt){
  document.getElementById(elmnt.id).style.display = "none";

function openTest2() {
    document.getElementById(elmnt.id).style.display = "block";
		z = z+2;
		document.getElementById(elmnt.id).style.zIndex = z;
		$(elmnt).delay('90000').fadeOut(8000);


}
document.getElementById("pop"+elmnt.id).addEventListener('click', openTest2)
}
