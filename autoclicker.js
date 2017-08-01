const robot = require("robotjs");

let on = false;
let interval;

exports.toggle = function() {
	if (on) {
		clearInterval(interval);
		on = false;
		exports.interval = interval;
	} else if (!on) {
		on = true;
		interval = setInterval(function() {
			if (on) {
				robot.mouseClick("left");
			}
		}, 1200);
		exports.interval = interval;
	}
}
