var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create({
    gravity: {
        y: 0,
        x: 0,
        scale: 0
    },


});

// create a renderer
var render = Render.create({
    element: document.querySelector(".board-container"),
    engine: engine,
    options: {
        width: 1200,
        height: 600,
        pixelRatio: 1,
        background: '#ffffff',
        wireframeBackground: '#ffffff',
        hasBounds: false,
        enabled: true,
        wireframes: true,
        showSleeping: true,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: true,
        showCollisions: true,
        showSeparations: true,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false
    }
});

var paddle1 = Bodies.rectangle(16, 300, 30, 150, { frictionAir: 0.1, label: "paddle1" });
var paddle2 = Bodies.rectangle(1184, 300, 30, 150, { frictionAir: 0.1, label: "paddle2" });
var wallDown = Bodies.rectangle(600, 599.5, 1200, 100, { isStatic: true, label: "wallDown" });
var wallUp = Bodies.rectangle(600, 0.5, 1200, 100, { isStatic: true, label: "wallUp" });
var wallLeft = Bodies.rectangle(0.5, 300, 100, 600, { isStatic: true, label: "wallLeft" });
var wallRight = Bodies.rectangle(1199.5, 300, 100, 600, { isStatic: true, label: "wallRight" });
var ball = Bodies.circle(600, 300, 10, { frictionAir: 0, restitution: 0.9, label: "ball" });

// add all of the bodies to the world
Composite.add(engine.world, [paddle1, paddle2, wallDown, wallUp, wallLeft, wallRight, ball]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);