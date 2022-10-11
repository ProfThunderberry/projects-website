function load() {
	
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let navbarFilePath = "features/navbar.html";
	if (!(fileName === "index.html" || fileName === "")) navbarFilePath = "../" + navbarFilePath;
	
	$.get(navbarFilePath, function(data){
		console.log(data);
		$("nav").replaceWith(data);
	});
}
