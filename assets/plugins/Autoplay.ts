import MediaPlater from '../mediaPlayer'
class AutoPlay {
    constructor(){}
    run(player: MediaPlater){
        if(!player.media.muted){
            player.media.muted = true
        }
        player.play()
    }
}

export default AutoPlay