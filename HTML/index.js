let c1 = document.getElementById("canvas1");
let ctx1 = c1.getContext("2d");
ctx1.moveTo(0, 0);
ctx1.lineTo(200, 100);
ctx1.stroke();

let c2 = document.getElementById("canvas2");
let ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.arc(100, 50, 40, 0, 2 * Math.PI);
ctx2.stroke();

let c3 = document.getElementById("canvas3");
let ctx3 = c3.getContext("2d");
ctx3.font = "30px Arial";
ctx3.fillText("Hello World", 10, 50);

let c4 = document.getElementById("canvas4");
let ctx4 = c4.getContext("2d");
ctx4.font = "30px Arial";
ctx4.strokeText("Hello World", 10, 50);

let c5 = document.getElementById("canvas5");
let ctx5 = c5.getContext("2d");
// Create gradient
var grd = ctx5.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx5.fillStyle = grd;
ctx5.fillRect(10, 10, 150, 80);

let c6 = document.getElementById("canvas6");
let ctx6 = c6.getContext("2d");
// Create gradient
var grd = ctx6.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx6.fillStyle = grd;
ctx6.fillRect(10, 10, 150, 80);

function drawImageInCanvas() {
	let c7 = document.getElementById("canvas7");
	let ctx7 = c7.getContext("2d");
	let img = document.getElementById("bird-image");
	ctx7.drawImage(img, 10, 10);
}
