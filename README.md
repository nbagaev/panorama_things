# panorama_things
##Tools and scripts for panorama

Marzipano Player does not support background sound. Playsound.js allows this.
Just do:

1. Copy files `sound_off.png` and `sound_on.png` in `img` folder and `playsound.js` in panorama folder

2. insert the following lines into `index.html`:
after 
`<div id="pano"></div>`
paste
`<audio id="bgSound"></audio>
<a href="#" id="playBGSoundToggle">
  <img class="icon off" src="img/sound_off.png">
  <img class="icon on" src="img/sound_on.png">
</a>
<script src="playsound.js"></script>`

3.insert the following lines in `index.html`:
after
`function switchScene(scene) {
  stopAutorotate();
  scene.view.setParameters(scene.data.initialViewParameters);
  scene.scene.switchTo();
  startAutorotate();
  updateSceneName(scene);
  updateSceneList(scene);`
  paste
  `playBGSound(scene.data.id);`
  
4.Copy sound files into panorama folder
name the sound files exact like panorama ID from `data.js` like `0-bedroom`, `1-livingroom`

5.Paste insert the following lines in style.css:
`#playBGSoundToggle {
  display: block;
  position: absolute;
  bottom: 0;		
  left: 0;			
   
  width: 40px;		
  height: 40px;
  padding: 5px;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.0);
}

.mobile #playBGSoundToggle {
  width: 50px; 
  height: 50px;	
}

/* If there is a fullscreen and autorotate button, playToggle must placed a bit to the right */
body.fullscreen-enabled #playBGSoundToggle {
  left: 80px;	
}

body.fullscreen-enabled.mobile #playBGSoundToggle {
  left: 100px;	
}

#playBGSoundToggle .icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
}

.mobile #playBGSoundToggle .icon {
  top: 10px;
  right: 10px;
}

#playBGSoundToggle .icon.on {
  display: none;
}

#playBGSoundToggle .icon.off {
  display: block;
}

#playBGSoundToggle.enabled .icon.on {
  display: block;
}

#playBGSoundToggle.enabled .icon.off {
  display: none;
}`
