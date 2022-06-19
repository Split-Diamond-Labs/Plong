var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

const paddleAcceleration = 0.005;

let keysPressed = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    KeyQ: false,
    KeyE: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function updatePaddle() {

    // Player 1 Controls 
    keysPressed["ArrowLeft"] ? Body.applyForce(paddle2, paddle2.position, {x: -paddleAcceleration, y: 0}) : (() => {})();
    keysPressed["ArrowRight"] ? Body.applyForce(paddle2, paddle2.position, {x: +paddleAcceleration, y: 0}) : (() => {})();
    keysPressed["ArrowUp"] ? Body.applyForce(paddle2, paddle2.position, {y: -paddleAcceleration, x: 0}) : (() => {})();
    keysPressed["ArrowDown"] ? Body.applyForce(paddle2, paddle2.position, {y: +paddleAcceleration, x: 0}) : (() => {})();

    // Player 2 Controls
    keysPressed["KeyA"] ? Body.applyForce(paddle1, paddle1.position, {x: -paddleAcceleration, y: 0}) : (() => {})();
    keysPressed["KeyD"] ? Body.applyForce(paddle1, paddle1.position, {x: +paddleAcceleration, y: 0}) : (() => {})();
    keysPressed["KeyW"] ? Body.applyForce(paddle1, paddle1.position, {y: -paddleAcceleration, x: 0}) : (() => {})();
    keysPressed["KeyS"] ? Body.applyForce(paddle1, paddle1.position, {y: +paddleAcceleration, x: 0}) : (() => {})();
    keysPressed["KeyC"] ? Body.setAngularVelocity(paddle1, -paddleAcceleration * 20) : keysPressed["KeyV"] ? Body.setAngularVelocity(paddle1, +paddleAcceleration * 20) : Body.setAngularVelocity(paddle1, 0);
}

setInterval(updatePaddle, 1000 / 60); // 60Hz

document.addEventListener("keydown", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD" || event.code == "KeyC" || event.code == "KeyV") {
        keysPressed[event.code] = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD" || event.code == "KeyC" || event.code == "KeyV") {
        keysPressed[event.code] = false;
    }
});

setInterval(() => {}, 1000 / 60); // 60Hz