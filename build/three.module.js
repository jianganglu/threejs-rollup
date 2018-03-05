function Scene() {

}

Scene.prototype = {
	constructor: Scene,

	sayHello: function() {
		console.log('hello world');
	}
};

function Camera() {

}

Camera.prototype = {

	constructor: Camera,

	sayHello: function() {
		console.log('camera');
	}

};

export { Scene, Camera };
