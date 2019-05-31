let $block = null;

$(".column").click(function() {
	if ($block) {
		$(this).append($block);
		$block = null;
	} else {
		$block = $(this)
			.children()
			.last()
			.detach();
	}
});
