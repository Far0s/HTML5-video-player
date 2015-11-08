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
player.duration_elapsed = player.container.querySelector('.duration-elapsed');
player.duration_total = player.container.querySelector('.duration-total');
player.btn_fullscreen = player.container.querySelector('.btn-fullscreen');


// TIMELINE
window.setInterval(function(){
  var ratio = player.video.currentTime / player.video.duration;
  player.timeline_elapsed.style.transform = 'scaleX('+ ratio +')';
  player.duration_elapsed.text = player.video.currentTime;
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
  if (player.container.requestFullscreen) {
    player.container.requestFullscreen();
  } else if (player.container.mozRequestFullScreen) {
    player.container.mozRequestFullScreen(); // Firefox
  } else if (player.container.webkitRequestFullscreen) {
    player.container.webkitRequestFullscreen(); // Chrome and Safari
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

function volumeSwitch() {
  if (player.video.muted === false) {
    player.video.muted = true;
    player.btn_volume.classList.add('mute');
  } else {
    player.video.muted = false;
    player.btn_volume.classList.remove('mute');
  }
}

player.btn_volume.addEventListener('click', function(){
  volumeSwitch();
});

player.volume_slider.addEventListener('click', function(e){
  setVolume(e);
});


// DURATION INDEX
player.video.addEventListener('loadedmetadata', function(){
  var duration = player.video.duration,
      duration_mins = Math.floor(duration / 60),
      duration_secs = Math.floor(duration - duration_mins * 60);
  player.duration_total.innerHTML = duration_mins + ":" + duration_secs;

  player.video.ontimeupdate = function() {
    var currentTime = player.video.currentTime,
    currentMins = Math.floor(currentTime / 60),
    currentSecs = Math.floor(currentTime - currentMins * 60),
    percent = (currentTime / duration) * 100;
    if (currentSecs < 10) {
      currentSecs = "0" + currentSecs;
    }
    if (currentMins < 10) {
      currentMins = "0" + currentMins;
    }
    player.duration_elapsed.innerHTML = currentMins + ":" + currentSecs;
  };
});





// KEYBOARD EVENTS
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event; // Pre-IE9 fallback
  if (e.keyCode == '38') { // Top arrow - Volume up 0.1
    console.log('up');
    player.video.volume = player.video.volume + 0.1;
    console.log(player.video.volume);
  } else if (e.keyCode == '40') { // Bot arrow - Volume down 0.1
    console.log('down');
    player.video.volume = player.video.volume - 0.1;
    console.log(player.video.volume);
  } else if (e.keyCode == '37') { // L arrow - 5secs rewind
    player.video.currentTime = player.video.currentTime - 5;
    console.log('left');
  } else if (e.keyCode == '39') { // R arrow - 5secs forward
    player.video.currentTime = player.video.currentTime + 5;
    console.log('right');
  } else if (e.keyCode == '70') { // F - Fullscreen
    goFS();
  } else if (e.keyCode == '32') { // F - Fullscreen
    playSwitch();
  } else if (e.keyCode == '77') { // F - Fullscreen
    volumeSwitch();
  } else if (e.keyCode == '49') { // 1 - Go to 10%
    player.video.currentTime = player.video.duration * 0.1;
  } else if (e.keyCode == '50') { // 2 - Go to 20%
    player.video.currentTime = player.video.duration * 0.2;
  } else if (e.keyCode == '222') { // 3 - Go to 30%
    player.video.currentTime = player.video.duration * 0.3;
  } else if (e.keyCode == '52') { // 4 - Go to 40%
    player.video.currentTime = player.video.duration * 0.4;
  } else if (e.keyCode == '53') { // 5 - Go to 50%
    player.video.currentTime = player.video.duration * 0.5;
  } else if (e.keyCode == '54') { // 6 - Go to 60%
    player.video.currentTime = player.video.duration * 0.6;
  } else if (e.keyCode == '55') { // 7 - Go to 70%
    player.video.currentTime = player.video.duration * 0.7;
  } else if (e.keyCode == '56') { // 8 - Go to 80%
    player.video.currentTime = player.video.duration * 0.8;
  } else if (e.keyCode == '57') { // 9 - Go to 90%
    player.video.currentTime = player.video.duration * 0.9;
  }
}

