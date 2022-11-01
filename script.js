function load() {
	
	// Work out where file is
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let fileId;
	if (fileName === "index.html" || fileName === "") fileId = "index";
	else fileId = fileName.substring(0, fileName.length - ".html".length);

	let filePathPrefix = "../";
	if (fileId === "index") filePathPrefix = "";
	
	const headFilePath = filePathPrefix + "features/head.html";
	const navFilePath = filePathPrefix + "features/nav.html";
	
	// Load head
	$.get(headFilePath, (data) => {
		console.log("Head: " + data);
		$("script").first().before(data);
	});
	const fileWords;
	if (fileId !== "index") {
		fileWords = fileId.split("_")
		for (let w = 0; w <= fileWords.length; w++) {
			fileWords[w][0] = fileWords[w][0].toUpperCase();
		}
		$("title").first() += " - " + fileWords.join(" ");
	}
	$("#icon").href = filePathPrefix + $("#icon").href;
	$("#style").href = filePathPrefix + $("#style").href;
	
	// Load navbar
	$.get(navFilePath, (data) => {
		console.log("Navbar: " + data);
		$("nav").replaceWith(data);
	});
	$("#" + fileId).addClass("active");

}
