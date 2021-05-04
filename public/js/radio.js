let audio = document.getElementById("audio");
isPlaying = false;

function radio(){
    if (isPlaying){
        stop();
        isPlaying = false;
    } else {
        play();
        isPlaying = true;
    }
}

function play() {
    audio.src = `https://radio.nrcu.gov.ua:8443/kazka-mp3`;
    audio.play();

    document.getElementById("play").src = "/images/radioPause.png";
}

function stop(){
    audio.pause();
    document.getElementById("play").src = "/images/radioPlay.png";
}
