const video =
document.getElementById("video");
video.play();
video.addEventListener("ended"), () => {
    video.src="../video/cocktail_2.mp4";
    video.onload();
    video.play()
}