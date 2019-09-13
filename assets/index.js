import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const button = document.getElementById("action")
const muteButton = document.getElementById("muting")

const player = new MediaPlayer({el: video, plugins: [ new AutoPlay(), new AutoPause()] })
button.onclick = () => player.action()
muteButton.onclick = () => player.muting()


if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .catch(error =>{
        console.log(error.message)
    })
}