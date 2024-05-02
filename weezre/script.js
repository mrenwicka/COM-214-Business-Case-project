
    function submitComment() {
        var username = document.getElementById("username").value;
        var commentText = document.getElementById("comment-text").value;
        
        if (username.trim() === "") {
            alert("Please enter a username.");
            return;
        }
        
        if (commentText.trim() === "") {
            alert("Please enter a comment.");
            return;
        }
    
        var currentTime = new Date(); // Get the current time
        var timestamp = currentTime.toLocaleString(); // Convert the time to a readable format
    
        var commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = "<strong>" + username + ":</strong> " + commentText + "<span class='timestamp'>" + timestamp + "</span>";
        document.getElementById("comment-section").appendChild(commentDiv);
        
        document.getElementById("username").value = ""; // Clear username field after submission
        document.getElementById("comment-text").value = ""; // Clear comment textarea after submission
    }
    window.onload = function() {
        const songs = [
            { title: "Beverly Hills", src: "audio/Beverly_Hills.mp3", cover: "images/beverly_hills_cover.jpeg" },
            { title: "Only In Dreams", src: "audio/Only_In_Dreams.mp3", cover: "images/blue_album_cover.jpeg" },
            { title: "Say It Ain't So", src: "audio/Say_It_Ain't_So.mp3", cover: "images/blue_album_cover.jpeg" },
            { title: "Thank God for Girls", src: "audio/Thank_God_for_Girls.mp3", cover: "images/Thank_God_for_Girls_Cover.jpeg" },
            { title: "Undone - The Sweater Song", src: "audio/Undone-The_Sweater_Song.mp3", cover: "images/blue_album_cover.jpeg" }
        ];
    
        const audio = new Audio();
        let currentSongIndex = Math.floor(Math.random() * songs.length);
        let isPlaying = false;
    
        // const musicInfo = document.getElementById("music-info");
        const coverImage = document.getElementById("cover-image");
        const songTitle = document.getElementById("song-title");
        const playPauseButton = document.getElementById("play-pause-button");
        const skipButton = document.getElementById("skip-button");
        const progressBar = document.getElementById("progress-bar");
        const progress = document.getElementById("progress");
    
        function updatePlayerUI() {
            const currentSong = songs[currentSongIndex];
            coverImage.src = currentSong.cover;
            songTitle.textContent = currentSong.title;
            playPauseButton.textContent = isPlaying ? "Pause" : "Play";
        }
    
        function playCurrentSong() {
            audio.src = songs[currentSongIndex].src;
            audio.play();
            isPlaying = true;
            updatePlayerUI();
        }
    
        function togglePlayPause() {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            isPlaying = !isPlaying;
            updatePlayerUI();
        }
    
        function playNextSong() {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            playCurrentSong();
        }
    
        function updateProgressBar() {
            const progressPercentage = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercentage + "%";
        }
    
        audio.addEventListener("timeupdate", updateProgressBar);
        audio.addEventListener("ended", playNextSong);
    
        progressBar.addEventListener("click", function(event) {
            const rect = progressBar.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const percentage = offsetX / progressBar.clientWidth;
            audio.currentTime = audio.duration * percentage;
            updateProgressBar();
        });
    
        playCurrentSong();
    
        playPauseButton.addEventListener("click", togglePlayPause);
        skipButton.addEventListener("click", playNextSong);
    };
    