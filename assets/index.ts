import MediaPlayer from './mediaPlayer'
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from './plugins/AutoPause'

const video = document.querySelector("video")
const button: HTMLElement = document.getElementById("action")
const muteButton: HTMLElement = document.getElementById("muting")

const player = new MediaPlayer({el: video, plugins: [ new AutoPlay(), new AutoPause()] })
button.onclick = () => player.togglePlay()
muteButton.onclick = () => player.togglePlay2()


if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .catch(error =>{
        console.log(error.message)
    })
}