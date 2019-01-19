# panorama_things
## Tools and scripts for panorama

Marzipano Player does not support background sound. Playsound.js allows this.
Just do:

1. Copy files `sound_off.png` and `sound_on.png` in `img` folder, `playsound.js` and `playsound.css` in panorama folder

2. insert the following lines into `index.html`:

after

`<link rel="stylesheet" href="style.css">`

paste

`<link rel="stylesheet" href="playsound.css">`

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
