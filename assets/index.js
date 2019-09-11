import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.getElementById("action")
const muteButton = document.getElementById("muting")

const player = new MediaPlayer({el: video, plugins: [ new AutoPlay()] })
button.onclick = () => player.action()
muteButton.onclick = () => player.muting()