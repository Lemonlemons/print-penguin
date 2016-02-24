function getCookie(domain, name, callback) {
	chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
		if(cookie) {
			callback(cookie.value);
		} else {
			callback("");
		}
	});
}

getCookie("http://localhost", "username", function(id) {
	if (id.length > 0) {
		document.getElementById('sec1').style.display = 'block';
	} else {
		document.getElementById('sec2').style.display = 'block';
	}
});
