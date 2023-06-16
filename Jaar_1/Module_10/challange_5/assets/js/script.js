class Coin {
    constructor (_x,_y) {
        this.x = _x;
        this.y = _y;
        this.d = 0;
        this.collectCoin = () => {
            this.d = Math.random()*1440+500;
            score++;
        };
        this.checkIfCar = () => {
            if (this.d < 0) {
                if (Math.abs(pos.x +this.x) < auto.height/10) {
                    if (Math.abs(pos.y +this.y) < auto.height/10) {
                        this.collectCoin();
                    }
                }
            }
        };
    }
}

class Pad {
    constructor (_x,_y,_d) {
        this.x = _x;
        this.y = _y;
        this.direction = _d;
    }
}
let score = 0;
const coins = [];
const pad = [];
const auto = new Image();
auto.src = "assets/img/car.png";
const track = new Image();
track.src = "assets/img/track.jpg";
const padsprite = new Image();
padsprite.src = "assets/img/boosterPad.png";
const coinsprite = new Image();
coinsprite.src = "assets/img/coin.WEBP";
const pos = {x:0,y:0};
const buttons = {left:false, right:false, acc:false, rev:false};
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
const maxSpeed = 10;
let speed = 0;
let direction = 180;
let grip = 1;
let acceleration = 0.01;
let JSONDATA;
fetch ("assets/json/coinpositions.json").then(res => res.text()).then(r => {
    console.log(r);
    JSONDATA = JSON.parse(r);
    start();
});
const start = () => {
    pos.x = -2000;
    pos.y = -2900;
    for (let i = 0; i < JSONDATA.positionCoin.length; i++) {
        coins.push(new Coin(JSONDATA.positionCoin[i].x, JSONDATA.positionCoin[i].y));

    }
    for (let i = 0; i < JSONDATA.positionPad.length; i++) {
        pad.push(new Pad(JSONDATA.positionPad[i].x, JSONDATA.positionPad[i].y, JSONDATA.positionPad[i].d));
    }
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
        case "KeyW":
            buttons.acc = true;
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
            case "KeyW":
            buttons.acc = false;
            break;
        case "Space":
            buttons.acc = false;
            break;
        case "ShiftLeft":
            buttons.rev = false;
            break;
    }
})
function update () {
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(track,pos.x,pos.y,4000,4000);
    for (let i = 0; i < coins.length; i++) {
        coins[i].d--;
        if (coins[i].d > 0) continue;
        context.drawImage(coinsprite, coins[i].x + pos.x + canvas.width/2 - coinsprite.width/2/40, coins[i].y + pos.y + canvas.height/2 - coinsprite.height/2/40, coinsprite.width/40, coinsprite.height/40);
        coins[i].checkIfCar();
    }
    for (let i = 0; i < pad.length; i++) {
        context.translate(pad[i].x + pos.x + canvas.width/2, pad[i].y + pos.y + canvas.height/2);
        context.rotate(pad[i].direction*90 * Math.PI / 180);
        context.drawImage(padsprite,  - padsprite.width/2/10,  - padsprite.height/2/10, padsprite.width/10, padsprite.height/10);
        context.rotate(-pad[i].direction*90 * Math.PI / 180);
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
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
    context.font = `20px Verdana`;
    context.fillText(`x: ` + Math.round(pos.x) + ` y: ` + Math.round(pos.y),100,110);
    context.font = `20px Verdana`;
    context.fillText(`score: ${score}`,950,50);

    requestAnimationFrame(update);
}
function convertDegreesToVector (deg) {
    const angle = deg*Math.PI/180;
    const _x = Math.cos(angle);
    const _y = Math.sin(angle);
    return {x: _x, y: _y};
}
