function parse(){
	// Step 1: create instance of object
	request = new XMLHttpRequest();
	
	// Step 2: create or “open” HTTP request
	request.open(“GET”, “data.json”, true);
	
	// Step 3: set up a way to manage the response —to a function
	request.onreadystatechange = parseData;
	
	//Step 4: execute the request
	request.send();
}

function parseData() {
	if (request.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById(“messages”);
		converted = JSON.parse(request.responseText);
		for(i = 0; i < converted.length; i++) {
			messagesDiv.innerHtML += “<p>” + converted[i]["content"];
	    }
	}
	else if (request.readyState == 4 && request.status == 304) {
		alert(“No data changed, move along”);
	}
	else if (request.readyState == 4 && request.status == 404) {
		alert(“Hacked by the Chinese.”);  
	}
}

