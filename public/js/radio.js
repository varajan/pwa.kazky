function radio(){
    if (audio.paused){
        play();
    } else {
        stop();
    }
}

function play() {
    let audio = document.getElementById("audio");

    audio.src = `https://radio.nrcu.gov.ua:8443/kazka-mp3`;
    audio.play();

    document.getElementById("play").src = "/images/radioPause.png";
}

function stop(){
    let audio = document.getElementById("audio");

    audio.pause();
    document.getElementById("play").src = "/images/radioPlay.png";
}
