function checkLink(respDiv, url){
	var obj = document.getElementById(respDiv);
	if(url.includes("watch")){
		var res = url.split('&')[0]
		res = res.replace("watch?v=","embed/");
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
	//old code obj.src = url+"?autoplay=1";
	obj.src = url;
}
