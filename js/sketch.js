
let img = [];

let variable;//cette variable doit être placée à l'extérieure de toute fonction
let precision = 10; 
let positiony = 10;
let svg;

function mouseClicked(){
  console.log(img[0].get(mouseX,mouseY));
  }

  function mouseDragged(){
    variable = curseurListe["texteAafficher"].value();
    precision = curseurListe["precision"].value();
    variable = curseurListe["positiony"].value();
  }


function preload() {
for(i=0; i<74; i++){
	if(i<10){//compléter!
	img[i] = loadImage('/img/sequence2/vid0'+i+'.jpg');
	}else{;
	img[i] = loadImage('/img/sequence2/vid'+i+'.jpg');
  svg = loadImage('img/etoile2.png');
	}
}
}



function setup() {   
    createCanvas(windowWidth,windowHeight);
    sliderAutomatique(min,max,0,"texteAafficher");
     for (let i = 0; i < img.length; i++) {
        img[i].resize(width,height)
       }
       frameRate(6)
       noStroke()
       sliderAutomatique(min,max,0,"precision"); 
       sliderAutomatique(min,max,0,"positiony");
     }




function draw() {
  background(255);
  for (let y = 0; y <height; y+=precision) {
    for (let x = 0; x <width; x+=precision) {
      let pixel = img[frameCount%14].get(x,y);
    
      let r = pixel[0]//récupérer la valeur de la couche rouge
      let v = pixel[1]//récupérer la valeur de la couche verte
      let b = pixel[2]//récupérer la valeur de la couche bleu 

      let sizer = map(r,0,255,0,20); // compléter la fonction map
    fill(0,0,255,50); //compléter pour colorer en rouge avec de la transparence
    ellipse(x,y,sizer,sizer);

    let sizev = map(v,0,255,0,20); // compléter la fonction map
    fill(255,1,0,50); //compléter pour colorer en vert avec de la transparence
    ellipse(x-40,y-40,sizev, sizev);

    let sizeb = map(b,0,255,0,20); // compléter la fonction map
    fill(0,255,2,50); //compléter pour colorer en bleu avec de la transparence
    ellipse(x+40,y+40,sizeb, sizeb);
    
    let ascii = [".","°","*","~","=","a","%","@","#"]
    let longueurListe = ascii.length=8
    let signe = int(random(ascii.length=8));

    
   }
  }
 }
    
     