// --- SONG DATA ---
const songLibrary = [
    // SONGS 1
    {
        id: "t1",
        title: "Naa Ready (from 'Leo')",
        artist: "Anirudh Ravichander, Thalapathy Vijay",
        album: "Leo",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        duration: "4:08",
        category: "Tamil"
    },
    {
        id: "t2",
        title: "Hukum - Thalaivar Alappara",
        artist: "Anirudh Ravichander, Super Subu",
        album: "Jailer",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Jailer.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        duration: "3:27",
        category: "Tamil"
    },
    {
        id: "t3",
        title: "Badass (from 'Leo')",
        artist: "Anirudh Ravichander",
        album: "Leo",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        duration: "3:50",
        category: "Tamil"
    },
    {
        id: "t4",
        title: "Vaathi Coming",
        artist: "Anirudh Ravichander, Gana Balachandar",
        album: "Master",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Master.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        duration: "3:50",
        category: "Tamil"
    },
    {
        id: "t5",
        title: "Vikram Title Track",
        artist: "Anirudh Ravichander",
        album: "Vikram",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Vikram.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        duration: "3:40",
        category: "Tamil"
    },
    {
        id: "t6",
        title: "Arabic Kuthu",
        artist: "Anirudh Ravichander, Jonita Gandhi",
        album: "Beast",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Beast.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        duration: "4:40",
        category: "Tamil"
    },
    {
        id: "t7",
        title: "Ranjithame",
        artist: "Thalapathy Vijay, M.M. Manasi",
        album: "Varisu",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Varisu.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        duration: "4:20",
        category: "Tamil"
    },

    // MELODY & LOVE 
    {
        id: "m1",
        title: "Maruvaarthai",
        artist: "Sid Sriram",
        album: "Enai Noki Paayum Thota",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Enai Noki Paayum Thota.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        duration: "5:56",
        category: "Melody"
    },
    {
        id: "m2",
        title: "Mallipoo",
        artist: "A.R. Rahman, Madhushree",
        album: "Vendhu Thanindhathu Kaadu",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Vendhu Thanindhathu Kaadu.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        duration: "4:04",
        category: "Melody"
    },
    {
        id: "m3",
        title: "Naan Pizhai",
        artist: "Anirudh Ravichander, Ravi G",
        album: "Kaathuvaakula Rendu Kaadhal",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        duration: "3:58",
        category: "Melody"
    },
    {
        id: "m4",
        title: "Kanave Kanave",
        artist: "Anirudh Ravichander",
        album: "David",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        duration: "4:30",
        category: "Melody"
    },
    {
        id: "m5",
        title: "Megham Karukatha",
        artist: "Dhanush, Anirudh",
        album: "Thiruchitrambalam",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Thiruchitrambalam.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        duration: "4:20",
        category: "Melody"
    },
    {
        id: "m6",
        title: "Pogaadhe",
        artist: "Yuvan Shankar Raja",
        album: "Deepavali",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        duration: "4:40",
        category: "Melody"
    },

    // KUTHU -- SONGS FOR PARTY
    {
        id: "p1",
        title: "Kaavaalaa",
        artist: "Anirudh Ravichander, Shilpa Rao",
        album: "Jailer",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Jailer.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        duration: "3:10",
        category: "Party"
    },
    {
        id: "p2",
        title: "Dippam Dappam",
        artist: "Anirudh, Anthony Daasan",
        album: "Kaathuvaakula Rendu Kaadhal",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        duration: "3:30",
        category: "Party"
    },
    {
        id: "p3",
        title: "Verithanam",
        artist: "Thalapathy Vijay",
        album: "Bigil",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Leo.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        duration: "4:00",
        category: "Party"
    },

    // INTERNATIONAL HITS 
    {
        id: "e1",
        title: "Starboy",
        artist: "The Weeknd, Daft Punk",
        album: "Starboy",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Starboy.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        duration: "3:50",
        category: "International"
    },
    {
        id: "e2",
        title: "Flowers",
        artist: "Miley Cyrus",
        album: "Endless Summer Vacation",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Endless Summer Vacation.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        duration: "3:20",
        category: "International"
    },
    {
        id: "e3",
        title: "Cruel Summer",
        artist: "Taylor Swift",
        album: "Lover",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Starboy.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        duration: "2:58",
        category: "International"
    },
    {
        id: "e4",
        title: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Starboy.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        duration: "2:47",
        category: "International"
    },
    {
        id: "e5",
        title: "Die For You",
        artist: "The Weeknd, Ariana Grande",
        album: "Starboy",
        cover: "https://spotify-clone-6wnc.onrender.com/covers/Starboy.jpg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        duration: "3:50",
        category: "International"
    }

];

module.exports = songLibrary;
