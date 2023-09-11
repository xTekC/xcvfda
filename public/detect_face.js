document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    let videoElement = document.getElementById("cameraVideo");
    let outputCanvas = document.getElementById("outputCanvas");
    let outputContext = outputCanvas.getContext("2d");

    // Initialize OpenCV objects
    let faceCascade = new cv.CascadeClassifier();
    
    if (!faceCascade.load("haarcascade_frontalface_default.xml")) {
        console.error("Could not load cascade classifier.");
        return;
    }

    function detectFaces(mat) {
        // Initialize required objects
        let faces = new cv.RectVector();
        let gray = new cv.Mat();
        
        // Convert to grayscale
        cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY);
        
        // Detect faces
        faceCascade.detectMultiScale(gray, faces);
        
        // Draw rectangles around detected faces
        for (let i = 0; i < faces.size(); ++i) {
            let face = faces.get(i);
            let point1 = new cv.Point(face.x, face.y);
            let point2 = new cv.Point(face.x + face.width, face.y + face.height);
            cv.rectangle(mat, point1, point2, [255, 0, 0, 255]);
        }
        
        // Clean up resources
        gray.delete();
        faces.delete();
    }

    function animate() {
        // Initialize Mat objects
        let src = new cv.Mat(videoElement.height, videoElement.width, cv.CV_8UC4);
        
        let cap = new cv.VideoCapture(videoElement);
        if (cap.read(src) === false) {
            console.error("Could not read from video element.");
            return;
        }
        
        // Detect faces
        detectFaces(src);
        
        // Display the result
        cv.imshow("outputCanvas", src);
        
        // Clean up resources
        src.delete();
        
        requestAnimationFrame(animate);
    }

    function onOpenCvReady() {
        if (cv.getBuildInformation) {
            console.log(cv.getBuildInformation());
            animate();
        } else {
            setTimeout(onOpenCvReady, 50);
        }
    }

    onOpenCvReady();
});
