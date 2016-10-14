
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = [ 'Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function daysInMonth( month,year ) {
	return new Date( year, month, 0 ).getDate();
}

 function change(txt) {
	var x= document.getElementById("calendar");
	newLI = document.createElement("li");
	newText = document.createTextNode(txt);
	newLI.appendChild(newText);
	x.appendChild(newLI);
}

function changeMonth( flag ){


	// prima data am trimis this de pe button si a functionat
	var elem = document.getElementById("month");

	console.log(elem.value);

	// var val = elem.value;

	// console.log(val)
	// val = val + 1;

	// if ( flag ){
	// 	val = val + 1;
	// } else {
	// 	val--
	// }

	//elem.value = val;

	//elem.innerHTML = months[val];

	
};


var july = daysInMonth( 7, 2016);

console.log( july );




for( i = 1; i <= july; i++ ){

	var d = new Date(i,07,2016);
	var n = d.getDay();

	change(i + ' ' + days[n]);

}

	

