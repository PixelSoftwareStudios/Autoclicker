const robot = require("robotjs");

let on = false;
let interval;
let speed = 1200;

exports.toggle = function() {
	if (on) {
		clearInterval(interval);
		on = false;
	} else if (!on) {
		on = true;
		interval = setInterval(function() {
			if (on) {
				robot.mouseClick("left");
			}
		}, speed);
	}
}
