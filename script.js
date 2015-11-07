var player = {};

// SETUP
player.container = document.querySelector('.player');
player.video = player.container.querySelector('video');
// player.volume_up = player.container.querySelector('.volume-up');
// player.volume_down = player.container.querySelector('.volume-down');
player.timeline = player.container.querySelector('.timeline');
player.timeline_elapsed = player.container.querySelector('.timeline-elapsed');
player.btn_playpause = player.container.querySelector('.btn-playpause');
player.btn_volume = player.container.querySelector('.btn-volume');
player.btn_fullscreen = player.container.querySelector('.btn-fullscreen');


// VOLUME 
// player.volume_up.addEventListener('click', function(){
//   var volume = player.video.volume + 0.1;
//   if (volume > 1) volume = 1;
//   player.video.volume = volume;
// });
// player.volume_down.addEventListener('click', function(){
//   var volume = player.video.volume - 0.1;
//   if (volume < 0) volume = 0;
//   player.video.volume = volume;
// });

player.btn_volume.addEventListener('click', function(){
  if (player.video.muted == false) {
    player.video.muted = true;
    console.log('muted');
  } else {
    player.video.muted = false;
    console.log('unmuted');
  }
});


// TIMELINE
window.setInterval(function(){
  var ratio = player.video.currentTime / player.video.duration;
  player.timeline_elapsed.style.transform = 'scaleX('+ ratio +')';
}, 100);

player.timeline.addEventListener('click', function(e){
  var bounding_rect = player.timeline.getBoundingClientRect(),
      x = e.clientX - bounding_rect.left,
      ratio = x / bounding_rect.width,
      time = ratio * player.video.duration;  
  player.video.currentTime = time;
});

// PLAY PAUSE

var playSwitch = function(){
  if (player.video.paused){
    player.video.play();
    player.btn_playpause.classList.remove('paused');
  } else {
    player.video.pause();
    player.btn_playpause.classList.add('paused');
  }
};

player.video.addEventListener('click', function(){
  playSwitch();
});

player.btn_playpause.addEventListener('click', function(){
  playSwitch();
});





// FULLSCREEN
player.btn_fullscreen.addEventListener("click", function() {
  if (player.video.requestFullscreen) {
    player.video.requestFullscreen();
  } else if (player.video.mozRequestFullScreen) {
    player.video.mozRequestFullScreen(); // Firefox
  } else if (player.video.webkitRequestFullscreen) {
    player.video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

