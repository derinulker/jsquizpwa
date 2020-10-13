var currentQuestion = 0; // the question we are currently on

var score = 0; // numbers of correct questions

var preLoadImg = new Image();
var name_of_quizztaker = "Anonymous";
var timeleft = 300;
var downloadTimer ;

// questions in an array of question objects
var questions = [
   {
	"question": "Question 1/10: Which ocean does Canada not border?",
	"a": "Indian",
	"b": "Arctic",
	"c": "Atlantic",
	"d": "Pacific",
	"image":"quizimages/ocean.jpg",
	"answer": "a",
	"result":false
   },
   {
	"question": "Question 2/10: Which of these cities lies on the St. Lawrence River?",
	"a": "Calgary",
	"b": "Toronto",
	"c": "Montreal",
	"d": "Regina",
	"image":"quizimages/montreal.jpg",
	"answer": "c",
	"result":false
   },
   {
	"question": "Question 3/10: What is the name of the world's largest freshwater spring in Canada?",
	"a": "Emerald Lake",
	"b": "Great Bear Lake",
	"c": "Great Lake",
	"d": "Garibaldi Lake",
	"image":"quizimages/great-lake.png",
	"answer": "c",
	"result":false
   },
   {
	"question": "Question 4/10: What are the landform in Bay of Fundy?",
	"a": "Sand spit",
	"b": "Highest tides",
	"c": "Pingo",
	"d": "Drumlin",
	"image":"quizimages/bay-of-fundy.jpg",
	"answer": "b",
	"result":false


   },
   {
	"question": "Question 5/10: What is the story of the song Farewell to Nova Scotia that defines Canadian identity?",
	"a": "About sailer torn to go to war",
	"b": "About Monitoba",
	"c": "About fishing squid on the Grand Banks",
	"d": "About Innu culturel life",
	"image":"quizimages/war.jpg",
	"answer": "a",
	"result":false
   },
   {
	"question": "Question 6/10: Which does not include the physical characteristic of Canada?",
	"a": "The mountain ranges",
	"b": "High plateaus",
	"c": "Large settlement patterns",
	"d": "Arctic Lowlands",
	"image":"quizimages/sattlement-patterns.jpg",
	"answer": "c",
	"result":false
   },
   {
	"question": "Question 7/10: Which one covers the majority of Canada?",
	"a": "Tropical Climate",
	"b": "Dry",
	"c": "Warm moist",
	"d": "Cool moist polar",
	"image":"quizimages/polar.jpg",
	"answer": "d",
	"result":false
   },
   {
	"question": "Question 8/10: Which Canadian province does not adopt Daylight Saving Time?",
	"a": "Newfoundland and Labrador",
	"b": "New Brunswick",
	"c": "Manitoba",
	"d": "Saskatchewan",
	"image":"quizimages/Saskatchewan.jpg",
	"answer": "d",
	"result":false
   },
   {
	"question": "Question 9/10: How many provinces does Canada have?",
	"a": "12",
	"b": "11",
	"c": "9",
	"d": "10",
	"image":"quizimages/provinces.jpg",
	"answer": "d",
	"result":false
   },
   {
	"question": "Question 10/10: Almost done. What is the name of the only territory in Canada governed by Inuits, or Eskimos?",
	"a": "Tuvalu",
	"b": "Nunavut",
	"c": "Moorea",
	"d": "Kalaalit Nunaat",
	"image":"quizimages/Nunavut.jpg",
	"answer": "b",
	"result":false
   }
 ];

 //register the service worker when the js loads
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

 // load the current question on the page
 function loadQuestion() {

	if (currentQuestion <= 9) {
	preLoadImg.src = questions[currentQuestion].image;
	// load the question
	document.getElementById("question").innerHTML = questions[currentQuestion].question;
	document.getElementById("a").innerHTML = "[A] " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "[B] " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "[C] " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "[D] " + questions[currentQuestion].d;
	document.getElementById("image").src = questions[currentQuestion].image;
	document.getElementById("progress").value = (currentQuestion)*10 ;
	document.getElementById("progress-percentage").innerHTML = "You have ~ " + (currentQuestion)*10 + '% completed';

	}

	else {

		document.getElementById("quizz_slide").style.display = "none";
		document.getElementById("image").src = "quizimages/quizz-result.jpg";
		document.getElementById("submit_slide").style.display = "block";


	}

 } // loadQuestion




  // initial load
 function initialLoad() {
	currentQuestion = 0;
	name_of_quizztaker = document.getElementById("quizztaker_input").value;
	if (name_of_quizztaker.length == 0){
		name_of_quizztaker = "Anonymous ";
	}
	else{

	}
	document.getElementById("welcome_slide").style.display = "none";
	document.getElementById("result_slide").style.display = "none";

	document.getElementById("quizz_slide").style.display = "block";
	loadQuestion();
					// Countdown timer

	clearInterval(downloadTimer);
	timeleft = 300;
	downloadTimer = setInterval(function(){
					document.getElementById("countdown").innerHTML = "Welcome " + name_of_quizztaker + "! You have " + timeleft + " seconds to complete your quiz!";
					timeleft -= 1;
					if(timeleft <= 0){
						clearInterval(downloadTimer);
						document.getElementById("countdown").innerHTML = "Finished";
									}
					}, 1000);

 }

function markIt(ans) {

	// if theanswer is correct add to score and move to next question
	if (ans == questions[currentQuestion].answer ) {


		questions[currentQuestion].result=true;


		currentQuestion++;
		loadQuestion();

	}


	else {
			questions[currentQuestion].result=false;
			currentQuestion++;
			loadQuestion();
	}




 }

function Summary(){
score = 0;
	document.getElementById("image").src = "quizimages/quizz-result.jpg";
		document.getElementById("submit_slide").style.display = "none";
		document.getElementById("result_slide").style.display = "block";

		if (questions[0].result==true) {
			document.getElementById("Question1").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question1").style.background = "firebrick";
		}

		if (questions[1].result==true) {
			document.getElementById("Question2").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question2").style.background = "firebrick";
		}

		if (questions[2].result==true) {
			document.getElementById("Question3").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question3").style.background = "firebrick";
		}

		if (questions[3].result==true) {
			document.getElementById("Question4").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question4").style.background = "firebrick";
		}

		if (questions[4].result==true) {
			document.getElementById("Question5").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question5").style.background = "firebrick";
		}

		if (questions[5].result==true) {
			document.getElementById("Question6").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question6").style.background = "firebrick";
		}

		if (questions[6].result==true) {
			document.getElementById("Question7").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question7").style.background = "firebrick";
		}

		if (questions[7].result==true) {
			document.getElementById("Question8").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question8").style.background = "firebrick";
		}

		if (questions[8].result==true) {
			document.getElementById("Question9").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question9").style.background = "firebrick";
		}

		if (questions[9].result==true) {
			document.getElementById("Question10").style.background = "teal";
			score = score +1;
		}
		else {
			document.getElementById("Question10").style.background = "firebrick";
		}

		document.getElementById("progress").value = 100;
		document.getElementById("progress-percentage").innerHTML = "You have ~100 % completed";

		document.getElementById("quizz_result").innerHTML = name_of_quizztaker+  ", you have answered " + score + " out of " + questions.length + " correctly! " ;


}

