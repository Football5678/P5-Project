function setup() {
canvas= createCanvas(640,480);
canvas.position(110,250);

}
tint_color="";
function draw() {

fill("blue");
circle(100,100,40);

fill("blue");
circle(600,100,40);

fill("blue");
circle(600,400,40);

fill("blue");
circle(100,400,40);
}



function take_snapshot() {
save('methuja.png');

}

