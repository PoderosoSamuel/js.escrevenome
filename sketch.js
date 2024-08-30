let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(600, 500);
  background("gold");
  cor = color(random(0, 210), random(0, 210), random(0, 210));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1;
  }
  if (mouseY < posicaoVertical) {
    posicaoVertical = posicaoVertical - 1;
  }
  if (mouseY > posicaoVertical) {
    posicaoVertical = posicaoVertical + 1;
  }
  
  if (mouseIsPressed) {
    cor = color(random(0, 210), random(0, 210), random(0, 210), random (0, 100));
  }
}