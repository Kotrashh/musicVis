/* Start - own code */
function Fireworks(){
    var fireworks = [];

    this.name = 'FireWorks';
   	// angleMode(DEGREES);
	// frameRate(60);
	var beatDetect = new BeatDetect();
	// var fireworks = new Fireworks();


    this.addFirework = function(){
        var f_colour = color(random (0, 255), random (0, 255), random (0, 255));
        var f_x = random(width * 0.2, width * 0.8);
        var f_y = random(height * 0.2, height * 0.8);
        fireworks.push(new Firework(f_colour, f_x, f_y));
    
    }

    this.update = function(){
        for(var i = 0; i < fireworks.length; i++){
            fireworks[i].draw();
            if(fireworks[i].depleted){
                fireworks.splice(i, 1);
            }
        }
    }
    this.draw = function(){
        background(0);
        var spectrum = fourier.analyze();

        if(beatDetect.detectBeat(spectrum)){
            this.addFirework();
        }
        this.update();
    }
}
/* End - own code */