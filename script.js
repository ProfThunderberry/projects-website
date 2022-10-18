function load() {
	
	// Work out where file is
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let filePathPrefix = "";
	if (!(fileName === "index.html" || fileName === "")) filePathPrefix = "../";
	
	const navFilePath = filePathPrefix + "features/nav.html";
	const headFilePath = filePathPrefix + "features/head.html";
	
	// Load navbar
	$.get(navFilePath, (data) => {
		$("nav").replaceWith(data);
	});

	// Load head
	$.get(headFilePath, (data) => {
		$("script").before(data);
	});
}
