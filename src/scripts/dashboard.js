// Append input value to new li
$("input[name='listItem']").on("keypress", function(event) {
	if (event.which === 13) {
		let todoText = $(this).val();
		$("ul").append("<li class='item'>" + todoText + "</li>");
		console.log(todoText);
		$("input[name='listItem']").val("");
	}
});
// Append input with click button
$("#add").click(function() {
	let todoText = $("input[name='listItem']").val();
	$("ul").append("<li class='item'>" + todoText + "</li>");
	console.log(todoText);
	$("input[name='listItem']").val("");
});

// remove li when clicked on with a fadeout of half one second
$("ul").on("click", "li", function() {
	$(this).fadeOut(500, function() {
		$(this).remove();
	});
});

var loc = document.getElementById("location");
// function for onclick=()
function myLocation() {
	// checks browser for gps
	if (navigator.geolocation) {
		//   on success we run a callback function, we leave error, and options empty
		navigator.geolocation.getCurrentPosition(function(position) {
			// store lat and lon as variables
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			// set innerHTML to show longitude and latitude
			loc.innerHTML = "Longitude: " + lon + "</br> Latitude: " + lat;
		});
	} else {
		//   if browser doesn't have access to gps
		// display "location not found";
		loc.innerHTML = "Location Not Found";
	}
}
