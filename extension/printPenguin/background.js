// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = info.srcUrl;

    alert( url );
  };
};

/**
 * Create a context menu which will only show up for images.
 */
 chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	 setTimeout(function(){
     	chrome.tabs.executeScript({
			file: "content2.js"
			}, function () {
			console.log("History Refresh");
        });
 	 }, 1500);
});

 //chrome.extension.onMessage.addListener(function (message, sender, callback) {
     // Look for Exact message
//     if (message == "Rerun script") {
         //Inject script again to the current active tab
 //        chrome.tabs.executeScript({
 //            file: "content2.js"
 //        }, function () {
 //            console.log("Refresh");
 //        });
 //    }
//});

function getCookie(domain, name, callback) {
	chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
		if(cookie) {
			callback(cookie.value);
		} else {
			callback("");
		}
	});
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
	if (message.sourcer.length > 0) {
		getCookie("http://localhost", "username", function(id) {
			if (id.length > 0) {
				var lastfour = message.sourcer.substring(message.sourcer.length - 4, message.sourcer.length);
				var correctemail = id.replace("%40", "@");
				$.post( "http://localhost:3000/items", { User: correctemail, Url: message.sourcer, Height: message.heightr, Width: message.widthr, Mediatype: lastfour}).done(function( data ) { alert( "Data Loaded: " + data ); });
			} else {
				alert("Please Sign Up");
				chrome.tabs.create({url:"popup.html"});
			}
		});
 	}
});


chrome.contextMenus.create({
  "title" : "Get Image",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});


