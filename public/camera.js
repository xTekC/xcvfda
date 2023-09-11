let currentStream;
let useFrontCamera = true;

async function activateCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }

    const videoElement = document.getElementById("cameraVideo");
    
    try {
        const constraints = {
            video: {
                facingMode: useFrontCamera ? "user" : "environment"
            }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;
        await videoElement.play();
        currentStream = stream;
    } catch (err) {
        console.log('Error accessing camera:', err);
    }
}

function switchCamera() {
    useFrontCamera = !useFrontCamera;
    activateCamera();
}

window.addEventListener("load", () => {
    // Delay activation slightly to ensure the DOM has fully loaded
    setTimeout(activateCamera, 100);
});
