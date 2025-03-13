
let maximum = 40;

let compteur =0;

let curseurListe = [];

let tailleMax, tailleMin;

function setup() { 
    
 createCanvas(windowWidth, windowHeight);
      frameRate(60);
      sliderAutomatique(6,80,40,'nbr carré',0)
      sliderAutomatique(6,80,40,'taille minimum',1)
      sliderAutomatique(80,500,100, 'taille maximum',2)
      sliderAutomatique(0,360,100,'teinte',3)
      colorMode(HSL);
    
}


function draw(){
    maximum = curseurListe[0].value();
    tailleMin = curseurListe[1].value();
    tailleMax = curseurListe[2].value();
    let h = curseurListe[3].value();


   if (maximum>compteur) {
    strokeWeight (5);
    let luminosite = map(compteur,0,maximum,0,80);
    stroke (h,100,luminosite);
    let size = random(tailleMin,tailleMax);
    let randomX=random(-200,200);
    let randomY=random(-200,200);
    let positionX = width/2-size/2+randomX;
    noFill();
    rect(width/2-size/2+randomX, height/2-size/2+randomY, size, size)
    
   }
compteur++;
    }

    function mousePressed(){
        background(255);
compteur =0;
    }

    function sliderAutomatique(min,max,valeurDefault,texte,nbr){
        let header = select('header');
    
        let div = createDiv();
        div.parent(header);
    
        let nom = createP(texte);
        nom.parent(div);
    
        let curseur = createSlider(min, max, valeurDefault);/// createSlider(min, max, défault)
        curseur.parent(div);

        curseurListe[nbr] =curseur;
    }


