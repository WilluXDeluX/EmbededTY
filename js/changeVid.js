

function checkLink(respDiv, url){
	var obj = document.getElementById(respDiv);
	if(url.includes("watch")){
		var res = url.replace("watch?v=","embed/");
		setURL(obj, res)
	}
	else if (url.includes("embed")){
		setURL(obj, url)
	}
	else {
		alert("Not a valid URL!");
	}
	
}

function setURL(obj, url){
	obj.src = url+"?autoplay=1";
}
