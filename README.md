# Tools and scripts for panorama
## Background sound for Marzipano Player
Marzipano Player does not support background sound.  
Here is a solution.  
Just do:

1. Copy files `sound_off.png` and `sound_on.png` to `img` folder, `playsound.js` and `playsound.css` to panorama folder  
2. Change `index.html`:  
after  
`<link rel="stylesheet" href="style.css">`

insert

`<link rel="stylesheet" href="playsound.css">`

after

`<div id="pano"></div>`

insert

`<audio id="bgSound"></audio>`  
`<a href="#" id="playBGSoundToggle">`  
`  <img class="icon off" src="img/sound_off.png">`  
`  <img class="icon on" src="img/sound_on.png">`  
`</a>`  
`<script src="playsound.js"></script>`

3. Change `index.js`:

after
 
`updateSceneList(scene);`  

  insert

  `playBGSound(scene.data.id);`

4. Copy sound files to panorama folder and
name these exactly like panorama ID from `data.js`, as example `0-bedroom.mp3`, `1-livingroom.mp3` ..
