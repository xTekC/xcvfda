let currentStream;
let useFrontCamera = true;

// Function to switch the camera
function switchCamera() {
    useFrontCamera = !useFrontCamera;
    if (currentStream) {
        // Stop the current stream
        currentStream.getTracks().forEach(track => track.stop());
        // Re-initialize the camera with the new facingMode
        activateCamera();
    }
}

// Add an event listener to initialize the camera when the PWA loads
window.addEventListener("load", () => {
    const videoElement = document.getElementById("cameraVideo");
    
    try {
        const constraints = {
            video: {
                facingMode: useFrontCamera ? "user" : "environment"
            }
        };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                videoElement.srcObject = stream;
                currentStream = stream;
            })
            .catch(err => {
                console.log('Error accessing camera:', err);
            });
    } catch (err) {
        console.log('Error accessing camera:', err);
    }
});

// let currentStream;
// let useFrontCamera = true;

// async function activateCamera() {
//     if (currentStream) {
//         currentStream.getTracks().forEach(track => track.stop());
//         currentStream = null;
//     }

//     const videoElement = document.getElementById("cameraVideo");
    
//     try {
//         const constraints = {
//             video: {
//                 facingMode: useFrontCamera ? "user" : "environment"
//             }
//         };
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         videoElement.srcObject = stream;
//         currentStream = stream;
//     } catch(err) {
//         console.log('Error accessing camera:', err);
//     }
// }

// function deactivateCamera() {
//     if (currentStream) {
//         currentStream.getTracks().forEach(track => track.stop());
//         currentStream = null;
//     }
// }

// function switchCamera() {
//     useFrontCamera = !useFrontCamera;
//     if (currentStream) {
//         activateCamera(); // re-activate to switch camera
//     }
// }

// async function activateCamera() {
//   try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const videoElement = document.getElementById("cameraVideo");  // get your <video> element by ID
//       videoElement.srcObject = stream;  // set the video source to the stream
//   } catch(err) {
//       console.log('Error accessing camera:', err);
//   }
// }
