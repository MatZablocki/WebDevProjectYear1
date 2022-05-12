var client_images = new Array();
client_images[0] = "Assets/Images/client2.png";
client_images[1] = "Assets/Images/client3.png";
client_images[2] = "Assets/Images/client4.png";
client_images[3] = "Assets/Images/client5.png";
client_images[4] = "Assets/Images/client6.png";
client_images[5] = "Assets/Images/client7.png";
client_images[6] = "Assets/Images/client8.png";
client_images[7] = "Assets/Images/client9.png";

var client_text = new Array ();
client_text[0] = "These are the currencies of the game, Riot Points (RP) and Blue Essence repectively. Riot Points are baught using real money and can be used to purchase various things such as cosmetics. Blue Essence is earned from playing the game and you can use it to purchase new champtions."
client_text[1] = "This is the free rotation, its a list of 20 champions that are available for you to play in casual gamemodes for free. The champions change every week."
client_text[2] = "This is the collection. Here you can see what champions and cosmetics you own."
client_text[3] = "This is your loot page. Here you can see what champion shards and skin shards you have. These shards are used to craft the specified champion for a lower price. You can also craft skins from Orange Essence which you get from disenchanting other skins. You get these shards from leveling up or from hextech chests which you earn by doing well."
client_text[4] = "This is the shop. Here you can buy any champion in the game. Champion costs vary between 450 to 6300 blue essence and when a new champion is released they cost 7800 for a short period of time before going down. You can also use your RP to but skins in this page."
client_text[5] = "This is the profile page. Here you can see various things about yourself such as your match history, your rank, your level and your top 3 highest mastery champions (top 3 you play the most). "
client_text[6] = "This is your friends list, you can add frieds using the button on top. You can invite your frieds to a game by right clicking them and hitting invite to game, and you can talk to your friends by simply clicking on them which opens up a chat window as shown."
client_text[7] = "This is the missions list. Here you get you win of the day mission every 24h and whenever theres an event you get new missions that are more specific."

var counter = 0;
var first = false;
//Function for next images
function next_image () 
{
	if (first == false){
		document.getElementById("clientimg").src = client_images[counter];
		document.getElementById("clientdesc").innerHTML = client_text[counter];
		first = true;
	}
	else{
	if (counter == client_images.length-1){
		counter = 0;
	}
	else {
	counter = counter + 1;
	}
	}
	
	document.getElementById("clientimg").src = client_images[counter];
	document.getElementById("clientdesc").innerHTML = client_text[counter];
}
//funtion for previous image
function prev_image () 
{
	first = true;
	if (counter == 0){
		counter = client_images.length-1;
	}
	else{
		counter = counter - 1;
	}
	
	document.getElementById("clientimg").src = client_images[counter];
	document.getElementById("clientdesc").innerHTML = client_text[counter];
}

var garen_array = ["garen1.jpg","garen2.jpg","garen3.jpg","garen4.jpg"];
var image_path = "Assets/Images/";

var count = 0;
var once = false;

function rotator()
{
	path = image_path + garen_array[count];
	count = count + 1;
	
	if (count == garen_array.length) {
		count = 0;
	}
	
	setTimeout(rotator, 8000);
	transition(path);
}

function transition(path) 
{
		if (once == true)
		{
		$('#garen').fadeOut(300, function() { $('#garen').attr("src",path).stop().fadeIn(200); });  
		}
		else { once = true; }
}

var warw_array = ["warwick1.jpg","warwick2.jpg","warwick3.jpg","warwick4.jpg"];

var count1 = 0;
var once1 = false;

function rotator1()
{
	path1 = image_path + warw_array[count1];
	count1 = count1 + 1;
	
	if (count1 == warw_array.length) {
		count1 = 0;
	}
	
	setTimeout(rotator1, 8000);
	transition1(path1);
}

function transition1(path) 
{
		if (once1 == true)
		{
		$('#warwick').fadeOut(300, function() { $('#warwick').attr("src",path1).stop().fadeIn(200); });  
		}
		else { once1 = true; }
}


var annie_array = ["annie1.jpg","annie2.jpg","annie3.jpg","annie4.jpg"];

var count2 = 0;
var once2 = false;

function rotator2()
{
	path2 = image_path + annie_array[count2];
	count2 = count2 + 1;
	
	if (count2 == annie_array.length) {
		count2 = 0;
	}
	
	setTimeout(rotator2, 8000);
	transition2(path2);
}

