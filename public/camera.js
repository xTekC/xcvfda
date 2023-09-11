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
    //setTimeout(activateCamera, 69);
});

// let currentStream;
// let useFrontCamera = true;

// function activateCamera() {
//     const videoElement = document.getElementById("cameraVideo");
//     try {
//         const constraints = {
//             video: {
//                 facingMode: useFrontCamera ? "user" : "environment"
//             }
//         };
//         navigator.mediaDevices.getUserMedia(constraints)
//             .then(stream => {
//                 videoElement.srcObject = stream;
//                 currentStream = stream;
//             })
//             .catch(err => {
//                 console.log('Error accessing camera:', err);
//             });
//     } catch (err) {
//         console.log('Error accessing camera:', err);
//     }
// }

// function switchCamera() {
//     useFrontCamera = !useFrontCamera;
//     if (currentStream) {
//         currentStream.getTracks().forEach(track => track.stop());
//     }
//     activateCamera();
// }

// window.addEventListener("load", activateCamera);

// let currentStream;
// let useFrontCamera = true;

// function switchCamera() {
//     useFrontCamera = !useFrontCamera;
//     if (currentStream) {
//         currentStream.getTracks().forEach(track => track.stop());
//         activateCamera();
//     }
// }

// window.addEventListener("load", () => {
//     const videoElement = document.getElementById("cameraVideo");
    
//     try {
//         const constraints = {
//             video: {
//                 facingMode: useFrontCamera ? "user" : "environment"
//             }
//         };
//         navigator.mediaDevices.getUserMedia(constraints)
//             .then(stream => {
//                 videoElement.srcObject = stream;
//                 currentStream = stream;
//             })
//             .catch(err => {
//                 console.log('Error accessing camera:', err);
//             });
//     } catch (err) {
//         console.log('Error accessing camera:', err);
//     }
// });

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
