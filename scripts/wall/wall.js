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
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
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

var paddle1 = Bodies.rectangle(16, 300, 30, 150);
var paddle2 = Bodies.rectangle(1184, 300, 30, 150);
var wallDown = Bodies.rectangle(600, 599.5, 1200, 100, { isStatic: true });
var wallUp = Bodies.rectangle(600, 0.5, 1200, 100, { isStatic: true });
var wallLeft = Bodies.rectangle(0.5, 300, 100, 600, { isStatic: true });
var wallRight = Bodies.rectangle(1199.5, 300, 100, 600, { isStatic: true });
var ball = Bodies.circle(600, 300, 10);

// add all of the bodies to the world
Composite.add(engine.world, [paddle1, paddle2, wallDown, wallUp, wallLeft, wallRight, ball]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);