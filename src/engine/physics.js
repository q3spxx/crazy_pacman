import Box2D from 'box2dweb';

var b2Vec2 = Box2D.Common.Math.b2Vec2
 ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
 ,	b2Body = Box2D.Dynamics.b2Body
 ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
 ,	b2Fixture = Box2D.Dynamics.b2Fixture
 ,	b2World = Box2D.Dynamics.b2World
 ,	b2MassData = Box2D.Collision.Shapes.b2MassData
 ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
 ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
 ,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
 ,  b2ContactListener = Box2D.Dynamics.b2ContactListener;

function Physics () {
  var _world;
  var _fps = 0;
  var _debugDraw = new b2DebugDraw();
  var _contactListener = new b2ContactListener();
  var _bodiesForDestroy = [];

  var _destroyBodies = () => {
    while (_bodiesForDestroy.length > 0) {
      let bodies = _bodiesForDestroy.splice(0, 1);
      _world.DestroyBody(bodies[0]);
    };
  };

  this.init = (fps) => {
    _fps = fps;
    _world = new b2World(new b2Vec2(0, 0), true);

    _debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
    _debugDraw.SetDrawScale(30.0);
    _debugDraw.SetFillAlpha(0.3);
    _debugDraw.SetLineThickness(1.0);
    _debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    _world.SetDebugDraw(_debugDraw);

    _world.SetContactListener(_contactListener);
  };
  this.update = () => {
    _world.Step(1 / _fps, 10, 10);
    _world.DrawDebugData();
    _world.ClearForces();
    _destroyBodies();
  };
  this.createBody = (position, type, shape, object) => {
    var fixDef = new b2FixtureDef();
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef();
    switch (type) {
      case "static":
        bodyDef.type = b2Body.b2_staticBody;
      break;
      case "dynamic":
        bodyDef.type = b2Body.b2_dynamicBody;
      break;
      case "kinematic":
        bodyDef.type = b2Body.b2_kinematicBody;
      break;
    };
    bodyDef.position.x = position.x / 30;
    bodyDef.position.y = position.y / 30;
    switch (shape) {
      case "circle":
        fixDef.shape = new b2CircleShape((position.width / 2) / 31);
      break;
      case "polygon":
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox((position.width / 2) / 30, (position.height / 2) / 30);
      break;
    };
    let body = _world.CreateBody(bodyDef);
    body.SetFixedRotation(true);
    body.CreateFixture(fixDef);
    body.SetUserData(object);
    return body;
  };
  this.setBeginContactCallback = (callback) => {
    if (typeof callback !== "function") return;
    _contactListener.BeginContact = (contact) => {
      callback(contact);
    };
  };
  this.setEndContactCallback = (callback) => {
    if (typeof callback !== "function") return;
    _contactListener.EndContact = (contact) => {
      callback(contact);
    };
  };
  this.setPreSolveCallback = (callback) => {
    if (typeof callback !== "function") return;
    _contactListener.PreSolve = (contact) => {
      callback(contact);
    };
  };
  this.setPostSolveCallback = (callback) => {
    if (typeof callback !== "function") return;
    _contactListener.PsotSolve = (contact) => {
      callback(contact);
    };
  };
  this.destroyBody = (body) => {
    _bodiesForDestroy.push(body);
  };
};

export default new Physics();
