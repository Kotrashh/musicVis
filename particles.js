/* Start - own code */

// New visualisation
// ring of particles reacting to bass and lowMid

function ParticlesMode(){
    this.name = "Particles";

    // current rotation angle of the particle ring
    var rot = 0;
    var rotSpeed = 0.01;


    this.draw = function(){
        push();

        // rotate the ring a little each frame
        rot += rotSpeed;
        var spectrum = fourier.analyze();
        noStroke();

        // get bass and low-mid energy levels
        var bass = fourier.getEnergy('bass');
        var lowMid = fourier.getEnergy('lowMid');

        var netEnergy = bass - lowMid;
        var baseRadius = min(width, height) * 0.2;
        var radiusRange = min(width, height) * 0.15;
        var dynamicRadius = baseRadius + map(netEnergy, -255, 255, -radiusRange, radiusRange);
        
        // bass controls the outer yellow ellipse size
        var baseSize = 40;
        var sizeRange = 70;
        var bassEllipseSize = baseSize + map(bass, 0, 255, -sizeRange, sizeRange);
        bassEllipseSize = max(bassEllipseSize, 2);
        
        // lowMid controls the inner white ellipse size
        var lowMidEllipseSize = baseSize + map(lowMid, 0, 255, -sizeRange, sizeRange)        
        lowMidEllipseSize = max(lowMidEllipseSize, 2);

        var numPoints = 24;
        var angleStep = TWO_PI / numPoints;
        for(var i = 0; i < numPoints; i++){
            var angle = i * angleStep + rot;
            var x = width/2 + dynamicRadius * cos(angle);
            var y = height/2 + dynamicRadius * sin(angle);
        
            
            fill(255, 255, 0);
            ellipse(x, y, bassEllipseSize, bassEllipseSize);

            fill(255);
            ellipse(x, y, lowMidEllipseSize, lowMidEllipseSize);

        }
        pop();
    }
}

/* End - own code */