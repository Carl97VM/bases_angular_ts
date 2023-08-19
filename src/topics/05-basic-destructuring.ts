interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 8,
    songDuration: 700,
    song: "volver a verte",
    details: {
        author: "Unknown Author",
        year: 2015
    }
};

const { song, songDuration, details: { author } } = audioPlayer;

console.table([song, songDuration, author]);


export {};