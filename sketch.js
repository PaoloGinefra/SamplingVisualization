const RADIUS = 80;

let FrameRate = 60;
let freq = 1;

let phi = 0;

let SampleRateSlider, FrequencySlider;

function setup() {
	createCanvas(windowWidth, windowHeight);

	SampleRateSlider = select("#SampleRate")
	FrequencySlider = select("#Frequency")
}

function draw() {
	background(52, 168, 235);

	FrameRate = SampleRateSlider.value()
	freq = FrequencySlider.value()

	frameRate(FrameRate);

	noStroke();
	polygon(width/2, height/2, RADIUS, 5, phi);

	phi += freq * 2 * PI / FrameRate
}

function polygon(x, y, radius, npoints, phi = 0) {
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
	  let sx = x + cos(a + phi) * radius;
	  let sy = y + sin(a + phi) * radius;
	  vertex(sx, sy);
	}
	endShape(CLOSE);
}

  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }