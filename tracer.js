/*
*	Keep track on the browser window's position
*	and call a function once it's changed
*/	

function Tracer(callback, delay = 10){
	this.callback = callback; // The callback function
	this.initX = window.screenX;
	this.initY = window.screenY;
	this.x = null;
	this.y = null;

	// The checking part
	var self = this; // Capsule
	this.interval = setInterval(function(){
		self.check();
	}, delay);
	this.check(true); // Hardcoding..
}

// Check for changes in the position
Tracer.prototype.check = function(force = false){
	var x = window.screenX;
	var y = window.screenY;
	if(x != this.x || y != this.y || force){ // The new position is different
		this.x = x;
		this.y = y;
		this.callback(x, y);
	}
}
