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
    KeyC: false,
    KeyV: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,

}

function updatePaddle() {

    // Player 1 Controls 
    keysPressed["ArrowLeft"] ? Body.applyForce(paddle2, paddle2.position, { x: -paddleAcceleration, y: 0 }) : undefined;
    keysPressed["ArrowRight"] ? Body.applyForce(paddle2, paddle2.position, { x: +paddleAcceleration, y: 0 }) : undefined;
    keysPressed["ArrowUp"] ? Body.applyForce(paddle2, paddle2.position, { y: -paddleAcceleration, x: 0 }) : undefined;
    keysPressed["ArrowDown"] ? Body.applyForce(paddle2, paddle2.position, { y: +paddleAcceleration, x: 0 }) : undefined;
    keysPressed["Period"] ? Body.setAngularVelocity(paddle2, -paddleAcceleration * 30) : keysPressed["Slash"] ? Body.setAngularVelocity(paddle2, +paddleAcceleration * 30) : Body.setAngularVelocity(paddle2, 0);
    keysPressed["ShiftRight"] ? Body.setAngle(paddle2, 0) : undefined;

    // Player 2 Controls
    keysPressed["KeyA"] ? Body.applyForce(paddle1, paddle1.position, { x: -paddleAcceleration, y: 0 }) : undefined;
    keysPressed["KeyD"] ? Body.applyForce(paddle1, paddle1.position, { x: +paddleAcceleration, y: 0 }) : undefined;
    keysPressed["KeyW"] ? Body.applyForce(paddle1, paddle1.position, { y: -paddleAcceleration, x: 0 }) : undefined;
    keysPressed["KeyS"] ? Body.applyForce(paddle1, paddle1.position, { y: +paddleAcceleration, x: 0 }) : undefined;
    keysPressed["KeyC"] ? Body.setAngularVelocity(paddle1, -paddleAcceleration * 30) : keysPressed["KeyV"] ? Body.setAngularVelocity(paddle1, +paddleAcceleration * 30) : Body.setAngularVelocity(paddle1, 0);
    keysPressed["ShiftLeft"] ? Body.setAngle(paddle1, 0) : undefined;
}

setInterval(updatePaddle, 1000 / 60); // 60Hz

document.addEventListener("keydown", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD" || event.code == "KeyC" || event.code == "KeyV" || event.code == "ShiftLeft" || event.code == "Period" || event.code == "Slash" || event.code == "ShiftRight") {
        keysPressed[event.code] = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA" || event.code == "KeyD" || event.code == "KeyC" || event.code == "KeyV" || event.code == "ShiftLeft" || event.code == "Period" || event.code == "Slash" || event.code == "ShiftRight") {
        keysPressed[event.code] = false;
    }
});