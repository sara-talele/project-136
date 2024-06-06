Status = "";
video = "";
objectName = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 320);
}

function start() {
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Object Detected";
    objectName = document.getElementById('object_name').value;
}

function modelLoaded() {
    console.log("model loaded!");
    Status = true;
    video.loop();
}