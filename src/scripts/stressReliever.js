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
		if ($(this).data("cost") === 10) {
			clickCount -= 10;
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
