img="";
staus="";

function preload()
{
    img = loadImage('bottles.jpg');
}


function setup()

{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log("error");
    }
    console.log(results);
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("green");
    text("Bottles", 45, 75);
    noFill();
    stroke("red");
    rect(60, 10, 380, 400);
}