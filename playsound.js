'use strict';

var playBGSoundToggleElement = document.querySelector('#playBGSoundToggle');
var bgSound = document.querySelector('#bgSound');
bgSound.volume = 0.5;
bgSound.loop=true;
// Set handler for sound play toggle.
playBGSoundToggleElement.addEventListener('click', playBGSoundToggle);

function playBGSound(scene_id) {	
	bgSound.src = scene_id + ".mp3"
	BGSound_play();
}
function BGSound_play() {
	var pl = bgSound.play();
	if (pl !== undefined) {
		pl.then(_ => {
		// play started!
		showButtonStop();
		}).catch(error => {
		// play was prevented.
		showButtonPlay();
		});
	}
}

function showButtonStop() {
	if (playBGSoundToggleElement.classList.contains('enabled')) {
		playBGSoundToggleElement.classList.remove('enabled');
    } 
}

function showButtonPlay() {
	if (!playBGSoundToggleElement.classList.contains('enabled')) {
		playBGSoundToggleElement.classList.add('enabled');		
    } 
}
  
function playBGSoundToggle() {
	if (playBGSoundToggleElement.classList.contains('enabled')) {
		playBGSoundToggleElement.classList.remove('enabled');
		BGSound_play();
    } else {
		playBGSoundToggleElement.classList.add('enabled');
		bgSound.pause();
    }
}
//test