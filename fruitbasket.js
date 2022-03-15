img="";
staus="";

function preload()
{
    img = loadImage('fruitbasket.jpg');
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
    fill("yellow");
    text("Fruit Basket", 45, 75);
    noFill();
    stroke("green");
    rect(30, 60, 450, 350);

}
