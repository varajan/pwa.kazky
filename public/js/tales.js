class Tale{
    constructor(reader, title, id){
        this.reader = reader;
        this.title = title;
        this.id = (id).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

        this.stream = `https://kazky.suspilne.media/tales/songs/${this.id}.mp3`;
        this.image = `https://kazky.suspilne.media/tales/img/${this.id}-min.jpg`;
    }

    add(){
        var talesDiv       = document.getElementById("tales");
        var taleDiv        = document.createElement("div");
        var image          = document.createElement("img");
        var taleDetailsDiv = document.createElement("div");
        var taleTitleDiv   = document.createElement("div");
        var taleReaderDiv  = document.createElement("div");

        taleDiv.id = this.id;
        taleDiv.className = "card-panel tales white row";
        image.src = this.image;
        image.style = "max-width:100px";

        taleDetailsDiv.className = "tales-details";
        taleTitleDiv.className = "tale-title";
        taleTitleDiv.textContent = this.title;
        taleReaderDiv.className = "tale-reader";
        taleReaderDiv.textContent = this.reader;

        taleDetailsDiv.appendChild(taleReaderDiv);
        taleDetailsDiv.appendChild(taleTitleDiv);

        taleDiv.appendChild(image);
        taleDiv.appendChild(taleDetailsDiv);

        talesDiv.appendChild(taleDiv);
    }
}

tales = [
    new Tale("Johnny", "Tale no 1", 1),
    new Tale("Billy", "Tale no 2", 2),
    new Tale("Hanna", "Tale no 3", 3),
    new Tale("Katty", "Tale no 4", 4),
]
