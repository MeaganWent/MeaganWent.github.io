var slideshow = {
	var i = 0, 	
	var images = ["DSC_0014_new.jpg", "DSC_0020_new.jpg"],	
	var time = 3000,	
}

function imageAlt(slideshow){
	document.slide.src = images[i];
	
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("imageAlt()", time);
}

window.onload=imageAlt;
