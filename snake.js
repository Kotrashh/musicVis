/* Start - own code */

// from the lecture sketch, adapted for the templatefunction Snake(){
function Snake(){
    //vis name
    this.name = 'Snake';


    var rot = 0;
    var noiseStep = 0.01; // noise speed
    var prog = 0;
    var rotateThresh = 67;
    var progThresh = 180;
    var seedThresh = 100;


    this.draw = function(){
        // run FFT analysis and get bass and treble energy levels
        var snake = fourier.analyze();
        
        var b = fourier.getEnergy("bass");
        var t = fourier.getEnergy("treble");
        
        
        rotatingBlocks(t);
        noiseLine(b,t);
        
    }
    // draws a row of rectangles that rotate based on treble energy
    function rotatingBlocks(energy){
        // slow rotation when treble is low
        if(energy < rotateThresh){
            rot += 0.01;
        }
        // map treble energy to rectangle size
        var r = map(energy, 0, 255, 20, 100);
        
        push();
        rectMode(CENTER);
        translate(width/2, height/2);
        rotate(rot);
        fill(255,0,0);
        
        // space the blocks evenly across the canvas
        var incr = width/(10 - 1);
        
        for(var i = 0; i < 10; i++){
            rect(i * incr - width/2,0,r,r);
        }
        
        
        
        pop();
    }
    // draws a flowing noise-based line reacting to bass and treble
    function noiseLine(energy, energy2){
        push();
        translate(width/2, height/2);
        beginShape();
        noFill();
        stroke(0,255,0);
        strokeWeight(3);
        
        // plot 100 vertices using Perlin noise for x and y positions
        for(var i = 0; i < 100; i++){
            
            var x = map(noise(i* noiseStep + prog),0,1,-250,250);
            var y = map(noise(i* noiseStep + prog + 1000),0,1,-250,250);
            
            
            vertex(x,y);
        }
        
        endShape();
        
        // move through the noise field when bass is strong
        if(energy > progThresh)
        {
            prog += 0.05;
        }
        // reset noise seed when treble peaks - creates sudden pattern change
        if(energy2 > seedThresh)
        {
            noiseSeed();
        }
        
        pop();
    }




};

/* End - own code */