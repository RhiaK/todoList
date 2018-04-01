$(document).ready(function() {
	$(".form").on("submit", function(e) {
		e.preventDefault();
		var textEntry = $(".textbox").val();
		$("#listItems").prepend($("<li>").html(textEntry));
		$(".textbox").val('');
		});
	$("ul").on("dblclick", function(event) {
		event.preventDefault();
		var index = $("ul").index(this);
		$(this).remove();

	})
});