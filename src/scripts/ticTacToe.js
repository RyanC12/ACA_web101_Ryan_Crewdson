let toggle = true;
// select the button and store into variable
let button = document.querySelector(".reset");
// select divs for our reset function
let box = document.querySelectorAll("div");
function placeMark(elem) {
	if (toggle === true) {
		elem.innerHTML = "X";
		toggle = false;
	} else {
		elem.innerHTML = "O";
		toggle = true;
	}
}
// add event listener for click to run function
button.addEventListener("click", function() {
	// iterate through all divs
	for (var i = 0; i < box.length; i++) {
		// set innerHTML to be empty with each iteration
		box[i].innerHTML = "";
	}
});
