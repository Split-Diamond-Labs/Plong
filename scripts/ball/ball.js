var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// let ball = {
//     lastHit: 0
// };

// let score = {
//     player1: 0,
//     player2: 0
// };

// function updateBall() {
//     if (ball.x < 0.5 || ball.x > 79.5) {
//         let isScore = false;
//         if (ball.lastHit == 1 && ball.x > 79.5) {
//             ball.lastHit = 0;
//             score.player1++;
//             isScore = true;
//         } else if (ball.lastHit == 2 && ball.x < 0.5) {
//             ball.lastHit = 0;
//             score.player2++;
//             isScore = true;
//         }


//     }

//     document.querySelector(".score1").innerHTML = score.player1;
//     document.querySelector(".score2").innerHTML = score.player2;

//     // Player 1 Controls 

// }

// setInterval(updateBall, 1000 / 60); // 60Hz