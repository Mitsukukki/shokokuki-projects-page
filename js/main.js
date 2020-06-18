var currentProfileElement;

function finishBackgroundLoad(src) {
	document.querySelector(".background").src = src;
}

function viewProfile(element) {
	if (currentProfileElement !== element) {
		memberlength = main.querySelectorAll(".member").length
        	for (let index = 0; index < memberlength; index++) {
			if (element !== main.querySelectorAll(".member")[index]) {
				main.querySelectorAll(".member")[index].style.display = "none";
			}
		}
		currentProfileElement = element;
		element.style.transform = "none";
		element.style.height = "300px";
		element.style.minHeight = "300px";
		element.querySelector("img").style.borderRadius = "100px";
		element.querySelector("img").style.transform = "scale(0.75)";
		setTimeout(function(){
			element.querySelector("img").style.transform = "scale(1)";
			element.querySelector("img").style.borderRadius = "10px";
			element.style.width = "500px";
			element.style.background = 'rgb(30,30,35)';
			logo.style.opacity = "0";
			element.querySelector("img").style.boxShadow = "none";
			setTimeout(function(){
				element.querySelector(".content").style.opacity = "1";
				element.querySelector(".username").style.display = "block";
			},500);
		},500);
	}
}
