// Módulos do Matter.js
const Motor = Matter.Engine,
      Mundo = Matter.World,
      Corpos = Matter.Bodies;

var motor, mundo;
var plataformas = [];

var jogador;
function setup() {
    createCanvas(windowWidth, windowHeight); // Cria o canvas em tela cheia

    // Criar o motor de física
    motor = Motor.create();
    mundo = motor.world;

    jogador = new Jogador(100, height - 100, 50, 50); 

    plataformas.push(new Plataforma(200, height - 150, 200, 20));
    plataformas.push(new Plataforma(400, height - 300, 200, 20));
}

function draw() {
    background("skyBlue"); // Cor do céu
    
    Motor.update(motor);

    jogador.mostrar()

    for (var plataforma of plataformas) {
        plataforma.mostrar();
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
      jogador.mover(0.05); // Move para a direita
    } else if (keyCode === LEFT_ARROW) {
      jogador.mover(-0.05); // Move para a esquerda
    } else if (keyCode === UP_ARROW) {
      jogador.pular(); // Pula
    }
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Redimensiona o canvas
}
