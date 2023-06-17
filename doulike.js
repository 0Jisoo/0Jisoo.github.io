let coolors1 =  ["#FDFFC2", "#A1FFEB", "#B2F654", "#C699EB", "#5D7CA6", "#F2AEB4"];//배경색
let coolors2 =  ["#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#000000"];//슬라이더 텍스트색
let coolors3 =  ["#fb4b6b", "#ffd60a", "#FF6000", "#ffd60a", "#ADC5D9", "#ffffff"];//타이틀 텍스트색
let colorIndex = 0;
let ft = [];
let ftIndex = 0;
let fe = [];
let feIndex = 0;

function preload() {
	img1 = loadImage('mouseicon.png');
	img2 = loadImage('fruit01.png');
	img3 = loadImage('fruit02.png');
	img4 = loadImage('fruit03.png');
	img5 = loadImage('fruit04.png');
	img6 = loadImage('fe01.png');
	img7 = loadImage('fe02.png');
	img8 = loadImage('fe03.png');
	img9 = loadImage('fe04.png');
	ft = [img2, img3, img4, img5];
	fe = [img6, img7, img8, img9];
}

let slider1
let slider1_value = 0;
let slider2;
let slider2_value = 0;
const sliderXP = 35;

let x = 1;
let y = 1;
let easing = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();
	
//슬라이더 기본설정 createSlider(min, max, [default], [step]);
	slider1 = createSlider(1, 5, 3); //pattern scale
	slider2 = createSlider(30, 150, 85, 5); //text scale
	slider1.position(sliderXP, 30);
	slider2.position(sliderXP, 60);	
	
	imageMode(CENTER);
}

function mouseDragged() {
}

//배경변경
function mouseClicked() {
	colorIndex = colorIndex+1;
	colorIndex = colorIndex%6;
	ftIndex = ftIndex+1;
	ftIndex = ftIndex%4;
	feIndex = ftIndex+1;
	feIndex = ftIndex%4;
}
	
function draw() {
	
	//배경
	background(coolors1[colorIndex])
	
	// 배경패턴(스케일조절)
	slider1_value = slider1.value();
	for(let x = 0; x < width; x = x + 100) {
		for(let y = 0; y < height+100; y = y + 100) {
			push();
			fill(0);
			noStroke();
			ellipseMode(CENTER);
			blendMode(SOFT_LIGHT);
			scale(slider1_value);
			translate(x, y);
			ellipse(0, 0, 100, 100);
			pop();
  	}
	}
	
	//슬라이더
		//슬라이더 텍스트
	push();
	textSize(10);
	textAlign(LEFT);
	fill(coolors2[colorIndex]);
	text("Pattern scale", sliderXP, 30);
	text("Text Size", sliderXP, 60);
	pop();
	
	//Do U Like Me?(스케일조절)
	slider2_value = slider2.value();
			push()
			textFont("Verdana"); //"Verdana"
			textStyle(BOLD);
			textSize(slider2_value);
			fill(coolors3[colorIndex]);
			translate(0, height*0.5);  // 이제 기준점이 캔버스의 중앙이 됨.
			let textGap = width / 13
			//Do you like me? 텍스트
				push();
					push();
						translate(textGap * 1, sin(frameCount*0.075)*100);
						text("D", 0, 0);
					pop();

					push();
						translate(textGap * 2, sin(50+frameCount*0.075)*100);
						text("o", 0, 0);
					pop();

					push();
						translate(textGap * 3, sin(4-frameCount*0.075)*100);
						text("Y", 0, 0);
					pop();

					push();
						translate(textGap * 4, sin(50+frameCount*0.075)*100);
						text("o", 0, 0);
					pop();

					push();
						translate(textGap * 5, sin(frameCount*0.075)*100);
						text("u", 0, 0);
					pop();

					push();
						translate(textGap * 6, sin(50+frameCount*0.075)*100);
						text("L", 0, 0);
					pop();

					push();
						translate(textGap * 7, sin(frameCount*0.075)*100);
						text("i", 0, 0);
					pop();

					push();
						translate(textGap * 8, sin(50+frameCount*0.075)*100);
						text("k", 0, 0);
					pop();

					push();
						translate(textGap * 9, sin(frameCount*0.075)*100);
						text("e", 0, 0);
					pop();

					push();
						translate(textGap * 10, sin(4-frameCount*0.075)*100);
						text("M", 0, 0);
					pop();

					push();
						translate(textGap * 11, sin(frameCount*0.075)*100);
						text("e", 0, 0);
					pop();

					push();
						translate(textGap * 12, sin(50+frameCount*0.075)*100);
						text("?", 0, 0);
					pop();
				pop();
			pop();
	
	//눈
	var eyeX = (constrain(mouseX, -width*0.5, width) * 0.021);
	var eyeY = (constrain(mouseY, -height*0.5, height)*0.03);
	push();
	translate(width*0.49, height*0.75);
	image(fe[feIndex], 0 + eyeX, 0 + eyeY , 700*0.6, 400*0.6);
	pop();
			
	//과일
	push();
	translate(width*0.5, height*0.75);
	image(ft[ftIndex], 0, 0, 1000*0.6, 1000*0.6);
	pop();
	
	//마우스
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;
	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;
	image(img1, x, y, 500*0.2, 500*0.2)
}

function windowResized() {
resizedCanvas(windowWidth, windowHeight)
}
