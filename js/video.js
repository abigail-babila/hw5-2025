var video;

// looking for on page when it loads
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1") //need # when idenitifying the id
	video.autoplay = false;
	console.log("autoplay is set to" + video.autoplay);
	video.loop = false;
	console.log("loop is set to" + video.loop);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

//Play Button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");

	// Plays video
    video.play();

    // Volume text updates
    let currentVolume = video.volume;
    document.querySelector("#volume").innerHTML = (currentVolume * 100) + "%";
    console.log("Current volume is " + currentVolume);
});

//Pauses Button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");

    // Pauses video
    video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");

    // Decrease speed by 10%
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    video.playbackRate *= (1 / 0.9);
    console.log("New speed is " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");

    // Skip video by 10 seconds
    video.currentTime += 10;

    // Go back to start of video if video length exceeded
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
        console.log("Reached end — restarting video");
    }
    console.log("Current video time: " + video.currentTime);
});

// Mute Button
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted == true) {
		console.log("Video is muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume slider used");

    // Turn 0–100 slider value into 0–1
    let newVolume = this.value / 100;

    // Updates video volume
    video.volume = newVolume;

    // Changes volume text
    document.querySelector("#volume").innerHTML = (newVolume * 100) + "%";
    console.log("Volume is now " + video.volume);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Applying oldSchool style");
    video.classList.add("oldSchool");
});

//Original
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original style selected");
    video.classList.remove("oldSchool");
});


