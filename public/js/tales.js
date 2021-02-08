class Tale{
    constructor(reader, title, id){
        let index = (id).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        this.reader = reader;
        this.title = title;
        this.id = `tale-${index}`;

        this.stream = `https://kazky.suspilne.media/tales/songs/${index}.mp3`;
        this.image = `https://kazky.suspilne.media/tales/img/${index}-min.jpg`;
    }

    add(){
        var talesDiv    = document.getElementById("tales");
        var taleElement = document.createElement("div");

        taleElement.id = this.id;
        talesDiv.appendChild(taleElement);

        taleElement.innerHTML = `
            <div class="tale" style="position: relative;">
                <img class="tale-image">
                <img class="play-btn" src="/img/play.png">
                <div class="tale-title text"></div>
                <div class="tale-reader text"></div>
            </div>`;

        document.querySelector(`div#${this.id} img.tale-image`).src = this.image;
        document.querySelector(`div#${this.id} div.tale-title`).textContent = this.title;
        document.querySelector(`div#${this.id} div.tale-reader`).textContent = this.reader;
    }
}

function play(id, stream) {
    let audio  = document.getElementById("audio");

    if (nowPlaying === id){
        nowPlaying = 0;
        audio.stop();
    } else {
        let next = getNext(id);
        nowPlaying = id;
        audio.src = stream;
        audio.play();
        audio.addEventListener("ended",function() { play(next.id, next.stream); });
    }

    setPlayBtn();
}

function getNext(id){
    for (let i = 0; i < tales.length - 1; i++) {
        if (tales[i].id === id) return tales[i+1];
    }

    return tales[0];
}

function setPlayBtn(){
    tales.forEach(tale => {
        document.querySelector(`div#${tale.id} img.play-btn`).src = (tale.id == nowPlaying) ? "/img/pause.png" : "/img/play.png";
    });
}

nowPlaying = 0;
tales = [
    new Tale("Johnny", "Tale no 8", 8),
    new Tale("Billy", "Tale no 4", 4),
    new Tale("Hanna", "Tale no 24", 24),
    new Tale("Katty", "Tale no 9", 9),
]
