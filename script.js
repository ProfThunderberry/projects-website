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
		$("script").first().before(data);
	});
	if (fileId !== "index") {
		let titleWords = fileId.split("_")
		for (let w = 0; w <= titleWords.length; w++) {
			titleWords[w][0] = titleWords[w][0].toUpperCase();
		}
		$("title") += " - " + titleWords.join(" ");
	}
	$("#icon").href = filePathPrefix + $("#icon").href;
	$("#style").href = filePathPrefix + $("#style").href;
	
	// Load navbar
	$.get(navFilePath, (data) => {
		$("nav").replaceWith(data);
	});
	$("#index").href = filePathPrefix + $("#index").href;
	if (fileId === "index") $(".menu_item").href = "pages/" + $(".menu_item").href;
	console.log("#" + fileId);
	$("#" + fileId).addClass("active");
}
