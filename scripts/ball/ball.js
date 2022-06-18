let ball = {
    x: 40,
    y: 20,
    xDir: 0,
    yDir: 0,
    mass: 0,
    lastHit: 0
};

let score = {
    player1: 0,
    player2: 0
};

function updateBall() {

    // Speed
    ball.x += ball.xDir;
    ball.y += ball.yDir;

    // Friction
    ball.xDir -= ball.xDir * 0.005 * ball.mass;
    ball.yDir -= ball.yDir * 0.005 * ball.mass;

    // Boundary
    if (ball.x < 0.5 || ball.x > 79.5) {
        let isScore = false;
        if (ball.lastHit == 1 && ball.x > 79.5) {
            ball.lastHit = 0;
            score.player1++;
            ball.xDir = 0;
            ball.yDir = 0;
            ball.x = 40;
            ball.y = 20;
            paddle1.x = 1;
            isScore = true;
        } else if (ball.lastHit == 2 && ball.x < 0.5) {
            ball.xDir = 0;
            ball.yDir = 0;
            ball.x = 40;
            ball.y = 20;
            ball.lastHit = 0;
            score.player2++;
            paddle2.x = 79;
            isScore = true;
        }

        ball.xDir = -ball.xDir;
        if (!isScore) ball.x = ball.xDir > 0 ? 0.5 : 79.5;


    }
    if (ball.y < 0.5 || ball.y > 39.5) ball.yDir = -ball.yDir;

    // Paddle-on-paddle collision

    paddle1.ballCollision.x = ball.x - paddle1.x;
    paddle1.ballCollision.y = ball.y - paddle1.y;

    paddle2.ballCollision.x = ball.x - paddle2.x;
    paddle2.ballCollision.y = ball.y - paddle2.y;

    // If ball hits paddle, bounce

    // Paddle1 left
    let collisionX = false;
    if (paddle1.ballCollision.x > -1 && paddle1.ballCollision.x < 0 && paddle1.ballCollision.y > -5.5 && paddle1.ballCollision.y < 5.5) {
        ball.xDir = (paddle1.xDir - ball.xDir);
        ball.x += paddle1.xDir;
        collisionX = true;
        ball.lastHit = 1;
    }

    if (paddle1.ballCollision.x < 1 && paddle1.ballCollision.x > 0 && paddle1.ballCollision.y < 5.5 && paddle1.ballCollision.y > -5.5) {
        ball.xDir = (paddle1.xDir - ball.xDir);
        ball.x += paddle1.xDir;
        collisionX = true;
        ball.lastHit = 1;
    }

    if (!collisionX) {
        if (paddle1.ballCollision.x < 1.5 && paddle1.ballCollision.x > -1.5 && paddle1.ballCollision.y < 5 && paddle1.ballCollision.y > 0) {
            ball.yDir = (paddle1.yDir - ball.yDir);
            ball.y += paddle1.yDir;
            ball.lastHit = 1;
        }
        if (paddle1.ballCollision.x < 1.5 && paddle1.ballCollision.x > -1.5 && paddle1.ballCollision.y > -5 && paddle1.ballCollision.y < 0) {
            ball.yDir = (paddle1.yDir - ball.yDir);
            ball.y += paddle1.yDir;
            ball.lastHit = 1;
        }
    }

    collisionX = false;

    if (paddle2.ballCollision.x > -1 && paddle2.ballCollision.x < 0 && paddle2.ballCollision.y > -5.5 && paddle2.ballCollision.y < 5.5) {
        ball.xDir = (paddle2.xDir - ball.xDir);
        ball.x += paddle2.xDir;
        collisionX = true;
        ball.lastHit = 2;
    }

    if (paddle2.ballCollision.x < 1 && paddle2.ballCollision.x > 0 && paddle2.ballCollision.y < 5.5 && paddle2.ballCollision.y > -5.5) {
        ball.xDir = (paddle2.xDir - ball.xDir);
        ball.x += paddle2.xDir;
        collisionX = true;
        ball.lastHit = 2;
    }

    if (!collisionX) {
        if (paddle2.ballCollision.x < 1.5 && paddle2.ballCollision.x > -1.5 && paddle2.ballCollision.y < 5 && paddle2.ballCollision.y > 0) {
            ball.yDir = (paddle2.yDir - ball.yDir);
            ball.y += paddle2.yDir;
            ball.lastHit = 2;
        }
        if (paddle2.ballCollision.x < 1.5 && paddle2.ballCollision.x > -1.5 && paddle2.ballCollision.y > -5 && paddle2.ballCollision.y < 0) {
            ball.yDir = (paddle2.yDir - ball.yDir);
            ball.y += paddle2.yDir;
            ball.lastHit = 2;
        }
    }

    // Update HTML 
    document.querySelector(".ball").style.left = (ball.x - 0.5) + "vw";
    document.querySelector(".ball").style.top = (ball.y - 0.5) + "vw";
    switch (ball.lastHit) {
        case 1:
            document.querySelector(".ball").style.backgroundColor = "red";
            break;
        case 2:
            document.querySelector(".ball").style.backgroundColor = "blue";
            break;
        default:
            document.querySelector(".ball").style.backgroundColor = "black";
            break;
    }
    document.querySelector(".score1").innerHTML = score.player1;
    document.querySelector(".score2").innerHTML = score.player2;

    // Player 1 Controls 

}

setInterval(updateBall, 1000 / 60); // 60Hz