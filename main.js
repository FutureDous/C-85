// Create a reference for canvas
var canvas = document.getElementById("myCanvas");

// Give specific height and width to the car image
var car_width = 120;
var car_height = 70;

// Set initial position for a car image.
var car_x = 10;
var car_y = 10;

// Add function to upload car and background images on the canvas.
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

// Define function to upload the background image.
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

// Define function to upload the green car image.
function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);
}

// ... (Rest of the code remains the same)

// Define function to move the car upward
function up() {
    if (car_y >= 0) {
        car_y -= 10;
        uploadBackground();
        uploadgreencar();
    }
}

// Define function to move the car downward
function down() {
    if (car_y <= canvas.height - car_height) {
        car_y += 10;
        uploadBackground();
        uploadgreencar();
    }
}

// Define function to move the car left side
function left() {
    if (car_x >= 0) {
        car_x -= 10;
        uploadBackground();
        uploadgreencar();
    }
}

// Define function to move the car right side
function right() {
    if (car_x <= canvas.width - car_width) {
        car_x += 10;
        uploadBackground();
        uploadgreencar();
    }
}
