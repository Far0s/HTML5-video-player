// SETUP

var player = {};

player.container = document.querySelector('.player');
player.video = player.container.querySelector('video');
player.timeline = player.container.querySelector('.timeline');
player.timeline_elapsed = player.container.querySelector('.timeline-elapsed');
player.btn_playpause = player.container.querySelector('.btn-playpause');
player.btn_volume = player.container.querySelector('.btn-volume');
player.volume_slider = player.container.querySelector('.volume-slider');
player.volume_level = player.container.querySelector('.volume-level');
player.btn_fullscreen = player.container.querySelector('.btn-fullscreen');


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
player.container.classList.add('paused');
var playSwitch = function(){
  if (player.video.paused){
    player.video.play();
    player.btn_playpause.classList.remove('paused');
    player.container.classList.remove('paused');
  } else {
    player.video.pause();
    player.btn_playpause.classList.add('paused');
    player.container.classList.add('paused');
  }
};

player.video.addEventListener('click', function(){
  playSwitch();
});

player.btn_playpause.addEventListener('click', function(){
  playSwitch();
});


// FULLSCREEN
function goFS(){
  if (player.video.requestFullscreen) {
    player.video.requestFullscreen();
  } else if (player.video.mozRequestFullScreen) {
    player.video.mozRequestFullScreen(); // Firefox
  } else if (player.video.webkitRequestFullscreen) {
    player.video.webkitRequestFullscreen(); // Chrome and Safari
  }
}

player.btn_fullscreen.addEventListener("click", function() {
  goFS();
});
player.video.addEventListener('dblclick', function(){
  goFS();
});



// VOLUME 
player.volume_level.style.transform = 'scaleX('+ 1 +')'; // sets the volume slider at 1
function setVolume(e){
  var bounding_rect = player.volume_slider.getBoundingClientRect(),
  x = e.clientX - bounding_rect.left,
  ratio = x / bounding_rect.width;
  player.volume_level.style.transform = 'scaleX('+ ratio +')';
  player.video.volume = ratio;
}

player.btn_volume.addEventListener('click', function(){
  if (player.video.muted == false) {
    player.video.muted = true
    player.btn_volume.classList.add('mute');
  } else {
    player.video.muted = false;
    player.btn_volume.classList.remove('mute');
  }
});


player.volume_slider.addEventListener('click', function(e){
  setVolume(e);
});




