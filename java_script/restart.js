const video = document.getElementById("video");
const videos = ["../vidéo/cocktail_2.mp4",  "../vidéo/cocktail_3.mp4",  "../vidéo/cocktail_4.mp4" ,  "../vidéo/cocktail_5.mp4" ,  "../vidéo/cocktail_6.mp4" ,  "../vidéo/cocktail_7.mp4" ,  "../vidéo/cocktail_8.mp4"];
let currentVideoIndex = 0;
function changeVideo() {
  if(currentVideoIndex >= videos.length) currentVideoIndex = 0;
  video.src = videos[currentVideoIndex++];
  video.play();
    }
video.addEventListener("ended", changeVideo);