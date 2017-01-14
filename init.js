
// The canvas
var canvas = document.getElementById("frame");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

// The drawing context
var ctx = canvas.getContext("2d"); // The context

// The target image
var img = document.getElementById("image");


// Trace the screen!
var win = new Tracer(function(x, y){
	// Get the right position
	var targetX = this.initX - x;
	var targetY = this.initY - y;

	// Draw it
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, targetX, targetY);
}, 5);

window.addEventListener("resize", function(){
	win.check(true); // Force a callback
});