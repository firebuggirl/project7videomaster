var $vidContainer = $("#video-container");
var $controls = $('#flex--wrapper');
var $vid = $('#my_video');



/* Hide controls bar */
$vidContainer.mouseenter(function () {
      $controls.fadeIn(500);
      // track.mode = 'hidden';
    });
$vidContainer.mouseleave(function () {
      //$controls.fadeOut(500);
      // track.mode = 'showing';
      $controls.fadeOut(500);
    });



//Add hightlights to text as video playpausebtn

    $vid.on("timeupdate", function() {
  		var $videoTime = $vid[0].currentTime;
  		function addHighlight(n) {
  			$('span[data-start]').removeClass("highlight");
  			$('span[data-start="' + n + '"]').addClass("highlight");
  		}

  			if ($videoTime > -1 && $videoTime < 4.130) {
  				addHighlight(0);
  			} else if ($videoTime > 4.13 && $videoTime < 7.535) {
  				addHighlight(4.13);
  			} else if ($videoTime > 7.535 && $videoTime < 11.27) {
  				addHighlight(7.535);
  			} else if ($videoTime > 11.27 && $videoTime < 13.96) {
  				addHighlight(11.27);
  			} else if ($videoTime > 13.96 && $videoTime < 17.94) {
  				addHighlight(13.96);
  			} else if ($videoTime > 17.94 && $videoTime < 22.37) {
  				addHighlight(17.94);
  			} else if ($videoTime > 22.37 && $videoTime < 26.88) {
  				addHighlight(22.37);
  			} else if ($videoTime > 26.88 && $videoTime < 30.92) {
  				addHighlight(26.88);
  			} else if ($videoTime > 32.1 && $videoTime < 34.73) {
  				addHighlight(32.1);
  			} else if ($videoTime > 34.73 && $videoTime < 39.43) {
  				addHighlight(34.73 );
  			} else if ($videoTime > 39.43 && $videoTime < 41.19) {
  				addHighlight(39.43);
  			} else if ($videoTime > 42.35 && $videoTime < 46.3) {
  				addHighlight(42.35);
  			} else if ($videoTime > 46.3 && $videoTime < 49.27) {
  				addHighlight(46.3);
  			} else if ($videoTime > 49.27 && $videoTime < 53.76) {
  				addHighlight(49.27);
  			} else if ($videoTime > 53.76 && $videoTime < 57.78 ) {
  				addHighlight(53.76);
  			} else if ($videoTime > 57.78) {
  				addHighlight(57.78);
  			}

  	});
