let imagens = [];
let tempo = 3600;
let volume;
let mapX = 0;
let font;
let angle = 0;
let music, musicSeErrar,musicSeErrar2,musicSeErrar3, musicSeAcertar;
let altura = 55;
let largura = 300;
let tela = 11, telaAnterior = 0;
let xMenu = 200,
  yMenu2 = 280,
  yMenu1 = 250;

function ehPrimeiraEntradaNaTela(){
  if (tela == telaAnterior) {return false;}
  else {telaAnterior = tela; return true;}
}

function fase5(){
    background(imagens[13],250)
  textAlign(CENTER)
  textSize(100)
  strokeWeight(9)
  stroke(25)
  fill(250)
  text("Fase 5", 330, 100)

  image(imagens[2], 20, 20, 100, 100)
  textSize(85)
  text("Qual seria o resultado de", 350, 230)
  text("109 * 89 ÷ 5 * 53 ÷ (-8) ?", 350, 320)
  text("A. -500,5", 160, 530);
  text("B. 785/168", 530, 530);
  text("C. 12849", 350, 640)
  
  if (tempo / 60 > 0) {
    tempo--;
  } else {
    tempo = 3600;
    tela = 0
  }
  text(int(tempo / 60), 620, 90)
  
  
}

function fase4(){  
  background(imagens[13],250)
  textAlign(CENTER)
  textSize(100)
  strokeWeight(9)
  stroke(25)
  fill(250)
  text("Fase 4", 330, 100)

  image(imagens[2], 20, 20, 100, 100)
  textSize(85)
  text("Qual seria o resultado de", 350, 230)
  text("43 ÷ 56 * 5 - 40 ÷ (-6 * 8 ) ?", 350, 320)
  text("A. -500,5", 160, 530);
  text("B. 785/168", 530, 530);
  text("C. 480/123", 350, 640)
  
  if (tempo / 60 > 0) {
    tempo--;
  } else {
    tempo = 3600;
    tela = 0
  }
  text(int(tempo / 60), 620, 90)

}
function fase3(){
  background(imagens[13],250)
  textAlign(CENTER)
  textSize(100)
  strokeWeight(9)
  stroke(25)
  fill(250)
  text("Fase 3", 330, 100)

  image(imagens[2], 20, 20, 100, 100)
  textSize(85)
  text("Qual seria o resultado de", 350, 230)
  text("43 * 56 ÷ 5 + 40 * (-6) ?", 350, 320)
  text("A. -50,5", 160, 530);
  text("B. 241,6", 530, 530);
  text("C. 40,5", 350, 640)
  
  if (tempo / 60 > 0) {
    tempo--;
  } else {
    tempo = 3600;
    tela = 0
  }
  text(int(tempo / 60), 620, 90)
 
}

function fase2(){ 
  
  if (ehPrimeiraEntradaNaTela()){
    music.play()
    musicSeAcertar.stop()
   }
  
  background(imagens[7],250)
  textAlign(CENTER)
  textSize(100)
  strokeWeight(9)
  stroke(25)
  fill(250)
  text("Fase 2", 330, 100)

  textSize(85)
  text("Qual seria o resultado de", 350, 230)
  text("8 * 8 + 47 ÷ 8 * (-4) ?", 350, 320)
  text("A. -50", 160, 530);
  text("B. 415", 530, 530);
  text("C. 40,5", 350, 640)
  
  if (tempo / 60 > 0) {
    tempo--;
  } else {
    tempo = 3600;
    tela = 0
  }
  text(int(tempo / 60), 620, 90)


  
}
function fase1() {
  background(imagens[7], 250)
  textAlign(CENTER)
  textSize(100)
  strokeWeight(9)
  stroke(25)
  fill(250)
  text("Fase 1", 330, 100)

  textSize(85)
  text("Qual seria o resultado de", 350, 230)
  text("5 + 8 * 3 ÷ (-3) ?", 350, 320)
  text("A. -3", 160, 530);
  text("B. 10", 530, 530);
  text("C. 3/4", 350, 640)

  if (tempo / 60 > 0) {
    tempo--;
  } else {
    tempo = 3600;
    tela = 0
  }
  text(int(tempo / 60), 620, 90)

}
function seErrar2(){
  background(imagens[14],255)
   if (ehPrimeiraEntradaNaTela()){
  musicSeErrar2.play()
  music.stop()
  }

  
}
function SeErrar() {
  background(imagens[9], 255)

  if (ehPrimeiraEntradaNaTela()){
  musicSeErrar.play()
  music.stop()
  }


}

