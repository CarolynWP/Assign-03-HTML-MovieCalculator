//use strict 
'use strict'

//function to calculate the amount of days
function calculateDays(){
	//variable
	let movie = parseFloat(document.getElementById("movie").value);
  const MOVIE_TIME = movie*2
	
	//calculation for days
	let days = MOVIE_TIME/24

	//output
	document.getElementById("days").innerHTML = "🇮‌🇹‌ 🇼‌🇮‌🇱‌🇱‌ 🇹‌🇦‌🇰‌🇪‌ " + days.toFixed(2) + " 🇩‌🇦‌🇾‌🇸‌ 🇹‌🇴‌ 🇼‌🇦‌🇹‌🇨‌🇭‌ " + movie + " 🇲‌🇴‌🇻‌🇮‌🇪‌🇸‌."
}

// function to calculate the amount of weeks
function calculateWeeks(){
	//variable
	let movie2 = parseFloat(document.getElementById("movie2").value);
  const MOVIE_TIME = movie2*2
	
	//calculation for weeks
	let weeks = MOVIE_TIME/168

	//output
	document.getElementById("weeks").innerHTML = "🇮‌🇹‌ 🇼‌🇮‌🇱‌🇱‌ 🇹‌🇦‌🇰‌🇪‌ " + weeks.toFixed(2) + " 🇼‌🇪‌🇪‌🇰‌🇸‌ 🇹‌🇴‌ 🇼‌🇦‌🇹‌🇨‌🇭‌ " + movie2 + " 🇲‌🇴‌🇻‌🇮‌🇪‌🇸‌."
}