$(document).ready(() => {
	$.ajaxSetup({async:false});
	
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
		for (let w = 0; w < titleWords.length; w++) {
			titleWords[w] = titleWords[w][0].toUpperCase() + titleWords[w].substring(1);
		}
		console.log($("title"));
		$("title").text($("title").text() + " - " + titleWords.join(" "));
	}
	$("#icon").attr("href", filePathPrefix + $("#icon").attr("href"));
	$("#style").attr("href", filePathPrefix + $("#style").attr("href"));
	
	// Load navbar
	$.get(navFilePath, (data) => {
		$("nav").replaceWith(data);
	});
	$("#index").attr("href", filePathPrefix + $("#index").attr("href"));
	if (fileId === "index") $(".menu_item").attr("href", "pages/" + $(".menu_item").attr("href"));
	$("#" + fileId).addClass("active");
	
	$.ajaxSetup({async:true});
})
