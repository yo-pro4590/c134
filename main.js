function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas= createCanvas(500,500);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);


}


function modelLoded(){
    console.log('PoseNet Is Initialized!');

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}