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
