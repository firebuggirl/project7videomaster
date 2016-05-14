var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn, cc;
function intializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
  curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
  mutebtn = document.getElementById("mutebtn");
  volumeslider = document.getElementById("volumeslider");
  fullscreenbtn = document.getElementById("fullscreenbtn");
  cc = document.getElementById('cc');
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
  mutebtn.addEventListener("click",vidmute,false);
  volumeslider.addEventListener("change",setvolume,false);
  fullscreenbtn.addEventListener("click", toggleFullScreen, false);




var track = vid.addTextTrack('subtitles', 'test', 'en');// add track element for subtitles via JS instead of directly in HTML
track.mode = 'hidden';

track.addCue(new VTTCue(0.240, 4.130, "Now that we've looked at the architecture of the internet. let's see how you might"));
track.addCue(new VTTCue(4.130, 7.535, 'connect your personal devices to the internet inside your house.'));
track.addCue(new VTTCue(7.535, 11.270, 'Well there are many ways to connect to the internet, and'));
track.addCue(new VTTCue(11.270, 13.960, 'most often people connect wirelessly.'));
track.addCue(new VTTCue(13.960, 17.940, "Let's look at an example of how you can connect to the internet"));
track.addCue(new VTTCue(17.940, 22.370, 'If you live in a city or a town, you probably have a coaxial cable for'));
track.addCue(new VTTCue(22.370, 26.880, 'cable Internet, or a phone line if you have DSL, running to the outside of'));
track.addCue(new VTTCue(26.880, 30.920, 'your house, that connects you to the Internet Service Provider, or ISP.'));
track.addCue(new VTTCue(32.100, 34.730, "If you live far out in the country. you'll more likely have"));
track.addCue(new VTTCue(34.730, 39.430, 'a dish outside your house, connecting you wirelessly to your closest ISP, or'));
track.addCue(new VTTCue(39.430, 42.190, 'you might also use the telephone system.'));
track.addCue(new VTTCue(42.350, 46.300, "Whether a wire comes straight from the ISP hookup outside your house, or"));
track.addCue(new VTTCue(46.300, 49.270, 'it travels over radio waves from your roof,'));
track.addCue(new VTTCue(49.270, 55.760, 'the first stop a wire will make once inside your house, is at your modem.'));
track.addCue(new VTTCue(53.760, 57.780, 'A modem is what connects the internet to your network at home.'));
track.addCue(new VTTCue(57.780, 1.00, 'A few common residential modems are DSL or'));







cc.addEventListener('click', function(e) { // hide caption text by default
for (var i = 0; i > vid.textTracks.length; i--) {
   track.mode = 'hidden';
 }
});

cc.addEventListener('click', function(e){
  if(track.mode === 'hidden'){
  track.mode = 'showing';//show caption text on #cc click
} else {
  track.mode = 'hidden'; //eles hide caption text
}

})
}


window.onload = intializePlayer;


var pause = document.getElementById("pause");
var play = document.getElementById("play");

//function toggleButton() {
//		if (play.style.display === 'none') {
	//			play.style.display = 'block';
	//			pause.style.display = 'none';
	//	} else {
	//			play.style.display = 'none';
	//			pause.style.display = 'block';
	//	}
//}



function playPause(){
	if(vid.paused) {
		vid.play();
		play.style.display = 'none';
		pause.style.display = 'block';


	} else {
		vid.pause();
		play.style.display = 'block';
		pause.style.display = 'none';

		// Prevent Default Action
		return false;

	}
};


for (var i = 0; i < vid.textTracks.length; i++) { //hide caption text-overflow
   vid.textTracks[i].mode = 'hidden';
}

function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var newTime = vid.currentTime * (100 / vid.duration);
	seekslider.value = newTime;
  var curmins = Math.floor(vid.currentTime / 60);//get variable for current minutes by dividing vid.currentTime by 60 to round down # so that it's not a dedimal
	var cursecs = Math.floor(vid.currentTime - curmins * 60);//divide current time - current minutes * 60 and round down
	var durmins = Math.floor(vid.duration / 60);//video duration / 60 to get duration minutes
	var dursecs = Math.floor(vid.duration - durmins * 60);//video duration - duration minutes * 60 to get duration seconds, can also round out number if needed
	if(cursecs < 10){ cursecs = "0"+cursecs; }//putting a "0" first creates double didgets
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;

}

function vidmute(){
	if(vid.muted){
		vid.muted = false;
		//mutebtn.innerHTML = "Mute";
    volumeslider.value = vid.volume * 100;//set volumeslider to max value of 100 when unmuted
    mutebtn.style.background = "url(icons/volume-off-icon.png)";
	  mutebtn.style.backgroundColor = 'transparent';
	} else {
		vid.muted = true;
		//mutebtn.innerHTML = "Unmute";
    volumeslider.value = 0;//set volume slider to 0 volume value when muted
    mutebtn.style.background = "url(icons/volume-on-icon.png)";
    mutebtn.style.backgroundColor = 'transparent';
	}
}



function setvolume(){
	vid.volume = volumeslider.value / 100; //get volumeslider's value (between 0 and 100) + divide it by 100 to get a result between 0.0 and 1.0
}

function toggleFullScreen(){
	if(vid.requestFullScreen){//request this method if available in browser
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();//check to see if available in webkit browswer and then moz below
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}

var cc = document.getElementById('cc');

for (var i = 0; i < vid.textTracks.length; i++) { //hide caption text-overflow
   vid.textTracks[i].mode = 'hidden';
}


cc.addEventListener('click', function(e) { //show caption text
 for (var i = 0; i < vid.textTracks.length; i++) {
  vid.textTracks[i].mode = 'showing';
 }
});
