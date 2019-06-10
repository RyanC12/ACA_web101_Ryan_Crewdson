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

let clickCount = 0,
	currentClicks = 0,
	enhancedClicks = 0;

setInterval(enhanced, 1000);

let $currentTotal = $("#currentTotal");
// on click increase clickCount by one.
// then update currentTotal
$("#bug").on("click", function() {
	clickCount++;
	update();
});

$(".button").on("click", function() {
	if ($(this).data("cost") < clickCount) {
		if ($(this).data("cost") === 50) {
			clickCount -= 50;
			enhancedClicks += $(this).data("val");
		} else if ($(this).data("cost") === 100) {
			clickCount -= 100;
			enhancedClicks += $(this).data("val");
		} else if ($(this).data("cost") === 1000) {
			clickCount -= 1000;
			enhancedClicks += $(this).data("val");
		} else if ($(this).data("cost") === 10000) {
			clickCount -= 10000;
			enhancedClicks += $(this).data("val");
		}
		update();
	}
});

function enhanced() {
	currentClicks += enhancedClicks;
	clickCount += enhancedClicks;
	update();
}

// update function
function update() {
	$currentTotal.html(clickCount);
}
