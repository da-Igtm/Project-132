function setup(){
    canvas=createCanvas(600,400);
    canvas.position(250,150);
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}

status="";
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(imag , gotResults);
}

function preload(){
    imag4=loadImage("piano and projector.jpg");
} 

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}