function transition2(path) 
{
		if (once2 == true)
		{
		$('#annie').fadeOut(300, function() { $('#annie').attr("src",path2).stop().fadeIn(200); });  
		}
		else { once2 = true; }
}

var trist_array = ["trist1.jpg","trist2.jpg","trist3.jpg","trist4.jpg"];

var count3 = 0;
var once3 = false;

function rotator3()
{
	path3 = image_path + trist_array[count3];
	count3 = count3 + 1;
	
	if (count3 == trist_array.length) {
		count3 = 0;
	}
	
	setTimeout(rotator3, 8000);
	transition3(path3);
}

function transition3(path) 
{
		if (once3 == true)
		{
		$('#trist').fadeOut(300, function() { $('#trist').attr("src",path3).stop().fadeIn(200); });  
		}
		else { once3 = true; }
}

var morg_array = ["morg1.jpg","morg2.jpg","morg3.jpg","morg4.jpg"];

var count4 = 0;
var once4 = false;

function rotator4()
{
	path4 = image_path + morg_array[count4];
	count4 = count4 + 1;
	
	if (count4 == morg_array.length) {
		count4 = 0;
	}
	
	setTimeout(rotator4, 8000);
	transition4(path4);
}

function transition4(path4) 
{
		if (once4 == true)
		{
		$('#morg').fadeOut(300, function() { $('#morg').attr("src",path4).stop().fadeIn(200); });  
		}
		else { once4 = true; }
}

function validate () {
	var succ = false;
	if(document.contactForm.firstname.value == "") {
		document.getElementById("firstnameMessage").innerHTML = " (Please provide your firstname.)";
		succ = true;
	}
	else{
		document.getElementById("firstnameMessage").innerHTML = "";
	}
	if(document.contactForm.lastname.value == "") {
		document.getElementById("lastnameMessage").innerHTML = " (Please provide your lastname.)";
		succ = true;
	}
	else{
		document.getElementById("lastnameMessage").innerHTML = "";
	}
	if(document.contactForm.email.value == "") {
		document.getElementById("emailMessage").innerHTML = " (Please provide your email.)";
		succ = true;
	}
	else{
		document.getElementById("emailMessage").innerHTML = "";
	}
	
	var checka = false;
	
	if(document.getElementById("a").checked){
		checka = true;
	}
	else if(document.getElementById("b").checked){
		checka = true;
	}
	else if(document.getElementById("c").checked){
		checka = true;
	}
	
	if (checka == false){
		document.getElementById("radiochk").innerHTML = " (Please rate your experience.)";
		succ = true;
	}
	else{
		document.getElementById("radiochk").innerHTML = "";
	}
		
	
	var checkb = false;
	
	if(document.getElementById("1").checked){
		checkb = true;
	}
	else if(document.getElementById("2").checked){
		checkb = true;
	}
	else if(document.getElementById("3").checked){
		checkb = true;
	}
	else if(document.getElementById("4").checked){
		checkb = true;
	}
	else if(document.getElementById("5").checked){
		checkb = true;
	}
	
	if (checkb == false){
		document.getElementById("laneplay").innerHTML = " (Please select at least 1 role.)";
		succ = true;
	}
	else{
		document.getElementById("laneplay").innerHTML = "";
	}

	if(document.contactForm.comment.value == "") {
		document.getElementById("comment1").innerHTML = " (Please write a message.)";
		succ = true;
	}
	else{
		document.getElementById("comment1").innerHTML = "";
	}
	
	if (succ == true){
		return false;
	}
	return true;
}


var questions = [];
var answers = [];

questions[0] = "What is the primary source of gold for laners?";
answers[0] = "minions";

questions[1] = "Every how many minutes do dragons spawn?";
answers[1] = "5";

questions[2] = "How much gold is given in total for a normal kill";
answers[2] = "450";

var currentQuestion;

function setQuestion(questionNumber){
	currentQuestion = questionNumber
	document.getElementById("question").innerHTML = questions[questionNumber];
	document.getElementById("correct").innerHTML = '';
}

function checkAnswer() {
	var tmpAnswer = document.getElementById("answer").value;
	if (tmpAnswer == answers[currentQuestion]){
		document.getElementById("correct").innerHTML = 'GGWP';
	}
	else{
		document.getElementById("correct").innerHTML = 'NT but Wrong';
	}
}