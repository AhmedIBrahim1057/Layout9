var canvas = $("#wrapper-canvas").get(0);

var dimensions = {
  width: $(window).width(),
  height: $(window).height()
};

Matter.use("matter-attractors");
Matter.use("matter-wrap");

function runMatter() {
  // module aliases
  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create();

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  // create renderer
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "rgb(240,240,240)"
    }
  });

  // create runner
  var runner = Runner.create();

  // Runner.run(runner, engine);
  // Render.run(render);

  // create demo scene
  var world = engine.world;
  world.gravity.scale = 0;

  // create a body with an attractor
  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(dimensions.width / 4, dimensions.height / 4) / 2,
    {
      render: {
        fillStyle: `rgb(240,240,240,0)`,
        strokeStyle: `rgb(240,240,240,0)`,
        lineWidth: 0
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6
            };
          }
        ]
      }
    }
  );

  World.add(world, attractiveBody);

  // add some bodies that to be attracted
  for (var i = 0; i < 20; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s = Common.random() > 0.6 ? Common.random(10, 40) : Common.random(4, 30);

    // let poligonNumber = Common.random(1, 2);
    // var body = Bodies.polygon(
    //   x,
    //   y,
    //   poligonNumber,
    //   s,
    //   {
    //     mass: .6,
    //     friction: 0,
    //     frictionAir: 0.02,
    //     angle: Math.round(Math.random() * 360),
    //     render: {
    //       fillStyle: "#FFFFFF",
    //       strokeStyle: `#DDDDDD`,
    //       lineWidth: 0,
    //       sprite: {
    //             texture: './img/pattern-nbe-10.png',
    //             xScale: .5,
    //             yScale: .5
    //         }
    //     }
    //   },
    // );
    // World.add(world, body);

    var body = Bodies.polygon(
      x,
      y,
      Common.random(1, 2),
      s,
      {
        mass: .6,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: `#DDDDDD`,
          lineWidth: 0,
          sprite: {
                texture: './img/pattern-nbe-10.png',
                xScale: .5,
                yScale: .5
            }
        }
      },
    );
    World.add(world, body);

    // var body = Bodies.polygon(
    //   x,
    //   y,
    //   Common.random(1, 2),
    //   s,
    //   {
    //     mass: 1.5,
    //     friction: 0.6,
    //     frictionAir: 0.02,
    //     angle: Math.round(Math.random() * 360),
    //     render: {
    //       fillStyle: "#FFFFFF",
    //       strokeStyle: `#DDDDDD`,
    //       lineWidth: 0,
    //       sprite: {
    //             texture: './img/pattern-nbe-12.png',
    //             xScale: 1,
    //             yScale: 1
    //         }
    //     }
    //   },
    // );
    // World.add(world, body);

    var body = Bodies.polygon(
      x,
      y,
      Common.random(1, 2),
      s,
      {
        mass: .1,
        friction: 0.6,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: `#DDDDDD`,
          lineWidth: 0,
          sprite: {
                texture: './img/pattern-nbe-11.png',
                xScale: .5,
                yScale: .5
            }
        }
      },
    );
    World.add(world, body);

    // var body = Bodies.polygon(
    //   x,
    //   y,
    //   Common.random(1, 2),
    //   s,
    //   {
    //     mass: .1,
    //     friction: 0.6,
    //     frictionAir: 0.02,
    //     angle: Math.round(Math.random() * 360),
    //     render: {
    //       fillStyle: "#FFFFFF",
    //       strokeStyle: `#DDDDDD`,
    //       lineWidth: 0,
    //       sprite: {
    //             texture: './img/pattern-nbe-11.png',
    //             xScale: .5,
    //             yScale: .5
    //         }
    //     }
    //   },
    // );
    // World.add(world, body);


    var body = Bodies.polygon(
      x,
      y,
      Common.random(1, 2),
      s,
      {
        mass: 1.5,
        friction: 0.6,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: `#DDDDDD`,
          lineWidth: 0,
          sprite: {
                texture: './img/pattern-nbe-12.png',
                xScale: 1,
                yScale: 1
            }
        }
      },
    );
    World.add(world, body);

    let r = Common.random(0, 1);
    // var circle = Bodies.circle(x, y, Common.random(1, 2), {
    //   mass: 0.5,
    //   friction: 0,
    //   frictionAir: 0.01,
    //   render: {
    //     fillStyle: r > 0.3 ? `#FF2D6A` : `rgb(240,240,240)`,
    //     strokeStyle: `#E9202E`,
    //     lineWidth: 4,
    //     sprite: {
    //         texture: './img/pattern-nbe-09.png',
    //         xScale: 1,
    //         yScale: 1
    //     }
    //   }
    // });
    // World.add(world, circle);

    // var circle = Bodies.circle(x, y, Common.random(1, 2), {
    //   mass: 1,
    //   friction: 0,
    //   frictionAir: 0,
    //   render: {
    //     fillStyle: r > 0.3 ? `#f00` : `rgb(240,240,240)`,
    //     strokeStyle: `#3257E8`,
    //     lineWidth: 4,
    //     sprite: {
    //         texture: './img/pattern-nbe-07.png',
    //         xScale: 1,
    //         yScale: 1
    //     }
    //   }
    // });
    // World.add(world, circle);

    // var circle = Bodies.circle(x, y, Common.random(1, 2), {
    //   mass: 0.2,
    //   friction: 0.0,
    //   frictionAir: 0.2,
    //   render: {
    //     fillStyle: `rgb(240,240,240)`,
    //     strokeStyle: `#FFFFFF`,
    //     lineWidth: 3,
    //     sprite: {
    //         texture: './img/pattern-nbe-04.png',
    //         xScale: 1,
    //         yScale: 1
    //     }
    //   }
    // });
    // World.add(world, circle);

    // var circle = Bodies.circle(x, y, Common.random(1, 2), {
    //   mass: 1,
    //   friction: 0,
    //   frictionAir: 0,
    //   render: {
    //     fillStyle: r > 0.3 ? `#f00` : `rgb(240,240,240)`,
    //     strokeStyle: `#3257E8`,
    //     lineWidth: 4,
    //     sprite: {
    //         texture: './img/pattern-nbe-06.png',
    //         xScale: 1,
    //         yScale: 1
    //     }
    //   }
    // });
    // World.add(world, circle);

    // var circle = Bodies.circle(x, y, Common.random(1, 2), {
    //   mass: 1,
    //   friction: 0,
    //   frictionAir: 0,
    //   render: {
    //     fillStyle: r > 0.3 ? `#f00` : `rgb(240,240,240)`,
    //     strokeStyle: `#3257E8`,
    //     lineWidth: 4,
    //     sprite: {
    //         texture: './img/pattern-nbe-08.png',
    //         xScale: 1,
    //         yScale: 1
    //     }
    //   }
    // });
    // World.add(world, circle);

  }

  // add mouse control
  var mouse = Mouse.create(render.canvas);

  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12
    });
  });

  // return a context for MatterDemo to control
  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    play: function () {
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    }
  };
  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function setWindowSize() {
  let dimensions = {};
  dimensions.width = $(window).width();
  dimensions.height = $(window).height();

  m.render.canvas.width = $(window).width();
  m.render.canvas.height = $(window).height();
  return dimensions;
}

let m = runMatter();
setWindowSize();
$(window).resize(debounce(setWindowSize, 250));
