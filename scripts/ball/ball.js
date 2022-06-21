var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let ballData = {
    lastHit: 0
};

let score = {
    player1: 0,
    player2: 0
};

function isEqualOrSomething(a, b, aLabel, bLabel) {
    return (a.label === aLabel && b.label === bLabel) || (a.label === bLabel && b.label === aLabel);
}

function updateBall(event) {
    bodyA = (event.pairs[0].bodyA);
    bodyB = (event.pairs[0].bodyB);
    if (ballData.lastHit == 1 && isEqualOrSomething(bodyA, bodyB, "wallRight", "ball")) {
        ballData.lastHit = 0;
        score.player1++;
        console.log("Player 1 scored");
        Matter.Body.setAngularVelocity(ball, 0);
        Matter.Body.setVelocity(ball, { x: 0, y: 0 });
        Matter.Body.setPosition(ball, { x: 600, y: 300 });
        Matter.Body.setAngularVelocity(paddle1, 0);
        Matter.Body.setVelocity(paddle1, { x: 0, y: 0 });
        Matter.Body.setPosition(paddle1, { x: 65.5, y: 300 });
        Matter.Body.setAngle(paddle1, 0);
    } else if (ballData.lastHit == 2 && isEqualOrSomething(bodyA, bodyB, "wallLeft", "ball")) {
        ballData.lastHit = 0;
        score.player2++;
        console.log("Player 2 scored");
        Matter.Body.setAngularVelocity(ball, 0);
        Matter.Body.setVelocity(ball, { x: 0, y: 0 });
        Matter.Body.setPosition(ball, { x: 600, y: 300 });
        Matter.Body.setAngularVelocity(paddle2, 0);
        Matter.Body.setVelocity(paddle2, { x: 0, y: 0 });
        Matter.Body.setPosition(paddle2, { x: 1134.5, y: 300 });
        Matter.Body.setAngle(paddle2, 0);
    }
    console.log("Collision between " + bodyA.label + " and " + bodyB.label);
    if (isEqualOrSomething(bodyA, bodyB, "paddle1", "ball")) {
        ballData.lastHit = 1;
        console.log("Hit paddle 1");
    } else if (isEqualOrSomething(bodyA, bodyB, "paddle2", "ball")) {
        ballData.lastHit = 2;
        console.log("Hit paddle 2");
    }






    document.querySelector(".score1").innerHTML = score.player1;
    document.querySelector(".score2").innerHTML = score.player2;

}


// Player 1 Controls 



Matter.Events.on(engine, "collisionStart", updateBall); // 60Hz