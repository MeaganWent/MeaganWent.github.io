var slideshow = {
	var i = 0, 			// Start Point
	var images = ["DSC_0014_new.jpg", "DSC_0020_new.jpg"],	// Images Array
	var time = 3000,	// Time Between Switch
}
// Image List

// Change Image
function changeImg(slideshow){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
