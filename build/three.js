(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.THREE = {})));
}(this, (function (exports) { 'use strict';

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

	exports.Scene = Scene;
	exports.Camera = Camera;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