function SeAcertar() {
  background(imagens[10], 255)
       if (ehPrimeiraEntradaNaTela()){
     musicSeAcertar.play()
     music.stop()
}}

function TelaVolume() {

  if (mapX == 0) {
    mapX = width / 2
  }
  background(imagens[8], 255)
  strokeWeight(7)
  stroke(20)
  line(width / 3, height / 2, width / 1.5, height / 2)
  fill(255)
  ellipse(mapX, height / 2, width / 25, width / 25)
  if (mouseIsPressed && dist(mapX, height / 2, mouseX, mouseY) < width / 25 && mouseX > width / 3 && mouseX < width / 1.5) {
    mapX = mouseX
  }
  volume = map(mapX, width / 3, width / 1.5, 0, 1)
  music.setVolume(volume)

}


function TelaCreditos() {

  background(imagens[6], 255)
  textAlign(CENTER)
  textSize(90)
  strokeWeight(3)
  stroke(20)
  fill(20)
  text("Créditos", 350, 90)
  fill(255)
  image(imagens[2], 20, 20, 100, 100)
  image(imagens[4], 60, 200, 150, 150)
  image(imagens[5], 60, 450, 150, 150)
  textSize(50)
  text("Gabriel Paiva Cavalcante", 390, 190)
  textSize(38)
  text("função: Orientador", 390, 220)
  text("Mestrado e Doutorando em Geografia pela" + "\n" + "ufpb-universidade federal da paraíba", 419, 260)
  textSize(50)
  text("Igor Santiago", 390, 430)
  textSize(38)
  text("função: Programador", 390, 470)
  text("Estudante do Bacharelado em Ciências e" + "\n" + '  tecnologia pela UFRN- Universidade Federal' + '\n' + "do rio grande do Norte", 435, 520)

}

function TelaInstruçoes() {

  background(255)
  textAlign(CENTER)
  textSize(90)
  strokeWeight(3)
  stroke(20)
  fill(20)
  text("instruções", 330, 90)
  image(imagens[1], 0, 0)
  image(imagens[2], 20, 20, 100, 100)
  textSize(68)
  textAlign(CENTER)
  text("Bem vindo a Operações do jeito br!", 340, 160)
  textSize(62)
  text("o jogo são perguntas de múltipla escolha,", 340, 210)
  textSize(62)
  text("e terá diversas operações matemáticas,", 340, 260)
  text("com níveis do fácil ao mais difícil.", 320, 305)
  text("o uso do mouse será a forma de jogar.", 310, 348)
  text("espero que goste e divirta-se!", 300, 400)
}

function preload() {
  soundFormats("mp3");
  font = loadFont("Cud.ttf")

  for (c1 = 0; c1 < 15; c1++) {
    imagens[c1] = loadImage("imagem" + (c1 + 1) + ".png")
  }
  music = loadSound("happy.mp3")
  musicSeErrar = loadSound("temdemencia.mp3")
  musicSeAcertar = loadSound("acertoumizeravi.mp3")
  musicSeErrar2 = loadSound("eroou.mp3")
}

function setup() {
  createCanvas(700, 700);
  music.loop();
}

