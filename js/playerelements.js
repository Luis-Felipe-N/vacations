import { convertDurationTime } from "./utils.js"

export default {
    get() {
        this.title = document.querySelector('.title')
        this.artist = document.querySelector('.artist')
        this.audio = document.querySelector('#audio')
        this.btnPlay = document.querySelector('#play-pause')
        this.slideAudio = document.querySelector('#slideAudio')
        this.durationAudioElem = document.querySelector('#durationAudio')
        this.currentTimeAudioElem = document.querySelector('#currentTimeAudio')
        this.btnNext = document.querySelector('#btnNext')
        this.imageCover = document.querySelector('#imageCover')
    },
    createAudioElement(audio) {
        this.audio= null
        this.audio = new Audio(audio)
        this.audioDuration = 0
        
    },
    action() {
        this.btnPlay.onclick = () => this.togglePlayPause()
        this.btnNext.onclick = () => this.next()
        

        this.slideAudio.max = this.audio.duration
        this.durationAudioElem.innerText = convertDurationTime(this.audio.duration)
        this.audio.ontimeupdate = ({target}) => this.updateTime(target.currentTime)
        

        this.slideAudio.oninput = ({target}) => this.setCurrentTime(target.value)
    }
}