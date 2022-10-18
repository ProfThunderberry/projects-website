function load() {
	
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let navFilePath = "features/nav.html";
	if (!(fileName === "index.html" || fileName === "")) navFilePath = "../" + navFilePath;
	
	$.get(navFilePath, function(data){
		console.log(data);
		$("nav").replaceWith(data);
	});
}
