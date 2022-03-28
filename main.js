noseX = 0;
noseY = 0;

function preload() {
    nose = loadImage("https://i.postimg.cc/qMFLTdXx/nose.webp")
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPose);
}

function modelLoaded() {
    console.log("PoseNet is stated");
}

function gotPose(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose X = " + result[0].pose.nose.x);
        console.log("nose Y = " + result[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 800, 800);
    image(nose, noseX + 50 - 20, noseY + 180 - 25, 100, 100);
}

function takeSnapshot() {
    save("MyClownPic.jpg");
}