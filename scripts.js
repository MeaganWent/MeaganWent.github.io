function slideshow(){
	this.i = 0, 	
	this.images = ["DSC_0014_new.jpg", "DSC_0020_new.jpg"],	
	this.time = 3000,
		
	this.imageAlt = function(i,images,time){
		document.slide.src = images[i];
	
		if(i < images.length - 1){
		  i++; 
		} else { 
			i = 0;
		}

	setTimeout("imageAlt()", time);	
		
	}
}


window.onload=slideshow.imageAlt;
