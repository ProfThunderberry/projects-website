loadNavbar(page) {
	console.log(page);
	console.log("-----");
	console.log(this);
	$.get("features/navbar.html", function(data){
		$("#navbar-placeholder").replaceWith(data);
	});
}
