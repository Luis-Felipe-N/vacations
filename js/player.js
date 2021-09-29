import audios from './data.js'
import { convertDurationTime } from './utils.js'
import elements from './playerelements.js'

export default {
    audiosData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    start() {     
        elements.get.call(this)
        this.update()          
    },
    next() {
        this.currentPlaying++
        this.reset()
        if ( this.currentPlaying === this.audiosData.length) this.restart()
        this.update()
    },
    back() {
        this.currentPlaying--
        this.reset()
        if ( this.currentPlaying < 0 ) this.restart()
        this.update()
    },
    restart() {
        this.currentPlaying = 0
        this.update()
    },
    update() {
        this.currentAudio = this.audiosData[this.currentPlaying]
        
        this.imageCover.src = this.currentAudio.cover
        this.title.innerText = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist
        elements.createAudioElement.call(this, this.currentAudio.url)

        this.audio.onloadedmetadata = () => elements.action.call(this)
        this.audio.onended = () => {
            this.next()
        } 
        this.reset()
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause()
        } else {
            this.play()
        }
    },
    play() {
        this.isPlaying = true
        this.audio.play()
        this.btnPlay.querySelector('img').src = './files/pause.svg'
        
    },
    pause() {
        this.isPlaying = false
        this.audio.pause()
        this.btnPlay.querySelector('img').src = './files/play.svg'
    },
    setCurrentTime( time ) {
        this.audio.currentTime = time 
    },
    updateTime( time ) {
        this.currentTimeAudioElem.innerText = convertDurationTime(time)
        this.slideAudio.value = time
    },
    reset() {
        this.currentTimeAudioElem.innerText = convertDurationTime(0)
        this.slideAudio.value = 0
        this.pause()
    }
}
