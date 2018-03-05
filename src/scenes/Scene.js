function Scene() {

}

Scene.prototype = {
	constructor: Scene,

	sayHello: function() {
		console.log('hello world');
	}
}

export { Scene };