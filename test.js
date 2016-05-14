window.onload = intializePlayer;

function playPause(){
	if(vid.paused){
		vid.play();
		//playbtn.innerHTML = "Pause";
   playbtn.style.background = "url(icons/pause-icon.png) ";
	//this.playbtn.css("display", "inline-block");
	//this.pausebtn.css("display", "none");
	} else {
		vid.pause();
		//playbtn.innerHTML = "Play";
    playbtn.style.background = "url(icons/play-icon.png)";
	//this.pausebtn.css("display", "none");
	//this.playbtn.css("display", "inline-block");



    //hidePause.style.display = "none";

	}
  }
