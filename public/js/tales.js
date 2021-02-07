class Tale{
    constructor(reader, title, id){
        this.reader = reader;
        this.title = title;
        this.id = id;
    }

    stream = "https://kazky.suspilne.media/tales/songs/01.mp3";
    image = "https://kazky.suspilne.media/tales/img/01-min.jpg";
}

tales = [
    new Tale("Johnny", "Tale no 1", 1),
    new Tale("Billy", "Tale no 2", 2),
    new Tale("Hanna", "Tale no 3", 3),
    new Tale("Katty", "Tale no 4", 4),
]
