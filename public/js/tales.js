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
        var talesDiv       = document.getElementById("tales");
        var taleDiv        = document.createElement("div");
        var image          = document.createElement("img");
        var playBtn        = document.createElement("img");
        var taleDetailsDiv = document.createElement("div");
        var taleTitleDiv   = document.createElement("div");
        var taleReaderDiv  = document.createElement("div");

        let id = this.id;
        let stream = this.stream;

        taleDiv.id = this.id;
        taleDiv.className = "card-panel tales white row";
        image.src = this.image;
        image.className = "tale-image";
        playBtn.src = "/img/play.png";
        playBtn.className = "play-btn";
        playBtn.onclick = function() { play(id, stream); };

        taleDetailsDiv.className = "tales-details";
        taleTitleDiv.className = "tale-title";
        taleTitleDiv.textContent = this.title;
        taleReaderDiv.className = "tale-reader";
        taleReaderDiv.textContent = this.reader;

        taleDetailsDiv.appendChild(taleReaderDiv);
        taleDetailsDiv.appendChild(taleTitleDiv);

        taleDiv.appendChild(image);
        taleDiv.appendChild(playBtn);
        taleDiv.appendChild(taleDetailsDiv);

        talesDiv.appendChild(taleDiv);
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
