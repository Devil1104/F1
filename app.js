window.onload = function() {
    const startButton = document.getElementById("startButton");
    const newScreen = document.getElementById("newScreen");
    const videoScreen = document.getElementById("videoScreen");
    const timerDisplay = document.getElementById("timer");
    const clickCountDisplay = document.getElementById("clickCount");
    const clickMeButton = document.getElementById("clickMeButton");
    const endVideo = document.getElementById("endVideo");

    // Initialize the event listener for the start button
    startButton.addEventListener("click", function() {
        // Hide the start button and show the new screen
        startButton.style.display = "none";
        newScreen.style.display = "block";

        // Start the timer
        let timeLeft = 25;
        let clickCount = 0;

        const timer = setInterval(function() {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                // Show the video screen
                showVideo();
            }
        }, 1000);

        // Set up the click counter
        clickMeButton.addEventListener("click", function() {
            clickCount++;
            clickCountDisplay.textContent = clickCount;
        });

        // Function to show the video and play it in a loop
        function showVideo() {
            newScreen.style.display = "none";
            videoScreen.style.display = "block";
            endVideo.play();
        }
    });
};
