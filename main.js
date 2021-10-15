function preload() {
}

function setup() {
    canvas = createCanvas(400,380)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,380)
    video.hide()
    tint_color = ""
}

function draw() {
    background(245, 245, 70, 1)
    image(video,40,50,320,300)
    tint_color = document.getElementById("tint_color").value
    tint(tint_color);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(40, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(80, 40, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(360, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(350, 90, 20, 460);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(360, 340, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(70, 340, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(360, 340, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(40, 340, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(30, 90, 20, 460);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(40, 340, 80);
}

function take_snapshot() {
    save("My_Picture.jpeg")
}