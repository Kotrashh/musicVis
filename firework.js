/* Start - own code */

function Firework(colour, x, y){
    var colour = colour;
    var x = x;
    var y = y;

    var praticles = [];
    this.depleted = false;

    for(var i = 0; i < TWO_PI; i+=TWO_PI/20){//I delete the angleMode(DEGREE) lines. Because switching to DEGREE mode was breaks the entire project.
        praticles.push(new Particle(x, y, colour, i, 15));
    }

    this.draw = function(){
        for(var i = 0; i < praticles.length; i++){
            praticles[i].draw();
        }
        if(praticles[0].speed <= 0){
            this.depleted = true;
        }
    }

}

/* End - own code */