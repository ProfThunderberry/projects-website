function loadNavbar(page) {
	console.log(this.location.pathname);
	$.get("features/navbar.html", function(data){
		$("#navbar-placeholder").replaceWith(data);
	});
}
