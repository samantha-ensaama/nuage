curseurListe=[];
let x = 20;
let y= 10;
let longueur = 20;

let nbrLignesX = 30;
let nbrLignesY = 20;


function setup() { 
    createCanvas(windowWidth,windowHeight);
    frameRate(60);
    angleMode(DEGREES);
}

function draw(){
    y=0;

for (let i = 0; i <8; i++) {  //combien de fois ça va se répéter, le 8 est la condition d'arrêt
    let decalage = height/nbrLignesY*longueur;
    let positionY = i*decalage;
   line(x,positionY,x,positionY+longueur);
    y+=80;
}
x+=80;

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




