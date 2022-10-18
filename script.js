function load() {
	
	// Work out where file is
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let fileId;
	if (!(fileName === "index.html" || fileName === "")) fileId = "index";
	else fileId = fileName.substring(0, fileName.length - ".html".length);

	let filePathPrefix = "../";
	if (fileId === "index") filePathPrefix = "";
	
	const navFilePath = filePathPrefix + "features/nav.html";
	const headFilePath = filePathPrefix + "features/head.html";
	
	// Load navbar
	$.get(navFilePath, (data) => {
		console.log("Navbar: " + data);
		$("nav").replaceWith(data);
	});
	$("#" + fileId).addClass("active");

	// Load head
	$.get(headFilePath, (data) => {
		console.log("Head: " + data);
		$("script").before(data);
	});
}
