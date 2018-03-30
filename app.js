$(function() {
	$("#form-inline").on("submit", function(e) {
		e.preventDefault();
		var textEntry = $("#textbox").val();
		$("ul").append("<li>" + textEntry + "</li>");
	
		})
})