function draw() {
  background(255)
  textFont(font);


  if (tela == 0) {

    background(imagens[0], 20);
    textAlign(CENTER);
    textSize(80);

    if (tela == 0) {
      image(imagens[3], 40, 600, 90, 90)
      strokeWeight(6)
      stroke(255)
      fill(0)
      text("OPERAÇÕES DO JEITO BR", 350, 100);
    }

    if (mouseX > 40 && mouseX < 40 + 90 && mouseY > 600 && mouseY < 600 + 90) {

      stroke(20)
      noFill()
      rect(40, 600, 90, 90, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 3
        }
      }
    }


    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
      stroke(20);
      fill(255);
      rect(xMenu, yMenu1, largura, altura, 15);
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 4
        }
      }

    }
    strokeWeight(6)
    fill(255);
    stroke(20);
    text("Iniciar", 350, 295);

    if (mouseX > xMenu - 25 && mouseX < xMenu - 25 + largura + 60 && mouseY > yMenu2 + 65 && mouseY < yMenu2 + 65 + altura) {
      stroke(20);
      fill(255);
      rect(xMenu - 25, yMenu2 + 65, largura + 60, altura, 15);
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 1
        }
      }
    }
    fill(255);
    stroke(20);
    text("Instruções", 350, 390);


    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 + 175 && mouseY < yMenu2 + 175 + altura) {
      stroke(20);
      fill(255);
      rect(xMenu, yMenu2 + 175, largura, altura, 15);
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 2
        }
      }
    }
    fill(255);
    stroke(20);
    text("Créditos", 350, 500);

    textSize(40)
    stroke(20)
    fill(255)
    text("creative by Igor Santiago :)", 550, 700)
  }
  if (tela == 1) {
    ehPrimeiraEntradaNaTela()
    TelaInstruçoes();
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 100) {

      stroke(20)
      noFill()
      rect(20, 20, 100, 100, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
        }
      }
    }

  }
  if (tela == 2) {
    ehPrimeiraEntradaNaTela()
    TelaCreditos();
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 100) {

      stroke(20)
      noFill()
      rect(20, 20, 100, 100, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
        }
      }
    }
  }
  if (tela == 3) {
    ehPrimeiraEntradaNaTela()
    TelaVolume()
    textAlign(CENTER)
    textSize(90)
    strokeWeight(6)
    stroke(20)
    fill(255)
    text("volume", 350, 90)
    textSize(80)
    text("sons do jogo :", 347, 250)
    noFill()
    stroke(20)
    rect(215, 310, 266, 70, 15)
    image(imagens[2], 20, 20, 100, 100)
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 100) {

      stroke(20)
      noFill()
      rect(20, 20, 100, 100, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0



        }
      }
    }
  }
  if (tela == 4) {
    ehPrimeiraEntradaNaTela()
    fase1()
    if (mouseX > 90 && mouseX < 20 + 140 && mouseY > 477 && mouseY < 477 + 60) {
      stroke(20)
      noFill()
      rect(90, 477, 140, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 6
          music.stop()
        }
      }
    }
    if (mouseX > 460 && mouseX < 477 + 140 && mouseY > 477 && mouseY < 477 + 60) {
      stroke(20)
      noFill()
      rect(460, 477, 140, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 11
          music.stop()
        }
      }
    }
    if (mouseX > 270 && mouseX < 586 + 160 && mouseY > 586 && mouseY < 586 + 60) {
      stroke(20)
      noFill()
      rect(270, 586, 160, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
          music.stop()
        }
      }
    }
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 100) {

      stroke(20)
      noFill()
      rect(20, 20, 100, 100, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
        }
      }
    }

  } //tela caso erre
  if (tela == 5) {
   if  (ehPrimeiraEntradaNaTela()){
    musicSeErrar.play()
     music.stop()
    }
    SeErrar()
    
     image(imagens[12], 635, 630, 60, 60)
    textSize(60)
    strokeWeight(3)
    stroke(20)
    fill(255)
    text("voltar ao início", 390 , 670)
   
      if(mouseX > 635 && mouseX < 635+348 && mouseY > 630 && mouseY < 630 + 50){
      strokeWeight(4)
      noFill()
      stroke('white')
      rect(350,635,348,50,20);
   
        if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 4
        }}
   } 
  
  // tela se acertar
  if (tela == 6) {
    SeAcertar()
    image(imagens[12], 635, 630, 60, 60)
    textSize(60)
    strokeWeight(3)
    stroke(20)
    fill(255)
    text("proxima questão", 490 , 670)
   
      if(mouseX > 635 && mouseX < 635+348 && mouseY > 630 && mouseY < 630 + 50){
     strokeWeight(3)
     noFill()
     stroke('black')
     rect(350,635,348,50,20);
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 7
        }}            
   } 
}
  if(tela == 7){
  if( ehPrimeiraEntradaNaTela()){
     music.play()
   }
    fase2()
     if (mouseX > 90 && mouseX < 20 + 140 && mouseY > 477 && mouseY < 477 + 60) {
      stroke(20)
      noFill()
      rect(90, 477, 140, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 6
          music.stop()
        }
      }
    }
    if (mouseX > 460 && mouseX < 477 + 140 && mouseY > 477 && mouseY < 477 + 60) {
      stroke(20)
      noFill()
      rect(460, 477, 140, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 11
          music.stop()
        }
      }
    }
    if (mouseX > 270 && mouseX < 586 + 160 && mouseY > 586 && mouseY < 586 + 60) {
      stroke(20)
      noFill()
      rect(270, 586, 160, 60, 15)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
          music.stop()
        }
      }
    }
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 20 && mouseY < 20 + 100) {

      stroke(20)
      noFill()
      rect(20, 20, 100, 100, 20)
      if (mouseIsPressed) {
        if (mouseButton == LEFT) {
          tela = 0
        }
      }
    }
  }
  if(tela == 8){
    fase3()
  }
  if(tela == 9){
    fase4()
  }
  if(tela == 10){
    fase5()
  }
  if(tela == 11){
     if  (ehPrimeiraEntradaNaTela()){
    musicSeErrar2.play();
    }
   seErrar2()
}
 
  
}}