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

function myLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		loc.innerHTML = "Location Not Found";
	}
}

function showPosition(position) {
	var loc = document.getElementById("location");

	loc.innterHTML =
		"Longitude: " +
		position.coords.longitude +
		"<br> Latitude: " +
		position.coords.latitude +
		"<br>";
}
