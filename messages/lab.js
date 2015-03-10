/*jslint browser:true */
var request;
request = new XMLHttpRequest();

function parseData() {
    "use strict";
    if (request.readyState === 4 && request.status === 200) {
        var messagesDiv, i, converted;
        messagesDiv = document.getElementById("messages");
        converted = JSON.parse(request.responseText);
        for (i = 0; i < converted.length; i++) {
            messagesDiv.innerHTML += "<p>" + converted[i]["content"] + "</p>";
        }
    } else if (request.readyState === 4 && request.status === 304) {
        alert("No data changed, move along");
    } else if (request.readyState === 4 && request.status === 404) {
        alert("Hacked by the Chinese.");
    }
}


function parse() {
    "use strict";
    request.open("GET", "data.json", true);
    request.onreadystatechange = parseData;
    request.send();
}

