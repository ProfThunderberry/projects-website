function loadNavbar() {
	console.log(this.location.pathname);
	$.get("features/navbar.html", function(data){
		$("nav.navbar-placeholder").replaceWith(data);
	});
}
