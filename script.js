// Gets the id for the file of the current page
function getFileId() {
	// Work out where file is
	const filePath = this.location.pathname;
	const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

	let fileId;
	if (fileName === "") {
		fileId = "index";
	} else {
		fileId = fileName.substring(0, fileName.length - ".html".length);
	}
	return fileId;
}

// Gets the title for the current page using fileId
function getTitle(fileId) {
	let titleWords = fileId.split("_")
	for (let w = 0; w < titleWords.length; w++) {
		titleWords[w] = titleWords[w][0].toUpperCase() + titleWords[w].substring(1);
	}
	const title = titleWords.join(" ");

	return title;
}

// Loads features from features folder to current page
function loadFeatures(filePathPrefix) {
	const features = ["head", "nav"]
	const tagsAfter = ["script", "main"]
	for (let f = 0; f < features.length; f++) {
		$.get(filePathPrefix + "features/" + features[f] + ".html", (data) => {
			$(tagsAfter[f]).first().before(data);
		});
	}
}

// Generates the navigation bar, with links to each page
function genNav() {
	const fileIds = ["computer_architecture", "neural_networks", "game_development", "cryptography"];
	for (let f = 0; f < fileIds.length; f++) {
		const title = getTitle(fileIds[f]);
		$("nav").children().first().append("<a id=\"" + fileIds[f] + "\" class=\"menu_item\" href=\"" + fileIds[f] + ".html\" title=\"" + title + "\">" + title.toUpperCase() + "</a>");
	}
}

// Main Function
$(document).ready(() => {
	$.ajaxSetup({async:false});
	
	const fileId = getFileId();
	const title = getTitle(fileId);

	if (fileId === "index") {

		loadFeatures("");
		genNav();

		// nav
		let menuItems = $(".menu_item");
		for (let i = 0; i < menuItems.length; i++) {
			$(".menu_item").eq(i).attr("href", "pages/" + menuItems.eq(i).attr("href"))
		};
		
		// main
		$("main").prepend("<h1 class=\"pad-top\">Home Page</h1>");
	}
	else {
		
		loadFeatures("../");
		genNav();
		
		// head
		const hrefToChange = ["icon", "style", "index"];
		for (let i = 0; i < hrefToChange.length; i++) {
			$("#" + hrefToChange[i]).attr("href", "../" + $("#" + hrefToChange[i]).attr("href"));
		}
		$("title").text($("title").text() + " - " + title);

		// main
		$("main").prepend("<h1 class=\"pad-top\">" + title + "</h1>");
	}

	// navbar
	$("#" + fileId).addClass("active");

	// main
	$("main").children().eq(-1).addClass("pad-bottom");

	$.ajaxSetup({async:true});
})
