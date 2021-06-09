lipsX=0;
lipsY=0;
function preload(){
    lips_lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');

}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    fill(250,0,0);
    stroke(250,0,0);
    image(lips_lipstick,lipsX,lipsY,50,50);

}
function modelLoaded(){
    console.log('posenet is initilized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipsX=results[0].pose.nose.x;
        lipsY=results[0].pose.nose.y;
        console.log("nose x= "+ results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);


    }
}

function take_snapshot(){
    save('realfilter.jpg');
    
}