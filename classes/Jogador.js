class Jogador {
    constructor(x, y, largura, altura) {
      this.corpo = Matter.Bodies.rectangle(x, y, largura, altura);
      this.largura = largura;
      this.altura = altura;

      Matter.World.add(mundo, this.corpo);

}

mostrar() {
    const posicao = this.corpo.position;

    fill(255, 0, 0);
    rectMode(CENTER);
    rect(posicao.x, posicao.y, this.largura, this.altura);
}


mover(direcao) {
    Matter.Body.applyForce(this.corpo, this.corpo.position, { x: direcao, y: 0 });
  }

  pular() {
      Matter.Body.applyForce(this.corpo, this.corpo.position, { x: 0, y: -0.05 });
      
    
  }


}

