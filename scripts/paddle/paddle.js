const paddleAcceleration = 0.05;

let paddle1 = {
    x: 0,
    y: 20,
    xDir: 0,
    yDir: 0,
    mass: 10,
    ballCollision: {
        x: 0,
        y: 0
    }
}

let paddle2 = {
    x: 80,
    y: 20,
    xDir: 0,
    yDir: 0,
    mass: 10,
    ballCollision: {
        x: 0,
        y: 0
    }
}

let keysPressed = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function updatePaddle() {
    // Speed
    paddle1.x += paddle1.xDir;
    paddle1.y += paddle1.yDir;
    paddle2.x += paddle2.xDir;
    paddle2.y += paddle2.yDir;

    // Friction
    paddle1.xDir -= paddle1.xDir * 0.005 * paddle1.mass;
    paddle1.yDir -= paddle1.yDir * 0.005 * paddle1.mass;
    paddle2.xDir -= paddle2.xDir * 0.005 * paddle2.mass;
    paddle2.yDir -= paddle2.yDir * 0.005 * paddle2.mass;

    // Boundary
    if (paddle1.x < 1 || paddle1.x > 79) paddle1.xDir = -paddle1.xDir;
    if (paddle2.x < 1 || paddle2.x > 79) paddle2.xDir = -paddle2.xDir;
    if (paddle1.y < 5 || paddle1.y > 35) paddle1.yDir = -paddle1.yDir;
    if (paddle2.y < 5 || paddle2.y > 35) paddle2.yDir = -paddle2.yDir;

    // Paddle-on-paddle collision
    if (Math.abs(paddle1.y - paddle2.y) < 10 && Math.abs(paddle1.x - paddle2.x) < 2) {
        tempDir = paddle1.xDir;
        paddle1.xDir = paddle2.xDir;
        paddle2.xDir = tempDir;
        tempDir = paddle1.yDir;
        paddle1.yDir = paddle2.yDir;
        paddle2.yDir = tempDir;
    }

    // Update HTML 
    document.querySelector(".player-1").style.left = (paddle1.x - 1) + "vw";
    document.querySelector(".player-1").style.top = (paddle1.y - 5) + "vw";
    document.querySelector(".player-2").style.left = (paddle2.x - 1) + "vw";
    document.querySelector(".player-2").style.top = (paddle2.y - 5) + "vw";

    // Player 1 Controls 
    keysPressed["ArrowLeft"] ? paddle2.xDir += -paddleAcceleration : (() => {})();
    keysPressed["ArrowRight"] ? paddle2.xDir += paddleAcceleration : (() => {})();
    keysPressed["ArrowUp"] ? paddle2.yDir += -paddleAcceleration : (() => {})();
    keysPressed["ArrowDown"] ? paddle2.yDir += paddleAcceleration : (() => {})();

    // Player 2 Controls
    keysPressed["KeyA"] ? paddle1.xDir += -paddleAcceleration : (() => {})();
    keysPressed["KeyD"] ? paddle1.xDir += paddleAcceleration : (() => {})();
    keysPressed["KeyW"] ? paddle1.yDir += -paddleAcceleration : (() => {})();
    keysPressed["KeyS"] ? paddle1.yDir += paddleAcceleration : (() => {})();
}

setInterval(updatePaddle, 1000 / 60); // 60Hz

document.addEventListener("keydown", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD") {
        keysPressed[event.code] = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD") {
        keysPressed[event.code] = false;
    }
});

setInterval(() => {}, 1000 / 60); // 60Hz