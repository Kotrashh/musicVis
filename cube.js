/* Start - own code */

function Cube(){
    this.name = "Cube"
    this.pg = createGraphics(windowWidth, windowHeight, WEBGL);

    this.draw = function() {

        //getting energys
        var spectrum = fourier.analyze();
        var bass = fourier.getEnergy('bass');
        var treble = fourier.getEnergy('treble');
        var lowMid = fourier.getEnergy('lowMid');
        var mid = fourier.getEnergy('mid');
        var highMid = fourier.getEnergy('highMid');
        
        //cube
        var size = min(width, height) * 0.3;
        var s = size/2;

        this.pg.clear();

        this.pg.push();

        this.pg.rotateY(millis() * 0.0008);
        this.pg.rotateX(millis() * 0.0004);

        //amplitude face of the cube
        this.pg.push();
        this.pg.translate(0, 0, s);
        this.pg.fill(255, 0, 170);
        this.pg.plane(size, size);        
        this.pg.pop();

        //bass face of the cube

        this.pg.push();
        this.pg.translate(0, 0, -s);
        this.pg.rotateY(PI);
        this.pg.fill(5, 10, 35);
        this.pg.plane(size, size);
        this.pg.fill(0, 255, 255);
        var bassEllipseSize = floor(map(bass, 0, 255, s * 0.5, s * 1.2));
        this.pg.ellipse(0, 0, bassEllipseSize, bassEllipseSize);

        this.pg.pop();

        //treble face of the cube

        this.pg.push();
        this.pg.translate(s, 0, 0);
        this.pg.rotateY(HALF_PI);
        this.pg.fill(255, 255, 0);
        this.pg.plane(size, size);
        this.pg.fill(40, 0, 60);
        var trebleEllipseSize = floor(map(treble, 0, 255, s * 0.5, s * 1.2));
        this.pg.ellipse(0, 0, trebleEllipseSize, trebleEllipseSize);
        this.pg.pop();

        //lowMid face of the cube

        this.pg.push();
        this.pg.translate(-s, 0, 0);
        this.pg.rotateY(-HALF_PI);
        this.pg.fill(0, 30, 45);
        this.pg.plane(size, size);
        this.pg.fill(0, 150, 255);
        var lmEllipseSize = floor(map(lowMid, 0, 255, s * 0.5, s * 1.2));
        this.pg.ellipse(0, 0, lmEllipseSize, lmEllipseSize);
        this.pg.pop();

        //mid face of the cube

        this.pg.push();
        this.pg.translate(0, -s, 0);
        this.pg.rotateX(HALF_PI);
        this.pg.fill(15, 0, 30);
        this.pg.plane(size, size);
        this.pg.fill(57, 255, 20);
        var mEllipseSize = floor(map(mid, 0, 255, s * 0.5, s * 1.2));
        this.pg.ellipse(0, 0, mEllipseSize, mEllipseSize);
        this.pg.pop();

        //highMid face of the cube

        this.pg.push();
        this.pg.translate(0, s, 0);
        this.pg.rotateX(-HALF_PI);
        this.pg.fill(45, 0, 15);
        this.pg.plane(size, size);
        this.pg.fill(255, 42, 109);
        var hEllipseSize = floor(map(highMid, 0, 255, s * 0.5, s * 1.2));
        this.pg.ellipse(0, 0, hEllipseSize, hEllipseSize);
        this.pg.pop();

        this.pg.pop();


        push();
        imageMode(CENTER);
        image(this.pg, width/2, height/2);
        pop();

    }

    this.onResize = function() {
        if (this.pg) {
            this.pg.remove(); //remove old graphics buffer
        }
        this.pg = createGraphics(width, height, WEBGL); //rebuild at correct size
    }

}

/* End - own code */