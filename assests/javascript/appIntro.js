$(document).ready(function(){

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assests/images/Star_Wars_original_opening_crawl_1977.mp3");

// Theme Button
$(".theme-button").on("click", function() {
  audioElement.play();
});
$(".pause-button").on("click", function() {
  audioElement.pause();
});



}); 