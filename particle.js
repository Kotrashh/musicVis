/* Start - own code */

function Particle(x, y, colour, angle, speed){
    var x = x;
    var y = y;
    var colour = colour;
    var angle = angle;
    
    this.speed = speed;

    this.draw = function(){
        update.call(this);
        fill(colour);
        ellipse(x, y, 10, 10);
    }

    function update(){
        this.speed -= 0.5;
        // TODO: update x and y
        x += cos(angle) * this.speed;
        y += sin(angle) * this.speed;
    }
}

/* End - own code */