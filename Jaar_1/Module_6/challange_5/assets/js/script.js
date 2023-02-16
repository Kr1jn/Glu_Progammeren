const auto = new Image();
auto.src = "assets/img/car.png";
const track = new Image();
track.src = "assets/img/track.jpg";
const pos = {x:0,y:0};
const buttons = {left:false, right:false, acc:false, rev:false};
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
const maxSpeed = 10;
let speed = 0;
let direction = 200;
let grip = 1;
let acceleration = 0.01;
const start = () => {
    canvas.width = 1080;
    canvas.height = 600;
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    update();
}
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case "KeyA":
            buttons.left = true;
            break;
        case "KeyD":
            buttons.right = true;
            break;
        case "Space":
            buttons.acc = true;
            break;
        case "ShiftLeft":
            buttons.rev = true;
            break;
    }
})
window.addEventListener('keyup', function (e) {
    switch (e.code) {
        case "KeyA":
            buttons.left = false;
            break;
        case "KeyD":
            buttons.right = false;
            break;
        case "Space":
            buttons.acc = false;
            break;
        case "ShiftLeft":
            buttons.rev = false;
            break;
    }
})
start();
function update () {
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(track,pos.x,pos.y,4000,4000);
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate(direction * Math.PI / 180);
    context.drawImage(auto,-auto.width/6/2,-auto.height/6/2,auto.width/6,auto.height/6);
    context.rotate(-direction * Math.PI / 180);
    context.setTransform(1, 0, 0, 1, 0, 0);
    const vector = convertDegreesToVector(direction);
    pos.x += vector.x*speed*-1;
    pos.y += vector.y*speed*-1;
    if (buttons.acc) {
        if (speed < maxSpeed) {
            speed += acceleration;
        } else {
            speed = maxSpeed;
        }
    } else {
        if (speed > 0) {
            speed -= acceleration*3;
        } else {
            speed = 0;
        }
    }
    if (buttons.left) {
        direction -= grip;
    }
    if (buttons.right) {
        direction += grip;
    }
    requestAnimationFrame(update);
}
function convertDegreesToVector (deg) {
    const angle = deg*Math.PI/180;
    const _x = Math.cos(angle);
    const _y = Math.sin(angle);
    return {x: _x, y: _y};
}
