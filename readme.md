# HTML5 Video Player

## H2 P2019 - Web development
The goal is to make a video player in ~1 week, with the classic characteristics of HTML5 video controls (play/pause, volume control, fullscreen, etc.) plus any bonus functionality I can think of.
The player must be compatible with every HTML5-ready web browser.

## My take on the subject
I tried to make a player as simple as possible, with self-explanatory code and
discreet animations.  

## Features
- Controls bar: appears by default, when the video plays is disappears and reappear on video hovering.
- Play/pause button + clicking anywhere on the video triggers the same function as clicking on the button
- Volume button: clicking mutes/unmutes the video
- Volume slider: more precise control over volume.
- Fullscreen button: Sets the player fullscreen (player still buggy)
- Keyboard shortcuts: spacebar (play/pause), up/down (volume, still buggy), left/right (rewinf/forward), f (fullscreen), m (mute), 1-9 (time % shortcuts)

---
Roadmap and issues :
- Build a proper presentation page
- Have custom controls on fullscreen, instead of default browser controls
- Tune the timeline to have a cursor and some "wave" animation going on
- Add a quality selector (I had a nice idea for it, didn't had the time)
- Add a subtitles selector, with .srt files reading
- Add a "hint" button (with overlay bubbles hinting at keyboard shortcuts)


### Inspiration :
- [Youtube Play/Pause Button animation](http://codepen.io/aralon/pen/NqGWXZ)
- [Building custom controls for HTML5 videos](http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos)
- [Codepen - VolumeSlider by Robert Pataki](http://codepen.io/heartcode/pen/sywuk)

### Rights : 
The video & song used for this demo is [Cute Kittens Fly in Slow Motion to Hip Hop Dubstep - by ScottDW](https://www.youtube.com/watch?v=3oem-M2tQU4). All rights belong to them.